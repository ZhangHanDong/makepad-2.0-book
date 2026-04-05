# Makepad 2.0: From Zero to Architecture

> A comprehensive technical book about [Makepad 2.0](https://github.com/makepad/makepad) — the Rust GUI framework designed for AI-native UI development.

**[Read Online (Chinese)](https://zhanghandong.github.io/makepad-2.0-book/)** | [中文版 README](./README.zh.md)

---

## About This Book

Makepad 2.0 introduced **Splash** — a runtime-evaluated UI scripting language that enables AI agents to generate and modify native UI in real-time. This book covers the complete Makepad 2.0 technology stack, from beginner tutorials to deep architecture analysis, with a focus on the **AI + Splash** narrative.

### Core Narrative

```
Traditional GUI:  Code → Compile → UI (static)
Makepad 1.x:     live_design! → Compile-time macro → UI (semi-static)
Makepad 2.0:     Splash script → Runtime evaluation → UI (dynamic)
                       ↑
                    AI Agent can write Splash
                       ↑
                Agent-to-App: Natural language → Splash → Native app
```

### Book Structure

| Part | Chapters | Topic |
|------|----------|-------|
| **I** | ch01-05 | **Getting Started** — Hello World, Counter, Todo |
| **II** | ch06-11 | **Splash Language** — Syntax, properties, templates, events, animation, streaming eval |
| **III** | ch12-17 | **Widget System** — Layout engine, text, controls, lists, containers, custom widgets |
| **IV** | ch18-21 | **Rendering** — Draw pipeline, Sdf2d shaders, vector graphics, 3D |
| **V** | ch22-26 | **Architecture** — Event system, VM internals, GC, shader compiler, cross-platform |
| **VI** | ch27-32 | **AI-Native** — Canvas architecture, Agent-to-App pipeline, self-healing loop |
| **App** | A-E | **Appendices** — Cheatsheet, widget reference, shader builtins, migration guide, AI prompts |

### Three Anchor Chapters

- **Chapter 6** (Splash Syntax Philosophy) — Why the language is designed this way
- **Chapter 11** (Streaming Evaluation) — How AI generates UI token-by-token in real-time
- **Chapter 27** (Canvas Architecture) — The complete AI-to-App rendering system

## Reading Paths

**App Developer** (build apps with Makepad):
> ch01 → ch02 → ch03 → ch04 → ch05 → ch06 → ch07 → ch08 → ch09 → ch12 → ch15

**Framework Contributor** (understand Makepad internals):
> ch01 → ch03 → ch06 → ch11 → ch12 → ch17 → ch18 → ch22 → ch23 → ch25

**AI Tool Developer** (build AI-generated UI tools):
> ch01 → ch06 → ch11 → ch27 → ch28 → ch29 → ch31 → Appendix E

## Languages

- **Chinese (中文)** — Primary language, complete ✅
- English — Planned
- Japanese (日本語) — Planned

## Build Locally

### Prerequisites

- [Rust](https://rustup.rs/) (for mdbook)
- [mdbook](https://github.com/rust-lang/mdBook): `cargo install mdbook`
- [mdbook-mermaid](https://github.com/badboy/mdbook-mermaid): `cargo install mdbook-mermaid`

### Commands

```bash
# Clone
git clone https://github.com/ZhangHanDong/makepad-2.0-book.git
cd makepad-2.0-book

# Preview locally (opens browser at http://localhost:3000)
mdbook serve --open

# Build static HTML
mdbook build
```

## Project Structure

```
makepad-2.0-book/
├── book.toml            # mdbook configuration
├── OUTLINE.md           # Full 32-chapter outline with cross-references
├── CLAUDE.md            # AI writing standards and workflow
├── src/
│   ├── zh/              # Chinese (primary)
│   │   ├── SUMMARY.md   # Table of contents
│   │   ├── preface.md   # Preface with knowledge map
│   │   ├── ch01-*.md    # Chapters 1-32
│   │   └── appendix-*.md # Appendices A-E
│   ├── en/              # English (planned)
│   └── ja/              # Japanese (planned)
├── specs/               # Agent-spec task contracts (16 files)
└── .github/workflows/   # GitHub Pages CI/CD
```

## Related: Makepad Skills for AI Agents

This book has a companion project — [**makepad-skills**](https://github.com/ZhangHanDong/makepad-skills) — a set of Claude Code skills that encode Makepad 2.0 knowledge into reusable AI agent capabilities.

| Skill | Purpose |
|-------|---------|
| `makepad-basics` | App structure, `app_main!`, `script_mod!`, getting started |
| `makepad-dsl` | Splash DSL syntax, property system, `let` bindings |
| `makepad-layout` | Layout engine (Turtle), `Fill`/`Fit`, `flow`, `align` |
| `makepad-widgets` | Widget catalog — View, Button, Label, PortalList, etc. |
| `makepad-shaders` | Sdf2d shader system, `pixel fn`, `draw_bg` |
| `makepad-animation` | Animator state machine, hover/pressed effects |
| `makepad-event-action` | Event handling, `MatchEvent`, `handle_actions` |
| `makepad-splash` | Splash scripting language runtime |
| `makepad-reference` | Troubleshooting and API reference |
| `makepad-migration` | 1.x → 2.0 migration guide |

These skills allow AI agents (Claude Code, etc.) to write correct Makepad code by providing contextual knowledge about Splash syntax rules, widget APIs, common pitfalls, and architectural patterns — the same knowledge documented in this book, but in a machine-consumable format.

**Install**: Follow the instructions at [github.com/ZhangHanDong/makepad-skills](https://github.com/ZhangHanDong/makepad-skills).

## Source References

This book references the [Makepad](https://github.com/makepad/makepad) source code (dev branch, April 2026 snapshot). Key source files:

| Source | Chapters |
|--------|----------|
| `platform/script/src/` (Splash VM) | ch06, ch11, ch23, ch24, ch25 |
| `draw/src/` (Rendering engine) | ch12, ch18, ch19, ch20, ch21 |
| `widgets/src/` (UI components) | ch07, ch13-ch17 |
| `tools/canvas/` (AI Canvas) | ch27, ch28, ch29, ch30 |
| `examples/counter/`, `examples/todo/` | ch03, ch04, ch05 |
| `splash.md` (Language reference) | ch06-ch11 |

## Writing Process

This book was written with AI assistance using the [tech-writer](https://github.com/anthropics/claude-code) skill workflow:

1. **Spec-driven**: Each chapter has an [agent-spec](https://github.com/anthropics/agent-spec) task contract defining acceptance criteria
2. **Source-verified**: Every code reference was verified against actual Makepad source files
3. **3-agent reviewed**: Each chapter was reviewed by 3 parallel AI agents (fact-checker, tech-reviewer, structure-editor)
4. **Budget-controlled**: Word count and depth layers declared before writing each chapter

## Stats

| Metric | Value |
|--------|-------|
| Chapters | 32 |
| Appendices | 5 |
| Total lines | 9,000+ |
| Mermaid diagrams | 31/32 chapters |
| Agent-spec contracts | 16 |
| Source references | 100+ verified `file:line` citations |

## Contributing

Contributions welcome! Especially:

- **Translations** (English, Japanese)
- **Technical corrections** (source code references, API accuracy)
- **Depth expansions** (ch10, ch11, ch28, ch29 are below word budget)
- **Example code** (runnable examples in `examples/` directory)

## License

Content licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Code examples follow Makepad's MIT/Apache-2.0 dual license.

## Acknowledgments

- [Makepad](https://makepad.dev/) team, especially Rik Arends, for creating the framework
- [Anthropic](https://anthropic.com/) for Claude Code and the AI-assisted writing workflow
- The Makepad community for validating the Agent-to-App paradigm
