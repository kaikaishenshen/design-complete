# 参与贡献 Design Complete

感谢您有兴趣为 Design Complete 做贡献！本文档提供参与项目的指南。

## 如何贡献

### 报告 Bug

1. 检查[已有 issues](https://github.com/design-complete/design-complete/issues) 避免重复
2. 使用 Bug 报告模板
3. 包含：复现步骤、预期行为、实际行为、环境信息

### 建议新功能

1. 检查已有 issues 和讨论
2. 描述用例和预期行为
3. 可能的话，草绘 API 或用户体验方案

### Pull Request

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/my-feature`
3. 按项目代码风格进行修改
4. 为新功能添加测试
5. 按需更新文档
6. 运行 `npm test` 确保所有测试通过
7. 使用描述性信息提交
8. 推送后发起 Pull Request

### 开发环境

```bash
git clone https://github.com/design-complete/design-complete.git
cd design-complete
npm install
npm run validate-skills
```

### 代码风格

- 遵循 ESLint 配置
- 使用 Prettier 格式化
- 为公共 API 编写 JSDoc 注释
- 保持函数小而专注

### 测试

```bash
npm test
```

所有新功能必须包含测试。Bug 修复需包含回归测试。

### 文档

- 新增命令时更新 README
- 在所有支持的语言中添加文档（en、zh-CN、ja、ko）
- 使用清晰简洁的语言

### 翻译

欢迎翻译贡献！添加新语言的方法：

1. 在 `src/i18n/<code>/` 中创建语言目录
2. 从 `src/i18n/en/common.json` 翻译 `common.json`
3. 添加新语言版本的 README
4. 更新 `src/i18n/config.json` 包含新语言

### Skill 贡献

添加新的设计 skill：

1. 在 `src/skills/<skill-name>/` 中创建新目录
2. 添加带完整 frontmatter 的 `SKILL.md`
3. 如需，在 `reference/` 中添加参考文件
4. 更新 `src/skills/design-complete/` 中的编排器

### 提交约定

```
feat: 新增功能
fix: Bug 修复
docs: 文档变更
style: 格式化，缺失的分号
refactor: 代码重构
test: 添加测试
chore: 维护任务
i18n: 翻译更新
```

## 第三方声明

引入 taste-skill 或 impeccable 的工作时，请务必：
1. 保留原始版权头
2. 在提交信息中注明来源
3. 若添加新依赖，更新 LICENSE 中的第三方声明
