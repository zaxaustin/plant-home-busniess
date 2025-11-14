import { GoogleGenAI, Type } from '@google/genai';
import { PLANTS_DATA } from '../constants';

// FIX: Per coding guidelines, the API key must be read directly from
// process.env.API_KEY without fallbacks or extra checks.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface RecommendationParams {
  light: string;
  experience: string;
  notes: string;
}

export async function getPlantRecommendation({ light, experience, notes }: RecommendationParams): Promise<{ recommendation: string, reason:string }> {
  const plantList = PLANTS_DATA.map(p => `- ${p.name}: ${p.description}`).join('\n');

  const prompt = `
    You are an expert botanist for a company called Urban Canopy NYC. 
    Your goal is to recommend the perfect plant for a customer based on their environment and experience level.

    Customer Details:
    - Light Level: ${light}
    - Experience: ${experience}
    - Additional Notes: ${notes || 'None'}

    Available Plants:
    ${plantList}

    Based on all this information, choose the single best plant from the list. 
    Provide your response as a JSON object with two keys: "recommendation" (the plant's name) and "reason" (a short, friendly, one-sentence explanation of why it's a good fit).
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: { type: Type.STRING },
            reason: { type: Type.STRING },
          },
          required: ['recommendation', 'reason'],
        },
      },
    });

    const text = response.text.trim();
    const result = JSON.parse(text);

    // Validate if the recommended plant is in our list to prevent hallucinations
    const isValidRecommendation = PLANTS_DATA.some(p => p.name.toLowerCase() === result.recommendation.toLowerCase());
    if (!isValidRecommendation) {
        // Fallback if model hallucinates a plant not on the list
        return {
            recommendation: "Snake Plant",
            reason: "It's a super resilient and stylish choice that fits almost any indoor setting!"
        };
    }

    return result;
  } catch (error) {
    console.error('Error getting recommendation from Gemini:', error);
    throw new Error('Failed to get recommendation.');
  }
}
