
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url('https://picsum.photos/seed/nycapartment/1600/900')` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-4 animate-fade-in-down">
          Breathe Life Into Your City Home.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          We don’t just sell plants. We design your personal urban canopy—a micro-ecosystem for a healthier, calmer, greener life.
        </p>
        <a 
          href="#contact" 
          className="bg-brand-tan hover:bg-brand-orange text-brand-green font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
