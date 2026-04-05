# Makepad 2.0: 从入门到架构 — 技术书籍项目

本项目编写一本关于 Makepad 2.0 的深度技术书籍（32 章 + 5 附录），以 Splash 语言和 AI 动态生成 UI 为核心叙事线。中/英/日三语版本，使用 mdbook 构建。

## 大纲与 Specs

大纲和任务契约在以下文件：

- `OUTLINE.md` — **完整 32 章大纲**（含 Canvas 交叉引用、写作顺序、源码索引）
- `specs/project.spec.md` — 项目级约束、决策、边界（被所有章节继承）
- `specs/ch01-what-is-makepad.spec.md` — 第1章：Makepad 的设计赌注
- `specs/ch02-setup.spec.md` — 第2章：环境搭建
- `specs/ch03-hello-makepad.spec.md` — 第3章：第一个应用
- `specs/ch04-counter.spec.md` — 第4章：Counter 状态与事件
- `specs/ch05-todo.spec.md` — 第5章：Todo 数据驱动 UI
- `specs/ch06-splash-philosophy.spec.md` — 第6章：Splash 语法设计哲学
- `specs/ch07-properties-containers.spec.md` — 第7章：属性与容器
- `specs/ch08-templates.spec.md` — 第8章：模板与组合
- `specs/ch09-events.spec.md` — 第9章：事件与交互
- `specs/ch10-state-animation.spec.md` — 第10章：状态与动画
- `specs/ch11-streaming-eval.spec.md` — 第11章：流式求值
- `specs/ch27-canvas-architecture.spec.md` — 第27章：Canvas 架构剖析
- `specs/ch28-agent-to-app.spec.md` — 第28章：Agent-to-App 管线
- `specs/ch29-self-healing.spec.md` — 第29章：自愈循环与流式渲染
- `specs/remaining-chapters.spec.md` — 其余章节参数规划（Phase 5-10）

编写任何章节前，先读对应的 spec 文件和 `OUTLINE.md`。

## 写作计划与进度

### 写作顺序（非章节顺序）

| Phase | 章节 | 状态 | 理由 |
|-------|------|------|------|
| 1 | ch06, ch07, ch08 | ✅ 完成 | Splash 核心——全书差异点，素材充足 |
| 2 | ch03, ch04, ch05 | ✅ 完成 | 入门教程——验证 Splash 教学方法 |
| 3 | ch01, ch02 | ✅ 完成 | 哲学与搭建——需要前两阶段写作经验 |
| 4 | ch09, ch10, ch11 | ✅ 完成 | Splash 进阶——事件、动画、流式求值 |
| 5 | ch12-ch17 | ✅ 完成 | Widget 体系——系统性参考 |
| 6 | ch27, ch28, ch29 | ✅ 完成 | Canvas 案例——AI-Native 核心章节 |
| 7 | ch18-ch21 | ✅ 完成 | 渲染与 Shader |
| 8 | ch22-ch26 | ✅ 完成 | 架构深度篇 |
| 9 | ch30-ch32 | ✅ 完成 | 音频、教程、未来 |
| 10 | 附录 A-E + 前言 | ✅ 完成 | 速查表 + 阅读指南 |
| 11 | EN 翻译 | ⬜ | 全书英文版 |
| 12 | JA 翻译 | ⬜ | 全书日文版 |

### 核心叙事线

```
传统 GUI:    代码 → 编译 → UI（静态）
Makepad 1.x: live_design! → 编译时宏 → UI（半静态）
Makepad 2.0: Splash 脚本 → 流式求值 → UI（动态）
                  ↑
               AI Agent 可以写 Splash
                  ↑
           Agent-to-App: 自然语言 → Splash → 原生应用
```

Canvas 项目（`makepad/tools/canvas/`）是 Part VI 的核心案例。

## 项目结构

```
makepad-2.0-book/
├── OUTLINE.md           # 完整 32 章大纲（v3）
├── CLAUDE.md            # 本文件
├── book.toml            # mdbook 配置
├── src/
│   ├── zh/              # 中文（主语言）
│   │   ├── SUMMARY.md   # 目录结构
│   │   ├── preface.md
│   │   ├── ch01-*.md ~ ch32-*.md
│   │   └── appendix-*.md
│   ├── en/              # English（待翻译）
│   └── ja/              # 日本語（待翻译）
├── examples/            # 书中代码示例（可编译运行）
├── specs/               # agent-spec 任务契约
└── .gitignore
```

## 构建和预览

```bash
cd makepad-2.0-book && mdbook serve --open    # 本地预览 http://localhost:3000
cd makepad-2.0-book && mdbook build           # 构建 HTML 到 book/
```

## 源码引用

本书引用 Makepad 源码仓库（`../makepad/`，dev 分支，2026-04 快照）。关键文件索引：

| 源码路径 | 引用章节 |
|---------|---------|
| `platform/script/src/tokenizer.rs` | ch06, ch23 |
| `platform/script/src/parser.rs` | ch06, ch23 |
| `platform/script/src/vm.rs` | ch11, ch23 |
| `platform/script/src/gc.rs` | ch24 |
| `draw/src/turtle.rs` | ch12 |
| `draw/src/shader/` | ch19 |
| `widgets/src/*.rs` | ch12-ch17 |
| `tools/canvas/src/app.rs` | ch27, ch28 |
| `tools/canvas/src/ws/` | ch27, ch28, ch29 |
| `tools/canvas/examples/*.splash` | ch06-ch10, ch27-ch30 |
| `examples/counter/src/main.rs` | ch03, ch04 |
| `examples/todo/` | ch05 |
| `splash.md` | ch06-ch11（语法权威来源） |

**绝不修改 Makepad 源码仓库中的任何文件。** 只在 `makepad-2.0-book/` 内操作。

## 必须使用的 Skills

### 写作 Skill（最重要）

| Skill | 何时加载 |
|-------|---------|
| `tech-writer` | **编写任何章节前必须加载。** 遵循三阶段流程：Research → Write（含预算声明）→ Review（3-agent 并行审阅） |

### Spec 管理 Skills

| Skill | 何时加载 |
|-------|---------|
| `agent-spec-authoring` | 编辑 `.spec.md` 文件时 |
| `agent-spec-tool-first` | 根据 spec 验收标准验证章节完成度时 |

### 章节写作流程

编写一章的标准流程：

1. **读 Spec** — 先读 `specs/chNN-*.spec.md`，确认验收标准、字数预算、边界
2. **读 Outline** — 读 `OUTLINE.md`，确认本章在全书中的位置和 AI 叙事线
3. **加载 tech-writer** — 按 Book Writing Mode 执行 Pre-Flight 检查
4. **声明预算** — 从 spec 提取字数和深度层级
5. **Research** — 验证所有源码引用（tech-writer Phase 1）
6. **Write** — 按章节结构模板写作（tech-writer Phase 2）
7. **Review** — 启动 3-agent 并行审阅（tech-writer Phase 3）
8. **Fix** — 按 P0→P1→P2→P3 优先级修复审阅发现

## 写作规范

### 预算制度

每章开始写作前，必须声明预算（tech-writer skill 的 Step 0）。预算从 spec 的 `estimate` 和深度层级推导：

```
Type: book-chapter
Depth: 3 layers (L1: What → L2: Why → L3: Best Practices)
Word budget: 8,000 字 (prose chars 6400-9600, ±20%)
```

字数统计方法：prose characters（去除代码块和空白后的所有字符数），6400-9600 范围。

### 章节结构

每章必须包含：

```markdown
# 第N章：标题

## 为什么这很重要
  动机说明（2-3 段）

## [核心内容段落]
  源码分析 / 教学内容 / 实战解读
  代码片段标注 `file:line`
  至少 1 个 Mermaid 流程图

## 模式提炼
  从分析中提取可复用模式
  每个模式：名称、问题、方案、前提条件、收益

## 本章小结
  总结表格 + 下一章预告（详见第N章）
```

### 源码引用规范

- 所有技术论断必须有源码证据，格式：`file:line` 或 `file:line-line`
- 代码片段使用实际源码，不使用伪代码
- 如果对源码做了简化或格式化，标注"简化"或"格式化"
- 如果改名或改值，标注"改编自"

### 跨章引用

- 同一段源码不在两个章节中重复出现超过 3 行
- 跨章引用使用"详见第N章：标题"格式
- `splash.md` 是 Splash 语法的权威来源

### 容器属性命名

- 圆角半径使用 `draw_bg.radius`（与 Canvas 示例一致），不使用 `draw_bg.border_radius`
- 颜色统一使用 `#x` 前缀（即使不含 `e`），保持一致性

### 语言规范

- 中文写作，技术术语首次出现时附英文原文
- 不在书中包含安全凭证或 API key
- 不对框架做"好/坏"评判，聚焦于设计决策和权衡

## Review 流程

每章写完后，按 tech-writer skill 的 Phase 3 执行 3-agent 并行 review：

1. **fact-checker**：验证源码引用是否指向真实存在的文件和行号；Mermaid 语法校验
2. **tech-reviewer**：检查 Splash 代码正确性、技术公平性、属性命名一致性
3. **structure-editor**：检查结构一致性、字数预算、跨章重复、措辞问题

三个 agent 必须在**单条消息中并行启动**。

## 从 ch06 Review 中学到的经验

1. **token 计数不要瞎猜** — Splash vs JSON/XML 的 token 对比需要诚实，Splash 主要优势在 JSON 对比上
2. **line ref 必须验证** — 不要假设行号，在当前 session 中 `Read` 实际文件确认
3. **字数一次写够** — 每章初稿就要达到 6400+ prose chars，避免二次扩展
4. **`draw_bg.radius` vs `draw_bg.border_radius`** — token-dashboard 用前者，splash.md 用后者，统一用 `draw_bg.radius`
5. **`live_design!` 也支持热重载** — 不要过度贬低 1.x，区别在于脚本能力而非热重载
