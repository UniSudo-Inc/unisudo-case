import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">AI智能助手</h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              专注于AI技术在企业级应用中的落地实施，为不同行业提供定制化的智能解决方案，
              助力企业数字化转型升级。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8">联系我们</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-white font-medium">邮箱</div>
                  <div className="text-gray-400">contact@unisudo.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-white font-medium">电话</div>
                  <div className="text-gray-400">+86 16628597963</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-white font-medium">地址</div>
                  <div className="text-gray-400">上海市浦东新区水芸路55号港城广场</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              © {currentYear} AI智能助手. 保留所有权利.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;