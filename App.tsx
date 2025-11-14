
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PlantCatalogue from './components/PlantCatalogue';
import PricingSection from './components/PricingSection';
import GeminiRecommender from './components/GeminiRecommender';
import Footer from './components/Footer';
import TechnicalBlueprint from './components/TechnicalBlueprint';
import BlogSection from './components/BlogSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <PlantCatalogue />
        <GeminiRecommender />
        <PricingSection />
        <BlogSection />
        <TechnicalBlueprint />
      </main>
      <Footer />
    </div>
  );
};

export default App;
