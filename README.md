<div align="center">

🌐 English · [中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md)

</div>

# Design Complete

> Unified Frontend Design Quality System — taste + impeccable = complete

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green)](package.json)

**Design Complete** is a unified frontend design quality system that combines two complementary design disciplines into one seamless pipeline:

- **[taste-skill](https://github.com/Leonxlnx/taste-skill)** — THE ARTIST: Aesthetic taste, spatial rhythm, typography hierarchy, color sense, motion physics
- **[impeccable](https://github.com/pbakaus/impeccable)** — THE ENGINEER: Structural rigor, 23 commands, 7 domain references, 39 anti-pattern rules, production-grade checks

Together they form a complete 4-phase pipeline: **taste → build → check → refine**

---

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    DESIGN COMPLETE SYSTEM                     │
│               Unified Command Interface (/design)             │
├────────────────────────────────┬─────────────────────────────┤
│   ┌─────────────────────┐    │    ┌───────────────────┐    │
│   │   taste-skill       │    │    │   impeccable       │    │
│   │   (THE ARTIST)      │◄───┼───►│   (THE ENGINEER)   │    │
│   │                     │    │    │                   │    │
│   │ Design Variance     │    │    │ 23 Commands       │    │
│   │ Motion Intensity    │    │    │ 7 Domain Refs     │    │
│   │ Visual Density      │    │    │ Anti-Patterns     │    │
│   │ Vibe Archetypes     │    │    │ CLI Detection     │    │
│   │ Layout Archetypes   │    │    │ Production Checks │    │
│   └─────────────────────┘    │    └───────────────────┘    │
│                                │                             │
│   ┌────────────────────────────────────────────────────┐    │
│   │            Bridge Layer (Shared Knowledge)          │    │
│   │  Typography System │ Color Tokens │ Spacing Grid   │    │
│   │  Design System Map │ Anti-Pattern Registry         │    │
│   └────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

---

## 4-Phase Pipeline

| Phase | Name | Tools | Deliverable |
|-------|------|-------|-------------|
| 1️⃣ | **TASTE 品** | taste-skill | Design Read + 3 Dials + Design Direction |
| 2️⃣ | **BUILD 建** | impeccable (shape/craft) | Production-grade deliverable code |
| 3️⃣ | **CHECK 验** | impeccable (audit/critique) | Audit report + issue list |
| 4️⃣ | **REFINE 修** | taste-skill + impeccable | Final polished deliverable |

---

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/design-complete/design-complete.git
cd design-complete

# Install dependencies
npm install

# Validate installation
npm run validate-skills
```

### Using as AI Agent Skills

**WorkBuddy / Claude Code / Cursor:**

Copy the skill files to your tool's skills directory:

```bash
# WorkBuddy
cp -r src/skills/* ~/your-project/.workbuddy/skills/

# Claude Code
cp -r src/skills/* ~/your-project/.claude/skills/

# Cursor
cp -r src/skills/* ~/your-project/.cursor/skills/
```

Then invoke with `/design`:

```
/design craft landing-page    # Full pipeline
/design taste project         # Design diagnosis only
/design check checkout        # Quality audit
/design refine hero-section   # Polish and refine
```

---

## Commands

| Command | Purpose |
|---------|---------|
| `/design craft <target>` | Full pipeline: taste → build → check → refine |
| `/design taste <target>` | Design taste diagnosis only |
| `/design build <target>` | Build with taste-informed direction |
| `/design check <target>` | Quality audit + critique |
| `/design critique <target>` | UX design review with heuristic scoring |
| `/design audit <target>` | Technical quality check (a11y/perf/responsive) |
| `/design refine <target>` | Polish + anti-pattern fixes |
| `/design tune <knob>=<val>` | Adjust taste-skill 3 dials in real-time |
| `/design init` | Initialize project design context |
| `/design bolder <target>` | Amplify safe/bland designs |
| `/design quieter <target>` | Tone down aggressive designs |
| `/design typeset <target>` | Fix typography and fonts |
| `/design colorize <target>` | Add strategic color |
| `/design layout <target>` | Fix layout, spacing, rhythm |
| `/design animate <target>` | Add purposeful animations |
| `/design adapt <target>` | Adapt for different devices |
| `/design harden <target>` | Error handling, i18n, edge cases |
| `/design clarify <target>` | Improve UX copy and labels |
| `/design delight <target>` | Add personality and memorable touches |

---

## The Three Dials (taste-skill)

| Dial | Range | Default | Description |
|------|-------|---------|-------------|
| **DESIGN_VARIANCE** | 1–10 | 8 | 1 = Perfect symmetry, 10 = Artsy chaos |
| **MOTION_INTENSITY** | 1–10 | 6 | 1 = Static, 10 = Cinematic/physics |
| **VISUAL_DENSITY** | 1–10 | 4 | 1 = Gallery/airy, 10 = Cockpit/dense |

---

## Conflict Resolution

When taste-skill and impeccable disagree:

| Priority | Source | Applies to |
|----------|--------|-----------|
| **P0** | impeccable Engineering | Accessibility, performance, hard constraints |
| **P1** | taste-skill Aesthetic | Visual taste, anti-patterns |
| **P2** | impeccable UX Rules | UX writing, interaction, responsive |
| **P3** | taste-skill Style | Vibe/layout archetype choice |

---

## Internationalization

Design Complete supports 4 languages:

| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ Complete |
| 中文（简体） | `zh-CN` | ✅ Complete |
| 日本語 | `ja` | ✅ Complete |
| 한국어 | `ko` | ✅ Complete |

All skill documentation, commands, and examples are available in all four languages.

---

## Project Structure

```
design-complete/
├── README.md                  # English README
├── README.zh-CN.md            # Chinese README
├── README.ja.md               # Japanese README
├── README.ko.md               # Korean README
├── LICENSE                    # MIT License
├── CONTRIBUTING.md            # Contribution guide
├── CHANGELOG.md               # Version history
├── package.json               # Node.js config
│
├── src/
│   ├── skills/                # Core skill files
│   │   ├── design-taste/      # taste-skill (aesthetic)
│   │   ├── impeccable/        # impeccable (structural)
│   │   └── design-complete/   # Unified orchestrator
│   │
│   └── i18n/                  # Internationalization
│       ├── config.json
│       ├── en/                # English translations
│       ├── zh-CN/             # Chinese translations
│       ├── ja/                # Japanese translations
│       └── ko/                # Korean translations
│
├── examples/                  # Multi-language examples
│   ├── en/
│   ├── zh-CN/
│   ├── ja/
│   └── ko/
│
├── docs/                      # Documentation
│   ├── en/
│   ├── zh-CN/
│   ├── ja/
│   └── ko/
│
├── scripts/                   # Utility scripts
├── tests/                     # Test suite
└── .github/                   # GitHub workflows
```

---

## Third-Party Attribution

Design Complete integrates two independent open-source projects. All original copyrights and licenses are preserved:

| Project | Author | GitHub | License |
|---------|--------|--------|---------|
| **taste-skill** | Leon | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT |
| **impeccable** | Paul Bakaus | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Apache 2.0 |

Design Complete itself is released under the **MIT License**. The integrated projects retain their original licenses.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

Translations are especially welcome! If you'd like to add support for a new language, please see our [Translation Guide](docs/en/translation-guide.md).

---

## License

MIT © Design Complete Community

This project integrates [taste-skill](https://github.com/Leonxlnx/taste-skill) (MIT) and [impeccable](https://github.com/pbakaus/impeccable) (Apache 2.0). See [LICENSE](LICENSE) for details.

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

