import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryNavigation from '../components/CategoryNavigation';
import ChatFlowCards from '../components/ChatFlowCards';
import DemoSection from '../components/DemoSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('legal');
  const demoSectionRef = useRef<HTMLDivElement>(null);

  const handleTryDemo = (demoType: 'contract' | 'lesson') => {
    // Scroll to demo section
    if (demoSectionRef.current) {
      demoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Trigger demo opening (this will be handled by DemoSection component)
    const event = new CustomEvent('openDemo', { detail: { demoType } });
    window.dispatchEvent(event);
  };

  return (
    <>
      <Header />
      <HeroSection />
      <CategoryNavigation 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ChatFlowCards 
        selectedCategory={selectedCategory} 
        onTryDemo={handleTryDemo}
      />
      <div ref={demoSectionRef}>
        <DemoSection />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;