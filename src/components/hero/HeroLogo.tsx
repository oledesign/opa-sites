import React from 'react';

const HeroLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <img 
        src="/images/logos/opa-logo.svg" 
        alt="Our Perfect Apartment" 
        className="h-24 md:h-40 w-auto" // Reduced height on mobile
      />
    </div>
  );
};

export default HeroLogo;