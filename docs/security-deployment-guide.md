# 🔒 安全部署指南

## 概述
为了保护敏感的 Dify 应用 URL，本项目已经进行了脱敏处理。所有敏感信息都通过环境变量进行配置。

## 🚀 快速部署步骤

### 1. 环境配置

复制环境变量示例文件：
```bash
cp .env.example .env
```

编辑 `.env` 文件，配置您的真实 Dify 应用 URL：
```bash
# Dify API Configuration
VITE_DIFY_API_BASE_URL=https://your-dify-domain.com/v1
VITE_DIFY_CONTRACT_API_KEY=your_contract_api_key
VITE_DIFY_LESSON_API_KEY=your_lesson_api_key

# Dify Chatbot URLs (请替换为您自己的 URL)
VITE_DIFY_CONTRACT_CHATBOT_URL=https://your-dify-domain.com/chatbot/YOUR_CONTRACT_ID
VITE_DIFY_LESSON_CHATBOT_URL=https://your-dify-domain.com/chatbot/YOUR_LESSON_ID
VITE_DIFY_HR_CHATBOT_URL=https://your-dify-domain.com/chatbot/YOUR_HR_ID
```

### 2. 配置文件检查

确认 `src/config/difyApps.ts` 文件已正确配置为从环境变量读取 URL。

### 3. 安装依赖并启动

```bash
npm install
npm run dev
```

## 🔧 添加新的 Dify 应用

### 步骤1：添加环境变量
在 `.env` 文件中添加新的 URL：
```bash
VITE_DIFY_NEW_APP_URL=https://your-dify-domain.com/chatbot/YOUR_NEW_APP_ID
```

### 步骤2：更新配置文件
在 `src/config/difyApps.ts` 中添加新应用：
```typescript
{
  id: 'new-app',
  name: '新应用名称',
  description: '应用描述',
  url: import.meta.env.VITE_DIFY_NEW_APP_URL || '',
  category: 'hr',
  icon: 'MessageCircle',
  color: 'from-purple-500 to-purple-600',
  features: ['功能1', '功能2', '功能3', '功能4']
}
```

### 步骤3：添加卡片数据
在 `src/data/chatFlowData.ts` 中添加对应的卡片数据。

## 🛡️ 安全最佳实践

### 环境变量安全
- ✅ 永远不要将 `.env` 文件提交到代码仓库
- ✅ 使用 `.env.example` 提供配置示例
- ✅ 在生产环境中使用专门的环境变量管理服务

### Dify 应用安全
- ✅ 在 Dify 后台配置域名白名单
- ✅ 设置适当的 API 调用限制
- ✅ 定期更换 API 密钥
- ✅ 监控 API 使用情况

### 部署安全
- ✅ 使用 HTTPS
- ✅ 配置 CDN 和防火墙
- ✅ 实施适当的访问控制

## 📁 文件结构说明

```
src/config/
├── difyApps.ts          # 实际配置文件（使用环境变量）
├── difyApps.example.ts  # 示例配置文件（用于开源）
```

```
.env                     # 实际环境变量（不提交到仓库）
.env.example            # 环境变量示例（提交到仓库）
```

## ⚠️ 注意事项

1. **不要直接修改 `difyApps.example.ts`**：这个文件仅用作示例
2. **确保 `.env` 在 `.gitignore` 中**：防止敏感信息泄露
3. **生产部署时**：通过 CI/CD 或环境变量管理服务配置敏感信息
4. **团队协作时**：通过安全渠道分享实际的环境变量值

## 🆘 故障排除

### 应用无法加载 Dify iframe
- 检查 `.env` 文件是否正确配置
- 验证 Dify URL 是否可访问
- 确认环境变量名称是否匹配

### 开发环境问题
- 重启开发服务器：`npm run dev`
- 清除缓存：删除 `node_modules` 和 `package-lock.json`，重新安装

### 生产环境问题
- 确认环境变量在部署平台上正确配置
- 检查构建日志中是否有环境变量相关错误

通过以上配置，您的项目现在可以安全地开源，同时保护敏感的 Dify 应用信息。
