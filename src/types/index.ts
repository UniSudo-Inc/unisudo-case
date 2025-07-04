export interface ChatFlowItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  efficiency: string;
  color: string;
  gradient: string;
  difyType?: 'contract' | 'lesson' | 'hr-new'; // 添加新的类型
  difyUrl?: string; // 添加直接的iframe URL支持
  detailDescription?: string;
  useCases?: string[];
  advantages?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface DemoMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}