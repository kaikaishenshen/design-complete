# Design Complete（设计完整系统）

> 统一前端设计质量系统 — 品味 + 结构 = 完整

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green)](package.json)

**Design Complete** 是一个统一的前端设计质量系统，将两个互补的设计子系统无缝集成到一条完整的流水线中：

- **[taste-skill](https://github.com/Leonxlnx/taste-skill)** — 艺术家：审美品味、空间节奏、排版层级、色彩感、动效物理
- **[impeccable](https://github.com/pbakaus/impeccable)** — 工程师：结构严谨性、23 条命令、7 个领域参考、39 条反模式规则、生产级检查

两者共同构成完整的四阶段流水线：**品（品味）→ 建（构建）→ 验（验证）→ 修（打磨）**

---

## 架构

```
┌──────────────────────────────────────────────────────────────┐
│                      设计完整系统                              │
│               统一命令接口 (/design)                           │
├────────────────────────────────┬─────────────────────────────┤
│   ┌─────────────────────┐    │    ┌───────────────────┐    │
│   │   taste-skill       │    │    │   impeccable       │    │
│   │   （艺术家）          │◄───┼───►│   （工程师）         │    │
│   │                     │    │    │                   │    │
│   │ 设计方差             │    │    │ 23 条命令          │    │
│   │ 动效强度             │    │    │ 7 领域参考          │    │
│   │ 视觉密度             │    │    │ 反模式检测          │    │
│   │ 氛围原型             │    │    │ CLI 检测工具        │    │
│   │ 布局原型             │    │    │ 生产级检查          │    │
│   └─────────────────────┘    │    └───────────────────┘    │
│                                │                             │
│   ┌────────────────────────────────────────────────────┐    │
│   │              桥接层（共享知识库）                     │    │
│   │  排版系统 │ 色彩令牌 │ 间距网格                        │    │
│   │  设计系统映射 │ 反模式注册表                           │    │
│   └────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

---

## 四阶段流水线

| 阶段 | 名称 | 工具 | 产出 |
|------|------|------|------|
| 1️⃣ | **品（TASTE）** | taste-skill | 设计解读 + 三旋钮 + 设计方向 |
| 2️⃣ | **建（BUILD）** | impeccable（shape/craft） | 生产级可交付代码 |
| 3️⃣ | **验（CHECK）** | impeccable（audit/critique） | 审计报告 + 问题清单 |
| 4️⃣ | **修（REFINE）** | taste-skill + impeccable | 最终打磨交付物 |

---

## 快速开始

### 安装

```bash
git clone https://github.com/design-complete/design-complete.git
cd design-complete
npm install
npm run validate-skills
```

### 作为 AI Agent 技能使用

```bash
# WorkBuddy
cp -r src/skills/* your-project/.workbuddy/skills/

# Claude Code
cp -r src/skills/* your-project/.claude/skills/
```

然后通过 `/design` 调用：

```
/design craft landing-page    # 全流水线
/design taste project         # 仅设计诊断
/design check checkout        # 质量审计
/design refine hero-section   # 打磨完善
```

---

## 命令列表

| 命令 | 用途 |
|------|------|
| `/design craft <target>` | 完整流水线 |
| `/design taste <target>` | 仅设计品味诊断 |
| `/design build <target>` | 带品味指导的构建 |
| `/design check <target>` | 质量审计 + 评审 |
| `/design critique <target>` | UX 设计评审 |
| `/design audit <target>` | 技术质量检查 |
| `/design refine <target>` | 打磨 + 反模式修复 |
| `/design tune <knob>=<val>` | 实时调整三旋钮 |
| `/design init` | 初始化设计上下文 |
| `/design bolder <target>` | 放大保守设计 |
| `/design quieter <target>` | 压低激进设计 |
| `/design typeset <target>` | 修正字体层级 |
| `/design colorize <target>` | 引入战略性色彩 |
| `/design layout <target>` | 修正布局与间距 |
| `/design animate <target>` | 添加有目的动效 |
| `/design adapt <target>` | 适配不同设备 |
| `/design harden <target>` | 生产化：错误处理、边界情况 |
| `/design clarify <target>` | 改进 UX 文案 |
| `/design delight <target>` | 增加令人愉悦的细节 |

---

## 三旋钮（taste-skill）

| 旋钮 | 范围 | 默认值 | 说明 |
|------|------|--------|------|
| **DESIGN_VARIANCE（设计方差）** | 1–10 | 8 | 1 = 完美对称，10 = 艺术混乱 |
| **MOTION_INTENSITY（动效强度）** | 1–10 | 6 | 1 = 静态，10 = 电影级/物理 |
| **VISUAL_DENSITY（视觉密度）** | 1–10 | 4 | 1 = 画廊留白，10 = 驾驶舱密度 |

---

## 冲突裁决

当 taste-skill 和 impeccable 产生矛盾时：

| 优先级 | 来源 | 适用范围 |
|--------|------|---------|
| **P0** | impeccable 工程规范 | 无障碍、性能、硬约束 |
| **P1** | taste-skill 审美规则 | 视觉品味、反模式 |
| **P2** | impeccable UX 规则 | UX 写作、交互、响应式 |
| **P3** | taste-skill 风格偏好 | 氛围/布局原型选择 |

---

## 第三方声明

Design Complete 集成了两个独立的开源项目。所有原始版权和许可证均被保留：

| 项目 | 作者 | GitHub | 许可证 |
|------|------|--------|--------|
| **taste-skill** | Leon | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT |
| **impeccable** | Paul Bakaus | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Apache 2.0 |

Design Complete 本身基于 **MIT 许可证** 发布。

---

## 语言

- [English](README.md)
- [中文](README.zh-CN.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)
