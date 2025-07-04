import React, { useState } from 'react';
import { Scale, GraduationCap, Users, Code, FileText, BookOpen, UserCheck, Globe, ArrowRight, Sparkles, Info, X, CheckCircle, Clock, MessageCircle } from 'lucide-react';
import { chatFlowItems } from '../data/chatFlowData';

interface ChatFlowCardsProps {
  selectedCategory: string;
  onTryDemo?: (demoType: 'contract' | 'lesson' | 'hr-new', difyUrl?: string) => void;
}

const iconMap = {
  Scale,
  GraduationCap,
  Users,
  Code,
  FileText,
  BookOpen,
  UserCheck,
  Globe,
  MessageCircle,
};

const ChatFlowCards: React.FC<ChatFlowCardsProps> = ({ selectedCategory, onTryDemo }) => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  const filteredItems = chatFlowItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const handleTryNow = (item: any) => {
    console.log('handleTryNow被调用了！');
    if (item.difyType && onTryDemo) {
      // 如果有自定义 URL，传递给 onTryDemo
      if (item.difyUrl) {
        onTryDemo(item.difyType, item.difyUrl);
      } else {
        onTryDemo(item.difyType);
      }
    } else {
      alert('该功能即将上线，敬请期待！');
    }
  };

  const handleShowDetails = (item: any) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-bold mb-6">
              <Sparkles className="w-5 h-5" />
              <span>核心功能</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              智能助手功能展示
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              每个AI助手都经过专业训练，针对特定领域提供精准服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              const hasIntegration = !!item.difyType;
              const isComingSoon = item.category === 'programming';
              
              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden relative"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} style={{ zIndex: -1 }} />
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    {hasIntegration ? (
                      <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>可体验</span>
                      </div>
                    ) : isComingSoon ? (
                      <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-bold">
                        敬请期待
                      </div>
                    ) : null}
                  </div>
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${item.color} bg-gray-50 px-4 py-2 rounded-full`}>
                        {item.efficiency}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-3">
                      {item.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4">
                    <button 
                      type="button"
                      onClick={(e) => {
                        console.log('按钮点击事件触发！');
                        e.preventDefault();
                        e.stopPropagation();
                        handleTryNow(item);
                      }}
                      onMouseEnter={() => console.log('鼠标进入按钮')}
                      disabled={false}
                      style={{
                        position: 'relative',
                        zIndex: 9999,
                        pointerEvents: 'auto'
                      }}
                      className={`flex-1 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                        hasIntegration 
                          ? `bg-gradient-to-r ${item.gradient} hover:shadow-xl hover:scale-105 cursor-pointer`
                          : isComingSoon
                          ? `bg-gradient-to-r ${item.gradient} opacity-75 cursor-pointer hover:opacity-90`
                          : 'bg-gray-400 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <span>{hasIntegration ? '立即体验' : '即将上线'}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleShowDetails(item)}
                      className="px-6 py-4 border-2 border-gray-300 rounded-2xl text-gray-700 font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
                    >
                      <Info className="w-5 h-5" />
                      <span>详情</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-2xl">
                该分类下暂无AI助手，敬请期待
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedItem.gradient} p-8 text-white relative`}>
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-6 right-6 text-white hover:bg-white/20 rounded-full p-3 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center">
                  {React.createElement(iconMap[selectedItem.icon as keyof typeof iconMap], {
                    className: "w-10 h-10 text-white"
                  })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">{selectedItem.name}</h2>
                  <p className="text-white/90 text-lg">{selectedItem.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Detailed Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">产品介绍</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {selectedItem.detailDescription || selectedItem.description}
                </p>
              </div>

              {/* Use Cases */}
              {selectedItem.useCases && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">应用场景</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.useCases.map((useCase: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Advantages */}
              {selectedItem.advantages && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">核心优势</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.advantages.map((advantage: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedItem.gradient}`}></div>
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">核心功能</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedItem.features.map((feature: string, index: number) => (
                    <span
                      key={index}
                      className={`bg-gradient-to-r ${selectedItem.gradient} text-white px-4 py-2 rounded-full font-medium`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-3">
                      <Clock className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{selectedItem.efficiency}</div>
                    <div className="text-sm text-gray-600">效率提升</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">1000+</div>
                    <div className="text-sm text-gray-600">用户使用</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-3">
                      <CheckCircle className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">准确率</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeModal();
                    handleTryNow(selectedItem);
                  }}
                  className={`flex-1 bg-gradient-to-r ${selectedItem.gradient} text-white py-4 px-8 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 ${
                    !selectedItem.difyType ? 'opacity-75' : ''
                  }`}
                >
                  <span>{selectedItem.difyType ? '立即体验' : '即将上线'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  type="button"
                  onClick={closeModal}
                  className="px-8 py-4 border-2 border-gray-300 rounded-2xl text-gray-700 font-bold hover:bg-gray-50 transition-all duration-300"
                >
                  关闭
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatFlowCards;