# Makepad 2.0：从入门到架构

> 一本关于 [Makepad 2.0](https://github.com/makepad/makepad) 的深度技术书籍——为 AI 原生 UI 开发设计的 Rust GUI 框架。

**[在线阅读](https://zhanghandong.github.io/makepad-2.0-book/)** | [English README](./README.md)

---

## 关于本书

Makepad 2.0 引入了 **Splash**——一种运行时求值的 UI 脚本语言，让 AI Agent 可以实时生成和修改原生 UI。本书覆盖 Makepad 2.0 的完整技术体系，从入门教程到架构深度分析，以 **AI + Splash** 为核心叙事线。

### 核心叙事

```
传统 GUI:    代码 → 编译 → UI（静态）
Makepad 1.x: live_design! → 编译时宏 → UI（半静态）
Makepad 2.0: Splash 脚本 → 运行时求值 → UI（动态）
                  ↑
               AI Agent 可以写 Splash
                  ↑
           Agent-to-App: 自然语言 → Splash → 原生应用
```

### 书籍结构

| 部分 | 章节 | 主题 |
|------|------|------|
| **I** | ch01-05 | **入门篇** — Hello World、Counter、Todo |
| **II** | ch06-11 | **Splash 语言篇** — 语法、属性、模板、事件、动画、流式求值 |
| **III** | ch12-17 | **Widget 体系篇** — 布局引擎、文本、交互组件、列表、容器、自定义 Widget |
| **IV** | ch18-21 | **渲染篇** — Draw 管线、Sdf2d Shader、矢量图形、3D |
| **V** | ch22-26 | **架构深度篇** — 事件系统、VM 内幕、GC、Shader 编译器、跨平台 |
| **VI** | ch27-32 | **AI-Native 篇** — Canvas 架构、Agent-to-App 管线、自愈循环 |
| **附录** | A-E | 速查表、Widget 参考、Shader 内置函数、迁移指南、AI Prompt 模式 |

### 三个锚点章节

- **第6章**（Splash 语法设计哲学）— 理解"为什么这样设计"
- **第11章**（流式求值）— 理解"AI 如何实时生成 UI"
- **第27章**（Canvas 架构）— 理解"完整的 AI-to-App 系统"

## 阅读路径

**应用开发者**（用 Makepad 构建应用）：
> ch01 → ch02 → ch03 → ch04 → ch05 → ch06 → ch07 → ch08 → ch09 → ch12 → ch15

**框架贡献者**（理解 Makepad 内部实现）：
> ch01 → ch03 → ch06 → ch11 → ch12 → ch17 → ch18 → ch22 → ch23 → ch25

**AI 工具开发者**（构建 AI 生成 UI 的工具）：
> ch01 → ch06 → ch11 → ch27 → ch28 → ch29 → ch31 → 附录E

## 语言版本

- **中文** — 主语言，已完成 ✅
- English — 计划中
- 日本語 — 计划中

## 本地构建

### 前置条件

- [Rust](https://rustup.rs/)（用于 mdbook）
- [mdbook](https://github.com/rust-lang/mdBook)：`cargo install mdbook`
- [mdbook-mermaid](https://github.com/badboy/mdbook-mermaid)：`cargo install mdbook-mermaid`

### 命令

```bash
# 克隆
git clone https://github.com/ZhangHanDong/makepad-2.0-book.git
cd makepad-2.0-book

# 本地预览（浏览器打开 http://localhost:3000）
mdbook serve --open

# 构建静态 HTML
mdbook build
```

## 配套项目：Makepad Skills

本书有一个配套项目——[**makepad-skills**](https://github.com/ZhangHanDong/makepad-skills)——一组为 AI Agent（如 Claude Code）设计的技能插件。

| Skill | 用途 |
|-------|------|
| `makepad-basics` | 应用结构、`app_main!`、`script_mod!` |
| `makepad-dsl` | Splash DSL 语法、属性系统、`let` 绑定 |
| `makepad-layout` | 布局引擎（Turtle）、`Fill`/`Fit`、`flow`、`align` |
| `makepad-widgets` | Widget 目录 — View、Button、Label、PortalList 等 |
| `makepad-shaders` | Sdf2d Shader 系统、`pixel fn`、`draw_bg` |
| `makepad-animation` | Animator 状态机、hover/pressed 效果 |
| `makepad-event-action` | 事件处理、`MatchEvent`、`handle_actions` |
| `makepad-splash` | Splash 脚本语言运行时 |
| `makepad-reference` | 故障排查和 API 参考 |
| `makepad-migration` | 1.x → 2.0 迁移指南 |

本书是"给人类读的文档"，makepad-skills 是"给 AI 读的文档"。两者覆盖相同的知识体系，面向不同受众。

**安装**：参见 [github.com/ZhangHanDong/makepad-skills](https://github.com/ZhangHanDong/makepad-skills)。

## 源码引用

本书引用 [Makepad](https://github.com/makepad/makepad) 源码（dev 分支，2026 年 4 月快照）。关键文件：

| 源码 | 章节 |
|------|------|
| `platform/script/src/`（Splash VM） | ch06, ch11, ch23, ch24, ch25 |
| `draw/src/`（渲染引擎） | ch12, ch18, ch19, ch20, ch21 |
| `widgets/src/`（UI 组件） | ch07, ch13-ch17 |
| `tools/canvas/`（AI Canvas） | ch27, ch28, ch29, ch30 |
| `examples/counter/`, `examples/todo/` | ch03, ch04, ch05 |
| `splash.md`（语言参考手册） | ch06-ch11 |

## 写作流程

本书使用 AI 辅助写作，基于 [tech-writer](https://github.com/anthropics/claude-code) skill 工作流：

1. **Spec 驱动**：每章有 [agent-spec](https://github.com/anthropics/agent-spec) 任务契约定义验收标准
2. **源码验证**：所有代码引用在写作 session 中实际验证
3. **三 Agent 审阅**：每章由 3 个并行 AI Agent 审阅（事实核查、技术审查、结构编辑）
4. **预算控制**：每章写作前声明字数和深度层级

## 统计

| 指标 | 数值 |
|------|------|
| 章节数 | 32 |
| 附录数 | 5 |
| 总行数 | 9,000+ |
| Mermaid 图 | 31/32 章 |
| Spec 契约 | 16 个 |
| 源码引用 | 100+ 条 `file:line` 引用 |

## 贡献

欢迎贡献！特别是：

- **翻译**（英文、日文）
- **技术纠正**（源码引用、API 准确性）
- **深度扩展**（ch10, ch11, ch28, ch29 字数低于预算）
- **示例代码**（`examples/` 目录的可运行示例）

## 许可证

内容基于 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可。代码示例遵循 Makepad 的 MIT/Apache-2.0 双许可。

## 致谢

- [Makepad](https://makepad.dev/) 团队，特别是 Rik Arends，创造了这个框架
- [Anthropic](https://anthropic.com/) 提供 Claude Code 和 AI 辅助写作工作流
- Makepad 社区验证了 Agent-to-App 范式的可行性
