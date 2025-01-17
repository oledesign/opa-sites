import React from 'react';
import { ExternalLink, LucideIcon } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  name: string;
  address: string;
  website: string;
  LogoIcon: LucideIcon;
}

export default function PropertyCard({ image, name, address, website, LogoIcon }: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
        
        {/* Logo Overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
            <LogoIcon size={20} className="text-white" />
          </div>
          <span className="text-sm font-medium">{name}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{address}</p>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg transition-colors hover:bg-indigo-700"
        >
          Visit Website
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}