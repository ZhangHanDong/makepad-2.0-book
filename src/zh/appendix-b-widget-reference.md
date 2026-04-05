# 附录B：Widget 属性参考

## 容器

| Widget | 背景 | 形状 | 用途 |
|--------|------|------|------|
| `View` | 无 | — | 纯布局 |
| `SolidView` | 纯色 | 矩形 | 页面背景 |
| `RoundedView` | 纯色 | 圆角 | 卡片 |
| `RoundedShadowView` | 色+阴影 | 圆角 | 悬浮卡片 |
| `CircleView` | 纯色 | 圆 | 头像/指示器 |
| `GradientXView` / `GradientYView` | 渐变 | 矩形 | 装饰 |
| `CachedView` | 纹理缓存 | — | 性能优化 |
| `ScrollYView` / `ScrollXView` | — | — | 滚动区域 |

## 容器属性

| 属性 | 值 | 默认 |
|------|-----|------|
| `width` | Fill / Fit / 数字 | Fill |
| `height` | Fill / Fit / 数字 | Fill |
| `flow` | Right / Down / Overlay | Right |
| `spacing` | 数字 | 0 |
| `padding` | 数字 / Inset{} | 0 |
| `align` | Center / Align{x: y:} | TopLeft |
| `show_bg` | true / false | false (View) / true (SolidView等) |
| `new_batch` | true / false | false |
| `visible` | true / false | true |
| `cursor` | MouseCursor.Hand 等 | 默认指针 |

## draw_bg 属性

| 属性 | 类型 | 适用容器 |
|------|------|---------|
| `draw_bg.color` | 颜色 | SolidView, RoundedView 等 |
| `draw_bg.radius` | f32 | RoundedView 系列 |
| `draw_bg.border_size` | f32 | RoundedView, RectView |
| `draw_bg.border_color` | 颜色 | RoundedView, RectView |
| `draw_bg.shadow_radius` | f32 | ShadowView 系列 |
| `draw_bg.shadow_color` | 颜色 | ShadowView 系列 |
| `draw_bg.color_2` | vec4 | GradientView 系列 |

## draw_text 属性

| 属性 | 说明 | 默认 |
|------|------|------|
| `draw_text.color` | 文字颜色 | #fff |
| `draw_text.text_style.font_size` | 字号 | 11 |
| `draw_text.text_style` | 字体 | theme.font_regular |

可用字体：`theme.font_regular`, `theme.font_bold`, `theme.font_italic`, `theme.font_bold_italic`, `theme.font_code`, `theme.font_icons`

## 文本组件

| Widget | 可编辑 | Animator | 备注 |
|--------|--------|---------|------|
| `Label` | 否 | 否 | 不支持 cursor |
| `H1`-`H4` | 否 | 否 | 标题变体 |
| `TextInput` | 是 | 是 | 支持 on_return / on_change |
| `Markdown` | 选择 | 否 | body 属性 |

## 交互组件

| Widget | 事件 | 样式变体 |
|--------|------|---------|
| `Button` | on_click / on_press / .clicked() / .pressed() | ButtonFlat, ButtonFlatter |
| `CheckBox` | on_click / .changed() | CheckBoxFlat |
| `Toggle` | on_click / .changed() | ToggleFlat |
| `RadioButton` | .clicked() / RadioButtonSet::selected() | RadioButtonFlat |
| `Slider` | on_change / .changed() | SliderMinimal |
| `DropDown` | .changed() / .selected() | DropDownFlat |

## 列表

| Widget | 虚拟化 | 适用规模 |
|--------|--------|---------|
| `PortalList` | 是 | 无限 |
| `FlatList` | 否 | < 100 |

## 高级容器

| Widget | 用途 |
|--------|------|
| `Modal` | 模态弹窗 |
| `PageFlip` | 页面切换 |
| `FoldHeader` | 折叠区域 |
| `Splitter` | 分割面板 |
| `Dock` | 可拖拽面板 |
