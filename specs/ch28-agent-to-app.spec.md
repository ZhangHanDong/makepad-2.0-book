spec: task
name: "第28章 Agent-to-App 管线"
inherits: project
tags: [canvas, agent-to-app, ai-pipeline, part-vi, phase-6]
depends: [ch27-canvas-architecture]
estimate: 2.5d
---

## 意图

讲解完整的 Agent-to-App 管线：自然语言 → AI 生成 Splash → 推送到 Canvas
→ 原生渲染 → 事件回传。本章是全书 AI 叙事线的高潮，将前面章节铺垫的
Splash 语法、流式求值、事件系统等知识串联成一个完整的工作流。

### 深度预算

```
L1: Agent-to-App 是什么？（端到端演示）
L2: 管线每一步如何工作？（生成→推送→渲染→事件路由→回传）
L3: uid_map 事件路由的实现（WidgetUid → widget_name 映射）
L4: 设计原则——Canvas 是渲染器不是状态容器
```

### 字数预算

10000 字

## 已定决策

- 以 `skills/app/SKILL.md` 中的工作流为蓝本
- 以 4 个 `.splash` 示例（pomodoro, music-player, token-dashboard, claude-monitor）展示不同应用类型
- uid_map 事件路由用代码片段 + 流程图双重展示
- 引用 `app.rs` 中的 `extract_widget_names` 和 `handle_signal`
- 包含完整的 API 端点参考表

## 边界

### 允许修改
- src/zh/ch28-agent-to-app.md
- examples/ch28-agent-to-app/

### 禁止做
- 不要重复第27章的架构描述（使用交叉引用）
- 不要讲自愈循环的截图检测算法（留给第29章）
- 不要讲音频 API 细节（留给第30章）

## 排除范围

- Canvas 三线程架构（已在第27章讲）
- 截图分析和自愈逻辑
- 音频播放和 FFT 分析

## 完成条件

场景: 端到端管线完整
  测试: verify_ch28_pipeline
  假设 ch28 已完成
  当 检查管线描述时
  那么 覆盖 5 个步骤：自然语言→生成→推送→渲染→事件回传
  并且 每个步骤有代码或配置示例
  并且 包含端到端的 Mermaid 流程图

场景: 事件路由讲解清晰
  测试: verify_ch28_event_routing
  假设 ch28 讲解了事件路由
  当 检查 uid_map 段落时
  那么 包含 extract_widget_names 的代码片段
  并且 包含 WidgetUid → widget_name 的映射过程
  并且 包含特殊 widget 名称处理（audio_toggle, play_btn 等）

场景: 4种应用类型有展示
  测试: verify_ch28_app_types
  假设 ch28 使用 .splash 示例
  当 检查应用类型覆盖时
  那么 至少展示 3 种不同的 .splash 应用片段
  并且 说明不同应用类型的 Splash 结构差异

场景: 不重复第27章内容
  测试: verify_ch28_no_duplication
  假设 ch28 引用了第27章的架构概念
  当 扫描章节内容时
  那么 使用"详见第27章"格式的交叉引用
  并且 不重复三线程模型的完整描述

场景: 字数在预算范围内
  测试: verify_ch28_word_count
  假设 ch28 中文版已完成
  当 统计中文字符数时
  那么 字数在 8000-12000 之间（预算 ±20%）
