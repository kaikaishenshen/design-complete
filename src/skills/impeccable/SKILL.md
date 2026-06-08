---
name: impeccable
description: "当用户需要设计、重新设计、塑形、评审、审计、打磨、澄清、精简、加固、优化、适配、添加动效、配色、提取或改进前端界面时使用。涵盖网站、落地页、仪表盘、产品 UI、应用外壳、组件、表单、设置页、引导流程和空状态。处理 UX 评审、视觉层次、信息架构、认知负荷、无障碍、性能、响应式行为、主题、反模式、排版、字体、间距、布局、对齐、色彩、动效、微交互、UX 文案、错误状态、边界情况、国际化及可复用设计系统或令牌。也适用于需要放大或收敛的平淡设计、浏览器实时迭代、或追求技术惊艳效果的设计。不适用于后端或非 UI 任务。"
version: 3.5.0
user-invocable: true
argument-hint: "[craft|shape · audit|critique · animate|bolder|colorize|delight|layout|overdrive|quieter|typeset · adapt|clarify|distill · harden|onboard|optimize|polish · init|document|extract|live] [target]"
license: Apache 2.0
allowed-tools:
  - Bash(npx impeccable *)
---

设计和迭代生产级前端界面。真正的可运行代码，明确的设计决策，卓越的工艺。

## 设置

在继续之前，必须执行以下步骤：

1. 每次会话运行一次 `node .workbuddy/skills/impeccable/scripts/context.mjs`。如果已经看到输出，不要重复运行。该脚本会输出项目的 PRODUCT.md（及 DESIGN.md，如存在），或告知缺失。按输出指示操作。**如果报告 `NO_PRODUCT_MD`，停止并按 `.workbuddy/skills/impeccable/reference/init.md` 执行。** 如果输出以 `UPDATE_AVAILABLE` 指令结尾，遵循它（询问用户一次是否更新，然后继续）。它不会阻塞当前任务。
2. 如果用户调用了子命令（`craft`、`shape`、`audit`、`polish` 等），必须读取 `reference/<command>.md`。不可跳过。参考文件定义了命令的执行流程，缺少它会遗漏用户期望的步骤。
3. 熟悉代码中已有的设计系统、约定和组件。至少读取一个项目文件（CSS / tokens / theme / 代表性组件或页面）。**即使在第 2 步加载了子命令参考，此步仍必须执行。** 不要重新发明轮子；已有的东西能用就用，当 UX 收益明确时才偏离。
4. 读取匹配的注册参考。**不可跳过；跳过会产生通用化的输出。** 如果项目是市场营销、落地页、活动、长文内容或作品集（设计即产品），读取 `reference/brand.md`。如果是应用 UI、管理后台、仪表盘或工具（设计服务于产品），读取 `reference/product.md`。按以下优先级选择：（1）任务线索（"落地页" vs "仪表盘"）；（2）当前界面（页面、文件或路由）；（3）PRODUCT.md 中的 `register` 字段。
5. **如果是全新项目（第 3 步未找到 CSS tokens / theme / 已提交的品牌色）**，运行 `node .workbuddy/skills/impeccable/scripts/palette.mjs` 获取品牌种子色和配色指南。这是主品牌色的锚点。按脚本指示围绕它组成其余调色板（背景、表面、墨色、强调色、柔和色）。全程使用 OKLCH。**仅当第 3 步在已有 tokens 中找到已提交的品牌色时跳过此步；此时保持品牌一致性优先。**

## 设计指南

产出立即可交付的生产级代码，而非原型或起点。除非用户要求（不确定时先问），不做任何妥协。不要停止，直到完整的实现达成（美观、响应式、快速、精确、无 Bug、符合品牌）。认真对待每一个细节：每个页面、区域或组件都使用可用工具（浏览器截图、计算机使用等）进行了实战测试。Claude 有能力做出非凡作品。不要保留。

### 通用规则

#### 色彩

- **验证对比度。** 正文字体必须 ≥ 4.5:1 对比于背景；大号文字（≥18px 或粗体 ≥14px）需要 ≥ 3:1。占位符文字同样需要 4.5:1，而非默认的柔和灰。最常见的失败：在接近白色的浅色背景上使用柔和灰。如果对比度接近临界值，将文字色向色阶的墨色端移动；浅灰色"为了优雅"是 AI 设计难以阅读的最大原因。
- 彩色背景上的灰色文字会显得褪色。使用背景色本身色调的更暗变体，或文字色的透明版。

#### 排版

- 正文行长度限制在 65–75ch。
- 通过字号 + 字重对比建立层次（步间比例 ≥ 1.25）。避免扁平比例。
- 字体家族限制在 3 种以内（展示 + 正文 + 可选等宽）。超过 3 种显得犹豫不决，而非丰富。一个调校得当的家族配合字重对比通常优于三种竞争的字体。
- 不要搭配相似但不完全相同的字体（两种几何无衬线、两种人文无衬线）。在对比轴上配对（衬线 + 无衬线、几何 + 人文），或使用同一家族的多字重。
- 正文不要全大写。全大写的句子在正文尺寸下不可读。
- Hero / 展示标题上限：`clamp()` 最大值 ≤ 6rem（~96px）。超出此范围，页面不是在设计，而是在喊叫。
- 展示标题字间距下限：≥ -0.04em。再紧字母就会粘连；这显得拥挤而非"有设计感"。
- 在 h1–h3 上使用 `text-wrap: balance` 以获得均匀的行长；在长篇散文中使用 `text-wrap: pretty` 以减少孤行。

#### 布局

- 变化间距以创造节奏。
- 卡片是偷懒的答案。仅在它们确实是最佳示意对象时使用。卡片嵌套永远是错的。
- 一维用 Flexbox，二维用 Grid。不要在用 `flex-wrap` 更简单的场景默认用 Grid。
- 无断点的响应式网格：`repeat(auto-fit, minmax(280px, 1fr))`。
- 建立语义化的 z-index 层级（下拉框 → 粘性 → 模态遮罩 → 模态 → 提示 → 工具提示）。绝不用 999 或 9999 这样的随机值。

#### 动效

- 动效应本意明确，不应是事后补充。将其视为构建的一部分。
- 除非确有必要，不要动画 CSS 布局属性。
- 使用指数曲线缓出（ease-out-quart / quint / expo）。不要弹跳或弹性效果。
- 进阶动效需求使用库（如 motion、gsap、anime.js、lenis 等）。
- 减少动效不是可选项。每个动画都需要一个 `@media (prefers-reduced-motion: reduce)` 替代方案：通常是交叉淡入淡出或即时过渡。
- 列表内的逐项错开是合理的。问题是千篇一律的反射（每个区域使用相同的入场效果），而非动效本身；每个展示应匹配它所展示的内容。禁止反射永远不是发布一个完全没有动效的页面的理由。
- 揭示动画必须增强已可见的默认状态。不要将内容可见性绑定在类触发过渡上；过渡在隐藏标签页和无头渲染器中会暂停，导致揭示从未触发，区域变为空白。
- 高级动效素材不仅限于 transform/opacity。模糊、backdrop-filter、clip-path、mask 和阴影/发光在能够实质性改善效果并保持流畅平滑时，都是调色板的一部分。

#### 交互

- 放置在 `overflow: hidden` 或 `overflow: auto` 容器内的 `position: absolute` 下拉框会被裁剪。使用原生 `<dialog>` / popover API、`position: fixed` 或 portal 来逃逸堆叠上下文。

### 文案

- 每个词都要有价值。不要重复标题，不要用引言复述标题。
- **不要使用 em 破折号。** 使用逗号、冒号、分号、句号或括号。也不要用 `--`。
- **不要将格言式节奏的正文作为默认语态。** 如果多个区域的文案共享一个重复的句子节奏，尤其是那种反直觉式的收尾，重写。要具体，不要说教。
- **不要使用营销套话。** streamline / empower / supercharge / leverage / unleash / transform / seamless / world-class / enterprise-grade / next-generation / cutting-edge / game-changer / mission-critical 这类词汇。选择描述产品实际功能的具体的名词和动词。
- 按钮标签：动词 + 对象。"保存修改"好过"确定"；"删除项目"好过"是"。标签应说明将要发生的事情。
- 链接文本需要独立成义。"查看定价方案"好过"点击这里"；屏幕阅读器会脱离上下文播报链接。

### 仅限新项目（无既有工作的情况下）

#### 色彩与主题

- 使用 OKLCH。
- **奶油/沙色/米色正文背景是 2026 年饱和的 AI 默认风格。** 整个暖中性色带（OKLCH L 0.84-0.97, C < 0.06, hue 40-100）无论怎么称呼都是奶油/沙色/纸色/羊皮纸效果。`--paper`、`--cream`、`--sand`、`--bone`、`--flour`、`--linen`、`--parchment`、`--wheat`、`--biscuit`、`--ivory` 这些 token 名本身就是迹象。如果需求是"温暖、传统、家庭式意式海岸"或"杂志温暖"或"编辑式克制"，不要将其翻译成近白色的暖色背景——那是 AI 的做法。选择：（a）用饱和品牌色作为正文背景（陶土色、深红、深赭黄、近黑色）；（b）色度 0 的真正米白色（色相偏向品牌色而非默认的暖色）；（c）明显属于品牌自身的深色中间色调中性色。品牌中的"温暖"由强调色 + 排版 + 图像传达，而非正文背景。
- 有色中性色：向品牌色相方向增加 0.005–0.015 色度。不要默认向暖或冷倾斜"因为品牌感觉那样"——那是跨项目同质化的做法。
- 选择主题时：深色 vs 浅色永远不是默认值。不是因为"工具深色看起来酷"，也不是因为"浅色更安全"。在选择之前，写一句物理场景的描述：谁在使用、在哪里、在什么环境光下、以什么情绪。如果这句描述不能迫使你做出选择，说明它不够具体。增加细节直到它能。

- 在选择具体颜色之前，先选择**色彩策略**。按投入程度分四步：
  - **克制（Restrained）**：有色中性色 + 一个强调色 ≤ 10%。产品默认；品牌极简主义。
  - **投入（Committed）**：一个饱和色承载 30–60% 的表面。品牌页面默认。
  - **全调色板（Full palette）**：3–4 个命名角色，每个被刻意使用。品牌活动；产品数据可视化。
  - **浸染（Drenched）**：表面本身就是颜色。品牌英雄区、活动页面。

### 绝对禁令

检查并拒绝。如果你将要使用以下任何一种，用不同的结构重写该元素。

- **侧边条纹边框。** 卡片、列表项、标注或提醒上大于 1px 的 `border-left` 或 `border-right` 彩色装饰。绝非有意为之。用完整边框、背景色调、前置数字/图标，或干脆不用。
- **渐变文字。** `background-clip: text` 配合渐变背景。纯装饰，毫无意义。使用单一纯色。通过字重或字号来强调。
- **玻璃态作为默认。** 模糊和玻璃卡片作为装饰。极少且有目的性地使用，否则不用。
- **hero-metric 模板。** 大数字、小标签、支持性统计、渐变装饰。SaaS 陈词滥调。
- **相同卡片网格。** 同尺寸的卡片带图标 + 标题 + 文字，无休止重复。
- **每个区域上方的小号大写追踪眼眉标。** 2023 年式的 kicker（小号全大写宽追踪文字，"关于""流程""定价"位于每个标题上方），现在是饱和的 AI 脚手架：无论需求是什么，55-95% 的生成中都会出现——这就是一个迹象。一个有名字的 kicker 作为刻意的品牌系统是风格；每个区域都有眼眉标是 AI 语法。选择不同的节奏。
- **编号区域标记作为默认脚手架（01/02/03）。** 在每个区域上方放 `01 · 关于 / 02 · 流程 / 03 · 定价` 比眼眉标更深一层：因为"落地页都这样"而反射式地使用。数字只有在区域确实是序列（真正的三步流程、有序的流程、分类时间线）且顺序承载读者需要的信息时才有意义。一个页面上一个有意的数字序列是风格；全站每个区域都有带编号的眼眉标是 AI 语法。
- **文本溢出容器。** 长的标题词 + 大的 clamp 比例 + 窄的网格会导致标题在平板/手机上溢出。在每个断点测试标题文字；如果溢出，减小 clamp 最大值或重写文案。视口是设计的一部分。

### AI 模板测试

如果任何人都能看着这个界面毫无疑问地说"这是 AI 做的"，那就是失败的。跨注册的失败是上述绝对禁令。注册特有的失败在各参考文件中。

**类别反射检查。** 在两个层次上运行；第二个层次抓住第一个遗漏的。

- **一阶：** 如果仅凭类别就能猜出主题 + 调色板，那就是第一个训练数据反射。重写场景描述和色彩策略，直到答案不能从领域直接看出。
- **二阶：** 如果仅凭类别加反参考就能猜出审美家族（"非 SaaS 奶油色的 AI 工作流工具 → 编辑式排版"、"非海军蓝加金色的金融科技 → 终端原生深色模式"），那就是更深一层的陷阱。第一个反射被避免了，但第二个没有。重写直到两个答案都不是显而易见的。品牌注册的[反反射审美通道](reference/brand.md)列出了当前饱和的家族。

## 命令

| 命令 | 类别 | 说明 | 参考文件 |
|------|------|------|---------|
| `craft [target]` | 构建 | 先塑形，再端到端构建 | [reference/craft.md](reference/craft.md) |
| `shape [target]` | 构建 | 写代码前先规划 UX/UI | [reference/shape.md](reference/shape.md) |
| `init` | 构建 | 设置项目上下文：PRODUCT.md、DESIGN.md、实时配置、下一步 | [reference/init.md](reference/init.md) |
| `document` | 构建 | 从现有项目代码生成 DESIGN.md | [reference/document.md](reference/document.md) |
| `extract [target]` | 构建 | 提取可复用 tokens 和组件到设计系统 | [reference/extract.md](reference/extract.md) |
| `critique [target]` | 评估 | UX 设计评审，带启发式评分 | [reference/critique.md](reference/critique.md) |
| `audit [target]` | 评估 | 技术质量检查（a11y、性能、响应式） | [reference/audit.md](reference/audit.md) |
| `polish [target]` | 打磨 | 发布前的最终质量 pass | [reference/polish.md](reference/polish.md) |
| `bolder [target]` | 打磨 | 放大过安全或平淡的设计 | [reference/bolder.md](reference/bolder.md) |
| `quieter [target]` | 打磨 | 压低过于激进或过刺激的设计 | [reference/quieter.md](reference/quieter.md) |
| `distill [target]` | 打磨 | 剥离到本质，移除复杂性 | [reference/distill.md](reference/distill.md) |
| `harden [target]` | 打磨 | 生产化：错误处理、国际化、边界情况 | [reference/harden.md](reference/harden.md) |
| `onboard [target]` | 打磨 | 设计首次使用流程、空状态、激活路径 | [reference/onboard.md](reference/onboard.md) |
| `animate [target]` | 增强 | 添加有目的性的动效 | [reference/animate.md](reference/animate.md) |
| `colorize [target]` | 增强 | 为单色 UI 添加战略性色彩 | [reference/colorize.md](reference/colorize.md) |
| `typeset [target]` | 增强 | 改进排版层级和字体 | [reference/typeset.md](reference/typeset.md) |
| `layout [target]` | 增强 | 修复间距、节奏和视觉层次 | [reference/layout.md](reference/layout.md) |
| `delight [target]` | 增强 | 增加个性和令人难忘的细节 | [reference/delight.md](reference/delight.md) |
| `overdrive [target]` | 增强 | 突破常规极限 | [reference/overdrive.md](reference/overdrive.md) |
| `clarify [target]` | 修复 | 改进 UX 文案、标签和错误消息 | [reference/clarify.md](reference/clarify.md) |
| `adapt [target]` | 修复 | 适配不同设备和屏幕尺寸 | [reference/adapt.md](reference/adapt.md) |
| `optimize [target]` | 修复 | 诊断并修复 UI 性能问题 | [reference/optimize.md](reference/optimize.md) |
| `live` | 迭代 | 可视化变体模式：在浏览器中选择元素，生成替代方案 | [reference/live.md](reference/live.md) |

外加两个管理命令：`pin <command>` 和 `unpin <command>`，详见下文。

### 路由规则

1. **无参数**：用户在问"我该做什么？"让菜单上下文感知而非静态。设置已运行 `context.mjs`；如果报告了 `NO_PRODUCT_MD`，则已在 init（设置）中，完成 init 后跳过此步。否则运行 `node .workbuddy/skills/impeccable/scripts/context-signals.mjs` 一次并读取其 JSON，然后推荐 **2-3 个最高价值的下一步命令**，每个附带来自信号的一句理由，后跟完整菜单（上表，按类别分组）。**从不自动运行命令；推荐只是建议，需用户确认。**

   分析信号；没有需要遵守的分数：
   - `setup.hasDesign` 为 false 而 `setup.hasCode` 为 true → `document`（捕获视觉系统）
   - `critique.latest` 为 `null` → 项目从未被评审过；对于已配置且有实际界面的项目，推荐 `/impeccable critique <surface>` 是强默认
   - `critique.latest` 分数低或存在非零的 `p0` / `p1` → `polish`（它将快照作为待办事项列表），或如果快照看起来过时就重新运行 `critique`
   - `git.changedFiles` 指向一个界面 → 将 `audit` 或 `polish` 的范围限定到这些文件，命名它们
   - `devServer.running` 为 true → `live` 可用于浏览器内迭代；如果为 false，不要推荐 `live`
   - 否则按意图分组（构建新内容 / 改进现有 / 可视化迭代），根据 `setup.register` 定制

   **如果 `scan.targets` 非空，运行 `node .workbuddy/skills/impeccable/scripts/detect.mjs --json <scan.targets joined by spaces>` 一次**（内置检测器操作本地文件：无网络，无 npx）。`scan.via` 告诉你它们是什么：`git-changes`（工作树中的标记/样式文件，最相关的集合）、`source-dir`（如 `src`、`app`）、`html` 或 `root`。将命中结果融入推荐：大量质量/对比度问题 → `audit` 或 `polish`；特定 slop 家族 → 匹配的命令（渐变文字或眼眉标 → `quieter` / `typeset`，扁平或灰色调色板 → `colorize`，以此类推）。这是真实的、当前的信号，比猜测更好。如果 detect 报错或树太大太慢，跳过它并建议用户自行运行 `audit`；决不让它阻塞推荐。
   保持 2-3 个有针对性的推荐，给出确切的命令。菜单是后备；推荐是主线。
2. **第一个字匹配命令**：加载其参考文件并遵循指示。命令名之后的所有内容都是目标。
3. **第一个字不匹配，但意图明确映射到一个命令**（如"修复间距"→ `layout`、"重写这个错误消息"→ `clarify`、"颜色太平淡"→ `colorize`）：加载该命令的参考并继续执行。如果两个命令都符合，问一次。
4. **没有明确的命令匹配**：通用设计调用。应用设置步骤、通用规则和已加载的注册参考，将完整参数作为上下文。

设置（上下文收集、注册）此时已加载；子命令不重新调用 `/impeccable`。

如果第一个字是 `craft`，设置仍然先运行，但 [reference/craft.md](reference/craft.md) 拥有剩余的流程控制权。如果设置调用 `init` 作为阻塞项，完成 init，刷新上下文，然后恢复原始命令和目标。

`teach` 是 `init` 的过期别名：如果用户输入它，加载 [reference/init.md](reference/init.md) 并按运行了 `init` 处理。

## 固定 / 取消固定

**固定（Pin）** 创建一个独立快捷方式，使 `/<command>` 直接调用 `/impeccable <command>`。**取消固定（Unpin）** 移除它。脚本会写入项目中存在的每个 harness 目录。

```bash
node .workbuddy/skills/impeccable/scripts/pin.mjs <pin|unpin> <command>
```

有效的 `<command>` 是上表中的任何命令。简洁报告脚本结果。成功时确认新快捷方式，出错时逐字报告 stderr。
