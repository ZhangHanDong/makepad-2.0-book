spec: task
name: "第9章 事件与交互"
inherits: project
tags: [splash, events, interaction, part-ii, phase-4]
depends: [ch08-templates]
estimate: 2d
---

## 意图

完整讲解 Splash 中的事件处理机制。覆盖 on_click、on_render、on_return、
on_change 等事件回调，以及闭包语法和事件冒泡。
以 `pomodoro.splash` 的交互逻辑作为主要案例。

### 深度预算

```
L1: 有哪些事件？怎么绑定？（语法和 API）
L2: 事件如何路由？（从 Widget 到回调的完整链路）
L3: 常见模式和陷阱（闭包捕获、事件冒泡、多按钮区分）
```

### 字数预算

8000 字

## 已定决策

- 以 `pomodoro.splash` 的 on_click 为主要教学案例
- 事件类型分类讲解：点击、输入、渲染、变化
- 闭包语法 `||{...}` 和 `|val|{...}` 的区别
- 引用 `platform/src/event/` 中的事件定义

## 边界

### 允许修改
- src/zh/ch09-events.md
- examples/ch09-events/

### 禁止做
- 不要讲 Animator 和状态机（留给第10章）
- 不要讲 Rust 侧的 MatchEvent 细节（留给第22章）

## 排除范围

- Animator 状态机
- Rust 侧 Event enum 的完整枚举
- 自定义事件/Action 的定义

## 完成条件

场景: 事件类型覆盖完整
  测试: verify_ch09_event_types
  假设 ch09 已完成
  当 检查事件覆盖时
  那么 包含 on_click 的教程和示例
  并且 包含 on_return 的教程和示例
  并且 包含 on_change 的教程和示例（如 Slider）
  并且 包含 on_render 的教程和示例

场景: 闭包语法讲解清晰
  测试: verify_ch09_closure_syntax
  假设 ch09 讲解了闭包
  当 检查闭包段落时
  那么 区分 `||{...}`（无参数）和 `|val|{...}`（有参数）
  并且 包含至少 1 个实际示例

场景: 字数在预算范围内
  测试: verify_ch09_word_count
  假设 ch09 中文版已完成
  当 统计中文字符数时
  那么 字数在 6400-9600 之间（预算 ±20%）
