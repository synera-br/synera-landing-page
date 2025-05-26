// src/ai/flows/ai-tech-advisor.ts
'use server';
/**
 * @fileOverview An AI-powered tech advisor flow that provides personalized technology recommendations based on user input.
 *
 * - aiTechAdvisor - A function that takes project requirements as input and returns technology recommendations.
 * - AiTechAdvisorInput - The input type for the aiTechAdvisor function.
 * - AiTechAdvisorOutput - The return type for the aiTechAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiTechAdvisorInputSchema = z.object({
  projectRequirements: z
    .string()
    .describe('Detailed description of the project requirements and business needs.'),
});
export type AiTechAdvisorInput = z.infer<typeof AiTechAdvisorInputSchema>;

const AiTechAdvisorOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized technology recommendations based on the project requirements.'),
});
export type AiTechAdvisorOutput = z.infer<typeof AiTechAdvisorOutputSchema>;

export async function aiTechAdvisor(input: AiTechAdvisorInput): Promise<AiTechAdvisorOutput> {
  return aiTechAdvisorFlow(input);
}

const aiTechAdvisorPrompt = ai.definePrompt({
  name: 'aiTechAdvisorPrompt',
  input: {schema: AiTechAdvisorInputSchema},
  output: {schema: AiTechAdvisorOutputSchema},
  prompt: `You are an AI tech advisor for Synera, a technology consulting company. A user will provide
project requirements, and you will provide technology recommendations based on those requirements.

Project Requirements: {{{projectRequirements}}}

Provide personalized technology recommendations. Be specific with technologies that Synera provides consulting on.
(Kubernetes, Microservice, Platform Engineer, DevOps, and SRE, ArgoCD, Pipelines). The response should be concise, but informative.
`,
});

const aiTechAdvisorFlow = ai.defineFlow(
  {
    name: 'aiTechAdvisorFlow',
    inputSchema: AiTechAdvisorInputSchema,
    outputSchema: AiTechAdvisorOutputSchema,
  },
  async input => {
    const {output} = await aiTechAdvisorPrompt(input);
    return output!;
  }
);
