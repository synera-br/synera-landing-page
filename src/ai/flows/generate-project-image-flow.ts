
'use server';
/**
 * @fileOverview A Genkit flow to generate an image for a project.
 *
 * - generateProjectImage - A function that takes a project description and returns an image data URI.
 * - GenerateProjectImageInput - The input type for the generateProjectImage function.
 * - GenerateProjectImageOutput - The return type for the generateProjectImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectImageInputSchema = z.object({
  projectDescription: z.string().describe('A detailed description of the project for which to generate an image.'),
  promptExtension: z.string().optional().describe('Optional additional instructions for the image generation style or content.')
});
export type GenerateProjectImageInput = z.infer<typeof GenerateProjectImageInputSchema>;

const GenerateProjectImageOutputSchema = z.object({
  imageDataUri: z.string().describe("The generated image as a data URI. Expected format: 'data:image/png;base64,<encoded_data>'."),
});
export type GenerateProjectImageOutput = z.infer<typeof GenerateProjectImageOutputSchema>;

export async function generateProjectImage(input: GenerateProjectImageInput): Promise<GenerateProjectImageOutput> {
  return generateProjectImageFlow(input);
}

const generateProjectImageFlow = ai.defineFlow(
  {
    name: 'generateProjectImageFlow',
    inputSchema: GenerateProjectImageInputSchema,
    outputSchema: GenerateProjectImageOutputSchema,
  },
  async (input) => {
    const basePrompt = `Generate a visually appealing and professional image representing: "${input.projectDescription}". The image should be suitable for a tech company's project portfolio. Style: modern, professional, conceptual. Aspect ratio: landscape, suitable for a project thumbnail (e.g., similar to 600x400).`;
    const fullPrompt = input.promptExtension ? `${basePrompt} Additional instructions: ${input.promptExtension}` : basePrompt;
    
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp', // Must use this model for image generation
      prompt: fullPrompt,
      config: {
        responseModalities: ['IMAGE', 'TEXT'], // Must include IMAGE and TEXT
      },
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed or no image URL was returned.');
    }

    return { imageDataUri: media.url };
  }
);
