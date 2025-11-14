
import React, { useState } from 'react';
import { PLANTS_DATA } from '../constants';
import { Plant } from '../types';

type Category = 'all' | 'low-maintenance' | 'humidity-boosting' | 'bonsai';

const PlantCard: React.FC<{ plant: Plant }> = ({ plant }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="relative h-64">
      <img src={plant.imageUrl} alt={plant.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-brand-green mb-2">{plant.name}</h3>
      <p className="text-brand-brown mb-4">{plant.description}</p>
      <div className="flex flex-wrap gap-2">
        {plant.tags.map(tag => (
          <span key={tag} className="bg-brand-tan/20 text-brand-orange text-sm font-semibold px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const PlantCatalogue: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { id: Category; name: string }[] = [
    { id: 'all', name: 'All Plants' },
    { id: 'low-maintenance', name: 'Low-Maintenance' },
    { id: 'humidity-boosting', name: 'Humidity-Boosting' },
    { id: 'bonsai', name: 'Bonsai' },
  ];

  const filteredPlants = activeCategory === 'all'
    ? PLANTS_DATA
    : PLANTS_DATA.filter(plant => plant.category === activeCategory);

  return (
    <section id="plants" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-green font-serif">NYC-Friendly Plant Catalogue</h2>
          <p className="text-lg text-brand-brown mt-4 max-w-3xl mx-auto">A curated selection of plants that thrive in urban environments.</p>
        </div>
        <div className="flex justify-center mb-8 space-x-2 md:space-x-4">
          {categories.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === id
                  ? 'bg-brand-green text-white shadow-md'
                  : 'bg-gray-200 text-brand-brown hover:bg-brand-brown hover:text-white'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map(plant => (
            <PlantCard key={plant.name} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCatalogue;
