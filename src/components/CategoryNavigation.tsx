import React from 'react';
import { Scale, GraduationCap, Users, Code } from 'lucide-react';
import { categories } from '../data/chatFlowData';

interface CategoryNavigationProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const iconMap = {
  Scale,
  GraduationCap,
  Users,
  Code,
};

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            专业AI助手矩阵
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            覆盖企业核心业务场景，提供专业智能化解决方案
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const isActive = selectedCategory === category.id;
            const isComingSoon = category.id === 'programming';
            
            return (
              <button
                key={category.id}
                onClick={() => !isComingSoon && onCategoryChange(category.id)}
                className={`
                  group relative px-10 py-8 rounded-3xl font-bold text-xl transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl flex items-center space-x-5 min-w-[250px]
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl transform scale-105' 
                    : isComingSoon
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 shadow-lg'
                  }
                `}
                disabled={isComingSoon}
              >
                <IconComponent className={`w-8 h-8 ${
                  isActive ? 'text-white' : isComingSoon ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <div className="text-left">
                  <div className="text-xl">{category.name}</div>
                  {isComingSoon && (
                    <div className="text-sm text-gray-400 font-normal">敬请期待</div>
                  )}
                </div>
                
                {isActive && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;