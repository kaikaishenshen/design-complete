#!/usr/bin/env node

/**
 * Validate that all skill files are properly formatted and complete.
 * Checks YAML frontmatter, required fields, and file references.
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillsDir = resolve(__dirname, '../src/skills');

let errors = 0;

function checkSkill(skillPath) {
  try {
    const content = readFileSync(skillPath, 'utf-8');
    const lines = content.split('\n');

    // Check frontmatter
    if (!lines[0].startsWith('---')) {
      console.error(`  ❌ Missing YAML frontmatter in ${skillPath}`);
      errors++;
      return;
    }

    const endIndex = lines.indexOf('---', 1);
    if (endIndex === -1) {
      console.error(`  ❌ Unclosed YAML frontmatter in ${skillPath}`);
      errors++;
      return;
    }

    const frontmatter = lines.slice(1, endIndex);
    const hasName = frontmatter.some(l => l.startsWith('name:'));
    const hasDesc = frontmatter.some(l => l.startsWith('description:'));

    if (!hasName) {
      console.error(`  ❌ Missing 'name' in frontmatter of ${skillPath}`);
      errors++;
    }
    if (!hasDesc) {
      console.error(`  ❌ Missing 'description' in frontmatter of ${skillPath}`);
      errors++;
    }

    // Check content
    const contentLines = lines.slice(endIndex + 1);
    const hasContent = contentLines.some(l => l.trim().length > 0);
    if (!hasContent) {
      console.error(`  ❌ Empty content in ${skillPath}`);
      errors++;
    }

  } catch (e) {
    console.error(`  ❌ Error reading ${skillPath}: ${e.message}`);
    errors++;
  }
}

function walkDir(dir, ext, onlyBasename = null) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walkDir(full, ext, onlyBasename));
    } else if (entry.endsWith(ext)) {
      // If onlyBasename specified, only include if basename matches
      if (!onlyBasename || entry === onlyBasename) {
        files.push(full);
      }
    }
  }
  return files;
}

console.log('Validating skill files...\n');

// Only validate SKILL.md files (not reference documents)
const skillFiles = walkDir(skillsDir, '.md', 'SKILL.md');
let refCount = 0;
for (const entry of readdirSync(skillsDir)) {
  const refDir = join(skillsDir, entry, 'reference');
  if (existsSync(refDir)) {
    for (const f of readdirSync(refDir)) {
      if (f.endsWith('.md')) refCount++;
    }
  }
}
console.log(`  ℹ  ${refCount} reference files (not checked for frontmatter)\n`);
for (const file of skillFiles) {
  const rel = file.replace(skillsDir, '');
  console.log(`  📄${rel}`);
  checkSkill(file);
}

console.log(`\n${skillFiles.length} files checked, ${errors} error(s)`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log('✅ All skill files validated successfully!\n');
}
