#!/usr/bin/env node

/**
 * Check i18n consistency across all locale files.
 * Ensures all keys exist in every locale.
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const i18nDir = resolve(__dirname, '../src/i18n');
const config = JSON.parse(readFileSync(join(i18nDir, 'config.json'), 'utf-8'));

let errors = 0;

function flattenKeys(obj, prefix = '') {
  const keys = new Set();
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      for (const k of flattenKeys(value, fullKey)) {
        keys.add(k);
      }
    } else {
      keys.add(fullKey);
    }
  }
  return keys;
}

// Collect all keys from the base locale (en)
const basePath = join(i18nDir, config.defaultLocale, 'common.json');
if (!existsSync(basePath)) {
  console.error(`❌ Base locale file not found: ${basePath}`);
  process.exit(1);
}
const base = JSON.parse(readFileSync(basePath, 'utf-8'));
const baseKeys = flattenKeys(base);

console.log(`Base locale (${config.defaultLocale}): ${baseKeys.size} keys\n`);

// Check each locale
for (const locale of config.locales) {
  if (locale === config.defaultLocale) continue;

  const localePath = join(i18nDir, locale, 'common.json');
  if (!existsSync(localePath)) {
    console.error(`  ❌ ${locale}: File not found`);
    errors++;
    continue;
  }

  const localeData = JSON.parse(readFileSync(localePath, 'utf-8'));
  const localeKeys = flattenKeys(localeData);

  // Find missing keys
  const missing = [...baseKeys].filter(k => !localeKeys.has(k));
  const extra = [...localeKeys].filter(k => !baseKeys.has(k));

  if (missing.length > 0) {
    console.error(`  ❌ ${locale}: Missing ${missing.length} keys`);
    for (const k of missing.slice(0, 5)) {
      console.error(`       └─ ${k}`);
    }
    if (missing.length > 5) console.error(`       └─ ... and ${missing.length - 5} more`);
    errors++;
  }

  if (extra.length > 0) {
    console.warn(`  ⚠️  ${locale}: ${extra.length} extra keys (not in base)`);
  }

  if (missing.length === 0) {
    console.log(`  ✅ ${locale}: ${localeKeys.size} keys — complete`);
  }
}

console.log(`\n${config.locales.length} locales checked, ${errors} error(s)`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log('✅ All i18n translations consistent!\n');
}
