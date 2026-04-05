# 第1章：Makepad 的设计赌注

## 为什么需要又一个 GUI 框架

2026 年的 GUI 框架市场已经足够拥挤。React 统治了 Web 前端，Flutter 占据了跨平台移动开发，SwiftUI 是 Apple 生态的首选，Qt 在桌面和嵌入式领域根深蒂固，egui 在 Rust 社区快速崛起。每一个都有成熟的生态系统、活跃的社区和数百万行的生产代码。

在这种局面下，Makepad 为什么存在？它不是要在现有赛道上击败某个框架——它在赌一条新赛道：**AI 时代的 UI 开发**。

这个赌注的核心论点是：现有的 GUI 框架都基于一个隐含假设——UI 由人类程序员编写。它们的语法（JSX、QML、SwiftUI DSL）、构建流程（编译、打包、热重载）和开发工具（IDE、调试器）都围绕人类的认知和工作方式设计。当 AI Agent 需要动态生成和修改 UI 时，这些框架的架构成为了障碍而不是助力。

Makepad 2.0 的设计从一个不同的起点出发：**如果 UI 描述语言的主要"作者"不只是人类，还包括 AI，框架应该怎样设计？**

---

## 六个框架，六种设计赌注

为了理解 Makepad 的定位，先看六个主流框架各自下了什么"赌注"——它们认为 GUI 开发的未来在哪个方向。

### 对比总览

| 框架 | 语言 | UI 描述方式 | 热重载 | 跨平台 | AI 友好度 |
|------|------|-----------|--------|--------|-----------|
| **React** | JavaScript/TSX | JSX（编译时转换） | 快（HMR） | Web + RN | 中——JSX 需要编译 |
| **Flutter** | Dart | Widget 树（代码即 UI） | 快（有状态热重载） | 移动+桌面+Web | 低——Dart 编译链路长 |
| **SwiftUI** | Swift | 声明式 DSL（编译时宏） | 预览（Xcode） | Apple 全家桶 | 低——Swift 编译+Apple 专属 |
| **Qt/QML** | C++ / QML | QML（运行时解释） | 有（QML 热重载） | 全平台 | 中——QML 是运行时的 |
| **egui** | Rust | 即时模式（每帧重建） | 无（需重编译） | 桌面+Web | 低——Rust 编译 |
| **Makepad** | Rust + Splash | Splash（运行时 VM 执行） | 即时 | 全平台 | **高——Splash 为 AI 设计** |

这个表格需要仔细解读，因为每个维度都有细微差别。

### UI 描述方式：编译时 vs 运行时

这是最关键的对比维度。

**编译时 UI**（React JSX, SwiftUI, Flutter）：UI 描述在构建阶段被转换为代码。JSX 被 Babel 转换为 `React.createElement()` 调用，SwiftUI 的 `@ViewBuilder` 是编译器宏。修改 UI 需要重新经过编译步骤。

**运行时 UI**（QML, Makepad Splash）：UI 描述在应用运行时被解释或执行。QML 有自己的 JavaScript 引擎，Splash 有自己的 VM。修改 UI 只需要发送新的代码字符串给运行时——不需要编译器参与。

**即时模式 UI**（egui）：每一帧重新构建整个 UI。没有 UI 描述文件——UI 是 Rust 函数调用的副作用。修改 UI 需要重新编译 Rust 代码。

为什么这个维度对 AI 重要？因为 AI Agent 生成代码的自然输出是**文本**——一段字符串。如果框架能直接接收一段 UI 描述字符串并渲染它，AI 的输出就能即时变成可见的 UI。如果框架需要编译器参与（JSX → Babel → Webpack → Bundle），AI 输出和用户看到结果之间就有一个不可压缩的延迟。

QML 也是运行时的，为什么 Makepad 的 AI 友好度更高？因为 QML 嵌入了完整的 JavaScript 引擎——表达式可以是任意 JavaScript 代码。这对流式解析（AI 逐 token 输出时能否增量渲染）是不利的。Splash 的语法专门为流式解析设计（详见第6章：Splash 语法设计哲学）——没有需要完整解析才能确定含义的结构。

### 热重载能力

所有现代框架都声称支持某种形式的"热重载"。但热重载的粒度和速度差异很大：

| 框架 | 热重载粒度 | 反馈速度 | 保持状态？ |
|------|-----------|-----------|-----------|
| React HMR | 模块级 | 快 | 部分保持 |
| Flutter 热重载 | Widget 级 | 快 | 保持 |
| SwiftUI Preview | 整页重建 | 较慢 | 不保持 |
| QML 热重载 | QML 文件级 | 快 | 部分保持 |
| egui | 需重编译 | 慢 | 不保持 |
| **Makepad Splash** | **表达式级** | **很快** | **保持** |

Makepad 的热重载粒度是最细的——改一个属性值，不需要重新走 Rust 编译链路。这不只是"开发体验好"——当 AI 逐 token 输出 Splash 代码时，这种粒度意味着用户可以看到 UI 逐步成型的过程（详见第11章：流式求值）。

### 跨平台覆盖

| 框架 | macOS | Windows | Linux | Android | iOS | Web |
|------|-------|---------|-------|---------|-----|-----|
| React | via Electron | via Electron | via Electron | React Native | React Native | 原生 |
| Flutter | 有 | 有 | 有 | 有 | 有 | 有 |
| SwiftUI | 原生 | — | — | — | 原生 | — |
| Qt | 有 | 有 | 有 | 有 | 有 | 有(WASM) |
| egui | 有 | 有 | 有 | 实验性 | 实验性 | WASM |
| **Makepad** | **Metal** | **D3D11** | **OpenGL** | **有** | **有** | **WASM** |

Makepad 的跨平台策略是"每个平台用原生 GPU API"——macOS 用 Metal，Windows 用 D3D11，Linux 用 OpenGL，Web 用 WebGL/WGSL。这和 Flutter 的 Skia 渲染策略类似——完全绕过平台原生 UI 组件，自己绘制一切。好处是跨平台一致性极高，代价是没有原生平台控件的"感觉"。

---

## Makepad 的演进：从 1.x 到 2.0

Makepad 不是一夜之间诞生的。它经历了一个重要的架构转变。

### 1.x 时代：`live_design!`

Makepad 1.x 使用 `live_design!` 宏定义 UI。它是一种声明式数据格式——可以描述 Widget 的属性和结构，支持热重载，但**不是编程语言**。没有变量、没有函数、没有条件判断、没有循环。

```
// Makepad 1.x 风格（live_design!）
live_design!{
    import makepad_widgets::base::*;
    App = {{App}} {
        ui: <Window> {
            body = <View> {
                <Label> { text: "Hello" }
            }
        }
    }
}
```

`live_design!` 的能力边界是"声明静态 UI 树"。当你需要条件渲染（"如果 logged_in 显示用户名，否则显示登录按钮"），你必须在 Rust 代码中处理——`live_design!` 无法表达这种逻辑。

### 2.0 转折点：Splash 脚本

2025 年 11 月，第一个 Splash 脚本运行成功。2026 年 2 月 12 日，Makepad 2.0 正式发布。核心变化是 `live_design!` 被 `script_mod!` 替代——UI 描述从"声明式数据"升级为"完整脚本语言"。

```splash
// Makepad 2.0 风格（script_mod! / Splash）
let state = { counter: 0 }
fn refresh() { ui.label.set_text("Count: " + state.counter) }

View{flow: Down align: Center
    label := Label{text: "Count: 0" draw_text.text_style.font_size: 24}
    Button{text: "Add" on_click: ||{ state.counter = state.counter + 1  refresh() }}
}
```

Splash 不只是"带逻辑的 UI 描述"——它是一种完整的脚本语言，有自己的 VM、GC、字节码编译器。它可以定义变量、函数、闭包、控制流，可以操作 Widget 属性和响应用户事件。

这个转变的意义远超"语法升级"。它打开了一扇门：**外部程序（包括 AI Agent）可以向运行中的应用发送 Splash 代码，应用立即执行并渲染新的 UI**。这就是 Canvas Agent-to-App 管线的技术基础（详见第27章）。

---

## AI 叙事：为什么 UI 框架需要关心 AI

2025-2026 年，AI 编程助手（Claude Code、GitHub Copilot、Cursor）从"补全代码片段"进化到"自主完成任务"。AI Agent 可以读取需求、编写代码、运行测试、修复 bug——整个开发循环。

在这个趋势下，GUI 开发面临一个独特的挑战：**AI 生成的 UI 代码需要被"看到"才能被验证**。写后端代码时，AI 可以运行测试来验证正确性。写 UI 代码时，AI 需要"看到"渲染结果——截图——来判断布局是否正确、颜色是否协调、交互是否流畅。

这意味着 AI 生成 UI 的循环是：

```
生成代码 → 渲染 → 截图 → 分析 → 修改代码 → 重新渲染 → ...
```

这个循环的每一步都需要时间。如果"渲染"需要编译+打包+加载（React/Flutter），反馈闭环会被显著拉长。如果"渲染"可以直接在运行时求值（Splash），AI 就更有机会在一次交互中完成多轮迭代。

Makepad 2.0 的 Canvas 工具就是这个循环的实现：AI Agent 生成 Splash 代码 → 通过 WebSocket 推送到 Canvas → Canvas 渲染 → 截图回传给 Agent → Agent 分析并修改 → 重新推送。整个闭环的价值在于省掉传统前端那条编译/打包/刷新链路（详见第29章：自愈循环与流式渲染）。

这不是一个理论上的可能性——它是一个正在运行的系统。本书的后半部分（Part VI）将详细剖析 Canvas 的架构和 Agent-to-App 管线的实现。

---

## 本书的结构

基于 Makepad 2.0 的架构特点，本书分为六个部分：

| 部分 | 主题 | 章节 | 面向 |
|------|------|------|------|
| Part I | 入门 | ch01-ch05 | 零基础读者 |
| Part II | Splash 语言 | ch06-ch11 | 想深入 Splash 的开发者 |
| Part III | Widget 体系 | ch12-ch17 | 构建复杂 UI 的开发者 |
| Part IV | 渲染与 Shader | ch18-ch21 | 对 GPU 渲染感兴趣的开发者 |
| Part V | 架构深度 | ch22-ch26 | 想理解内核的贡献者 |
| Part VI | AI-Native | ch27-ch32 | AI 工具开发者 |

**推荐阅读路径**：

- **应用开发者**：Part I → Part II → Part III（跳过 Part IV-V）→ Part VI ch27-28
- **框架贡献者**：Part I → Part II → Part III → Part IV → Part V
- **AI 工具开发者**：ch01 → ch06 → ch11 → Part VI

下一章将帮你搭建开发环境——安装 Rust 工具链、配置 cargo-makepad、在 macOS/Windows/Linux 上编译和运行第一个 Makepad 应用（详见第2章：环境搭建）。
