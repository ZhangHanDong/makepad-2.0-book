# 附录A：Splash 语法速查

## 基本语法

```splash
key: value                          // 属性赋值（空格或逗号分隔）
key: Type{ prop1: val1 prop2: val2 } // 嵌套对象（逗号可选）
key +: { prop: val }                // 合并运算符
draw_bg.color: #xf00                // 点路径简写
my_btn := Button{ text: "Click" }   // 命名子组件（:=）
Label{ text: "hello" }              // 匿名子组件
let MyCard = RoundedView{...}       // 模板定义
MyCard{title.text: "New"}           // 模板实例化+覆写
```

## 颜色

| 格式 | 示例 | 说明 |
|------|------|------|
| RGB 短 | `#f00` | 红色 |
| RGB | `#ff0000` | 红色 |
| RGBA | `#ff0000ff` | 红色不透明 |
| 含 e | `#x1e1e2e` | **必须用 #x** |
| 透明 | `#0000` | 完全透明 |
| 向量 | `vec4(1.0 0.0 0.0 1.0)` | RGBA |

## 尺寸 / 布局 / 对齐

| 属性 | 值 | 说明 |
|------|-----|------|
| `width` | `Fill` / `Fit` / `200` | 默认 Fill |
| `height` | `Fill` / `Fit` / `200` | **必须设 Fit** |
| `flow` | `Right` / `Down` / `Overlay` | 排列方向 |
| `spacing` | `10` | 子组件间距 |
| `padding` | `15` / `Inset{top: 5 left: 10}` | 内边距 |
| `align` | `Center` / `Align{x: 0.5 y: 0.5}` | 对齐 |

## 事件

| 事件 | 语法 | 触发 |
|------|------|------|
| 点击 | `on_click: \|\|{...}` | Button 点击 |
| 回车 | `on_return: \|\|{...}` | TextInput 回车 |
| 值变 | `on_change: \|val\|{...}` | Slider 拖动 |
| 渲染 | `on_render: \|\|{...}` | `render()` 调用 |
| 启动 | `on_startup: \|\|{...}` | 应用启动 |
| 定时 | `fn tick() {...}` | 每秒自动 |

## Widget API

```splash
ui.name.set_text("text")    // 更新文字
ui.name.text()               // 读取文字
ui.view.render()             // 触发 on_render
ui.btn.on_click()            // 程序化点击
```

## 六条必记规则

1. **`height: Fit`** — 每个容器必须设置
2. **`#x` 前缀** — 所有颜色统一使用
3. **`new_batch: true`** — 有背景+文字时必须加
4. **`:=` 命名** — 需要覆写的子组件用 `:=`
5. **`SolidView`/`RoundedView`** — 需要背景色时用（不用 `View`）
6. **尾部点号** — 浮点数写 `8.` 不写 `8`
