spec: task
name: "第27章 Canvas 架构剖析"
inherits: project
tags: [canvas, architecture, ai-native, part-vi, phase-6]
depends: [ch11-streaming-eval, ch22-event-action]
estimate: 3d
---

## 意图

深度剖析 Makepad Canvas 项目的架构。Canvas 是 AI Agent-to-App 管线的
核心渲染器，展示了 Makepad 2.0 AI-Native 设计的完整实现。
本章是 Part VI 的开篇，为后续 Agent-to-App、自愈循环、
音频可视化等章节建立架构基础。

### 深度预算

```
L1: Canvas 是什么？（纯渲染器，不是状态容器）
L2: 三线程模型为什么这样设计？（TCP/UI/Audio 隔离）
L3: 关键数据结构和通信协议（App, StdioBridge, CanvasCommand）
L4: 设计权衡（HTTP+WS双协议、Mutex vs Channel、单App限制）
```

### 字数预算

12000 字

## 已定决策

- 完全基于 `tools/canvas/src/` 的实际代码
- 三线程模型用 Mermaid 时序图展示
- CanvasCommand enum 的 6 个变体逐一讲解
- SignalToUI 跨线程唤醒机制重点分析
- 包含完整的数据流图：命令接收 → 解析 → 入队 → UI线程消费 → 渲染

## 边界

### 允许修改
- src/zh/ch27-canvas-architecture.md
- src/en/ch27-canvas-architecture.md
- src/ja/ch27-canvas-architecture.md
- examples/ch27-canvas-architecture/

### 禁止做
- 不要讲 Agent 如何生成 Splash（留给第28章）
- 不要讲自愈循环的截图检测（留给第29章）
- 不要讲音频管线细节（留给第30章）

## 排除范围

- AI Agent 的 Splash 生成策略
- 截图分析和自愈逻辑
- 音频解码和 FFT 分析细节

## 完成条件

场景: 三线程模型讲解清晰
  测试: verify_ch27_thread_model
  假设 ch27 已完成
  当 检查线程模型段落时
  那么 包含 TCP Listener (tokio)、UI Thread (Makepad)、Audio Thread 三者的描述
  并且 包含线程间通信机制的说明（SignalToUI, Mutex, Arc）
  并且 包含至少 1 个 Mermaid 时序图

场景: 核心数据结构覆盖
  测试: verify_ch27_data_structures
  假设 ch27 讲解了数据结构
  当 检查结构覆盖时
  那么 包含 App struct 的字段解析
  并且 包含 CanvasCommand enum 的所有变体
  并且 包含 StdioBridge 的命令队列和事件广播机制

场景: 通信协议讲解
  测试: verify_ch27_protocols
  假设 ch27 讲解了通信协议
  当 检查协议段落时
  那么 包含 WebSocket 协议的消息格式
  并且 包含 HTTP 协议的端点列表
  并且 解释了为什么需要双协议

场景: 源码引用准确
  测试: verify_ch27_source_refs
  假设 ch27 引用了 Canvas 源码
  当 检查代码引用时
  那么 引用 app.rs 的关键代码段
  并且 引用 ws/stdio_bridge.rs 的通信代码
  并且 引用 ws/types.rs 的 CanvasCommand 定义
  并且 所有引用标注 `file:line` 格式

场景: 设计权衡有讨论
  测试: verify_ch27_tradeoffs
  假设 ch27 包含 L4 深度分析
  当 检查权衡段落时
  那么 讨论了 HTTP+WS 双协议的取舍
  并且 讨论了 Mutex<VecDeque> vs channel 的选择原因
  并且 讨论了单 App 渲染的限制

场景: 字数在预算范围内
  测试: verify_ch27_word_count
  假设 ch27 中文版已完成
  当 统计中文字符数时
  那么 字数在 9600-14400 之间（预算 ±20%）
