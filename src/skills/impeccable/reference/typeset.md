# Typeset 流程

纠正排版问题：字体选择、字号层次、字体搭配和间距。

## 何时使用

用户在说：「排版感觉不对」、「修复字体」或「层次不好」。

## 怎么做

### 1. 字体选择
- 将过度使用的字体（Inter、Roboto、Open Sans）替换为有特点的字体
- 展示字体：Geist、Clash Display、Plus Jakarta Sans、SF Pro
- 编辑风格：Newsreader、Playfair Display、Instrument Serif
- 等宽字体：Geist Mono、SF Mono、JetBrains Mono

### 2. 层次
- 确保 h1 → h2 → h3 按比例缩放（步间 ≥ 1.25）
- Hero 标题使用 clamp()，最大值 ≤ 6rem
- 正文 16px（1rem），行高 1.6

### 3. 字体搭配
- 不要搭配相似的字体（两种几何无衬线）
- 在对比轴上搭配：衬线 + 无衬线，或几何 + 人文
- 最多 3 个字体家族（展示 + 正文 + 等宽）

### 4. 正文
- 正文行长度：65–75ch
- 不要全大写正文
- 在 h1–h3 上使用 text-wrap: balance
- 展示标题字间距 ≥ -0.04em
