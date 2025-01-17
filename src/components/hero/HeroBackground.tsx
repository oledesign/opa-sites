import React from 'react';
import HeroSlideshow from './HeroSlideshow';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <HeroSlideshow />
    </div>
  );
};

export default HeroBackground;