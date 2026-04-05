spec: task
name: "第10章 状态与动画"
inherits: project
tags: [splash, state, animation, animator, part-ii, phase-4]
depends: [ch09-events]
estimate: 2.5d
---

## 意图

讲解 Splash 的状态管理和 Animator 动画系统。覆盖 mod.state、
状态机定义、Forward/Snap/Loop 过渡、hover/pressed 效果。
以 `music-player.splash` 的播放状态控制为案例。

### 深度预算

```
L1: 状态和动画怎么写？（语法和 API）
L2: Animator 状态机如何工作？（状态转换、插值、缓动函数）
L3: 最佳实践（何时用状态机 vs 直接修改属性）
```

### 字数预算

10000 字

## 已定决策

- 以 `music-player.splash` 为主要案例
- 引用 `widgets/src/animator.rs` 的状态机实现
- 包含常用缓动函数对比表
- 分步构建：静态 UI → hover 效果 → 点击动画 → 状态驱动 UI

## 边界

### 允许修改
- src/zh/ch10-state-animation.md
- examples/ch10-state-animation/

### 禁止做
- 不要深入 Animator 的 Rust 内部实现（留给第22章）
- 不要讲 Shader 动画（留给第19章）

## 排除范围

- Animator Rust 源码分析
- Shader 级别的动画（vertex/pixel fn 中的时间变量）
- 物理动画引擎

## 完成条件

场景: 状态机教程完整
  测试: verify_ch10_state_machine
  假设 ch10 讲解了状态机
  当 检查状态机段落时
  那么 包含 mod.state 的定义语法
  并且 包含至少 2 种过渡类型（Forward, Snap, Loop 中的 2 种）
  并且 包含 hover 和 pressed 状态的完整示例

场景: music-player 案例
  测试: verify_ch10_music_player
  假设 ch10 使用 music-player 案例
  当 检查案例使用时
  那么 引用 music-player.splash 的状态控制逻辑
  并且 展示播放/暂停状态切换的实现

场景: 字数在预算范围内
  测试: verify_ch10_word_count
  假设 ch10 中文版已完成
  当 统计中文字符数时
  那么 字数在 8000-12000 之间（预算 ±20%）
