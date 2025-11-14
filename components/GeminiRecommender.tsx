
import React, { useState } from 'react';
import { getPlantRecommendation } from '../services/geminiService';

type LightLevel = 'Low' | 'Medium' | 'Bright';
type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Expert';

const GeminiRecommender: React.FC = () => {
  const [light, setLight] = useState<LightLevel>('Low');
  const [experience, setExperience] = useState<ExperienceLevel>('Beginner');
  const [notes, setNotes] = useState('');
  const [recommendation, setRecommendation] = useState<{ recommendation: string; reason: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setRecommendation(null);
    try {
      const result = await getPlantRecommendation({ light, experience, notes });
      setRecommendation(result);
    } catch (err) {
      setError('Sorry, I couldn\'t find a recommendation. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="recommender" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-brand-brown rounded-lg shadow-xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-beige mb-4">Find Your Perfect Plant Match</h2>
            <p className="text-brand-beige/80 mb-6">
              Not sure where to start? Let our AI-powered assistant recommend the ideal plant for your space and lifestyle. Just tell us a bit about your home.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="light" className="block text-sm font-medium text-brand-beige">Light Level</label>
                <select id="light" value={light} onChange={(e) => setLight(e.target.value as LightLevel)} className="mt-1 block w-full bg-brand-beige/20 border-brand-tan/50 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-tan focus:border-brand-tan">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>Bright</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-brand-beige">Your Experience</label>
                <select id="experience" value={experience} onChange={(e) => setExperience(e.target.value as ExperienceLevel)} className="mt-1 block w-full bg-brand-beige/20 border-brand-tan/50 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-tan focus:border-brand-tan">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-brand-beige">Notes (e.g., "My apartment is like a cave")</label>
                <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} className="mt-1 block w-full bg-brand-beige/20 border-brand-tan/50 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-tan focus:border-brand-tan" />
              </div>
              <button type="submit" disabled={isLoading} className="w-full bg-brand-tan hover:bg-brand-orange text-brand-green font-bold py-3 px-6 rounded-lg transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                {isLoading ? 'Thinking...' : 'Get Recommendation'}
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center p-8 bg-brand-beige/10 rounded-lg min-h-[200px]">
            {isLoading && <div className="text-brand-beige">Checking our greenhouse...</div>}
            {error && <div className="text-red-300">{error}</div>}
            {recommendation && (
              <div className="text-center animate-fade-in">
                <p className="text-lg text-brand-beige/80">Our recommendation for you is...</p>
                <h3 className="text-4xl font-bold text-brand-tan my-2">{recommendation.recommendation}</h3>
                <p className="text-brand-beige">{recommendation.reason}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiRecommender;
