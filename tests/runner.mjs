#!/usr/bin/env node
/**
 * Simple test runner for Design Complete.
 * Validates project structure and file integrity.
 */
import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); console.log(`  ✅ ${name}`); passed++; }
  catch (e) { console.error(`  ❌ ${name}: ${e.message}`); failed++; }
}
console.log('Running tests...\n');
test('README.md exists', () => { if (!existsSync(resolve(root,'README.md'))) throw new Error('missing'); });
test('LICENSE exists', () => { if (!existsSync(resolve(root,'LICENSE'))) throw new Error('missing'); });
test('CHANGELOG.md exists', () => { if (!existsSync(resolve(root,'CHANGELOG.md'))) throw new Error('missing'); });
test('CONTRIBUTING.md exists', () => { if (!existsSync(resolve(root,'CONTRIBUTING.md'))) throw new Error('missing'); });
test('package.json exists', () => { if (!existsSync(resolve(root,'package.json'))) throw new Error('missing'); });
test('skills directory exists', () => { if (!existsSync(resolve(root,'src/skills'))) throw new Error('missing'); });
test('i18n directory exists', () => { if (!existsSync(resolve(root,'src/i18n'))) throw new Error('missing'); });
test('i18n config exists', () => { if (!existsSync(resolve(root,'src/i18n/config.json'))) throw new Error('missing'); });
test('examples directory exists', () => { if (!existsSync(resolve(root,'examples/en'))) throw new Error('missing'); });
test('docs directory exists', () => { if (!existsSync(resolve(root,'docs/en'))) throw new Error('missing'); });
console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
else console.log('✅ All tests passed!\n');
