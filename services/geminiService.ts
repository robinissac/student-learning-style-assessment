import { GoogleGenAI } from "@google/genai";
import { PersonalityType } from "../types";

const apiKey = process.env.API_KEY || '';

export const getAIStudyTips = async (personalityType: PersonalityType, description: string): Promise<string> => {
  if (!apiKey) {
    return "AI tips are unavailable. Please configure the API_KEY to receive personalized advice.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // We use gemini-2.5-flash for fast, responsive text generation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert educational psychologist specializing in the "Genius Test" methodology (Dynamo, Blaze, Tempo, Steel). 
      A student has taken the assessment and their result is: "${personalityType}".
      Description context: "${description}".
      
      Please provide 5 distinct, actionable, and encouraging study tips specifically tailored for this Genius profile.
      
      Rules for advice:
      - **Dynamo (Ideas Smart / Spring)**: Focus on visual learning, big picture concepts, creative expression, and using mind maps. They learn best by answering "What?".
      - **Blaze (People Smart / Summer)**: Focus on study groups, teaching others, auditory learning, and storytelling. They learn best by answering "Who?".
      - **Tempo (Senses Smart / Autumn)**: Focus on timing, pacing, steady routines, hands-on activity, and avoiding rush. They learn best by answering "When?".
      - **Steel (Systems Smart / Winter)**: Focus on data, logical frameworks, individual study, clear structures, and details. They learn best by answering "How?".

      Keep the tone friendly, empowering, and motivational.
      Format the output as a single, numbered list.
      Do not include a preamble like "Here are your tips", just go straight to the tips.`,
    });

    return response.text || "Could not generate tips at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Sorry, we couldn't connect to the AI coach right now. Please try again later. Error: ${error.message}`;
  }
};