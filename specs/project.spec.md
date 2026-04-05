spec: project
name: "Makepad 2.0 Book"
tags: [book, makepad, trilingual]
---

## 意图

编写一本关于 Makepad 2.0 的深度技术书籍，涵盖从入门到架构剖析，
以 Splash 语言和 AI 动态生成 UI 为核心叙事线。
支持中文、英文、日文三语版本，使用 mdbook 构建。

## 约束

- 每章必须基于 Makepad 源码的实际代码，不得使用伪代码或假想 API
- 代码片段必须标注来源文件和行号（`file:line` 格式）
- 同一源码片段不得在多章重复引用超过 3 行，超过时使用"详见第N章"交叉引用
- 每章至少包含 1 个 Mermaid 流程图展示核心流程
- 中文为主语言，英文和日文为翻译版本
- 每章写完后必须经过 3-agent 并行审查（事实/技术/结构）

## 已定决策

- 构建工具: mdbook + mdbook-i18n-helpers
- 目录结构: `src/zh/` (中文主语言), `src/en/`, `src/ja/`
- 章节文件命名: `chNN-slug.md`（如 `ch06-splash-philosophy.md`）
- 代码示例: `examples/chNN-slug/` 目录，可独立编译运行
- Spec 文件: `specs/chNN-slug.spec.md`
- 源码引用基准: makepad dev 分支 (2026-04)
- Canvas 项目 (`tools/canvas/`) 作为 Part VI 核心案例

## 边界

### 允许修改
- src/zh/**
- src/en/**
- src/ja/**
- examples/**
- specs/**
- OUTLINE.md
- book.toml

### 禁止做
- 不要修改 makepad 源码仓库中的任何文件
- 不要在书中包含未经验证的 API 或虚构的函数名
- 不要跳过 Phase 3 审查流程

## 排除范围

- Makepad 1.x 的详细教程（仅在附录D中做迁移对比）
- 非 Rust 语言的绑定或集成
- 商业化部署和分发渠道的具体指导
