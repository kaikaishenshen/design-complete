# Translation Guide

Thank you for helping translate Design Complete!

## Adding a New Language

1. Create locale directory: `src/i18n/<locale-code>/`
2. Copy and translate `src/i18n/en/common.json`
3. Create README in the new language
4. Update `src/i18n/config.json` locales array
5. Add example page in `examples/<locale-code>/`

## Locale Codes

Use ISO 639-1 + region codes where applicable:
- `en` (English)
- `zh-CN` (Chinese Simplified)
- `ja` (Japanese)
- `ko` (Korean)

## Translation Guidelines

- Preserve technical terms (CSS properties, command names, file paths)
- Translate explanations and descriptions naturally
- Keep code blocks unchanged
- Use consistent terminology within each language
- When in doubt about a term, add a note in the PR description

## Testing Translations

```bash
npm run validate-skills    # Verify skill files
npm test                   # Run test suite
```

## Current Coverage

| Language | README | Skills | Docs | i18n |
|----------|--------|--------|------|------|
| en | ✅ | ✅ | ✅ | ✅ |
| zh-CN | ✅ | ✅ | ✅ | ✅ |
| ja | ✅ | ✅ | ✅ | ✅ |
| ko | ✅ | ✅ | ✅ | ✅ |

## Need Help?

Open an issue with the "i18n" label.
