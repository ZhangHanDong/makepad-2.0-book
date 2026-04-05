# Makepad 2.0: From Zero to Architecture
# Makepad 2.0：从入门到架构
# Makepad 2.0：入門からアーキテクチャまで

> **Core Narrative**: Splash is the bridge between human developers and AI — UI that can be "spoken" into existence.
>
> **核心叙事线**: Splash 不只是 DSL，它是连接人类开发者与 AI 的桥梁，让 UI 可以被"说"出来。

```
传统 GUI:    代码 → 编译 → UI（静态）
Makepad 1.x: live_design! → 编译时宏 → UI（半静态）
Makepad 2.0: Splash 脚本 → 流式求值 → UI（动态）
                  ↑
               AI Agent 可以写 Splash
                  ↑
           Agent-to-App: 自然语言 → Splash → 原生应用
```

---

## Book Metadata

| Field | Value |
|-------|-------|
| Languages | 中文 (primary), English, 日本語 |
| Tool | mdbook + mdbook-i18n-helpers |
| Total Chapters | 32 + 5 Appendices |
| Total Words | ~29万字 (per language) |
| Depth | Part I-III: 3 layers, Part IV-VI: 4 layers |
| Source Repo | makepad (dev branch, as of 2026-04) |
| Case Study | `tools/canvas/` (Agent-to-App) |

---

## Part I: 入门篇 — Getting Started — 入門編

> Goal: Zero to running app. Reader writes their first Makepad 2.0 application.

| Ch | ID | Title (zh) | Title (en) | Title (ja) | Words | Depth | Key Source |
|----|----|-----------|-----------|-----------|-------|-------|------------|
| 01 | what-is-makepad | Makepad 的设计赌注 | Makepad's Design Bet | Makepadの設計思想 | 6000 | L2 | — |
| 02 | setup | 环境搭建 | Environment Setup | 環境構築 | 5000 | L2 | Cargo.toml |
| 03 | hello-makepad | 第一个应用 | Hello Makepad | はじめてのアプリ | 7000 | L3 | examples/splash/ |
| 04 | counter | Counter: 状态与事件 | Counter: State & Events | Counter：状態とイベント | 8000 | L3 | examples/counter/ |
| 05 | todo | Todo: 数据驱动 UI | Todo: Data-Driven UI | Todo：データ駆動UI | 10000 | L3 | examples/todo/ |

### AI Thread in Part I

| Ch | AI Seed |
|----|---------|
| 01 | Why compile-time UI can't be modified by AI at runtime |
| 03 | `script_mod!` is runtime — first hint of dynamic capability |
| 04 | Change Splash at runtime, see immediate results |
| 05 | Same Todo in React/Flutter requires recompilation |

---

## Part II: Splash 语言篇 — Splash Language — Splash言語編

> Goal: Complete Splash mastery. Reader can write any UI in Splash from scratch.

| Ch | ID | Title (zh) | Title (en) | Title (ja) | Words | Depth | Key Source |
|----|----|-----------|-----------|-----------|-------|-------|------------|
| 06 | splash-philosophy | Splash 语法设计哲学 | Splash Syntax Philosophy | Splash構文の設計思想 | 8000 | L3 | splash.md |
| 07 | properties-containers | 属性与容器 | Properties & Containers | プロパティとコンテナ | 8000 | L3 | splash.md |
| 08 | templates | 模板与组合 | Templates & Composition | テンプレートと合成 | 8000 | L3 | splash.md |
| 09 | events | 事件与交互 | Events & Interaction | イベントとインタラクション | 8000 | L3 | splash.md, examples/ |
| 10 | state-animation | 状态与动画 | State & Animation | 状態とアニメーション | 10000 | L3 | widgets/src/animator.rs |
| 11 | streaming-eval | 流式求值 | Streaming Evaluation | ストリーミング評価 | 10000 | L4 | platform/script/src/vm.rs |

### AI Thread in Part II

| Ch | AI Connection |
|----|--------------|
| 06 | **Core**: No commas/semicolons = fewer tokens = AI-friendly by design |
| 08 | AI generates templates → humans override instances |
| 11 | **Key reveal**: How UI forms token-by-token as AI streams output |

### Canvas Examples Used

| Ch | Canvas Example | Usage |
|----|---------------|-------|
| 06 | `pomodoro.splash` fragments | Syntax rule illustrations |
| 08 | `token-dashboard.splash` | `let` template patterns |
| 09 | `pomodoro.splash` on_click | Event handling |
| 10 | `music-player.splash` state | State control patterns |
| 11 | SplashStreamBegin/Append/End | Streaming protocol foreshadow |

---

## Part III: Widget 体系篇 — Widget System — ウィジェット編

> Goal: Master all built-in widgets. Reader can compose complex UIs.

| Ch | ID | Title (zh) | Title (en) | Title (ja) | Words | Depth | Key Source |
|----|----|-----------|-----------|-----------|-------|-------|------------|
| 12 | layout-turtle | 布局引擎 Turtle | Layout Engine: Turtle | レイアウトエンジンTurtle | 8000 | L3 | draw/src/turtle.rs |
| 13 | text | 文本世界 | The Text World | テキストの世界 | 8000 | L3 | widgets/src/label.rs, markdown.rs |
| 14 | form-controls | 交互组件 | Form Controls | フォームコントロール | 8000 | L3 | widgets/src/button.rs, check_box.rs, slider.rs |
| 15 | lists | 列表与虚拟化 | Lists & Virtualization | リストと仮想化 | 10000 | L4 | widgets/src/portal_list.rs, flat_list.rs |
| 16 | advanced-containers | 高级容器 | Advanced Containers | 高度なコンテナ | 8000 | L3 | widgets/src/dock.rs, modal.rs, page_flip.rs |
| 17 | custom-widgets | 自定义 Widget | Custom Widgets | カスタムウィジェット | 10000 | L4 | widgets/derive_widget/, widgets/src/lib.rs |

---

## Part IV: 渲染与 Shader 篇 — Rendering & Shaders — レンダリング編

> Goal: Understand Makepad's GPU pipeline. Write custom shaders.

| Ch | ID | Title (zh) | Title (en) | Title (ja) | Words | Depth | Key Source |
|----|----|-----------|-----------|-----------|-------|-------|------------|
| 18 | draw-pipeline | Draw 管线 | The Draw Pipeline | 描画パイプライン | 8000 | L3 | draw/src/cx_2d.rs, cx_draw.rs |
| 19 | sdf-shaders | Sdf2d Shader 编程 | Sdf2d Shader Programming | Sdf2dシェーダープログラミング | 10000 | L4 | draw/src/shader/ |
| 20 | vector-graphics | 矢量图形 | Vector Graphics | ベクターグラフィックス | 10000 | L4 | draw/src/vector/, draw/src/svg/, examples/vector/ |
| 21 | 3d-scene | 3D 场景 | 3D Scenes | 3Dシーン | 8000 | L3 | draw/src/cx_3d.rs, scene_3d.rs |

### Canvas Cross-reference

| Ch | Canvas Connection |
|----|------------------|
| 19 | `visualizer.rs` spectrum shader as real-world Sdf2d example |

---

## Part V: 架构深度篇 — Architecture Deep Dive — アーキテクチャ編

> Goal: Understand Makepad internals. Reader can contribute to the framework.

| Ch | ID | Title (zh) | Title (en) | Title (ja) | Words | Depth | Key Source |
|----|----|-----------|-----------|-----------|-------|-------|------------|
| 22 | event-action | 事件与 Action 系统 | Events & Actions | イベントとアクション | 10000 | L4 | platform/src/event/, platform/src/action.rs |
| 23 | splash-vm | Splash VM 内幕 | Inside the Splash VM | Splash VM内部構造 | 12000 | L4 | platform/script/src/vm.rs, opcode.rs, parser.rs |
| 24 | gc-memory | GC 与内存管理 | GC & Memory Management | GCとメモリ管理 | 8000 | L4 | platform/script/src/gc.rs, heap.rs, mod_gc.rs |
| 25 | shader-compiler | Shader 编译器 | The Shader Compiler | シェーダーコンパイラ | 10000 | L4 | platform/script/src/shader*.rs |
| 26 | cross-platform | 跨平台层 | Cross-Platform Layer | クロスプラットフォーム層 | 10000 | L4 | platform/src/ (per-platform) |

### AI Thread in Part V

| Ch | AI Deep Dive |
|----|-------------|
| 23 | **Core**: How VM supports streaming/incremental evaluation |
| 24 | **Key**: GC strategy during streaming generation |

---

## Part VI: AI-Native 篇 — AI-Native UI — AI-Native編

> Goal: Understand and build Agent-to-App pipelines. Canvas as primary case study.
>
> **Primary source**: `tools/canvas/` project

| Ch | ID | Title (zh) | Title (en) | Title (ja) | Words | Depth | Key Source |
|----|----|-----------|-----------|-----------|-------|-------|------------|
| 27 | canvas-architecture | Canvas 架构剖析 | Canvas Architecture | Canvasアーキテクチャ解析 | 12000 | L4 | canvas/src/app.rs, ws/ |
| 28 | agent-to-app | Agent-to-App 管线 | The Agent-to-App Pipeline | Agent-to-Appパイプライン | 10000 | L4 | canvas/skills/app/SKILL.md |
| 29 | self-healing | 自愈循环与流式渲染 | Self-Healing & Streaming | 自己修復とストリーミング | 10000 | L4 | canvas/ws/types.rs |
| 30 | audio-visualization | 音频可视化案例 | Audio Visualization Case | 音声可視化ケーススタディ | 8000 | L3 | canvas/src/audio.rs, spectrum.rs, visualizer.rs |
| 31 | build-your-renderer | 构建你的 AI 渲染器 | Build Your AI Renderer | 自分のAIレンダラーを構築 | 10000 | L3 | Tutorial (hands-on) |
| 32 | future | Makepad 的未来 | The Future of Makepad | Makepadの未来 | 5000 | L2 | — |

### Canvas Architecture (ch27 depth map)

```
L1: What is Canvas?
    Pure renderer. AI generates Splash, Canvas renders natively.

L2: Why this design?
    Three-thread isolation:
      TCP Listener (tokio) — receives commands
      Makepad UI Thread — renders + routes events
      Audio Device Thread — samples + FFT
    SignalToUI cross-thread wakeup (zero-alloc)

L3: Key data structures
    App { bridge, uid_map, widget_names, history }
    CanvasCommand enum (6 variants)
    StdioBridge { commands: Mutex<VecDeque>, event_senders }

L4: Design trade-offs
    Why dual HTTP+WS? (WS efficient, HTTP debug-friendly)
    Why Mutex<VecDeque> not channel? (Makepad SignalToUI constraint)
    Why single-app rendering? (Complexity control)
```

### Canvas Data Flow (ch28)

```
User speaks
    → Claude generates Splash
        → POST /splash or WS {"splash": "..."}
            → StdioBridge enqueues CanvasCommand::SplashRender
                → SignalToUI wakes UI thread
                    → App::handle_signal() dequeues
                        → Splash.set_text(cx, code)
                            → extract_widget_names() → uid_map
                                → Native rendering (Metal/D3D11/GL/WASM)

User clicks button
    → ButtonAction::Clicked(uid)
        → uid_map[uid] → widget_name
            → bridge.send_event(widget_name)
                → WS broadcast / HTTP event queue
                    → Agent receives event
                        → Decides next action
```

### Self-Healing Loop (ch29)

```
Iteration 1: Generate Splash → POST → Screenshot
    → AI analyzes: "blank screen detected"
    → Fix: add height: Fit, draw_bg.color
Iteration 2: Re-POST → Screenshot
    → AI analyzes: "text invisible"
    → Fix: add draw_text.color contrast
Iteration 3: Re-POST → Screenshot
    → AI analyzes: "looks good"
    → Done. Report to user.
Max 3 iterations. Common fixes:
    - height: Fit on every container
    - draw_bg.color with #x prefix for hex with 'e'
    - draw_text.color for contrast
    - flow: Down vs Right
```

---

## Appendices — 附录 — 付録

| App | ID | Title (zh) | Title (en) | Title (ja) | Words |
|-----|----|-----------|-----------|-----------|-------|
| A | splash-cheatsheet | Splash 语法速查 | Splash Cheatsheet | Splash構文チートシート | 2000 |
| B | widget-reference | Widget 属性参考 | Widget Property Reference | ウィジェットプロパティ | 3000 |
| C | shader-builtins | Shader 内置函数 | Shader Built-in Functions | シェーダー組込関数 | 2000 |
| D | migration-1x-2x | 从 1.x 迁移到 2.0 | Migrating from 1.x to 2.0 | 1.xから2.0への移行 | 3000 |
| E | ai-prompt-patterns | AI Prompt 模式 | AI Prompt Patterns for Splash | AIプロンプトパターン | 2000 |

---

## Writing Order

Recommended writing sequence (not chapter order):

| Phase | Chapters | Rationale |
|-------|----------|-----------|
| 1 | ch06-ch08 | Splash core — book's differentiator, rich source material |
| 2 | ch03-ch05 | Hands-on tutorials — validates Splash teaching approach |
| 3 | ch01-ch02 | Philosophy & setup — informed by tutorial writing experience |
| 4 | ch09-ch11 | Splash advanced — events, state, streaming |
| 5 | ch12-ch17 | Widget system — systematic reference |
| 6 | ch27-ch29 | Canvas case study — AI-Native core chapters |
| 7 | ch18-ch21 | Rendering & shaders |
| 8 | ch22-ch26 | Architecture deep dive |
| 9 | ch30-ch32 | Audio, tutorial, future |
| 10 | App A-E | Appendices |
| 11 | EN translation | Full English pass |
| 12 | JA translation | Full Japanese pass |

---

## Cross-Chapter Index: Canvas .splash Examples

| File | Used In |
|------|---------|
| `pomodoro.splash` (85 lines) | ch06 syntax, ch09 on_click, ch28 agent pipeline |
| `music-player.splash` | ch10 state, ch30 audio case study |
| `token-dashboard.splash` | ch08 templates, ch28 data dashboard pattern |
| `claude-monitor.splash` | ch28 system monitor pattern |

## Cross-Chapter Index: Key Source Files

| Source | Used In |
|--------|---------|
| `platform/script/src/vm.rs` | ch11, ch23 |
| `platform/script/src/parser.rs` | ch06, ch23 |
| `platform/script/src/gc.rs` | ch24 |
| `platform/script/src/shader*.rs` | ch25 |
| `draw/src/turtle.rs` | ch12 |
| `draw/src/shader/` | ch19 |
| `draw/src/vector/` | ch20 |
| `widgets/src/portal_list.rs` | ch15 |
| `widgets/derive_widget/` | ch17 |
| `tools/canvas/src/app.rs` | ch27, ch28 |
| `tools/canvas/src/ws/` | ch27, ch28, ch29 |
| `tools/canvas/src/audio.rs` | ch30 |
| `tools/canvas/src/spectrum.rs` | ch19, ch30 |
| `tools/canvas/src/visualizer.rs` | ch19, ch30 |
