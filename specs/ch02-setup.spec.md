spec: task
name: "第2章 环境搭建"
inherits: project
tags: [setup, toolchain, part-i, phase-3]
depends: []
estimate: 1d
---

## 意图

帮助读者在 macOS/Windows/Linux 上搭建 Makepad 2.0 开发环境。
包括 Rust 工具链安装、cargo-makepad 工具、各平台构建目标（桌面/移动/WASM）。
读者完成本章后能成功编译并运行 Makepad 示例。

### 深度预算

```
L1: 怎么装？（步骤指南）
L2: 为什么这些依赖？（工具链架构简介）
```

### 字数预算

5000 字

## 已定决策

- 覆盖平台: macOS, Windows, Linux, Android, iOS, WASM
- 以 macOS 为主要演示平台，其他平台差异用表格说明
- 包含常见安装问题的 troubleshooting 表

## 边界

### 允许修改
- src/zh/ch02-setup.md
- src/en/ch02-setup.md
- src/ja/ch02-setup.md

### 禁止做
- 不要写应用代码（留给第3章）
- 不要讲 Studio IDE 的使用（留给第27章）

## 排除范围

- 应用开发代码
- Studio IDE 功能
- CI/CD 配置

## 完成条件

场景: 全平台覆盖
  测试: verify_ch02_platforms
  假设 ch02 已完成
  当 检查平台覆盖时
  那么 包含 macOS、Windows、Linux 的安装步骤
  并且 包含 Android 和 iOS 的构建配置
  并且 包含 WASM 构建步骤

场景: troubleshooting 表存在
  测试: verify_ch02_troubleshooting
  假设 ch02 包含 troubleshooting 段落
  当 检查故障排除时
  那么 至少列出 5 个常见安装问题及其解决方法

场景: 字数在预算范围内
  测试: verify_ch02_word_count
  假设 ch02 中文版已完成
  当 统计中文字符数时
  那么 字数在 4000-6000 之间（预算 ±20%）
