spec: task
name: "第4章 Counter: 状态与事件"
inherits: project
tags: [tutorial, counter, state, events, part-i, phase-2]
depends: [ch03-hello-makepad]
estimate: 2d
---

## 意图

通过经典 Counter 应用讲解 Makepad 的状态管理和事件响应模式。
覆盖 Rust↔Splash 双向通信、on_click 事件处理、
`script_eval!` 动态执行。读者完成本章后能构建有交互的应用。

### 深度预算

```
L1: Counter 应用怎么写？（完整代码演示）
L2: 状态如何在 Rust 和 Splash 之间流动？（双向通信机制）
L3: 运行时修改 Splash 为什么能立刻生效？（热重载体验）
```

### 字数预算

8000 字

## 已定决策

- 基于 `examples/counter/` 的实际代码
- 先展示纯 Splash 版本，再展示 Rust+Splash 版本
- 包含 handle_event / handle_actions 的完整流程图

## 边界

### 允许修改
- src/zh/ch04-counter.md
- examples/ch04-counter/

### 禁止做
- 不要讲列表和数据驱动（留给第5章）
- 不要深入 Animator 系统（留给第10章）

## 排除范围

- 列表渲染
- 动画系统
- 自定义 Widget

## 完成条件

场景: 可运行示例
  测试: verify_ch04_example_builds
  假设 examples/ch04-counter/ 包含完整代码
  当 执行 `cargo build` 时
  那么 编译成功无错误

场景: Rust-Splash 双向通信有讲解
  测试: verify_ch04_bidirectional
  假设 ch04 讲解了通信模式
  当 检查双向通信段落时
  那么 包含 Rust→Splash 方向的数据传递示例
  并且 包含 Splash→Rust 方向的事件回调示例
  并且 包含 Mermaid 数据流图

场景: 字数在预算范围内
  测试: verify_ch04_word_count
  假设 ch04 中文版已完成
  当 统计中文字符数时
  那么 字数在 6400-9600 之间（预算 ±20%）
