import React from 'react';
import { ExternalLink, Phone } from 'lucide-react';
import { Property } from '../../types/property';
import GradientButton from '../ui/GradientButton';

const PropertyCard: React.FC<Property> = ({ image, name, address, phone, website, logo }) => {
  const LogoComponent = typeof logo === 'string' 
    ? () => <img src={logo} alt={`${name} logo`} className="w-20 h-20 object-contain" />
    : logo;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
      <a 
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full"
      >
        <div className="aspect-[4/3] md:aspect-[16/9]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
        
        {/* Logo Overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
            {typeof logo === 'string' 
              ? <LogoComponent />
              : <LogoComponent size={30} className="text-white" />
            }
          </div>
        </div>
      </a>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 mb-2">{address}</p>
          <p className="text-gray-600">
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-[#0C7F40] transition-colors inline-flex items-center gap-2">
              <Phone size={16} />
              {phone}
            </a>
          </p>
        </div>
        <div className="mt-4">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GradientButton>
              <span className="flex items-center gap-2 text-sm">
                Visit Website
                <ExternalLink size={16} />
              </span>
            </GradientButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;