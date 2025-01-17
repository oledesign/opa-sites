import React from 'react';
import { properties } from '../../data/properties';
import PropertyCard from './PropertyCard';

const PropertiesGrid: React.FC = () => {
  return (
    <div id="properties" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Select a property below to view their website.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesGrid;