
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-brand-green mb-2">{service.title}</h3>
    <p className="text-brand-brown">{service.description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-green font-serif">Your Personal Plant Stylist</h2>
          <p className="text-lg text-brand-brown mt-4 max-w-3xl mx-auto">From selection to long-term care, we provide everything you need to create a thriving indoor ecosystem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
