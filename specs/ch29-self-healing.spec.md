spec: task
name: "第29章 自愈循环与流式渲染"
inherits: project
tags: [canvas, self-healing, streaming, ai-native, part-vi, phase-6]
depends: [ch28-agent-to-app]
estimate: 2.5d
---

## 意图

讲解两个关键的 AI-Native 机制：自愈循环（截图→检测问题→修复 Splash→重推）
和流式渲染（SplashStreamBegin/Append/End 协议的实际应用）。
自愈循环展示 AI 如何通过视觉反馈迭代改进 UI，
流式渲染展示 AI 逐 token 输出时 UI 如何实时成型。

### 深度预算

```
L1: 自愈循环是什么？流式渲染是什么？（效果演示）
L2: 自愈循环的实现——截图分析的检测策略
L3: 流式渲染的协议——Begin/Append/End 三阶段
L4: 常见修复模式和失败案例分析
```

### 字数预算

10000 字

## 已定决策

- 自愈循环以 `skills/app/SKILL.md` 的工作流为蓝本
- 列出 Top 5 常见渲染问题和修复方法
- 流式渲染引用 `ws/types.rs` 的 SplashStream* 变体
- 包含"3 次迭代修复"的完整案例（从空白屏幕到正确渲染）
- 与 ch11（流式求值理论）形成呼应

## 边界

### 允许修改
- src/zh/ch29-self-healing.md
- examples/ch29-self-healing/

### 禁止做
- 不要重复 ch11 的流式求值理论（使用交叉引用）
- 不要重复 ch27-28 的架构和管线描述

## 排除范围

- 流式求值的 VM 内部实现（ch11 和 ch23）
- Canvas 架构（ch27）
- Agent-to-App 管线（ch28）

## 完成条件

场景: 自愈循环完整讲解
  测试: verify_ch29_self_healing
  假设 ch29 讲解了自愈循环
  当 检查自愈段落时
  那么 包含截图→检测→修复→重推的完整循环
  并且 说明最大 3 次迭代的限制
  并且 包含至少 1 个完整的修复案例（从问题到解决）

场景: 常见修复模式
  测试: verify_ch29_fix_patterns
  假设 ch29 列出了常见问题
  当 检查修复模式时
  那么 包含 "height: Fit 缺失导致空白" 的修复
  并且 包含 "#x 前缀缺失导致颜色错误" 的修复
  并且 包含 "draw_text.color 缺失导致文字不可见" 的修复
  并且 至少列出 5 种常见问题

场景: 流式渲染协议
  测试: verify_ch29_streaming_protocol
  假设 ch29 讲解了流式渲染
  当 检查流式段落时
  那么 包含 SplashStreamBegin/Append/End 三阶段
  并且 引用 ws/types.rs 的代码
  并且 与 ch11 形成交叉引用

场景: 字数在预算范围内
  测试: verify_ch29_word_count
  假设 ch29 中文版已完成
  当 统计中文字符数时
  那么 字数在 8000-12000 之间（预算 ±20%）
