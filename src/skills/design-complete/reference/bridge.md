# 桥接层 — taste-skill ↔ impeccable 数据桥接协议

> 桥接层是整个 design-complete 系统的核心基础设施，负责两个子系统之间的数据传递、冲突裁决和增量反馈。

---

## 1. 共享上下文模型

两个子系统通过统一的 `DesignContext` 数据交换：

```typescript
interface DesignContext {
  // === taste-skill 产出 ===
  taste: {
    designRead: string;                    // "Landing for B2B SaaS buyers, Linear-style minimalism"
    dials: {
      designVariance: number;              // 1-10
      motionIntensity: number;             // 1-10
      visualDensity: number;               // 1-10
    };
    vibeArchetype: string | null;          // "Ethereal Glass" | "Editorial Luxury" | "Soft Structuralism" | null
    layoutArchetype: string | null;        // "Asymmetrical Bento" | "Z-Axis Cascade" | "Editorial Split" | null
    designSystem: string | null;           // "shadcn/ui" | "Tailwind v4" | "Custom" | null
  };

  // === impeccable 产出 ===
  impeccable: {
    register: "brand" | "product";         // 基于 taste.designRead 推断
    antiPatternsFound: AntiPattern[];      // 检测到的反模式
    auditResults: {
      accessibility: number | null;        // 0-10
      performance: number | null;          // 0-10
      responsive: number | null;           // 0-10
    };
    critiqueScore: number | null;          // 0-10
    critiqueSummary: string | null;        // 评审摘要
    polishStatus: "pending" | "in_progress" | "complete";
  };

  // === 共享设计系统 ===
  designSystem: {
    typography: {
      displayFamily: string;
      bodyFamily: string;
      monoFamily: string;
      scaleRatio: number;                  // ≥ 1.25
      headingMaxRem: number;               // ≤ 6
    };
    colors: {
      primary: string;                     // OKLCH
      background: string;                  // OKLCH
      surface: string;                     // OKLCH
      ink: string;                         // OKLCH
      accent: string;                      // OKLCH
    };
    spacing: {
      baseUnit: number;                    // px
      sectionPadding: string;              // e.g. "py-24"
    };
  };

  // === 协调状态 ===
  pipeline: {
    currentPhase: 1 | 2 | 3 | 4;
    completedPhases: number[];
    errors: string[];
  };
}
```

---

## 2. 数据传递管道

### 2.1 taste → impeccable（Phase 1 → Phase 2）

| taste-skill 产出 | → | impeccable 消费 |
|:---|:---|:---|
| Design Read（页面类型+受众+氛围） | → | register 选择（brand/product）+ 设计场景推断 |
| DESIGN_VARIANCE 值 | → | layout 实验性程度：低（≤4）= 标准布局；高（≥7）= 实验性 bento |
| MOTION_INTENSITY 值 | → | motion 投入程度：低（≤3）= 纯 hover；高（≥7）= 滚动触发+交互动效 |
| VISUAL_DENSITY 值 | → | 信息密度策略：低（≤3）= 宏留白；高（≥7）= 数据紧凑 |
| Vibe Archetype | → | color strategy 选择（Restrained/Committed/Full/Drenched）|
| Banned Elements 清单（Sect 2） | → | 合并到 impeccable 的绝对禁令 |
| Design System 映射（Sect 2.A） | → | 技术栈 + 组件库选择 |

### 2.2 impeccable → taste（Phase 3 → Phase 4）

| impeccable 产出 | → | taste-skill 消费 |
|:---|:---|:---|
| audit: a11y 问题 | → | 必要时降低 VARIANCE（安全优先） |
| critique: 信息过载 | → | 降低 DENSITY（更多留白） |
| critique: 过于平淡 | → | 提高 VARIANCE + MOTION（更多创意） |
| anti-pattern: AI 模板痕迹 | → | 切换 Vibe Archetype |
| polish: 最终检查 | → | 验证 taste-skill 预输出检查清单 |

---

## 3. 冲突裁决矩阵

当两个子系统提出矛盾建议时，按以下优先级仲裁：

| 优先级 | 规则来源 | 覆盖场景 | 示例 |
|:---|:---|:---|:---|
| P0 (最高) | impeccable 工程规范 | 可访问性/性能/可用性硬约束 | heading ≤ 6rem；z-index 层级；保持 4.5:1 对比度 |
| P1 | taste-skill 审美规则 | 视觉品味/反模式 | 禁止 Inter/Roboto 默认字体；禁止卡片嵌套卡片 |
| P2 | impeccable UX 规则 | UX 写作/交互/响应式 | cap line length 75ch；移动优先优先 |
| P3 | taste-skill 风格偏好 | Vibe/Layout 选择 | Asymmetrical Bento vs Editorial Split |

### 具体冲突案例裁决

```
冲突：taste 说"用 8rem 展示标题" vs impeccable 说"heading ≤ 6rem"
裁决：遵循 impeccable（P0）。标题过大可读性差，且是 AI 常见过度设计。
行动：用 6rem 上限 + taste 风格的 font-weight 和 letter-spacing 呈现。

冲突：taste 说"用渐变文字突出特色" vs impeccable 说"禁止渐变文字"
裁决：遵循 impeccable（P0）。渐变文字是已确认的反模式，可访问性差。
行动：用纯色 + 字重/字号变化表达层次。

冲突：taste 说"深色模式配黑色背景" vs impeccable 说"禁止纯黑纯白"
裁决：遵循 impeccable（P0）。纯黑（#000000）在深度上缺乏层次感。
行动：用 OKLCH 有色中性色替代（如 oklch(12% 0.02 260)）。

冲突：taste 说"variance=9 实验性 bento" vs impeccable 标准布局规则
裁决：taste 方向优先（P2 < P3），但 impeccable 的工程实践必须保持。
行动：保留 bento 布局创意，但严格遵守 z-index 层级和响应式降级规则。
```

---

## 4. 增量反馈循环

每次交互后，设计上下文自动传播并更新：

```
┌─────────────┐    taste 读盘    ┌─────────────┐
│   Phase 1   │ ──────────────►  │   Phase 2   │
│   TASTE     │  设计方向+三旋钮  │   BUILD     │
└──────┬──────┘                  └──────┬──────┘
       │                                 │
       │  dials + vibe                   │  代码产出
       │                                 │
       │    ┌────────────────────────┐    │
       │    │   DesignContext         │    │
       │    │   (共享上下文存储)       │    │
       │    └────────┬───────────────┘    │
       │             │                    │
       │    ┌────────▼───────────────┐    │
       │    │   Phase 3              │◄───┘
       │    │   CHECK                │  审计报告
       │    └────────┬───────────────┘
       │             │
       │    ┌────────▼───────────────┐
       └────┤   Phase 4              │
            │   REFINE               │
            │   (根据审计结果反向     │
            │    调整 dials 和方向)   │
            └────────────────────────┘
```

### 每次循环的更新规则

1. **Phase 2 完成后**：将 `taste.designRead` 注入到 impeccable 的 `Setup` 步骤中
2. **Phase 3 完成后**：将 `impeccable.auditResults` 和 `impeccable.critiqueScore` 写回共享上下文
3. **Phase 4 开始前**：读取两个子系统的当前状态，识别冲突并自动裁决
4. **Phase 4 完成后**：更新 `polishStatus` 为 `complete`

---

## 5. 统一反模式注册表

taste-skill 和 impeccable 的禁止规则合并为统一清单：

### 5.1 排版类（合并自两者）

| 反模式 | 来源 | 替代方案 |
|:---|:---|:---|
| 默认字体（Inter/Roboto/Arial/Helvetica/Open Sans） | taste + impeccable | Geist / Clash Display / Plus Jakarta Sans / SF Pro |
| 纯黑（#000000）或纯白（#FFFFFF） | impeccable | OKLCH 有色中性色 |
| 灰色文字在彩色背景上 | impeccable | 用背景色调的深色变体 |
| 行过长（>75ch） | impeccable | 约束 width，用 clamp |
| 跳过的标题层级（h1→h3） | impeccable | h1→h2→h3 逐级 |
| all-caps 正文 | impeccable | 句子大小写 |

### 5.2 布局类（合并自两者）

| 反模式 | 来源 | 替代方案 |
|:---|:---|:---|
| 卡片嵌套卡片 | taste + impeccable | 扁平结构或别的 affordance |
| 1px solid gray 边框 | taste | 用色调边框或无线 |
| side-stripe 彩色边框 | impeccable | 去掉，改用背景色 |
| 相同大小的卡片网格重复 | impeccable | 变化大小/aspect ratio |
| 纯对称 3 列 Bootstrap 网格 | taste | Asymmetrical Bento 或 2-4 列变化 |

### 5.3 色彩类（合并自两者）

| 反模式 | 来源 | 替代方案 |
|:---|:---|:---|
| AI 紫蓝渐变 | taste + impeccable | 单色强调色 |
| 渐变文字（background-clip: text） | impeccable | 纯色 + 字重/大小 |
| 玻璃态作为默认 | impeccable | 透明或实色背景 |
| 纯灰阴影 | taste + impeccable | 有色中性色阴影（OKLCH） |

### 5.4 动效类（合并自两者）

| 反模式 | 来源 | 替代方案 |
|:---|:---|:---|
| 弹跳/弹性缓动 | taste + impeccable | ease-out-quart / quint / expo |
| linear / ease-in-out 默认 | taste | 自定义 cubic-bezier |
| 动画 layout 属性（top/left/width/height） | taste + impeccable | transform + opacity |
| 所有元素同时出现 | taste | 交错入场（staggered delay） |
| 无限循环微动效 | taste | 有限次数或鼠标触发 |

### 5.5 AI 模板痕迹（合并自两者）

| 反模式 | 来源 | 替代方案 |
|:---|:---|:---|
| 每段上面的小写字母眼眉标 | impeccable | 只在需要时用，不默认 |
| 01/02/03 编号段落标记 | impeccable | 只有真正的序列才用 |
| hero-metric 模板（大数字+小标签） | impeccable | 不同方式呈现数据 |
| 星级评测指标平铺在标题上方 | taste + impeccable | 用其他排版手段 |
| 紫色渐变 + 黑色深色网格 hero | taste | 选择特定于品牌的搭配 |
| 每屏都用 glassmorphism | taste | 仅在 navbar/modal 等固定元素用 |

---

## 6. 三旋钮 → Impeccable 规则强度映射

taste-skill 的三旋钮影响 impeccable 的规则执行强度：

### DESIGN_VARIANCE → Layout 规则

| VARIANCE | impeccable layout 约束强度 |
|:---|:---|
| 1-3 | 严格执行标准布局规则（居中、清晰、安全） |
| 4-6 | 标准规则，允许 bento 变化 |
| 7-8 | 放宽约束，允许实验性 bento + 不对称 |
| 9-10 | 最大创意自由，但保持 z-index 和响应式降级 |

### MOTION_INTENSITY → Motion 规则

| MOTION | impeccable motion 约束强度 |
|:---|:---|
| 1-3 | 纯 hover + 最小交互动效 |
| 4-6 | 滚动触发 + 交错入场 |
| 7-8 | 完整动效系统（hover + scroll + stagger） |
| 9-10 | 电影级动效，但保持 reduced-motion 降级 |

### VISUAL_DENSITY → Information 规则

| DENSITY | impeccable 信息密度约束 |
|:---|:---|
| 1-3 | 最大留白，每屏 1-2 个焦点元素 |
| 4-6 | 标准密度，3-5 个元素/屏 |
| 7-8 | 密集布局，类似仪表盘 |
| 9-10 | 数据密集型（使用仪表盘/表格布局） |
