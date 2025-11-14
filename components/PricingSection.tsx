
import React from 'react';
import { PLANS_DATA } from '../constants';
import { SubscriptionPlan } from '../types';

const PlanCard: React.FC<{ plan: SubscriptionPlan }> = ({ plan }) => {
  const isHighlighted = plan.tier === 'Healthy Home';

  return (
    <div className={`border rounded-lg p-8 flex flex-col ${isHighlighted ? 'bg-brand-green text-white border-brand-tan scale-105 shadow-2xl' : 'bg-white border-gray-200'}`}>
      <h3 className={`text-2xl font-bold ${isHighlighted ? 'text-brand-tan' : 'text-brand-green'}`}>{plan.name}</h3>
      <p className={`text-4xl font-bold my-4 ${isHighlighted ? 'text-white' : 'text-brand-green'}`}>{plan.price}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map(feature => (
          <li key={feature} className="flex items-center">
            <svg className={`w-5 h-5 mr-2 ${isHighlighted ? 'text-brand-tan' : 'text-brand-green'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 font-bold rounded-lg transition-colors duration-300 ${isHighlighted ? 'bg-brand-tan text-brand-green hover:bg-brand-orange' : 'bg-brand-green text-white hover:bg-brand-brown'}`}>
        Choose Plan
      </button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-green font-serif">Subscription Care Plans</h2>
          <p className="text-lg text-brand-brown mt-4 max-w-3xl mx-auto">Keep your plants happy and healthy without the hassle. We take care of everything.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLANS_DATA.map(plan => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
