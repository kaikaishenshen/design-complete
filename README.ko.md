# Design Complete（디자인 컴플리트）

> 통합 프론트엔드 디자인 품질 시스템 — 감각 + 구조 = 완성

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green)](package.json)

**Design Complete**는 두 개의 보완적 디자인 하위 시스템을 하나의 원활한 파이프라인으로 통합하는 프론트엔드 디자인 품질 시스템입니다:

- **[taste-skill](https://github.com/Leonxlnx/taste-skill)** — 아티스트：미적 감각, 공간 리듬, 타이포그래피 계층, 색채 감각, 모션 물리
- **[impeccable](https://github.com/pbakaus/impeccable)** — 엔지니어：구조적 엄격성, 23개 명령어, 7개 도메인 레퍼런스, 39개 안티패턴 규칙, 프로덕션 품질 검사

이 둘은 완전한 4단계 파이프라인을 형성합니다：**품（감각）→ 건（구축）→ 검（검증）→ 수（마무리）**

---

## 4단계 파이프라인

| 단계 | 이름 | 도구 | 산출물 |
|------|------|------|--------|
| 1️⃣ | **품（TASTE）** | taste-skill | 디자인 해석 + 3개 다이얼 + 디자인 방향 |
| 2️⃣ | **건（BUILD）** | impeccable | 프로덕션급 코드 |
| 3️⃣ | **검（CHECK）** | impeccable | 감사 보고서 + 문제 목록 |
| 4️⃣ | **수（REFINE）** | taste-skill + impeccable | 최종 다듬어진 산출물 |

---

## 빠른 시작

```bash
git clone https://github.com/design-complete/design-complete.git
cd design-complete
npm install
npm run validate-skills
```

### AI 에이전트 스킬로 사용

```bash
# WorkBuddy
cp -r src/skills/* your-project/.workbuddy/skills/

# Claude Code
cp -r src/skills/* your-project/.claude/skills/
```

`/design`으로 호출합니다：

```
/design craft landing-page    # 전체 파이프라인
/design taste project         # 디자인 진단만
/design check checkout        # 품질 감사
/design refine hero-section   # 마무리 및 다듬기
```

---

## 명령어 목록

| 명령어 | 용도 |
|--------|------|
| `/design craft <target>` | 전체 파이프라인 |
| `/design taste <target>` | 디자인 감각 진단만 |
| `/design build <target>` | 감각 기반 구축 |
| `/design check <target>` | 품질 감사 + 평가 |
| `/design critique <target>` | UX 디자인 리뷰 |
| `/design audit <target>` | 기술 품질 검사 |
| `/design refine <target>` | 마무리 + 안티패턴 수정 |
| `/design tune <knob>=<val>` | 3개 다이얼 실시간 조정 |
| `/design init` | 디자인 컨텍스트 초기화 |
| `/design bolder <target>` | 보수적 디자인 증폭 |
| `/design quieter <target>` | 과격한 디자인 억제 |
| `/design typeset <target>` | 타이포그래피 개선 |
| `/design colorize <target>` | 전략적 색상 도입 |
| `/design animate <target>` | 목적 있는 애니메이션 |
| `/design harden <target>` | 프로덕션 준비 |

---

## 3개 다이얼

| 다이얼 | 범위 | 기본값 | 설명 |
|--------|------|--------|------|
| **DESIGN_VARIANCE** | 1–10 | 8 | 1 = 완벽 대칭, 10 = 예술적 혼돈 |
| **MOTION_INTENSITY** | 1–10 | 6 | 1 = 정적, 10 = 영화적/물리적 |
| **VISUAL_DENSITY** | 1–10 | 4 | 1 = 갤러리/여유, 10 = 칵핏/밀집 |

---

## 서드파티 표시

Design Complete는 두 개의 독립적인 오픈소스 프로젝트를 통합합니다. 모든 저작권과 라이선스가 보존됩니다：

| 프로젝트 | 저자 | GitHub | 라이선스 |
|----------|------|--------|---------|
| **taste-skill** | Leon | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT |
| **impeccable** | Paul Bakaus | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Apache 2.0 |

Design Complete 자체는 **MIT 라이선스**로 출시되었습니다.

---

## 언어

- [English](README.md)
- [中文](README.zh-CN.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)
