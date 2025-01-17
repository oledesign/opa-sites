import React, { useState, useEffect } from 'react';

const HeroSlideshow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images] = useState(() => {
    const allImages = Array.from({ length: 5 }, (_, i) => `/images/hero/pmr-${i + 1}.jpg`);
    return allImages.sort(() => Math.random() - 0.5); // Randomize initial order
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 
            ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div
            className={`absolute inset-0 w-[120%] h-[120%] -ml-[10%] -mt-[10%] bg-cover bg-center hero-image-filter
              ${index === currentImageIndex ? 'animate-kenburns' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-white/70 z-20" />
    </div>
  );
};

export default HeroSlideshow;