import React from 'react';
import { properties } from '../../data/properties';

const LogoCarousel: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-black py-8">
      <div className="logo-scroll-container">
        <div className="logo-scroll">
          {/* Original logos */}
          {properties.map((property) => (
            <a
              key={property.id}
              href={property.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-16 h-10 md:w-24 md:h-12 flex items-center justify-center"
            >
              <img
                src={typeof property.logo === 'string' ? property.logo : '/images/logos/opa-color.svg'}
                alt={`${property.name} logo`}
                className="h-4 md:h-6 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          ))}
          {/* Duplicated logos for seamless loop */}
          {properties.map((property) => (
            <a
              key={`${property.id}-clone`}
              href={property.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-16 h-10 md:w-24 md:h-12 flex items-center justify-center"
            >
              <img
                src={typeof property.logo === 'string' ? property.logo : '/images/logos/opa-color.svg'}
                alt={`${property.name} logo`}
                className="h-4 md:h-6 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;