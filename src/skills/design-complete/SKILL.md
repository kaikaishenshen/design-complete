---
name: design-complete
description: "统一前端设计质量系统，结合 taste-skill（审美品味）与 impeccable（结构严谨性）。完整流水线：设计读盘 → 塑形构建 → 审计评审 → 打磨完善。当用户需要设计、构建、审计、评审、打磨或重构前端界面时使用——落地页、SaaS UI、作品集、仪表盘、产品应用、组件。涵盖空间节奏、排版层级、色彩感知、动效物理、布局逻辑、无障碍、响应式设计、反模式检测、UX 文案及生产级质量。不适用于后端或非 UI 任务。"
argument-hint: "[craft|taste|build|check|critique|audit|polish|refine|tune|init|document] [target]"
user-invocable: true
license: MIT
---

# Design Complete：统一前端设计质量系统

> **集成 [taste-skill](https://github.com/Leonxlnx/taste-skill)（审美品味）+ [impeccable](https://github.com/pbakaus/impeccable)（结构严谨性）**
>
> 完整流水线：**品（愿景）→ 建（工艺）→ 验（验证）→ 修（打磨）**

## 架构总览

```
┌──────────────────────────────────────────────────────────────┐
│                    DESIGN COMPLETE SYSTEM                     │
│               Unified Command Interface (/design)             │
├────────────────────────────────┬─────────────────────────────┤
│                                │                             │
│   ┌─────────────────────┐    │    ┌───────────────────┐    │
│   │   taste-skill       │    │    │   impeccable       │    │
│   │   (THE ARTIST)      │◄───┼───►│   (THE ENGINEER)   │    │
│   │                     │    │    │                   │    │
│   │ Design Variance     │    │    │ 23 Commands       │    │
│   │ Motion Intensity    │    │    │ 7 Domain Refs     │    │
│   │ Visual Density      │    │    │ Anti-Patterns     │    │
│   │ Vibe Archetypes     │    │    │ CLI Detection     │    │
│   │ Layout Archetypes   │    │    │ Production Checks │    │
│   └─────────────────────┘    │    └───────────────────┘    │
│                                │                             │
│   ┌────────────────────────────────────────────────────┐    │
│   │            Bridge Layer (Shared Knowledge)          │    │
│   │  Typography System │ Color Tokens │ Spacing Grid   │    │
│   │  Design System Map │ Anti-Pattern Registry         │    │
│   └────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

**核心哲学**: taste-skill 负责「好不好看」（灵魂/品味/视觉情感），impeccable 负责「能不能用」（骨架/规则/工程品质）。两者协作，不可偏废。

---

## 流水线：四阶段工作流

Phase 的顺序是固定的，但你可以从任意阶段切入（直接 `/design audit` 跳过前两阶段）。

```
请求
  │
  ▼
┌───────────────────────────────────────────────────┐
│ Phase 1: TASTE (品) — 设计品味诊断                │
│ 工具: taste-skill                                 │
│ 产出: Design Read + 3 Dials + 设计方向声明       │
└───────────────────┬───────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────────────┐
│ Phase 2: BUILD (建) — 结构实现                    │
│ 工具: impeccable (shape/craft)                    │
│ 产出: 生产级可交付代码                            │
└───────────────────┬───────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────────────┐
│ Phase 3: CHECK (验) — 质量审计                    │
│ 工具: impeccable (audit/critique)                 │
│ 产出: 审计报告 + 问题清单                         │
└───────────────────┬───────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────────────┐
│ Phase 4: REFINE (修) — 打磨完善                   │
│ 工具: taste-skill (tune knobs) + impeccable       │
│       (polish/bolder/quieter/distill)             │
│ 产出: 最终交付物                                  │
└───────────────────────────────────────────────────┘
```

---

## 统一命令参考

| 命令 | 阶段 | 说明 | 调用的子系统 |
|------|------|------|-------------|
| `/design craft <target>` | 全流水线 | **完整流程**: 品味读盘 → 塑形构建 → 审计验收 → 打磨交付 | taste + impeccable |
| `/design taste <target>` | Phase 1 | 设计品味诊断：读盘 → 设三旋钮 → 定设计方向 | taste-skill |
| `/design build <target>` | Phase 2 | 带 taste 品味的 build：读取 taste 的 Design Read 后构建 | impeccable(craft/shape) |
| `/design check <target>` | Phase 3 | 质量检查：audit + critique | impeccable(audit/critique) |
| `/design critique <target>` | Phase 3 | UX 设计评审 + 启发式评分 | impeccable(critique) |
| `/design audit <target>` | Phase 3 | 技术质量审计（a11y/性能/响应式） | impeccable(audit) |
| `/design refine <target>` | Phase 4 | 打磨完善：polish + anti-pattern 修复 | taste + impeccable |
| `/design tune <knob>=<val>` | 跨阶段 | 动态调整 taste-skill 三旋钮 | taste-skill |
| `/design init` | 设置 | 初始化项目设计上下文 | taste + impeccable |
| `/design document` | 设置 | 从现有代码生成 DESIGN.md | impeccable(document) |
| `/design extract <target>` | Phase 2 | 提取可复用组件到设计系统 | impeccable(extract) |
| `/design bolder <target>` | Phase 4 | 放大设计胆量 | impeccable(bolder) + taste |
| `/design quieter <target>` | Phase 4 | 降低设计音量 | impeccable(quieter) |
| `/design distil <target>` | Phase 4 | 剥离到本质 | impeccable(distill) |
| `/design animate <target>` | Phase 4 | 添加有目的性的动效 | impeccable(animate) + taste |
| `/design colorize <target>` | Phase 4 | 引入战略性色彩 | impeccable(colorize) + taste |
| `/design layout <target>` | Phase 4 | 修正布局与间距 | impeccable(layout) + taste |
| `/design typeset <target>` | Phase 4 | 修正字体层级 | impeccable(typeset) + taste |
| `/design adapt <target>` | Phase 4 | 适配不同设备 | impeccable(adapt) |
| `/design harden <target>` | Phase 4 | 生产化：错误处理/边界情况 | impeccable(harden) |
| `/design clarify <target>` | Phase 4 | 改进 UX 文案 | impeccable(clarify) |
| `/design delight <target>` | Phase 4 | 增加令人愉悦的细节 | impeccable(delight) + taste |

---

## 执行协议

### 步骤 0：识别意图

判断用户需要哪一级支持：

| 用户说 | 执行 |
|--------|------|
| "帮我建个网站/页面/组件" | `/design craft <target>` — 全流水线 |
| "看看这个页面设计怎么样" | `/design critique <target>` — Phase 3 |
| "这个页面感觉不对" | `/design taste <target>` — Phase 1 诊断，按需推进 |
| "帮我改改排版/配色" | `/design typeset <target>` 或 `/design colorize <target>` |
| "帮我检查质量" | `/design audit <target>` |
| "发布前过一遍" | `/design refine <target>` — Phase 4 |
| "太保守了/太激进了" | `/design bolder <target>` 或 `/design quieter <target>` |

### 步骤 1：加载子系统上下文

根据识别到的命令，加载对应的 Skill 指令文件：

**当需要 taste-skill 时**（/design taste, craft, tune, bolder, quieter, colorize, typeset, layout, delight, animate）：
```markdown
加载 .workbuddy/skills/design-taste/SKILL.md 中的 taste-skill 规则。
重点关注：
- Section 0: BRIEF INFERENCE — 设计读盘
- Section 1: THE THREE DIALS — 三旋钮
- Section 2: BRIEF → DESIGN SYSTEM MAP — 设计系统映射
- Section 3: VIBE & TEXTURE ARCHETYPES — 氛围与质感原型
- 对应风格的预输出检查清单
```

**当需要 impeccable 时**（/design build, check, critique, audit, refine, adapt, harden, clarify, optimize）：
```markdown
加载 .workbuddy/skills/impeccable/SKILL.md 中的 impeccable 规则。
- Setup 流程：运行 context.mjs → 读取 command reference → 读取 register reference
- Design guidance: 颜色/字体/布局/动效/交互规则
- Absolute bans: 27 条反模式规则
- 对应子命令的 reference 文件（.workbuddy/skills/impeccable/reference/<command>.md）
```

### 步骤 2：Bridge Layer — 数据桥接

两个子系统之间通过以下共享上下文协同：

```yaml
# Shared Design Context (由 orchestator 维护)
design_context:
  # taste-skill 产出
  design_read: "<页面类型> for <受众>, <氛围词汇>"
  dials:
    design_variance: 1-10     # 设计方差
    motion_intensity: 1-10    # 动效强度
    visual_density: 1-10      # 视觉密度
  vibe_archetype: "Ethereal Glass | Editorial Luxury | Soft Structuralism"
  layout_archetype: "Asymmetrical Bento | Z-Axis Cascade | Editorial Split"
  banned_elements: []          # 已识别的反模式元素

  # impeccable 产出
  register: "brand | product"  # 设计寄存器
  anti_patterns_found: []      # 检测到的反模式
  audit_scores:
    accessibility: 0-10
    performance: 0-10
    responsive: 0-10
  critique_score: 0-10
  polish_status: "pending | in_progress | complete"

  # 共享知识
  typography_system:
    display_font: ""
    body_font: ""
    scale_ratio: 1.25
  color_tokens:
    primary: ""
    background: ""
    surface: ""
    ink: ""
    accent: ""
```

**桥接规则**：
1. taste-skill 的 Design Read 自动传给 impeccable 作为设计上下文
2. taste-skill 的 3 Dials 映射到 impeccable 的 register 选择：
   - 高 VARIANCE (7-10) + 高 MOTION (7-10) → brand register（品牌/市场页）
   - 低 VARIANCE (1-4) + 低 DENSITY (1-3) → product register（产品 UI）
3. impeccable 的 anti-pattern 检测结果回传给 taste-skill 用于下一轮调优
4. taste-skill 的 banned elements（Section 2 绝对禁令）与 impeccable 的 absolute bans 合并为统一的禁止清单

### 步骤 3：执行 Pipeline

#### 完整流水线：`/design craft <target>`

```
Phase 1 (TASTE):
  ├─ 0.B: 输出 Design Read 声明
  ├─ 1: 设置三旋钮（默认 8/6/4，按 Scene 调）
  ├─ 2: 选择 Design System（设计系统映射）
  ├─ 3: 选择 Vibe + Layout 原型
  └─ 输出: 设计方向声明 + 三旋钮值
       │
       ▼
Phase 2 (BUILD):
  ├─ impeccable: Setup 步骤 (context.mjs → 读取参考)
  ├─ register 选择（taste 的 Design Read 决定 brand/product）
  ├─ shape → craft 流程
  └─ 输出: 生产级代码
       │
       ▼
Phase 3 (CHECK):
  ├─ critique: UX 设计评审
  ├─ audit: 技术质量检查（a11y/perf/responsive）
  ├─ anti-pattern 检测
  └─ 输出: 审计报告 + 问题清单
       │
       ▼
Phase 4 (REFINE):
  ├─ 根据审计结果确定 refine 方向
  ├─ polish: 最终质量 pass
  ├─ 可选: bolder/quieter/typeset/colorize
  ├─ 可选: 调整 taste-skill 三旋钮
  └─ 输出: 最终交付 + 预输出检查清单
```

#### 单阶段命令

各单阶段命令执行对应 Phase 的规则，不跑完整流水线。

**`/design taste <target>`** — 只跑 Phase 1，输出 Design Read + 三旋钮 + 设计方向，不写代码。
**`/design build <target>`** — 如果已有 Design Read 上下文，直接 Phase 2 构建；否则先快速 Phase 1 读盘。
**`/design check <target>`** — Phase 3 审计，返回审计报告。
**`/design refine <target>`** — Phase 4，根据上下文或用户指出的问题打磨。
**`/design tune <knob>=<val>`** — 立即调整 taste-skill 三旋钮并重新输出设计方向。

### 步骤 4：输出规则

**报告类输出**（audit/critique/check）：
- 用结构化表格呈现结果
- 明确标出 P0/P1/P2 级别问题
- 给出具体的修复建议

**代码类输出**（craft/build/refine）：
- 必须通过 taste-skill 的预输出检查清单（Section 8）
- 必须遵守 impeccable 的 absolute bans
- 必须包含 responsive/mobile collapse
- 必须在完成时暗示下一步建议

**设计诊断类输出**（taste/tune）：
- Design Read 一行声明
- 三旋钮取值及理由
- Vibe + Layout 选择
- 1-2 个待确认的开放式问题

---

## 三旋钮 ↔ Impeccable Register 映射表

| taste-skill Dial | 低值 (1-3) | 中值 (4-7) | 高值 (8-10) |
|:---|:---|:---|:---|
| DESIGN_VARIANCE | product register | 取决于场景 | brand register |
| MOTION_INTENSITY | 微交互动效 | 滚动触发动效 | 电影级物理动效 |
| VISUAL_DENSITY | 画廊式留白 | 标准信息密度 | 仪表盘级密度 |

**taste 的 Vibe / Layout 原型 → impeccable 的 register 建议**：

| taste Vibe | taste Layout | 推荐 impeccable Register | 说明 |
|:---|:---|:---|:---|
| Ethereal Glass | Asymmetrical Bento | brand | 实验性布局适合品牌市场页 |
| Editorial Luxury | Editorial Split | brand | 编辑式排版适合内容页 |
| Soft Structuralism | Z-Axis Cascade | brand or product | 取决于受众 |
| （无特殊 Vibe） | （标准布局） | product | 产品 UI 走沉稳路线 |

---

## 桥接协议：跨系统通信协调机制

### 1. 上下文传播

```
taste-skill 产生的:
  ├─ Design Read → impeccable.Register 选择
  ├─ Three Dials → impeccable 设计规则强度（高 Variance 时放宽 layout 约束）
  ├─ Vibe Archetype → 影响 impeccable 的 color strategy 选择
  └─ Banned Elements → 合并到 impeccable 的 absolute bans
```

### 2. 冲突解决

当 taste-skill 的审美建议与 impeccable 的工程规范冲突时：

| 冲突场景 | 裁决规则 |
|:---|:---|
| taste: "用夸张字体大小" vs impeccable: "heading ≤ 6rem" | 遵循 impeccable（可访问性优先） |
| taste: "大胆渐变" vs impeccable: "禁止渐变文字" | 遵循 impeccable（反模式） |
| taste: "密集布局" vs impeccable: "cap line length 75ch" | 遵循 impeccable（可读性优先） |
| taste: "实验性布局" vs impeccable: "z-index scale" | 遵循 taste + impeccable 工程实践 |
| taste: "高 Motion" vs impeccable: "reduced-motion" | 两者兼顾：提供 prefers-reduced-motion 降级 |

**总原则**：工程规范（impeccable）作为硬约束，审美方向（taste-skill）作为软变量。在硬约束内最大化审美自由。

### 3. 增量反馈循环

```
[taste] Design Read ─────────► [build] 代码实现
     ▲                              │
     │                              ▼
     │                      [check] 审计报告
     │                              │
     └──────────────────────────────┘
              (refine 回传审计结果以调整 taste 方向)
```

每次 refine 后，taste-skill 的三旋钮可基于 check 结果微调：
- audit 发现 a11y 问题 → 降低 DESIGN_VARIANCE
- critique 指出信息过载 → 降低 VISUAL_DENSITY
- 用户反馈"不够出彩" → 提高 DESIGN_VARIANCE + MOTION_INTENSITY

---

## 配置

```yaml
# 在用户项目根目录放置 .design-complete.yaml 或在工作区 memory 中记录
design_complete:
  default_pipeline: "full"          # full：完整 | taste-only：仅品味 | check-only：仅检查 | refine-only：仅打磨
  default_register: "auto"          # auto：自动 | brand：品牌 | product：产品
  taste_skill:
    default_variance: 8
    default_motion: 6
    default_density: 4
  impeccable:
    cli_available: true             # 是否安装了 npx impeccable
    strict_checks: true             # 是否强制执行所有检查
```

---

## 快速参考卡

### 常见任务的最佳命令

| 任务 | 命令 | 说明 |
|:---|:---|:---|
| 从零开始建网站 | `/design craft <site>` | 全流水线：品味→构建→审计→打磨 |
| 检查现有页面 | `/design check <page>` | 审计 + 评审 |
| 设计定方向 | `/design taste <project>` | 仅设计诊断，不写代码 |
| 发布前打磨 | `/design refine <page>` | 最终检查 + 质量 pass |
| 感觉太保守 | `/design bolder <page>` | 放大 + 调整 dials |
| 感觉太花哨 | `/design quieter <page>` | 压低 + 调整 dials |
| 调整个性化 | `/design tune variance=9` | 实时调整设计方差 |
| 初始化项目 | `/design init` | 设置设计上下文 |

---

## 安装验证

执行任何 `/design` 命令前，验证两个子系统可用：
1. taste-skill：确认 `.workbuddy/skills/design-taste/SKILL.md` 存在
2. impeccable：确认 `.workbuddy/skills/impeccable/SKILL.md` 存在 + `npx impeccable` 可用

如果任一子系统缺失，提示用户先安装对应开源项目。
