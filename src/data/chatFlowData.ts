import { ChatFlowItem, Category, DemoMessage } from '../types';

export const categories: Category[] = [
  { id: 'legal', name: '法务合规', icon: 'Scale', color: 'bg-blue-500' },
  { id: 'education', name: '教育培训', icon: 'GraduationCap', color: 'bg-green-500' },
  { id: 'hr', name: 'HR人事', icon: 'Users', color: 'bg-purple-500' },
  { id: 'programming', name: '编程开发', icon: 'Code', color: 'bg-orange-500' },
];

export const chatFlowItems: ChatFlowItem[] = [
  {
    id: 'legal-advisor',
    name: '合同审查助手',
    description: '智能分析合同条款，识别风险点，提供专业法律建议',
    icon: 'Scale',
    category: 'legal',
    features: ['合同审查', '风险识别', '法律建议', '合规检查'],
    efficiency: '提升85%效率',
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-blue-600',
    difyType: 'contract',
    detailDescription: '专业的AI法律顾问助手，基于大量法律文献和案例训练，能够为您提供准确的法律建议、合同审查和风险评估服务。',
    useCases: ['合同条款分析', '法律风险识别', '合规性检查', '法律文书起草'],
    advantages: ['24/7在线服务', '专业法律知识库', '快速响应', '成本效益高']
  },
  {
    id: 'compliance-checker',
    name: '合规检查助手',
    description: '自动化合规性审查，确保业务流程符合法规要求',
    icon: 'FileText',
    category: 'legal',
    features: ['合规审查', '政策解读', '风险预警', '整改建议'],
    efficiency: '节省90%时间',
    color: 'text-blue-600',
    gradient: 'from-blue-400 to-blue-500',
    detailDescription: '专门针对企业合规需求设计的AI助手，能够快速识别合规风险，提供专业的整改建议。',
    useCases: ['政策合规检查', '内控制度审查', '风险评估', '合规培训'],
    advantages: ['实时政策更新', '智能风险识别', '专业整改方案', '合规培训支持']
  },
  {
    id: 'lesson-generator',
    name: '智能教案生成',
    description: '根据教学目标自动生成个性化教案和课程内容',
    icon: 'GraduationCap',
    category: 'education',
    features: ['教案生成', '课程设计', '互动环节', '评估方案'],
    efficiency: '提升70%效率',
    color: 'text-green-600',
    gradient: 'from-green-500 to-green-600',
    difyType: 'lesson',
    detailDescription: '基于先进教育理论的智能教学助手，能够根据学科特点和学生水平，生成个性化的教学方案。',
    useCases: ['个性化教案设计', '课程内容规划', '教学活动设计', '学习评估方案'],
    advantages: ['因材施教', '丰富内容库', '灵活定制', '质量保证']
  },
  {
    id: 'training-designer',
    name: '培训方案设计',
    description: '企业培训课程设计，员工技能提升方案制定',
    icon: 'BookOpen',
    category: 'education',
    features: ['培训设计', '技能评估', '学习路径', '效果跟踪'],
    efficiency: '节省80%时间',
    color: 'text-green-600',
    gradient: 'from-green-400 to-green-500',
    detailDescription: '专业的企业培训设计助手，帮助HR和培训部门快速创建高质量的培训课程和学习方案。',
    useCases: ['新员工培训', '技能提升培训', '管理培训', '专业认证培训'],
    advantages: ['专业培训设计', '多样化内容', '效果可追踪', '成本控制']
  },
  {
    id: 'hr-assistant',
    name: 'HR智能助手',
    description: '人力资源管理全流程支持，从招聘到绩效管理',
    icon: 'Users',
    category: 'hr',
    features: ['招聘筛选', '绩效评估', '薪酬分析', '员工关怀'],
    efficiency: '提升60%效率',
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-purple-600',
    detailDescription: '全面的HR管理助手，涵盖人力资源管理的各个环节，提供智能化的解决方案。',
    useCases: ['简历筛选', '面试评估', '绩效管理', '员工发展规划'],
    advantages: ['全流程覆盖', '数据驱动决策', '提升HR效率', '优化员工体验']
  },
  {
    id: 'recruitment-helper',
    name: '智能招聘助手',
    description: '简历筛选、候选人匹配、面试问题生成',
    icon: 'UserCheck',
    category: 'hr',
    features: ['简历分析', '人才匹配', '面试设计', '背景调查'],
    efficiency: '提升75%效率',
    color: 'text-purple-600',
    gradient: 'from-purple-400 to-purple-500',
    detailDescription: '专业的招聘助手，帮助HR快速筛选合适候选人，提高招聘质量和效率。',
    useCases: ['批量简历筛选', '候选人评估', '面试流程设计', '入职方案制定'],
    advantages: ['智能匹配', '减少偏见', '提高效率', '优化体验']
  },
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
    difyUrl: 'http://dify.unisudo.dev/chatbot/Vq8Ehn4qLGGOBjMY',
    detailDescription: '智能HR客服系统，能够快速回答员工关于薪资、福利、政策等各类人事问题，提供24/7不间断服务。',
    useCases: ['员工政策咨询', '流程指导', '福利查询', '请假申请指导'],
    advantages: ['24/7在线服务', '即时响应', '准确信息', '减轻HR工作负担']
  },
  {
    id: 'code-assistant',
    name: '编程助手',
    description: '代码生成、调试、优化建议 - 敬请期待',
    icon: 'Code',
    category: 'programming',
    features: ['代码生成', '错误调试', '性能优化', '代码审查'],
    efficiency: '即将上线',
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-orange-600',
    detailDescription: '智能编程助手正在开发中，将为开发者提供全方位的编程支持。',
    useCases: ['代码自动生成', '错误诊断修复', '性能优化建议', '代码质量审查'],
    advantages: ['多语言支持', '智能提示', '最佳实践', '持续学习']
  },
  {
    id: 'api-designer',
    name: 'API设计助手',
    description: 'RESTful API设计、文档生成 - 敬请期待',
    icon: 'Globe',
    category: 'programming',
    features: ['API设计', '文档生成', '测试用例', '版本管理'],
    efficiency: '即将上线',
    color: 'text-orange-600',
    gradient: 'from-orange-400 to-orange-500',
    detailDescription: 'API设计助手正在开发中，将帮助开发者快速设计和文档化API接口。',
    useCases: ['API架构设计', '接口文档生成', '测试用例编写', 'API版本管理'],
    advantages: ['标准化设计', '自动化文档', '测试集成', '版本控制']
  },
];

export const demoMessages: DemoMessage[] = [
  {
    id: '1',
    text: '请帮我分析这个采购合同的主要风险点',
    sender: 'user',
    timestamp: '14:30'
  },
  {
    id: '2',
    text: '我已经分析了您的采购合同，发现以下几个重要风险点：\n\n1. 付款条款存在不对等风险\n2. 违约责任条款过于宽泛\n3. 知识产权归属不明确\n4. 不可抗力条款缺失\n\n建议您重点关注第1和第3项，我可以为您提供具体的修改建议。',
    sender: 'ai',
    timestamp: '14:31'
  }
];