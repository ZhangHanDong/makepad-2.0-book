spec: task
name: "Remaining Chapter Specs (Phase 5-9)"
inherits: project
tags: [placeholder, future-phases]
estimate: 1w
---

## 意图

以下章节的 spec 将在对应 phase 开始时详细编写。
此文件记录每章的关键参数供提前规划。

## Part III: Widget 体系篇（Phase 5）

| Ch | ID | Estimate | Key Source | Depends |
|----|-----|----------|------------|---------|
| 12 | layout-turtle | 2d | draw/src/turtle.rs | ch07 |
| 13 | text | 2d | widgets/src/label.rs, markdown.rs, html.rs | ch07 |
| 14 | form-controls | 2d | widgets/src/button.rs, check_box.rs, slider.rs | ch09 |
| 15 | lists | 2.5d | widgets/src/portal_list.rs, flat_list.rs | ch12 |
| 16 | advanced-containers | 2d | widgets/src/dock.rs, modal.rs, page_flip.rs | ch12 |
| 17 | custom-widgets | 3d | widgets/derive_widget/, widgets/src/lib.rs | ch08, ch09 |

## Part IV: 渲染与 Shader 篇（Phase 7）

| Ch | ID | Estimate | Key Source | Depends |
|----|-----|----------|------------|---------|
| 18 | draw-pipeline | 2d | draw/src/cx_2d.rs, cx_draw.rs | ch12 |
| 19 | sdf-shaders | 2.5d | draw/src/shader/ | ch18 |
| 20 | vector-graphics | 2.5d | draw/src/vector/, draw/src/svg/ | ch18 |
| 21 | 3d-scene | 2d | draw/src/cx_3d.rs, scene_3d.rs | ch18 |

## Part V: 架构深度篇（Phase 8）

| Ch | ID | Estimate | Key Source | Depends |
|----|-----|----------|------------|---------|
| 22 | event-action | 2.5d | platform/src/event/, platform/src/action.rs | ch09 |
| 23 | splash-vm | 3d | platform/script/src/vm.rs, opcode.rs, parser.rs | ch11 |
| 24 | gc-memory | 2d | platform/script/src/gc.rs, heap.rs, mod_gc.rs | ch23 |
| 25 | shader-compiler | 2.5d | platform/script/src/shader*.rs | ch19 |
| 26 | cross-platform | 2.5d | platform/src/ (per-platform) | ch18 |

## Part VI: 剩余章节（Phase 9）

| Ch | ID | Estimate | Key Source | Depends |
|----|-----|----------|------------|---------|
| 30 | audio-visualization | 2d | canvas/src/audio.rs, spectrum.rs, visualizer.rs | ch27 |
| 31 | build-your-renderer | 2.5d | Tutorial (hands-on) | ch27, ch28, ch29 |
| 32 | future | 1d | — | all |

## 附录（Phase 10）

| App | ID | Estimate | Source |
|-----|----|----------|--------|
| A | splash-cheatsheet | 0.5d | splash.md |
| B | widget-reference | 1d | widgets/src/*.rs |
| C | shader-builtins | 0.5d | draw/src/shader/ |
| D | migration | 1d | old/, AGENTS.md |
| E | ai-prompt-patterns | 0.5d | canvas/skills/, canvas/CLAUDE.md |
