/**
 * Dify 应用配置文件示例
 * 
 * 安全部署说明：
 * 1. 复制此文件为 difyApps.ts
 * 2. 替换所有 URL 为真实的 Dify 应用地址
 * 3. 确保 .env 文件中配置了正确的环境变量
 * 
 * 如何添加新的 Dify 应用：
 * 1. 在 DIFY_APPS 数组中添加新的配置项
 * 2. 在 chatFlowData.ts 中添加对应的 ChatFlowItem
 * 3. 在 .env 中添加对应的环境变量
 * 
 * 配置格式说明：
 * - id: 唯一标识符，用于匹配 ChatFlowItem 中的 difyType
 * - name: 显示名称
 * - description: 描述
 * - url: 使用环境变量来保护敏感信息
 * - category: 所属分类 ('legal' | 'education' | 'hr' | 'programming')
 */

export interface DifyAppConfig {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'legal' | 'education' | 'hr' | 'programming';
  icon?: string;
  color?: string;
  features?: string[];
}

export const DIFY_APPS: DifyAppConfig[] = [
  {
    id: 'contract',
    name: '合同审查助手',
    description: '智能分析合同条款，识别风险点',
    url: import.meta.env.VITE_DIFY_CONTRACT_CHATBOT_URL || 'https://your-dify-domain.com/chatbot/YOUR_CONTRACT_ID',
    category: 'legal',
    icon: 'FileText',
    color: 'from-blue-500 to-blue-600',
    features: ['智能风险识别', '专业法律建议', '条款智能解析', '合规性检查']
  },
  {
    id: 'lesson',
    name: '教案生成助手', 
    description: '智能生成个性化教学方案',
    url: import.meta.env.VITE_DIFY_LESSON_CHATBOT_URL || 'https://your-dify-domain.com/chatbot/YOUR_LESSON_ID',
    category: 'education',
    icon: 'GraduationCap',
    color: 'from-green-500 to-green-600',
    features: ['个性化教案设计', '教学目标规划', '互动环节设计', '评估方案生成']
  },
  {
    id: 'hr-new',
    name: 'HR智能客服',
    description: '24/7在线HR咨询服务',
    url: import.meta.env.VITE_DIFY_HR_CHATBOT_URL || 'https://your-dify-domain.com/chatbot/YOUR_HR_ID',
    category: 'hr',
    icon: 'MessageCircle',
    color: 'from-purple-500 to-purple-600',
    features: ['政策咨询', '流程指导', '问题解答', '服务预约']
  }
  
  // 📝 添加新应用示例：
  // {
  //   id: 'new-app-id',
  //   name: '新应用名称',
  //   description: '应用描述',
  //   url: import.meta.env.VITE_DIFY_NEW_APP_URL || 'https://your-dify-domain.com/chatbot/YOUR_APP_ID',
  //   category: 'hr', // 或其他分类
  //   icon: 'YourIcon', // 确保在 iconMap 中有对应的图标
  //   color: 'from-your-color-500 to-your-color-600',
  //   features: ['功能1', '功能2', '功能3', '功能4']
  // }
];

// 根据 ID 获取 Dify 应用配置
export const getDifyAppById = (id: string): DifyAppConfig | undefined => {
  return DIFY_APPS.find(app => app.id === id);
};

// 根据分类获取 Dify 应用列表
export const getDifyAppsByCategory = (category: string): DifyAppConfig[] => {
  return DIFY_APPS.filter(app => app.category === category);
};

// 获取所有可用的 Dify 应用类型
export const getAllDifyTypes = (): string[] => {
  return DIFY_APPS.map(app => app.id);
};
