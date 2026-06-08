# Live 流程 — 实时浏览器迭代

启动一个实时浏览器会话进行可视化迭代：在浏览器中选择元素，生成替代方案，应用它们。

Live 是一个循环：从已运行的 dev server 或从静态文件启动 server → 注入 UI → 在浏览器中选择元素 → 生成替代方案 → 应用选定方案或继续进行。

## 何时使用

- 用户体验需要视觉微调
- 设计需要真实浏览器上下文来验证
- 元素需要在多个视口中测试

## 设置

```bash
node .workbuddy/skills/impeccable/scripts/live.mjs
```

如果 dev server 未运行，脚本会提示启动方法。遵循其指示。

## 工作流

1. **注入 UI**：Live 向页面注入视觉选择器 UI
2. **选择元素**：用户在浏览器中悬停并点击元素
3. **生成替代方案**：AI 分析所选元素并生成替代方案
4. **预览和选择**：用户预览替代方案并选择一项
5. **应用**：选定的变体写入源代码
6. **迭代**：根据需要重复

## 核心命令

```bash
# 启动 live 服务器
node .workbuddy/skills/impeccable/scripts/live-server.mjs

# 轮询等待用户操作  
node .workbuddy/skills/impeccable/scripts/live-poll.mjs

# 流式轮询
node .workbuddy/skills/impeccable/scripts/live-poll.mjs --stream

# 检查状态
node .workbuddy/skills/impeccable/scripts/live-status.mjs

# 恢复会话
node .workbuddy/skills/impeccable/scripts/live-resume.mjs --id SESSION_ID

# 完成会话
node .workbuddy/skills/impeccable/scripts/live-complete.mjs --id SESSION_ID
```

## 原理

- 一个 live 会话一次解决一个元素
- 提示用户提供 3 个替代方案
- 用户的视觉选择是绝对的
- 编辑过的变体保存到源代码
- Live 是 polish 的补充，不是替代
