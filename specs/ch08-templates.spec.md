spec: task
name: "第8章 模板与组合"
inherits: project
tags: [splash, templates, composition, part-ii, phase-1]
depends: [ch07-properties-containers]
estimate: 2d
---

## 意图

讲解 Splash 的模板定义与组合机制。读者学完本章后能够：
使用 `let` 定义可复用模板；使用 `:=` 命名子组件实现实例级覆写；
理解模板实例化的机制和限制。本章的 AI 视角是：
AI 生成模板结构，人类覆写实例属性——这是 AI-human 协作的理想模式。

### 深度预算

```
L1: let 和 := 怎么用？（语法和示例）
L2: 模板机制如何工作？（实例化、属性覆写、命名解析）
L3: AI 协作模式：AI 生成模板，人类调整实例（设计意图和最佳实践）
```

### 字数预算

8000 字（中文基准）

## 已定决策

- 以 `token-dashboard.splash` 的模板模式作为主示例
- 以 `splash.md` 中的 TodoItem 和 InfoCard 作为教学示例
- 讲解从简单到复杂的 3 层递进：单一模板 → 嵌套模板 → 多实例覆写
- 包含一个"AI 生成 → 人类调整"的工作流图（Mermaid）
- 引用 `platform/script/src/apply.rs` 中的模板应用逻辑

## 边界

### 允许修改
- src/zh/ch08-templates.md
- src/en/ch08-templates.md
- src/ja/ch08-templates.md
- examples/ch08-templates/

### 禁止做
- 不要讲 fn 函数定义（留给第11章）
- 不要讲 on_click 等事件绑定的完整教程（留给第9章）
- 不要深入 ScriptHook 或 Widget 注册机制（留给第17章）

## 排除范围

- Splash 函数定义（fn）
- 事件处理回调（on_click, on_render, on_return）
- ScriptHook 和 Widget 生命周期
- VM 内部的模板实例化实现

## 完成条件

场景: let 语法讲解完整
  测试: verify_ch08_let_syntax
  假设 ch08 讲解了 let 语法
  当 检查 let 教学段落时
  那么 包含基本 let 定义的示例（如 `let MyCard = RoundedView{...}`）
  并且 包含模板实例化的示例（如 `MyCard{...}`）
  并且 说明 let 是编译时定义而非运行时变量

场景: := 命名机制讲解清晰
  测试: verify_ch08_named_children
  假设 ch08 讲解了 := 语法
  当 检查 := 教学段落时
  那么 明确区分 `:=`（命名/动态）和 `:`（静态属性）的区别
  并且 包含错误使用 `:` 导致文本不可见的陷阱说明
  并且 包含实例级覆写的示例（如 `MyCard{title.text: "new value"}`）

场景: 递进示例完整
  测试: verify_ch08_progressive_examples
  假设 ch08 使用递进式教学
  当 检查示例层级时
  那么 包含单一模板示例（1 个 let + 多个实例）
  并且 包含嵌套模板示例（模板内包含命名子组件）
  并且 包含多实例覆写示例（同一模板的不同实例覆写不同属性）

场景: AI 协作视角有体现
  测试: verify_ch08_ai_perspective
  假设 ch08 包含 AI 协作段落
  当 检查 AI 相关内容时
  那么 包含 "AI 生成模板 → 人类调整实例" 的工作流描述
  并且 包含至少 1 个 Mermaid 图展示 AI-human 协作流程
  并且 不是空洞的展望，而是有具体的代码示例对比

场景: 代码片段有出处
  测试: verify_ch08_source_refs
  假设 ch08 引用了 Makepad 源码
  当 检查代码引用时
  那么 每个源码片段标注 `file:line` 格式

场景: 不包含越界内容
  测试: verify_ch08_no_out_of_scope
  假设 ch08 已完成
  当 扫描章节内容时
  那么 不包含 fn 函数定义的教程
  并且 不包含 on_click 回调的完整教程
  并且 不包含 ScriptHook 的使用说明

场景: 字数在预算范围内
  测试: verify_ch08_word_count
  假设 ch08 中文版已完成
  当 统计中文字符数时
  那么 字数在 6400-9600 之间（预算 ±20%）
