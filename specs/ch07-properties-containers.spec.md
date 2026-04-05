spec: task
name: "第7章 属性与容器"
inherits: project
tags: [splash, properties, containers, part-ii, phase-1]
depends: [ch06-splash-philosophy]
estimate: 2d
---

## 意图

系统讲解 Splash 的属性系统和容器组件。读者学完本章后能够：
使用 dot-path 属性语法设置颜色、字体、间距等样式；
理解 View/RoundedView/SolidView 等容器的区别和使用场景；
正确使用 Inset、Align 等布局辅助类型。
本章是"能写出好看 UI"的基础。

### 深度预算

```
L1: 有哪些属性和容器？（API 展示）
L2: 属性系统是如何工作的？（dot-path 解析、类型推断、继承规则）
L3: 常见陷阱和最佳实践（height: Fit 必须设置、#x 前缀、float 尾部点号）
```

### 字数预算

8000 字（中文基准）

## 已定决策

- 以 `token-dashboard.splash` 片段作为主要示例
- 属性分类讲解：视觉属性（draw_bg, draw_text）、布局属性（width, height, padding）、行为属性
- 用对比表展示正确写法 vs 常见错误写法
- 引用 `splash.md` 中的属性规则作为权威来源
- 引用 `widgets/src/` 中的实际 widget 定义来展示属性来源

## 边界

### 允许修改
- src/zh/ch07-properties-containers.md
- src/en/ch07-properties-containers.md
- src/ja/ch07-properties-containers.md
- examples/ch07-properties-containers/

### 禁止做
- 不要讲 Turtle 布局算法的内部实现（留给第12章）
- 不要讲自定义 Widget 的属性注册（留给第17章）
- 不要讲 Shader 属性（uniform/instance，留给第19章）

## 排除范围

- Turtle 布局引擎内部实现
- 自定义 Widget 的属性定义机制
- Shader 变量绑定（uniform, instance, varying）
- 动画属性（Animator 相关）

## 完成条件

场景: 属性分类覆盖完整
  测试: verify_ch07_property_categories
  假设 ch07 已完成
  当 检查属性分类时
  那么 包含视觉属性段落（draw_bg.color, draw_bg.border_radius, draw_text.color）
  并且 包含布局属性段落（width, height, padding, margin, spacing）
  并且 包含文本样式属性段落（draw_text.text_style.font_size）

场景: 容器组件对比清晰
  测试: verify_ch07_container_comparison
  假设 ch07 讲解了容器组件
  当 检查容器对比时
  那么 至少对比 View、RoundedView、SolidView 3 种容器
  并且 每种容器有使用场景说明
  并且 包含可运行的代码示例

场景: 常见陷阱有记录
  测试: verify_ch07_pitfalls
  假设 ch07 包含陷阱指南
  当 检查陷阱列表时
  那么 包含 "height: Fit 必须设置" 的说明
  并且 包含 "#x 前缀用于含 e 的十六进制颜色" 的说明
  并且 包含 "浮点数使用尾部点号 8. 而非 8.0" 的说明
  并且 每个陷阱有错误写法和正确写法的对比

场景: 代码片段有出处
  测试: verify_ch07_source_refs
  假设 ch07 引用了 Makepad 源码
  当 检查代码引用时
  那么 每个源码片段标注 `file:line` 格式

场景: 不包含越界内容
  测试: verify_ch07_no_out_of_scope
  假设 ch07 已完成
  当 扫描章节内容时
  那么 不包含 Turtle 算法的内部实现解释
  并且 不包含 `#[derive(Widget)]` 的使用教程
  并且 不包含 uniform 或 instance 变量的教程

场景: 字数在预算范围内
  测试: verify_ch07_word_count
  假设 ch07 中文版已完成
  当 统计中文字符数时
  那么 字数在 6400-9600 之间（预算 ±20%）
