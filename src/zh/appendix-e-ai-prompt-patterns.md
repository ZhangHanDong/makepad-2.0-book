# 附录E：AI Prompt 模式

本附录总结了引导 AI Agent 生成正确 Splash 代码的 prompt 模式。这些模式来自 Canvas 项目的实践经验。

## 基础 Prompt 结构

```
你是一个 Makepad Splash 代码生成器。

规则：
1. 每个容器必须有 height: Fit
2. 颜色统一使用 #x 前缀
3. 有背景+文字的容器加 new_batch: true
4. 需要背景用 SolidView/RoundedView，不用 View
5. 浮点数用尾部点号（8. 不是 8）
6. 不要使用不存在的属性名
7. 输出纯 Splash 代码，无解释

用户需求：{描述}
```

## 常见应用类型的 Prompt

### 计时器/工具

```
创建一个 {工具名} 应用。
- 状态定义用 let state = {...}
- Canvas 定时器用 fn tick()
- 交互用 on_click: ||{...}
- UI 更新用 refresh() + set_text()
```

### 数据仪表板

```
创建一个数据仪表板，展示以下指标：{指标列表}
- 使用 let 定义卡片模板（RoundedView + Label × 2）
- 模板中标题小字灰色，数值大字彩色
- 卡片水平排列（flow: Right）
- 每个卡片覆写标题、数值、颜色
```

### 列表/表单

```
创建一个 {应用名}，包含输入和列表。
- TextInput + Button 做输入区
- on_return 触发添加逻辑
- 列表项用 let 定义模板
- on_render 中用 while 循环生成列表项
```

## 自愈 Prompt

当截图检测到问题时：

```
当前 Splash 代码渲染出现问题：{问题描述}
请修复以下代码：
{当前代码}

常见修复：
- 空白 → 添加 height: Fit
- 文字不可见 → 检查 draw_text.color 对比度
- 背景不显示 → View 改为 SolidView/RoundedView
- 文字被遮盖 → 添加 new_batch: true
```

## 模板覆写 Prompt

```
基于以下模板，创建 {N} 个实例：
{模板定义}

每个实例的差异：
- 实例 1: title="...", value="...", color=...
- 实例 2: ...

使用 TemplateName{field.text: "value"} 语法覆写。
```

## AI 友好的代码结构

AI 生成的 Splash 代码应遵循这个结构：

```splash
// 1. 状态定义
let state = { ... }

// 2. 辅助函数
fn refresh() { ... }
fn tick() { ... }  // Canvas / Splash widget 中如需定时器

// 3. 模板定义（如需复用）
let CardTemplate = RoundedView{ ... }

// 4. UI 树
SolidView{width: Fill height: Fit draw_bg.color: #x... flow: Down
    // 标题区
    // 内容区（使用模板实例）
    // 操作区（按钮 + on_click）
}
```

**顺序重要**：状态 → 函数 → 模板 → UI。`let` 必须在使用前定义（详见第8章）。

## 流式生成的优化

AI 生成 Splash 时，输出顺序影响流式渲染效果：

1. **先输出容器结构**（用户看到布局框架）
2. **再输出文字内容**（用户看到信息）
3. **最后输出样式细节**（颜色、字号、圆角）

这样用户在前几百毫秒就能看到有意义的 UI 结构，而不是等到所有细节都输出完才看到东西（详见第11章：流式求值，第29章：自愈循环）。
