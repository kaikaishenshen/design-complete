# 流水线协议 — 四阶段流水线执行指引

> 定义了 `/design craft` 完整流水线的执行细节，确保 taste-skill 和 impeccable 按正确顺序协作。

---

## 阶段 1：TASTE — 设计品味诊断

**目标**：在写任何代码之前确定设计方向。

**步骤**：

### 1.1 执行 Design Read（taste-skill Section 0）
```
解读为：<页面类型> for <受众>, with a <氛围> language, leaning toward <设计系统>
```

### 1.2 设定三旋钮（taste-skill Section 1）
根据 Scene 选择默认值，按信号调优：
- 默认：`DESIGN_VARIANCE=8 / MOTION_INTENSITY=6 / VISUAL_DENSITY=4`
- 参考 taste-skill 的 1.A 和 1.B 映射表

### 1.3 选择 Design System（taste-skill Section 2.A）
从 taste-skill 的系统映射表选择对应组件库。

### 1.4 选择 Vibe + Layout 原型（taste-skill Section 3）
- 从 3 个 Vibe Archetype 中选 1
- 从 3 个 Layout Archetype 中选 1
- 考虑 Mobile Collapse 方案

### 1.5 初始化 Bridge Context
```json
{
  "taste": {
    "designRead": "...",
    "dials": { "designVariance": 8, "motionIntensity": 6, "visualDensity": 4 },
    "vibeArchetype": "...",
    "layoutArchetype": "..."
  }
}
```

---

## 阶段 2：BUILD — 结构实现

**目标**：用 impeccable 的 23 命令构建生产级代码。

**步骤**：

### 2.1 初始化 impeccable Setup
1. 读取 taste 的 Design Context（从 Bridge Context）
2. 根据 taste.designRead 推断 register：
   - 品牌/市场/内容 → `brand` register
   - 产品/工具/仪表盘 → `product` register
3. 读取对应的 impeccable reference 文件
4. 如果需要配色，运行 palette.mjs 获取种子色

### 2.2 执行 Build
按 impeccable 的 craft/shape 命令执行：
1. `shape` — 规划 UX/UI 结构
2. `craft` — 端到端构建
3. `extract` — 提取可复用组件

### 2.3 输出要求
- 必须通过 taste-skill 的 Double-Bezel 嵌套架构（适用于卡片/容器）
- 必须遵守 impeccable 的 Typography/Hierarchy 规则
- 必须包含 taste-skill 的 Motion 指导
- 必须有 responsive/mobile collapse

---

## 阶段 3：CHECK — 质量审计

**目标**：运行 impeccable 的 audit + critique，发现所有问题。

**步骤**：

### 3.1 Critique — UX 设计评审
遵循 impeccable `reference/critique.md`：
1. 评估 A：启发式设计评审（层次/清晰度/情感共鸣）
2. 评估 B：反模式检测
3. 综合评分 + 改进建议

### 3.2 Audit — 技术质量检查
遵循 impeccable `reference/audit.md`：
1. a11y 检查（对比度/键盘导航/ARIA）
2. 性能检查（布局偏移/动画风险）
3. 响应式检查（断点/触摸目标）

### 3.3 更新 Bridge Context
```json
{
  "impeccable": {
    "critiqueScore": 7.5,
    "auditResults": { "accessibility": 8, "performance": 9, "responsive": 7 },
    "antiPatternsFound": ["side-stripe borders", "gradient text"]
  }
}
```

---

## 阶段 4：REFINE — 打磨完善

**目标**：修复阶段 3 发现的问题，做最终质量 pass。

**步骤**：

### 4.1 裁决冲突（Bridge 协议）
1. 读取 Bridge Context 中的 audit 和 critique 结果
2. 识别 taste ↔ impeccable 的冲突点
3. 按裁决矩阵解决冲突

### 4.2 修复问题
按优先级修复：
1. P0: a11y 问题 → 修复对比度/键盘导航
2. P1: 反模式 → 替换 banned 元素
3. P2: UX 问题 → 改进文案/布局
4. P3: 审美微调 → 调整三旋钮

### 4.3 taste-skill 调优
根据需要调整三旋钮：
- audit 发现 a11y 问题 → 降低 DESIGN_VARIANCE
- critique 指出视觉平淡 → 提高 MOTION_INTENSITY
- 用户反馈信息过载 → 降低 VISUAL_DENSITY

### 4.4 最终 Polish
运行 impeccable polish 命令：
1. 设计系统对齐验证
2. 预输出检查清单过一遍（taste-skill Section 8）
3. 反模式二次检查
4. 发布就绪确认

### 4.5 最终输出
```markdown
## 设计完整报告

### 摘要
- Design Read: <声明>
- 三旋钮: V<val> / M<val> / D<val>
- Register: <brand/product>

### 审计结果
- Critique 评分: <val>/10 - <一句摘要>
- Accessibility: <val>/10
- Performance: <val>/10
- Responsive: <val>/10

### 已修复问题
- [x] <P0 问题>
- [x] <P1 问题>
- [ ] <未修复的问题说明>

### 下一步建议
- <1-2 条用户后续可做的改进>
```
