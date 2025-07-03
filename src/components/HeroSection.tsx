import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handleTryNow = () => {
    const demoSection = document.querySelector('[data-demo-section]');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Title */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI智能助手
                </span>
              </h1>
            </div>
            <p className="text-2xl sm:text-3xl text-gray-600 font-semibold">
              专业 • 高效 • 智能
            </p>
          </div>

          {/* Core Features */}
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: '⚖️', title: '法务合规', desc: '合同审查 • 风险识别' },
                { icon: '📚', title: '教育培训', desc: '教案生成 • 课程设计' },
                { icon: '👥', title: 'HR人事', desc: '招聘筛选 • 绩效管理' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-white/20"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleTryNow}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center space-x-3"
            >
              <span>立即体验</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={scrollToProducts}
              className="bg-white/80 backdrop-blur-sm text-gray-700 px-12 py-5 rounded-full font-bold text-xl border-2 border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;