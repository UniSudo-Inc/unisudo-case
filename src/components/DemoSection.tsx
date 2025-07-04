import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, GraduationCap, X, Maximize2, Minimize2, Play, MessageCircle } from 'lucide-react';
import { DIFY_APPS } from '../config/difyApps';

const DemoSection: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'contract' | 'lesson' | 'hr-new' | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [customDifyUrl, setCustomDifyUrl] = useState<string | null>(null);

  // 图标映射
  const iconMap = {
    FileText,
    GraduationCap,
    MessageCircle,
  };

  // 根据配置文件生成 demos
  const demos = DIFY_APPS.map(app => ({
    id: app.id as 'contract' | 'lesson' | 'hr-new',
    title: app.name,
    description: app.description,
    icon: iconMap[app.icon as keyof typeof iconMap] || MessageCircle,
    color: app.color || 'from-gray-500 to-gray-600',
    iframeSrc: app.url,
    features: app.features || []
  }));

  // 如果有自定义URL，使用自定义配置，否则从配置文件中查找
  const activeConfig = customDifyUrl ? {
    id: activeDemo,
    title: activeDemo === 'hr-new' ? 'HR智能客服' : '自定义应用',
    description: '智能AI助手服务',
    icon: MessageCircle,
    color: 'from-purple-500 to-purple-600',
    iframeSrc: customDifyUrl,
    features: ['智能对话', '专业服务', '即时响应', '高效解决']
  } : demos.find(demo => demo.id === activeDemo);

  const openDemo = (demoId: 'contract' | 'lesson' | 'hr-new', customUrl?: string) => {
    setActiveDemo(demoId);
    if (customUrl) {
      setCustomDifyUrl(customUrl);
    } else {
      setCustomDifyUrl(null);
    }
  };

  const closeDemo = () => {
    setActiveDemo(null);
    setIsFullscreen(false);
    setCustomDifyUrl(null);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Listen for external demo opening events
  useEffect(() => {
    const handleOpenDemo = (event: CustomEvent) => {
      const { demoType, difyUrl } = event.detail;
      openDemo(demoType, difyUrl);
    };

    globalThis.addEventListener('openDemo', handleOpenDemo as EventListener);
    return () => {
      globalThis.removeEventListener('openDemo', handleOpenDemo as EventListener);
    };
  }, []);

  return (
    <section data-demo-section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Sparkles className="w-5 h-5" />
            <span>实时演示</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            智能AI助手体验
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            体验真实的AI对话，感受智能助手如何提升您的工作效率
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {demos.map((demo) => {
            const IconComponent = demo.icon;
            return (
              <div
                key={demo.id}
                className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${demo.color} flex items-center justify-center mb-8`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {demo.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {demo.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <div className="grid grid-cols-2 gap-3">
                      {demo.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${demo.color}`}></div>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => openDemo(demo.id)}
                    className={`w-full bg-gradient-to-r ${demo.color} text-white py-5 px-8 rounded-2xl font-bold text-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3`}
                  >
                    <Play className="w-6 h-6" />
                    <span>立即体验</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Demo Modal */}
      {activeDemo && activeConfig && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 ${
          isFullscreen ? 'p-0' : ''
        }`}>
          <div className={`bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
            isFullscreen 
              ? 'w-full h-full rounded-none' 
              : 'w-full max-w-6xl h-[85vh]'
          }`}>
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${activeConfig.color} p-6 text-white flex items-center justify-between`}>
              <div className="flex items-center space-x-4">
                <activeConfig.icon className="w-8 h-8" />
                <h3 className="text-2xl font-bold">{activeConfig.title}</h3>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleFullscreen}
                  className="p-3 hover:bg-white/20 rounded-xl transition-colors"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-6 h-6" />
                  ) : (
                    <Maximize2 className="w-6 h-6" />
                  )}
                </button>
                <button
                  onClick={closeDemo}
                  className="p-3 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Iframe Container */}
            <div className={`${isFullscreen ? 'h-[calc(100vh-80px)]' : 'h-[calc(85vh-80px)]'}`}>
              <iframe
                src={activeConfig.iframeSrc}
                className="w-full h-full border-0"
                allow="microphone"
                title={activeConfig.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DemoSection;