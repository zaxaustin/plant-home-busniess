import React, { useState } from 'react';
import { Leaf, Wind, Heart, Brain, Sparkles, Droplets, Sun, ThermometerSun, AlertCircle, CheckCircle, BookOpen, TrendingUp, Smile, Home } from 'lucide-react';

export default function EducationWellness() {
  const [activeTab, setActiveTab] = useState('air');
  const [expandedTip, setExpandedTip] = useState(null);

  const airBenefits = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Natural Air Purification",
      description: "Plants absorb carbon dioxide and release oxygen through photosynthesis. Some species also filter harmful VOCs (volatile organic compounds) like formaldehyde, benzene, and trichloroethylene from indoor air.",
      science: "NASA's Clean Air Study found that certain houseplants can remove up to 87% of air toxins in 24 hours."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Humidity Regulation",
      description: "Plants release moisture vapor through transpiration, increasing indoor humidity by 5-10%. This is especially crucial during NYC winters when heating systems dry out the air.",
      science: "Studies show that maintaining 40-60% humidity reduces respiratory infections and improves skin health."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Reduced Airborne Dust",
      description: "Plant leaves trap dust particles and airborne pollutants, acting as natural air filters. Regular leaf cleaning keeps this system efficient.",
      science: "Research indicates rooms with plants have 20% less dust than those without."
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: "Temperature Moderation",
      description: "Through evapotranspiration, plants can cool rooms by several degrees in summer and help retain warmth in winter by creating insulating air pockets.",
      science: "A room with several plants can be 2-5°F cooler than a plant-free space."
    }
  ];

  const mentalHealthBenefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Reduced Stress & Anxiety",
      description: "Interacting with plants lowers cortisol levels and promotes relaxation. The simple act of caring for a living thing creates mindfulness and routine.",
      impact: "Studies show that just being around plants can reduce stress levels by up to 37%."
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Improved Mood & Focus",
      description: "Plants in workspaces increase productivity by 15% and improve concentration. Natural elements help reduce mental fatigue and boost creativity.",
      impact: "Hospital patients with plants in their rooms require less pain medication and have shorter recovery times."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sense of Purpose & Accomplishment",
      description: "Nurturing plants provides a sense of responsibility and achievement. Watching something grow from your care is deeply rewarding.",
      impact: "Gardening and plant care have been shown to reduce symptoms of depression and improve overall life satisfaction."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Connection to Nature",
      description: "In urban environments, plants provide essential biophilic connection. They bring life and seasonal change into concrete jungles.",
      impact: "Biophilic design—incorporating natural elements—improves cognitive function and emotional well-being by up to 15%."
    }
  ];

  const bestPractices = [
    {
      category: "Light Management",
      icon: <Sun className="w-6 h-6" />,
      tips: [
        {
          title: "Understand Your Light Levels",
          description: "NYC apartments have unique light challenges. South-facing windows get the most light, north-facing the least. East gets gentle morning sun, west gets intense afternoon rays.",
          action: "Observe your space at different times of day. Use your phone's shadow test: sharp shadow = bright light, fuzzy = medium, barely visible = low light."
        },
        {
          title: "Rotate Plants Regularly",
          description: "Plants grow toward light sources. Rotating them 90° every few weeks ensures even growth and prevents lopsided development.",
          action: "Set a phone reminder to rotate plants every 2-3 weeks, especially those near windows."
        },
        {
          title: "Consider LED Grow Lights",
          description: "For low-light apartments or winter months, full-spectrum LED grow lights can supplement natural light without adding heat or raising electricity bills significantly.",
          action: "Place lights 6-12 inches above plants. Run 12-14 hours daily for most species."
        }
      ]
    },
    {
      category: "Watering Wisdom",
      icon: <Droplets className="w-6 h-6" />,
      tips: [
        {
          title: "The Finger Test",
          description: "Most plant deaths come from overwatering, not underwatering. Before watering, stick your finger 2 inches into the soil. If it's dry, water. If moist, wait.",
          action: "Create a simple watering schedule based on each plant's needs, but always check soil first."
        },
        {
          title: "Water Quality Matters",
          description: "NYC tap water contains chlorine and fluoride that can harm sensitive plants. Letting water sit overnight allows chlorine to evaporate.",
          action: "Fill your watering can after each use so water is ready and room-temperature for next time."
        },
        {
          title: "Drainage is Critical",
          description: "Pots must have drainage holes. Sitting water causes root rot—the #1 killer of houseplants. Use saucers to catch excess water.",
          action: "Water until you see it drain from the bottom, then empty the saucer after 30 minutes."
        },
        {
          title: "Seasonal Adjustments",
          description: "Plants need less water in winter when growth slows. Summer heat and longer days mean more frequent watering.",
          action: "Reduce watering frequency by about 30-50% in winter months."
        }
      ]
    },
    {
      category: "Humidity Control",
      icon: <Wind className="w-6 h-6" />,
      tips: [
        {
          title: "Combat NYC Winter Dryness",
          description: "Steam radiators drop humidity below 20%. Tropical plants need 40-60%. Group plants together to create humidity microclimates.",
          action: "Place humidity-loving plants in bathrooms or kitchens where natural moisture is higher."
        },
        {
          title: "Pebble Tray Method",
          description: "Place plants on trays filled with pebbles and water (water level below pot bottom). As water evaporates, it creates localized humidity.",
          action: "Refill trays weekly. This is especially effective for ferns, calatheas, and orchids."
        },
        {
          title: "Misting vs. Humidifiers",
          description: "Misting provides temporary relief but humidifiers offer consistent humidity. For serious plant collections, a small humidifier is worth the investment.",
          action: "If misting, do it in the morning so leaves dry before nightfall to prevent fungal issues."
        }
      ]
    },
    {
      category: "Feeding & Maintenance",
      icon: <TrendingUp className="w-6 h-6" />,
      tips: [
        {
          title: "Fertilize During Growing Season",
          description: "Plants actively grow spring through summer and need nutrients. Use diluted liquid fertilizer every 2-4 weeks during this period.",
          action: "Use half the recommended strength to avoid fertilizer burn. No feeding in fall/winter when plants are dormant."
        },
        {
          title: "Clean Leaves Regularly",
          description: "Dust blocks light absorption and clogs pores. Wipe leaves monthly with a damp cloth to keep photosynthesis efficient.",
          action: "Support large leaves with one hand underneath while gently wiping with the other."
        },
        {
          title: "Repot Every 1-2 Years",
          description: "When roots circle the pot bottom or growth slows dramatically, it's time to size up. Spring is the best repotting season.",
          action: "Choose pots 1-2 inches larger in diameter. Refresh soil even if not sizing up."
        },
        {
          title: "Pest Prevention",
          description: "Check plants weekly for signs of pests: sticky leaves (aphids), webs (spider mites), white fuzz (mealybugs). Early detection is key.",
          action: "Isolate new plants for 2 weeks. Quarantine any plant showing pest signs immediately."
        }
      ]
    },
    {
      category: "NYC-Specific Tips",
      icon: <Home className="w-6 h-6" />,
      tips: [
        {
          title: "Dealing with Radiator Heat",
          description: "Steam radiators create extreme heat and dryness. Keep plants at least 3 feet away from radiators and use humidity trays.",
          action: "Place a shallow tray of water near (not on) radiators to add moisture to the air."
        },
        {
          title: "Small Space Solutions",
          description: "Maximize vertical space with hanging planters, wall-mounted pots, and plant stands. Trailing plants like pothos are perfect for high shelves.",
          action: "Use corners and vertical walls. Hanging plants draw the eye up and make spaces feel larger."
        },
        {
          title: "Seasonal Light Changes",
          description: "Winter sun is weaker and days shorter. Plants near windows in summer might need to move closer in winter.",
          action: "Be prepared to rearrange plants seasonally for optimal light exposure."
        }
      ]
    }
  ];

  const topAirPurifiers = [
    { name: "Snake Plant", superpower: "Converts CO₂ to oxygen at night" },
    { name: "Peace Lily", superpower: "Removes mold spores from air" },
    { name: "Spider Plant", superpower: "Removes formaldehyde and xylene" },
    { name: "Pothos", superpower: "Filters benzene and carbon monoxide" },
    { name: "Boston Fern", superpower: "Best humidity booster" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-stone-800">Urban Canopy NYC</span>
            </div>
            <a href="#" className="text-stone-700 hover:text-emerald-600 transition">← Back to Home</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Plants Are Life Support</h1>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto">
            More than decoration, houseplants are active participants in your health—filtering air, boosting mood, and creating the calm spaces New Yorkers desperately need.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-stone-200 sticky top-[73px] z-30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap gap-2 py-4">
            <button
              onClick={() => setActiveTab('air')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                activeTab === 'air'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Wind className="w-5 h-5" />
              Air Quality
            </button>
            <button
              onClick={() => setActiveTab('mental')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                activeTab === 'mental'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Heart className="w-5 h-5" />
              Mental Health
            </button>
            <button
              onClick={() => setActiveTab('practices')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                activeTab === 'practices'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              Best Practices
            </button>
          </div>
        </div>
      </section>

      {/* Air Quality Tab */}
      {activeTab === 'air' && (
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-800 mb-4">How Plants Clean Your Air</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Your apartment isn't just filled with furniture—it's filled with invisible chemicals from paint, carpets, cleaning products, and city pollution. Plants actively filter these toxins.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {airBenefits.map((benefit, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{benefit.title}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-sm text-blue-900 font-medium">
                      <span className="font-bold">Science:</span> {benefit.science}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Air Purifiers */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6 text-center">Top 5 Air-Purifying Champions</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {topAirPurifiers.map((plant, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <Leaf className="w-8 h-8 mx-auto mb-2" />
                    <h4 className="font-bold mb-2">{plant.name}</h4>
                    <p className="text-sm text-emerald-100">{plant.superpower}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mental Health Tab */}
      {activeTab === 'mental' && (
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-800 mb-4">Plants & Your Mental Wellbeing</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                In a city that never sleeps, plants offer something precious: stillness, growth, and a living reminder that life persists even in concrete jungles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {mentalHealthBenefits.map((benefit, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{benefit.title}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <p className="text-sm text-purple-900 font-medium">
                      <span className="font-bold">Impact:</span> {benefit.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mindfulness Section */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">The Practice of Plant Care</h3>
              <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
                Watering, pruning, and observing plants creates mindful moments. It's meditation disguised as maintenance—a gentle routine that grounds you in the present.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Morning Ritual</h4>
                  <p className="text-sm text-purple-100">Check plants before coffee. Start your day with life.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Stress Relief</h4>
                  <p className="text-sm text-purple-100">Touching soil and leaves lowers cortisol immediately.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">Growth Mindset</h4>
                  <p className="text-sm text-purple-100">Watching plants grow reminds you that progress takes time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Best Practices Tab */}
      {activeTab === 'practices' && (
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-800 mb-4">Essential Care Guide</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Master these fundamentals and your plants won't just survive—they'll thrive. These are battle-tested practices for NYC apartment living.
              </p>
            </div>

            <div className="space-y-8">
              {bestPractices.map((section, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        {section.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{section.category}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    {section.tips.map((tip, j) => (
                      <div key={j} className="border-l-4 border-emerald-500 pl-6 py-2">
                        <button
                          onClick={() => setExpandedTip(expandedTip === `${i}-${j}` ? null : `${i}-${j}`)}
                          className="w-full text-left"
                        >
                          <h4 className="text-xl font-bold text-stone-800 mb-2 flex items-center justify-between">
                            {tip.title}
                            <span className="text-emerald-600">{expandedTip === `${i}-${j}` ? '−' : '+'}</span>
                          </h4>
                        </button>
                        
                        {expandedTip === `${i}-${j}` && (
                          <div className="mt-3 space-y-3">
                            <p className="text-stone-600 leading-relaxed">{tip.description}</p>
                            <div className="bg-emerald-50 rounded-lg p-4">
                              <p className="text-sm font-semibold text-emerald-900 mb-1 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Action Step:
                              </p>
                              <p className="text-sm text-emerald-800">{tip.action}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Common Mistakes */}
            <div className="mt-16 bg-amber-50 border-2 border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">Common Mistakes to Avoid</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-amber-900"><strong>Overwatering:</strong> More plants die from too much water than too little. Always check soil first.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-amber-900"><strong>Wrong light placement:</strong> "Low light" doesn't mean "no light." Even shade plants need some brightness.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-amber-900"><strong>Ignoring humidity:</strong> NYC winter heating is brutal. Group plants together or use humidity trays.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-amber-900"><strong>Repotting too often:</strong> Plants like being slightly root-bound. Only repot when truly necessary.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-amber-900"><strong>Giving up too quickly:</strong> Yellow leaves happen. Brown tips are normal. Plants recover. Be patient.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Indoor Ecosystem?</h2>
          <p className="text-xl text-stone-300 mb-8">
            Let us help you choose the perfect plants for your space and lifestyle. We'll set you up for success from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-stone-800 transition">
              Browse Plant Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-stone-900 text-stone-400 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="w-6 h-6 text-emerald-600" />
            <span className="text-white font-bold">Urban Canopy NYC</span>
          </div>
          <p className="text-sm">&copy; 2025 Urban Canopy NYC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}