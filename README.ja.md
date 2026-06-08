# Design Complete（デザインコンプリート）

> 統合フロントエンドデザイン品質システム — センス + 構造 = 完成

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green)](package.json)

**Design Complete** は、2つの補完的なデザインサブシステムを1つのシームレスなパイプラインに統合するフロントエンドデザイン品質システムです：

- **[taste-skill](https://github.com/Leonxlnx/taste-skill)** — アーティスト：美的センス、空間リズム、タイポグラフィ階層、色彩感覚、モーション物理
- **[impeccable](https://github.com/pbakaus/impeccable)** — エンジニア：構造的厳密性、23コマンド、7領域リファレンス、39のアンチパターンルール、本番品質チェック

両者は完全な4フェーズパイプラインを形成します：**品（センス）→ 建（構築）→ 検（検証）→ 修（研磨）**

---

## 4フェーズパイプライン

| フェーズ | 名称 | ツール | 成果物 |
|----------|------|--------|--------|
| 1️⃣ | **品（TASTE）** | taste-skill | デザイン解釈 + 3ダイヤル + デザイン方向性 |
| 2️⃣ | **建（BUILD）** | impeccable | 本番品質のコード |
| 3️⃣ | **検（CHECK）** | impeccable | 監査レポート + 問題リスト |
| 4️⃣ | **修（REFINE）** | taste-skill + impeccable | 最終研磨された成果物 |

---

## クイックスタート

```bash
git clone https://github.com/design-complete/design-complete.git
cd design-complete
npm install
npm run validate-skills
```

### AIエージェントスキルとして使用

```bash
# WorkBuddy
cp -r src/skills/* your-project/.workbuddy/skills/

# Claude Code
cp -r src/skills/* your-project/.claude/skills/
```

`/design` で呼び出します：

```
/design craft landing-page    # 完全パイプライン
/design taste project         # デザイン診断のみ
/design check checkout        # 品質監査
/design refine hero-section   # 研磨と仕上げ
```

---

## コマンド一覧

| コマンド | 目的 |
|----------|------|
| `/design craft <target>` | 完全パイプライン |
| `/design taste <target>` | デザインセンス診断のみ |
| `/design build <target>` | センスに基づく構築 |
| `/design check <target>` | 品質監査 + 評価 |
| `/design critique <target>` | UXデザインレビュー |
| `/design audit <target>` | 技術品質チェック |
| `/design refine <target>` | 研磨 + アンチパターン修正 |
| `/design tune <knob>=<val>` | 3ダイヤルをリアルタイム調整 |
| `/design init` | デザインコンテキスト初期化 |
| `/design bolder <target>` | 保守的デザインの増幅 |
| `/design quieter <target>` | 攻撃的デザインの抑制 |
| `/design typeset <target>` | タイポグラフィ改善 |
| `/design colorize <target>` | 戦略的色彩の導入 |
| `/design animate <target>` | 目的を持つアニメーション |
| `/design harden <target>` | 本番対応 |

---

## 3つのダイヤル

| ダイヤル | 範囲 | デフォルト | 説明 |
|----------|------|------------|------|
| **DESIGN_VARIANCE** | 1–10 | 8 | 1 = 完全対称、10 = 芸術的カオス |
| **MOTION_INTENSITY** | 1–10 | 6 | 1 = 静的、10 = 映画的/物理的 |
| **VISUAL_DENSITY** | 1–10 | 4 | 1 = ギャラリー/余裕、10 = コックピット/高密度 |

---

## サードパーティ帰属表示

Design Complete は2つの独立したオープンソースプロジェクトを統合しています。すべての著作権とライセンスが保持されています：

| プロジェクト | 作者 | GitHub | ライセンス |
|--------------|------|--------|-----------|
| **taste-skill** | Leon | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT |
| **impeccable** | Paul Bakaus | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Apache 2.0 |

Design Complete 自体は **MITライセンス** でリリースされています。

---

## 言語

- [English](README.md)
- [中文](README.zh-CN.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)
