import React, { useState } from 'react';
import { Leaf, Droplets, Sun, Wind, Home, Sparkles, Search, Filter, X } from 'lucide-react';

export default function PlantCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const plants = [
    {
      name: "Snake Plant",
      latin: "Sansevieria trifasciata",
      category: "beginner",
      difficulty: "Easy",
      light: "Low to Bright",
      water: "Every 2-3 weeks",
      humidity: "Low",
      benefits: ["Tolerates neglect", "Air purifying", "Low light champion"],
      description: "The ultimate beginner plant. Thrives on neglect and tolerates the darkest NYC apartments. Adds vertical structure and modern aesthetic.",
      price: "$35",
      care: "Water only when soil is completely dry. Can survive in corners with minimal natural light."
    },
    {
      name: "ZZ Plant",
      latin: "Zamioculcas zamiifolia",
      category: "beginner",
      difficulty: "Easy",
      light: "Low to Medium",
      water: "Every 2-4 weeks",
      humidity: "Low",
      benefits: ["Nearly indestructible", "Glossy foliage", "Drought tolerant"],
      description: "Can live in apartments that feel like caves. Waxy, glossy leaves reflect what little light they get. Perfect for busy New Yorkers.",
      price: "$42",
      care: "Prefers to be underwatered. Thrives in low-light conditions where other plants fail."
    },
    {
      name: "Golden Pothos",
      latin: "Epipremnum aureum",
      category: "beginner",
      difficulty: "Easy",
      light: "Low to Bright",
      water: "Weekly",
      humidity: "Low to Medium",
      benefits: ["Fast growing", "Air purifying", "Beautiful trailing vines"],
      description: "Thrives anywhere. Beautiful cascading vines soften harsh apartment edges. A bedroom or living room transformer.",
      price: "$28",
      care: "Water when top 2 inches of soil are dry. Can be trained to climb or trail beautifully."
    },
    {
      name: "Peace Lily",
      latin: "Spathiphyllum",
      category: "beginner",
      difficulty: "Easy",
      light: "Low to Medium",
      water: "Weekly",
      humidity: "Medium to High",
      benefits: ["Elegant white blooms", "Air purifier", "Humidity lover"],
      description: "Perfect for bathrooms and kitchens. Produces elegant white flowers and actively cleans your air while loving humidity.",
      price: "$38",
      care: "Droops dramatically when thirsty (then perks right back up). Loves being near showers or humidifiers."
    },
    {
      name: "Spider Plant",
      latin: "Chlorophytum comosum",
      category: "beginner",
      difficulty: "Easy",
      light: "Medium to Bright",
      water: "Weekly",
      humidity: "Medium",
      benefits: ["Fast growing", "Produces babies", "Hardy"],
      description: "Great at stabilizing humidity. Produces adorable baby plants you can propagate or gift to friends.",
      price: "$25",
      care: "Loves bright indirect light. Babies can be snipped and planted to create new plants."
    },
    {
      name: "Chinese Evergreen",
      latin: "Aglaonema",
      category: "beginner",
      difficulty: "Easy",
      light: "Low to Medium",
      water: "Weekly",
      humidity: "Medium",
      benefits: ["Variegated beauty", "Low maintenance", "Shade tolerant"],
      description: "A friend to the shade. Stunning variegated leaves brighten dark corners with pops of silver, pink, or red.",
      price: "$45",
      care: "Keep soil slightly moist. Wipe leaves monthly to keep them glossy and vibrant."
    },
    {
      name: "Monstera Deliciosa",
      latin: "Monstera deliciosa",
      category: "humidity",
      difficulty: "Medium",
      light: "Medium to Bright",
      water: "Weekly",
      humidity: "Medium to High",
      benefits: ["Iconic tropical look", "Moisture retention", "Statement piece"],
      description: "The Instagram plant. Massive split leaves create tropical personality and increase local moisture retention. A living sculpture.",
      price: "$68",
      care: "Loves bright indirect light. Mist leaves weekly. Support with a moss pole as it grows."
    },
    {
      name: "Calathea Medallion",
      latin: "Calathea roseopicta",
      category: "humidity",
      difficulty: "Medium",
      light: "Medium",
      water: "2x per week",
      humidity: "High",
      benefits: ["Stunning patterns", "Humidity engine", "Living art"],
      description: "Gorgeous, expressive leaves with intricate patterns. Loves humidity and will tell you when it needs more moisture. A true humidity booster.",
      price: "$52",
      care: "Use filtered water. Mist daily or place near humidifier. Leaves fold up at night—it's normal!"
    },
    {
      name: "Boston Fern",
      latin: "Nephrolepis exaltata",
      category: "humidity",
      difficulty: "Medium",
      light: "Medium to Bright",
      water: "2-3x per week",
      humidity: "High",
      benefits: ["Lush cascading fronds", "Massive humidity output", "Classic beauty"],
      description: "A humidity powerhouse. Perfect near a humidifier or in a bright bathroom. Creates a soft, romantic atmosphere.",
      price: "$48",
      care: "Keep soil consistently moist, not soggy. Weekly misting essential. Trim brown fronds as needed."
    },
    {
      name: "Ficus Bonsai",
      latin: "Ficus retusa",
      category: "bonsai",
      difficulty: "Hard",
      light: "Bright",
      water: "2x per week",
      humidity: "Medium",
      benefits: ["Sculptural beauty", "Beginner-friendly bonsai", "Meditation focus"],
      description: "The most forgiving indoor bonsai. Stable and beautiful with proper care. A living meditation practice.",
      price: "$125",
      care: "Needs bright indirect light. Water when top inch is dry. Regular pruning maintains shape."
    },
    {
      name: "Chinese Elm Bonsai",
      latin: "Ulmus parvifolia",
      category: "bonsai",
      difficulty: "Hard",
      light: "Bright",
      water: "Daily check",
      humidity: "Medium",
      benefits: ["Classic bonsai", "NYC tolerant", "Seasonal interest"],
      description: "A classic indoor bonsai that handles low humidity better than most. Develops beautiful bark texture with age.",
      price: "$145",
      care: "Bright light essential. Check soil daily—never let it dry completely. Wire training in spring."
    },
    {
      name: "Dwarf Jade Bonsai",
      latin: "Portulacaria afra",
      category: "bonsai",
      difficulty: "Medium",
      light: "Bright",
      water: "Weekly",
      humidity: "Low",
      benefits: ["Succulent bonsai", "Low maintenance", "Sculptural"],
      description: "A succulent bonsai—the best of both worlds. Low-maintenance, drought-tolerant, and beautifully sculptural.",
      price: "$95",
      care: "Needs lots of light. Water thoroughly, then let soil dry completely. Perfect for sunny windowsills."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Plants', icon: <Leaf className="w-5 h-5" /> },
    { id: 'beginner', name: 'Beginner Friendly', icon: <Home className="w-5 h-5" /> },
    { id: 'humidity', name: 'Humidity Boosters', icon: <Droplets className="w-5 h-5" /> },
    { id: 'bonsai', name: 'Bonsai Collection', icon: <Sparkles className="w-5 h-5" /> }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'Easy', name: 'Easy' },
    { id: 'Medium', name: 'Medium' },
    { id: 'Hard', name: 'Advanced' }
  ];

  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === 'all' || plant.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || plant.difficulty === selectedDifficulty;
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plant.latin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Hard': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

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
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plant Catalog</h1>
          <p className="text-xl text-emerald-50 max-w-2xl">
            Curated species that thrive in NYC apartments. Every plant is selected for its ability to handle our unique challenges: dry air, low light, and busy lifestyles.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-stone-200 sticky top-[73px] z-30">
        <div className="container mx-auto max-w-6xl px-6 py-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search plants by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-full focus:border-emerald-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.icon}
                <span className="font-medium">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-stone-600" />
            <span className="text-sm font-medium text-stone-700">Difficulty:</span>
            {difficulties.map(diff => (
              <button
                key={diff.id}
                onClick={() => setSelectedDifficulty(diff.id)}
                className={`px-3 py-1 rounded-full text-sm transition ${
                  selectedDifficulty === diff.id
                    ? 'bg-stone-800 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {diff.name}
              </button>
            ))}
          </div>

          <div className="mt-4 text-sm text-stone-600">
            Showing {filteredPlants.length} plant{filteredPlants.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Plant Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.map((plant, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition group overflow-hidden">
                {/* Plant Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-emerald-100 to-stone-100 flex items-center justify-center">
                  <Leaf className="w-24 h-24 text-emerald-300 group-hover:scale-110 transition" />
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-stone-800 mb-1">{plant.name}</h3>
                      <p className="text-sm italic text-stone-500">{plant.latin}</p>
                    </div>
                    <span className="text-2xl font-bold text-emerald-600">{plant.price}</span>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(plant.difficulty)}`}>
                      {plant.difficulty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">{plant.description}</p>

                  {/* Care Requirements */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-amber-500" />
                      <div>
                        <div className="text-xs text-stone-500">Light</div>
                        <div className="font-medium text-stone-700">{plant.light}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <div>
                        <div className="text-xs text-stone-500">Water</div>
                        <div className="font-medium text-stone-700">{plant.water}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-teal-500" />
                      <div>
                        <div className="text-xs text-stone-500">Humidity</div>
                        <div className="font-medium text-stone-700">{plant.humidity}</div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-stone-700 mb-2">Benefits:</div>
                    <div className="flex flex-wrap gap-1">
                      {plant.benefits.map((benefit, j) => (
                        <span key={j} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Care Tip */}
                  <div className="bg-stone-50 rounded-lg p-3 mb-4">
                    <div className="text-xs font-semibold text-stone-700 mb-1">Care Tip:</div>
                    <p className="text-xs text-stone-600">{plant.care}</p>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPlants.length === 0 && (
            <div className="text-center py-20">
              <Leaf className="w-16 h-16 text-stone-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-stone-800 mb-2">No plants found</h3>
              <p className="text-stone-600">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Plant is Right for You?</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Book a free home consultation and we'll analyze your space to recommend the perfect plants for your environment.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition transform hover:scale-105">
            Schedule Free Consultation
          </button>
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