spec: task
name: "第6章 Splash 语法设计哲学"
inherits: project
tags: [splash, language-design, part-ii, phase-1]
depends: []
estimate: 2d
---

## 意图

阐述 Splash 语言的语法设计哲学：为什么选择无逗号/无分号/空格分隔的语法，
这种设计如何服务于三个目标——人类可读性、热重载效率、AI token 效率。
本章是全书的核心差异点，读者读完后应理解 Splash 不是"又一个 DSL"，
而是为 AI 时代专门设计的 UI 语言。

### 深度预算

```
L1: Splash 语法长什么样？（基本规则展示）
L2: 为什么这样设计？（与 JSON/XML/QML/JSX 的对比分析）
L3: 这种设计带来什么好处？（AI token 效率、解析器简化、流式求值支持）
```

### 字数预算

8000 字（中文基准）

## 已定决策

- 以 `pomodoro.splash` 片段作为贯穿全章的示例
- 与 JSON/XML/QML/JSX 做语法对比表
- 引用 `platform/script/src/parser.rs` 的 tokenizer 设计来佐证语法选择
- 引用 `splash.md` 作为语法规则的权威来源
- 包含一个 "AI token 计数对比" 表格：同一 UI 在不同语法下的 token 数

## 边界

### 允许修改
- src/zh/ch06-splash-philosophy.md
- src/en/ch06-splash-philosophy.md
- src/ja/ch06-splash-philosophy.md
- examples/ch06-splash-philosophy/

### 禁止做
- 不要深入 VM 实现细节（那是第23章的内容）
- 不要讲事件系统（on_click 等留给第9章）
- 不要讲模板系统（let/:= 留给第8章）
- 不要使用未在 splash.md 中记录的语法

## 排除范围

- Splash VM 字节码和 opcode 设计
- 事件处理语法（on_click, on_render）
- 模板定义和实例化（let, :=）
- Shader 语法（pixel fn, vertex fn）

## 完成条件

场景: 章节结构完整
  测试: verify_ch06_structure
  假设 ch06 markdown 文件存在于 src/zh/
  当 检查章节结构时
  那么 包含"为什么这很重要"或等价引言段落
  并且 包含至少 1 个 Mermaid 流程图
  并且 包含源码分析段落，引用 parser.rs
  并且 包含模式提炼段落

场景: 语法对比表完整
  测试: verify_ch06_comparison_table
  假设 ch06 包含语法对比表
  当 检查对比表时
  那么 至少对比 4 种语法（Splash/JSON/XML/QML 或 JSX）
  并且 每种语法展示同一 UI 片段的表达方式
  并且 包含 AI token 计数列

场景: 代码片段有出处
  测试: verify_ch06_source_refs
  假设 ch06 引用了 Makepad 源码
  当 检查代码引用时
  那么 每个源码片段标注 `file:line` 格式
  并且 引用的文件路径在 makepad repo 中实际存在

场景: 不包含越界内容
  测试: verify_ch06_no_out_of_scope
  假设 ch06 已完成
  当 扫描章节内容时
  那么 不包含 on_click 或 on_render 的使用教程
  并且 不包含 let 模板定义的教程
  并且 不包含 VM opcode 的详细解释

场景: 字数在预算范围内
  测试: verify_ch06_word_count
  假设 ch06 中文版已完成
  当 统计中文字符数时
  那么 字数在 6400-9600 之间（预算 ±20%）

场景: pomodoro.splash 作为主示例
  测试: verify_ch06_pomodoro_example
  假设 ch06 使用代码示例
  当 检查主要示例来源时
  那么 至少引用 pomodoro.splash 的 3 个不同片段
  并且 每个片段用于说明不同的语法规则
