# 附录C：Shader 内置函数

## Sdf2d 形状

```glsl
let sdf = Sdf2d.viewport(self.pos * self.rect_size)

sdf.circle(cx, cy, radius)           // 圆
sdf.rect(x, y, w, h)                 // 矩形
sdf.box(x, y, w, h, radius)          // 圆角矩形
sdf.hexagon(cx, cy, radius)          // 六边形
sdf.move_to(x, y)                    // 路径起点
sdf.line_to(x, y)                    // 路径直线
sdf.arc(cx, cy, r, start, end)       // 圆弧
```

## Sdf2d 操作

```glsl
sdf.fill(color)                       // 填充
sdf.fill_premul(color)                // 预乘填充
sdf.stroke(color, width)              // 描边
sdf.glow(color, size)                 // 发光

sdf.union()                            // 合并
sdf.intersect()                        // 相交
sdf.subtract()                         // 减去
sdf.blend(amount)                      // 混合

sdf.translate(x, y)                    // 平移
sdf.rotate(angle, cx, cy)             // 旋转
sdf.scale(factor, cx, cy)             // 缩放

sdf.result                             // 最终输出
```

## 颜色工具

```glsl
Pal.premul(color)                      // 预乘 alpha
#f00.mix(#0f0, 0.5)                   // 颜色混合
color.mix(other, self.hover)           // 动态混合
vec4(r, g, b, a)                       // 构造颜色
```

## GaussShadow

```glsl
GaussShadow.box_shadow(self.pos, offset, spread, radius, color)
```

## 变量类型

| 类型 | 声明 | Animator | 说明 |
|------|------|---------|------|
| `uniform()` | `color: uniform(#x334)` | 不可驱动 | 全实例共享 |
| `instance()` | `hover: instance(0.0)` | 可驱动 | 每实例独有 |

## 内置 self 变量

| 变量 | 类型 | 说明 |
|------|------|------|
| `self.pos` | vec2 | 归一化坐标 (0-1) |
| `self.rect_size` | vec2 | Widget 像素尺寸 |
| `self.rect_pos` | vec2 | Widget 屏幕位置 |

## pixel fn 模板

```splash
draw_bg +: {
    color: uniform(#x334)
    hover: instance(0.0)
    pixel: fn(){
        let sdf = Sdf2d.viewport(self.pos * self.rect_size)
        sdf.box(1. 1. self.rect_size.x - 2. self.rect_size.y - 2. 4.)
        sdf.fill(self.color.mix(self.color_hover, self.hover))
        return sdf.result
    }
}
```
