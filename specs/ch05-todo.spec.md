spec: task
name: "第5章 Todo: 数据驱动 UI"
inherits: project
tags: [tutorial, todo, lists, part-i, phase-2]
depends: [ch04-counter]
estimate: 2d
---

## 意图

通过 Todo 应用讲解数据驱动 UI 的模式。覆盖列表渲染、
模板实例化、TextInput 输入处理、完整的 CRUD 操作流程。
对比同样的 Todo 在 React/Flutter 中需要重编译，
在 Makepad 中 Splash 可以运行时修改。

### 深度预算

```
L1: Todo 应用怎么写？（完整功能演示）
L2: 数据如何驱动 UI 更新？（列表渲染、模板实例化）
L3: 与 React/Flutter 的对比——运行时优势（AI 叙事线收束）
```

### 字数预算

10000 字

## 已定决策

- 基于 `examples/todo/` 的实际代码
- 分步构建：空列表 → 添加 → 删除 → 完成状态 → 样式
- 使用 `splash.md` 中的 TodoItem 模板作为教学起点

## 边界

### 允许修改
- src/zh/ch05-todo.md
- examples/ch05-todo/

### 禁止做
- 不要讲 PortalList 虚拟化细节（留给第15章）
- 不要讲持久化存储（超出入门范围）

## 排除范围

- PortalList 虚拟化实现
- 数据持久化和本地存储
- 网络请求和远程数据

## 完成条件

场景: 可运行示例
  测试: verify_ch05_example_builds
  假设 examples/ch05-todo/ 包含完整代码
  当 执行 `cargo build` 时
  那么 编译成功无错误

场景: CRUD 操作完整
  测试: verify_ch05_crud
  假设 ch05 Todo 应用包含交互功能
  当 检查功能覆盖时
  那么 包含创建 todo item 的代码
  并且 包含标记完成的代码
  并且 包含删除 todo item 的代码

场景: 框架对比段落
  测试: verify_ch05_comparison
  假设 ch05 包含框架对比
  当 检查对比段落时
  那么 提到至少 1 个其他框架（React 或 Flutter）
  并且 突出 Makepad 运行时修改的优势

场景: 字数在预算范围内
  测试: verify_ch05_word_count
  假设 ch05 中文版已完成
  当 统计中文字符数时
  那么 字数在 8000-12000 之间（预算 ±20%）
