# Contributing to Design Complete

Thank you for your interest in contributing to Design Complete! This document provides guidelines for contributing to the project.

🌐 [中文版本](CONTRIBUTING.zh-CN.md) | [日本語](CONTRIBUTING.ja.md)

## How to Contribute

### Reporting Bugs

1. Check the [existing issues](https://github.com/design-complete/design-complete/issues) to avoid duplicates
2. Use the bug report template
3. Include: steps to reproduce, expected behavior, actual behavior, environment details

### Suggesting Features

1. Check existing issues and discussions
2. Describe the use case and expected behavior
3. If possible, sketch the API or user experience

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes, following the project's code style
4. Add tests for new functionality
5. Update documentation as needed
6. Run `npm test` to ensure all tests pass
7. Commit with descriptive messages
8. Push and open a pull request

### Development Setup

```bash
git clone https://github.com/design-complete/design-complete.git
cd design-complete
npm install
npm run validate-skills
```

### Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Write JSDoc comments for public APIs
- Keep functions small and focused

### Testing

```bash
npm test
```

All new features must include tests. Bug fixes should include a regression test.

### Documentation

- Update README if adding new commands
- Add documentation in all supported languages (en, zh-CN, ja, ko)
- Use clear, concise language

### Translations

We welcome translations! To add a new language:

1. Create locale directory in `src/i18n/<code>/`
2. Translate `common.json` from `src/i18n/en/common.json`
3. Add README in the new language
4. Update `src/i18n/config.json` to include the new locale

### Skill Contributions

To add a new design skill:

1. Create a new directory in `src/skills/<skill-name>/`
2. Add `SKILL.md` with proper frontmatter
3. Add reference files in `reference/` if needed
4. Update the orchestrator in `src/skills/design-complete/`

### Commit Convention

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semicolons
refactor: code restructuring
test: adding tests
chore: maintenance tasks
i18n: translation updates
```

## Code of Conduct

Be respectful. Be constructive. Be collaborative.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Attribution

When incorporating work from taste-skill or impeccable, always:
1. Preserve original copyright headers
2. Note the source in commit messages
3. Update the third-party notices in LICENSE if adding new dependencies
