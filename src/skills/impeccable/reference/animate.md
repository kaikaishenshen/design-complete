# Animate 流程

添加有目的性的动效和动画。动效应感觉*有意*，而非装饰。

## 何时使用

用户在说：「添加一些动画」或「让它动起来」。

## 怎么做

### 入场动画
- 滚动触发揭示：`translateY(12px)` + `opacity: 0` → `600ms`，使用 `cubic-bezier(0.16, 1, 0.3, 1)`
- 交错入场：列表子项使用 `calc(var(--index) * 80ms)`
- 使用 IntersectionObserver，而非滚动事件监听

### 悬停交互
- 卡片：轻微阴影变化（`box-shadow` 过渡）
- 按钮：`scale(1.02)` 或颜色变化
- 链接：下划线动画或颜色变化

### 动效规则
- 仅使用 `transform` 和 `opacity` 属性
- 不要动画 layout 属性（top、left、width、height）
- 使用指数缓出曲线（ease-out-quart / quint / expo），不要弹跳
- 每个动画需要有 `prefers-reduced-motion: reduce` 降级

### 性能
- `will-change: transform` 仅用于动画中的元素
- 测试动画是否流畅（60fps）
- 不要在滚动容器上使用位置固定的动效装饰
