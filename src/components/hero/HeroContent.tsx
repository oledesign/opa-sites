import React from 'react';
import { ChevronDown } from 'lucide-react';
import GradientButton from '../ui/GradientButton';
import HeroLogo from './HeroLogo';

const HeroContent: React.FC = () => {
  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties');
    propertiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30">
      <HeroLogo />

      {/* Text Content */}
      <div className="max-w-3xl px-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-2xl md:text-4xl mb-8" style={{ color: '#0C7F40' }}>
          Explore our collection of exclusive properties in prime locations
        </h2>
      </div>

      {/* CTA Button */}
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <GradientButton onClick={scrollToProperties} color="#0C7F40">
          <span className="text-base">View Properties</span>
        </GradientButton>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} style={{ color: '#0C7F40' }} />
      </div>
    </div>
  );
};

export default HeroContent;