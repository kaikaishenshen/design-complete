# Optimize 流程

诊断并修复 UI 性能问题，确保设计在慢速设备和网络上也流畅运行。

## 何时使用

用户在说：「优化性能」或「页面卡顿」。

## 怎么做

### 检测问题
- 布局偏移：使用 `content-visibility: auto` 用于非首屏内容
- 大图片：使用 `loading="lazy"` 和 `<picture>` 带多个源
- 字体：使用 `font-display: swap` + `preload`
- 动画：确保仅使用 `transform` 和 `opacity`

### CSS 性能
- 不要动画 `top`、`left`、`width`、`height`——使用 `transform`
- 过多的阴影/滤镜会降低帧率——用冒烟测试替代
- `will-change: transform` 仅限于动画中的元素

### JavaScript
- 大列表使用虚拟滚动
- 事件监听器应有节流（滚动、调整大小）
- 不阻塞主线程——使用 `requestAnimationFrame`

### 响应式图片
```html
<img src="small.jpg" srcset="medium.jpg 768w, large.jpg 1200w" sizes="100vw" loading="lazy" alt="描述">
```

### 加载优先性
- 关键 CSS 内联
- 非关键 CSS 懒加载
- 字体 preload
- 首屏内容优先
