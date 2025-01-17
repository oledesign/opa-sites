import React, { useState } from 'react';

const mobileImages = [
  '/images/mobile/mobile-1.jpg',
  '/images/mobile/mobile-2.jpg',
  '/images/mobile/mobile-3.jpg',
  '/images/mobile/mobile-4.jpg',
  '/images/mobile/mobile-5.jpg',
];

const MobileHeroBackground: React.FC = () => {
  const [selectedImage] = useState(() => 
    mobileImages[Math.floor(Math.random() * mobileImages.length)]
  );

  return (
    <div className="absolute inset-0 w-full h-full">
      <div 
        className="w-full h-full bg-cover bg-center hero-image-filter"
        style={{ backgroundImage: `url(${selectedImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};

export default MobileHeroBackground;