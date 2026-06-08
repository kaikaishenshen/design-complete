# Changelog

All notable changes to Design Complete will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-06-09

### 🎉 Initial Release

**First public release of Design Complete — unified frontend design quality system.**

### Added

- **Core Orchestrator**: `design-complete` skill with unified `/design` command interface
- **4-Phase Pipeline**: taste → build → check → refine
- **Bridge Layer**: Shared knowledge base with conflict resolution matrix (P0-P3)
- **taste-skill Integration**: Aesthetic design taste system by Leon
  - 3 dials: DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY
  - 3 vibe archetypes: Ethereal Glass, Editorial Luxury, Soft Structuralism
  - 3 layout archetypes: Asymmetrical Bento, Z-Axis Cascade, Editorial Split
  - Pre-flight checklist system
- **impeccable Integration**: Structural design rigor by Paul Bakaus
  - 23 commands with structured workflows
  - 7 domain reference files
  - 39 anti-pattern rules (27 deterministic + 12 LLM)
  - CLI detection tool (`npx impeccable detect`)
- **Multi-Language Support**: Full i18n for 4 languages
  - English (en)
  - Chinese Simplified (zh-CN)
  - Japanese (ja)
  - Korean (ko)
- **Documentation**:
  - 4-language README files
  - Contributing guide (multi-language)
  - Pipeline protocol reference
  - Bridge protocol reference
  - Unified anti-pattern registry
- **Project Structure**:
  - Standard open-source layout
  - MIT License with third-party attribution
  - package.json with npm scripts
  - i18n configuration and translation files
  - .gitignore, .github workflows

### Third-Party Dependencies

- [taste-skill](https://github.com/Leonxlnx/taste-skill) (MIT) — integrated with full attribution
- [impeccable](https://github.com/pbakaus/impeccable) (Apache 2.0) — integrated with full attribution

### Known Limitations

- Live browser iteration (`/design live`) requires a running dev server
- Image generation guidance (codex mode) requires native image gen capability
- Some impeccable CLI commands require `npx impeccable` availability

---

## Future Plans

See [GitHub Issues](https://github.com/design-complete/design-complete/issues) for upcoming features and enhancements.
