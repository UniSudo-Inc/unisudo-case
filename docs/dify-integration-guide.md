# Dify 应用接入指南

## 📋 如何快速添加新的 Dify 应用

### 第一步：添加应用配置

在 `src/config/difyApps.ts` 文件中的 `DIFY_APPS` 数组里添加新配置：

```typescript
{
  id: 'your-app-id',              // 唯一标识符
  name: '应用显示名称',             // 在界面上显示的名称
  description: '应用描述',          // 简短描述
  url: 'http://dify.unisudo.dev/chatbot/YOUR_CHATBOT_ID', // Dify 应用完整URL
  category: 'hr',                  // 分类：'legal' | 'education' | 'hr' | 'programming'
  icon: 'MessageCircle',           // 图标名称（需要在 iconMap 中存在）
  color: 'from-purple-500 to-purple-600', // 渐变色
  features: ['功能1', '功能2', '功能3', '功能4'] // 功能列表
}
```

### 第二步：添加卡片数据

在 `src/data/chatFlowData.ts` 文件中的 `chatFlowItems` 数组里添加：

```typescript
{
  id: 'your-app-id',              // 与配置文件中的 id 保持一致
  name: '应用显示名称',
  description: '应用描述',
  icon: 'MessageCircle',           // 图标名称
  category: 'hr',                  // 分类
  features: ['功能1', '功能2', '功能3', '功能4'],
  efficiency: '提升XX%效率',       // 效率提升说明
  color: 'text-purple-600',        // 文字颜色
  gradient: 'from-purple-500 to-purple-600', // 渐变色
  difyType: 'your-app-id',         // 与 id 保持一致
  difyUrl: 'http://dify.unisudo.dev/chatbot/YOUR_CHATBOT_ID', // 可选：自定义URL
  detailDescription: '详细描述...',
  useCases: ['使用场景1', '使用场景2'],
  advantages: ['优势1', '优势2']
}
```

### 第三步：更新类型定义（如需要）

如果添加了新的 difyType，需要在以下文件中更新类型：

1. `src/types/index.ts` - 更新 `difyType` 联合类型
2. `src/components/ChatFlowCards.tsx` - 更新接口中的类型
3. `src/pages/HomePage.tsx` - 更新函数参数类型
4. `src/components/DemoSection.tsx` - 更新相关类型

### 第四步：添加图标（如需要）

如果使用了新图标，需要：

1. 在组件中 import 新图标
2. 将图标添加到 `iconMap` 中

## 📁 相关文件位置

- **配置文件**: `src/config/difyApps.ts`
- **数据文件**: `src/data/chatFlowData.ts`  
- **类型定义**: `src/types/index.ts`
- **卡片组件**: `src/components/ChatFlowCards.tsx`
- **演示组件**: `src/components/DemoSection.tsx`
- **主页组件**: `src/pages/HomePage.tsx`

## 🎯 示例：HR智能客服

已添加的 HR智能客服应用配置示例：

```typescript
// 在 difyApps.ts 中
{
  id: 'hr-new',
  name: 'HR智能客服',
  description: '24/7在线HR咨询服务',
  url: 'http://dify.unisudo.dev/chatbot/Vq8Ehn4qLGGOBjMY',
  category: 'hr',
  icon: 'MessageCircle',
  color: 'from-purple-500 to-purple-600',
  features: ['政策咨询', '流程指导', '问题解答', '服务预约']
}

// 在 chatFlowData.ts 中
{
  id: 'hr-chatbot',
  name: 'HR智能客服',
  description: '24/7在线HR咨询服务，解答员工各类人事问题',
  icon: 'MessageCircle',
  category: 'hr',
  features: ['政策咨询', '流程指导', '问题解答', '服务预约'],
  efficiency: '提升90%效率',
  color: 'text-purple-600',
  gradient: 'from-purple-600 to-purple-700',
  difyType: 'hr-new',
  difyUrl: 'http://dify.unisudo.dev/chatbot/Vq8Ehn4qLGGOBjMY'
  // ... 其他属性
}
```

## ⚠️ 注意事项

1. **ID 一致性**: 确保配置文件和数据文件中的 `id` 保持一致
2. **图标支持**: 确保使用的图标已在 `iconMap` 中定义
3. **分类匹配**: 确保 `category` 值与系统中的分类一致
4. **URL 格式**: 确保 Dify URL 格式正确且可访问
5. **类型安全**: 添加新类型时记得更新相关的 TypeScript 类型定义

## 🚀 快速测试

添加完成后：
1. 重启开发服务器
2. 切换到对应分类
3. 查看新应用是否正常显示
4. 点击"立即体验"测试功能是否正常
