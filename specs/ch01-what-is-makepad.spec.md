spec: task
name: "第1章 Makepad 的设计赌注"
inherits: project
tags: [intro, philosophy, part-i, phase-3]
depends: []
estimate: 1.5d
---

## 意图

向零基础读者介绍 Makepad 2.0 的设计哲学和定位。回答"为什么需要又一个 GUI 框架"
这个问题。核心论点：编译时 UI 描述无法被 AI 实时修改，Makepad 2.0 通过运行时
Splash 语言打开了 AI 动态生成 UI 的可能性。本章奠定全书基调。

### 深度预算

```
L1: Makepad 是什么？（定位、特性、适用场景）
L2: 与其他框架的根本分歧是什么？（运行时 vs 编译时 UI 描述）
```

### 字数预算

6000 字

## 已定决策

- 对比框架：Qt/QML, Flutter/Dart, SwiftUI, React, egui
- 对比维度：语言、UI 描述方式、热重载能力、AI 友好度、跨平台覆盖
- 不做"哪个更好"的判断，而是"不同的设计赌注"
- 以时间线展示 Makepad 的演进：1.x → 2.0 的关键转折点
- 铺垫 AI 叙事线但不深入技术细节

## 边界

### 允许修改
- src/zh/ch01-what-is-makepad.md
- src/en/ch01-what-is-makepad.md
- src/ja/ch01-what-is-makepad.md

### 禁止做
- 不要写代码教程（留给第3章）
- 不要深入 Splash 语法细节（留给第6章）
- 不要贬低其他框架，保持技术公正

## 排除范围

- 环境搭建步骤
- 代码示例和编程教程
- Splash 语法详解

## 完成条件

场景: 框架对比表完整
  测试: verify_ch01_comparison_table
  假设 ch01 包含框架对比
  当 检查对比表时
  那么 至少对比 5 个框架（Qt, Flutter, SwiftUI, React, egui）
  并且 包含 "UI 描述方式" 和 "AI 友好度" 维度
  并且 对每个框架的描述是公正的

场景: AI 叙事铺垫
  测试: verify_ch01_ai_narrative
  假设 ch01 包含 AI 相关段落
  当 检查 AI 叙事时
  那么 提出"编译时 UI 无法被 AI 实时修改"的论点
  并且 不深入 Splash 语法或 Canvas 架构细节

场景: 字数在预算范围内
  测试: verify_ch01_word_count
  假设 ch01 中文版已完成
  当 统计中文字符数时
  那么 字数在 4800-7200 之间（预算 ±20%）
