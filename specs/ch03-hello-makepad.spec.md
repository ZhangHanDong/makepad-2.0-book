spec: task
name: "第3章 第一个应用"
inherits: project
tags: [tutorial, hello-world, part-i, phase-2]
depends: [ch02-setup]
estimate: 1.5d
---

## 意图

带领读者创建第一个 Makepad 2.0 应用。通过最小化骨架代码讲解
`app_main!`、`script_mod!`、`MatchEvent` 等核心概念。
读者完成本章后理解 Makepad 应用的基本结构，
以及 `script_mod!` 是运行时的（为 AI 叙事线埋种子）。

### 深度预算

```
L1: 最小应用长什么样？（代码展示和运行）
L2: 每个部分是做什么的？（app_main!, script_mod!, MatchEvent 逐一讲解）
L3: 为什么 script_mod! 是运行时的？（与 live_design! 的根本区别）
```

### 字数预算

7000 字

## 已定决策

- 基于 `examples/splash/` 的代码结构
- Rust 部分和 Splash 部分分开讲解，先 Rust 后 Splash
- 包含完整的 Cargo.toml 配置
- 包含"修改 Splash → 即时看到变化"的体验环节

## 边界

### 允许修改
- src/zh/ch03-hello-makepad.md
- examples/ch03-hello-makepad/

### 禁止做
- 不要讲复杂的状态管理（留给第4章）
- 不要讲列表和数据驱动（留给第5章）

## 排除范围

- 状态管理和事件响应的完整模式
- 列表渲染和数据驱动 UI

## 完成条件

场景: 可运行示例
  测试: verify_ch03_example_builds
  假设 examples/ch03-hello-makepad/ 包含完整代码
  当 执行 `cargo build` 时
  那么 编译成功无错误

场景: script_mod! vs live_design! 对比
  测试: verify_ch03_runtime_explanation
  假设 ch03 讲解了 script_mod!
  当 检查运行时说明时
  那么 明确说明 script_mod! 是运行时求值
  并且 与 live_design!（编译时宏）做对比
  并且 铺垫"运行时意味着 AI 可以动态生成"

场景: 字数在预算范围内
  测试: verify_ch03_word_count
  假设 ch03 中文版已完成
  当 统计中文字符数时
  那么 字数在 5600-8400 之间（预算 ±20%）
