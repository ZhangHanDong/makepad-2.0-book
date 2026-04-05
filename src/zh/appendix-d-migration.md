# 附录D：从 1.x 迁移到 2.0

## 核心变化

| 维度 | Makepad 1.x | Makepad 2.0 |
|------|-------------|-------------|
| UI 宏 | `live_design!{...}` | `script_mod!{...}` |
| UI 语言 | 声明式数据格式 | Splash 脚本语言 |
| 求值方式 | 宏提取 + 运行时解析 | 完整 VM 执行 |
| 动态能力 | 静态属性声明 | 变量、函数、闭包、条件渲染 |
| Widget 语法 | `<Widget>` 尖括号 | `Widget{}` 花括号 |
| 属性赋值 | `Key = Value` | `Key: value` |
| 主题引用 | `(THEME_COLOR)` | `theme.color` |
| 生命周期 | `LiveHook` | `ScriptHook` |
| 属性覆写 | `apply_over` | `script_eval!` |

## 语法对照

### Widget 声明

```
// 1.x
<View> {
    width: Fill, height: Fill
    <Label> { text: "Hello" }
}

// 2.0
View{
    width: Fill height: Fill
    Label{text: "Hello"}
}
```

### 模板定义

```
// 1.x
MyCard = <RoundedView> {
    draw_bg: { color: #334 }
    title = <Label> { text: "default" }
}

// 2.0
let MyCard = RoundedView{
    draw_bg.color: #x334
    title := Label{text: "default"}
}
```

### 事件处理

```rust
// 1.x
impl LiveHook for App {
    fn after_apply(&mut self, cx: &mut Cx, ...) { ... }
}
impl MatchEvent for App {
    fn handle_actions(&mut self, cx: &mut Cx, actions: &Actions) {
        if self.ui.button(id!(my_btn)).clicked(actions) {
            self.ui.label(id!(my_label)).apply_over(cx, live!{
                text: "clicked!"
            });
        }
    }
}

// 2.0
impl MatchEvent for App {
    fn handle_actions(&mut self, cx: &mut Cx, actions: &Actions) {
        if self.ui.button(cx, ids!(my_btn)).clicked(actions) {
            script_eval!(cx, {
                ui.my_label.set_text("clicked!")
            });
        }
    }
}
```

### 关键差异

| 1.x | 2.0 | 说明 |
|-----|-----|------|
| `id!(name)` | `ids!(name)` | Widget 查找 |
| `apply_over` + `live!{}` | `script_eval!{}` | 运行时修改 UI |
| `LiveHook` trait | `ScriptHook` derive | 生命周期钩子 |
| `#[live]` 属性 | `#[live]` 属性 | 不变 |
| 逗号分隔属性 | 空格分隔属性 | 语法简化 |
| `<Widget>` 尖括号 | `Widget{}` 花括号 | 统一为花括号 |

## 迁移步骤

1. **替换宏**：`live_design!` → `script_mod!`
2. **替换语法**：`<Widget>` → `Widget{}`，逗号 → 空格，`=` → `:`
3. **替换命名**：`name =` → `name :=`
4. **替换主题**：`(THEME_COLOR)` → `theme.color`
5. **替换事件**：`apply_over` + `live!` → `script_eval!`
6. **替换查找**：`id!(name)` → `ids!(name)`
7. **添加脚本能力**：利用 `on_click`、`fn tick()`、`on_render` 等新特性
