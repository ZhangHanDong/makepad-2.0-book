spec: task
name: "第11章 流式求值"
inherits: project
tags: [splash, streaming, ai, part-ii, phase-4]
depends: [ch10-state-animation]
estimate: 2.5d
---

## 意图

揭示 Splash 流式求值的机制——AI 逐 token 输出时 UI 如何逐步成型。
这是 Part II 的高潮章节，也是全书 AI 叙事线的关键技术支撑。
覆盖 `script_eval!`、streaming evaluation 协议、增量更新策略。

### 深度预算

```
L1: 什么是流式求值？（概念和效果演示）
L2: 流式求值如何工作？（token → parse → render 的管线）
L3: 技术边界是什么？（哪些 Splash 结构支持流式、哪些不支持）
L4: 这为 AI 生成 UI 打开了什么可能？（连接 Part VI Canvas 章节）
```

### 字数预算

10000 字

## 已定决策

- 以 Canvas 的 `SplashStreamBegin/Append/End` 协议作为实例
- 引用 `platform/script/src/vm.rs` 的流式求值入口
- 包含"逐 token UI 成型"的视觉化时间线图（Mermaid）
- 对比批量求值 vs 流式求值的用户体验差异
- 为 Part VI ch29 做技术铺垫

## 边界

### 允许修改
- src/zh/ch11-streaming-eval.md
- examples/ch11-streaming-eval/

### 禁止做
- 不要深入 VM opcode 实现（留给第23章）
- 不要讲 Canvas 的完整架构（留给第27章）
- 不要讲 GC 实现（留给第24章）

## 排除范围

- VM 字节码和 opcode 详解
- Canvas 架构和 WS Bridge
- GC 和内存管理细节

## 完成条件

场景: 流式求值概念清晰
  测试: verify_ch11_streaming_concept
  假设 ch11 已完成
  当 检查概念讲解时
  那么 包含"AI 逐 token 输出时 UI 逐步成型"的描述
  并且 包含 SplashStreamBegin/Append/End 三阶段协议
  并且 包含批量 vs 流式的对比

场景: 技术边界有说明
  测试: verify_ch11_boundaries
  假设 ch11 讲解了技术边界
  当 检查边界段落时
  那么 说明哪些 Splash 结构支持增量更新
  并且 说明哪些情况需要完整重建

场景: 源码引用
  测试: verify_ch11_source_refs
  假设 ch11 引用了 VM 源码
  当 检查代码引用时
  那么 引用 vm.rs 中的流式求值相关代码
  并且 标注 `file:line` 格式

场景: Part VI 铺垫
  测试: verify_ch11_foreshadow
  假设 ch11 包含前瞻段落
  当 检查 Part VI 铺垫时
  那么 提到 Canvas 的流式渲染场景
  并且 使用"详见第27-29章"格式的交叉引用

场景: 字数在预算范围内
  测试: verify_ch11_word_count
  假设 ch11 中文版已完成
  当 统计中文字符数时
  那么 字数在 8000-12000 之间（预算 ±20%）
