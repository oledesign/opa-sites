import React from 'react';
import LogoCarousel from './LogoCarousel';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <LogoCarousel />
      <div className="container mx-auto px-6 py-8">
        <div className="text-center space-y-4">
          
          <p className="text-sm text-gray-500">
            © {currentYear} Our Perfect Apartment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;