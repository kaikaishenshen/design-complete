# Extract 流程

从现有 UI 中提取可复用的组件和 tokens 到设计系统中。建立一致性，减少冗余。

## 何时使用

用户在说：「提取到设计系统」或「使这个可复用」。

## 目标

识别在 UI 中重复出现的模式并提取它们：

- **颜色 tokens**：品牌色、表面色、强调色、文字色
- **排版 tokens**：字体家族、字号、行高、字重
- **间距 tokens**：基准单位、间距刻度
- **组件**：按钮、卡片、输入框、模态框
- **模式**：布局、导航、表单模式

## 输出

将 tokens 写入项目适当位置的 CSS 自定义属性或样式字典中：

```css
:root {
  --color-primary: oklch(45% 0.3 260);
  --color-bg: oklch(98% 0.005 260);
  --spacing-unit: 4px;
  --font-body: 'Geist', sans-serif;
}
```

在项目根目录更新或创建 `DESIGN.md`。
