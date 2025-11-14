import React, { useState, useEffect } from 'react';
import { Leaf, Droplets, Sun, Heart, Check, Menu, X, ArrowRight } from 'lucide-react';

export default function UrbanCanopyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Plant Matching & Home Setup",
      description: "We analyze your space's light, humidity, and lifestyle to create the perfect plant ecosystem for your home."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Care Plan Subscriptions",
      description: "Monthly check-ups, repotting, pest control, and expert care so your plants thrive while you live."
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Bonsai Specialty Care",
      description: "Prestige-level bonsai cultivation with LED optimization, wiring, seasonal trimming, and workshops."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Corporate Packages",
      description: "Transform your office with living installations that boost air quality and employee wellbeing."
    }
  ];

  const plants = [
    { name: "Snake Plant", level: "Beginner", benefit: "Low maintenance, air purifying" },
    { name: "Pothos", level: "Beginner", benefit: "Thrives anywhere, humidity boosting" },
    { name: "Monstera", level: "Intermediate", benefit: "Tropical character, moisture retention" },
    { name: "Calathea", level: "Intermediate", benefit: "Gorgeous patterns, humidity engine" },
    { name: "Ficus Bonsai", level: "Advanced", benefit: "Sculptural beauty, meditation focus" },
    { name: "Chinese Elm", level: "Advanced", benefit: "Classic bonsai, NYC-friendly" }
  ];

  const plans = [
    {
      name: "Basic",
      price: "$49",
      features: ["Monthly check-up", "Watering guidance", "Pest inspection", "Care tips"]
    },
    {
      name: "Healthy Home",
      price: "$89",
      features: ["Everything in Basic", "Soil refresh", "Pruning & shaping", "Fertilization plan", "LED tuning"],
      popular: true
    },
    {
      name: "Bonsai Guardian",
      price: "$149",
      features: ["Everything in Healthy Home", "Bonsai wiring", "Seasonal styling", "Humidity optimization", "Priority support"]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-stone-800">Urban Canopy NYC</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-stone-700 hover:text-emerald-600 transition">Services</a>
              <a href="#plants" className="text-stone-700 hover:text-emerald-600 transition">Plants</a>
              <a href="#plans" className="text-stone-700 hover:text-emerald-600 transition">Plans</a>
              <a href="#contact" className="text-stone-700 hover:text-emerald-600 transition">Contact</a>
            </div>

            <button 
              className="md:hidden text-stone-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#services" className="block text-stone-700 hover:text-emerald-600">Services</a>
              <a href="#plants" className="block text-stone-700 hover:text-emerald-600">Plants</a>
              <a href="#plans" className="block text-stone-700 hover:text-emerald-600">Plans</a>
              <a href="#contact" className="block text-stone-700 hover:text-emerald-600">Contact</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6 leading-tight">
              Breathe Life Into<br />Your NYC Space
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto">
              We don't just sell plants. We create micro-ecosystems designed for New York apartments—bringing calm, clean air, and living beauty to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition transform hover:scale-105 flex items-center justify-center gap-2">
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition">
                View Plant Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-stone-800 mb-16">
            Made for NYC Living
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Dry Winter Air", desc: "Humidity-boosting plants that thrive despite aggressive heating systems" },
              { title: "Low Natural Light", desc: "Species matched to your apartment's specific light conditions" },
              { title: "Busy Schedules", desc: "Low-maintenance ecosystems with professional care subscriptions" }
            ].map((problem, i) => (
              <div key={i} className="p-6 rounded-2xl bg-stone-50 hover:bg-emerald-50 transition">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">{problem.title}</h3>
                <p className="text-stone-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-stone-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-stone-800 mb-4">
            Our Services
          </h2>
          <p className="text-center text-stone-600 mb-16 max-w-2xl mx-auto">
            From consultation to long-term care, we handle every aspect of bringing healthy plant life into your space.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition group">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Catalog Preview */}
      <section id="plants" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-stone-800 mb-4">
            NYC-Friendly Plants
          </h2>
          <p className="text-center text-stone-600 mb-16 max-w-2xl mx-auto">
            Curated species that thrive in the unique conditions of New York apartments.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {plants.map((plant, i) => (
              <div key={i} className="border-2 border-stone-200 rounded-xl p-6 hover:border-emerald-400 transition group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-800">{plant.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    plant.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    plant.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {plant.level}
                  </span>
                </div>
                <p className="text-stone-600 text-sm">{plant.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="plans" className="py-20 px-6 bg-stone-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Care Subscriptions
          </h2>
          <p className="text-center text-stone-300 mb-16 max-w-2xl mx-auto">
            Recurring professional care so your plants thrive while you focus on living.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-emerald-600 transform scale-105' 
                  : 'bg-stone-800'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-emerald-600 text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price}<span className="text-lg font-normal">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? 'bg-white text-emerald-600 hover:bg-stone-100'
                    : 'bg-emerald-600 hover:bg-emerald-700'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Book a free consultation and let's create your perfect indoor ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full text-stone-800 w-full sm:w-auto"
            />
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
          <p className="mt-6 text-emerald-100 text-sm">
            Serving all five boroughs • Free delivery on orders over $150
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-stone-400">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-6 h-6 text-emerald-600" />
                <span className="text-white font-bold">Urban Canopy NYC</span>
              </div>
              <p className="text-sm">
                Bringing green life and calm to New York apartments, one plant at a time.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition">Home Consultations</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Care Subscriptions</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Bonsai Care</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Corporate Packages</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition">Plant Care Guide</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Workshops</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition">Instagram</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">TikTok</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Email Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">(555) CANOPY-1</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Urban Canopy NYC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}