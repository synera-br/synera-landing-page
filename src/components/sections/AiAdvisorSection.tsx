"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionTitle } from '@/components/SectionTitle';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { aiTechAdvisor, type AiTechAdvisorInput, type AiTechAdvisorOutput } from '@/ai/flows/ai-tech-advisor';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { AI_ADVISOR_SECTION_TITLE, AI_ADVISOR_SECTION_DESCRIPTION } from '@/lib/constants';

const FormSchema = z.object({
  projectRequirements: z.string().min(50, { message: "Por favor, descreva seus requisitos com pelo menos 50 caracteres." }),
});
type FormData = z.infer<typeof FormSchema>;

export function AiAdvisorSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AiTechAdvisorOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      projectRequirements: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setRecommendation(null);
    try {
      const result = await aiTechAdvisor(data as AiTechAdvisorInput);
      setRecommendation(result);
      toast({
        title: "Recomendação Gerada!",
        description: "Sua sugestão de tecnologia está pronta.",
      });
    } catch (error) {
      console.error("AI Advisor error:", error);
      toast({
        title: "Erro ao Gerar Recomendação",
        description: "Houve um problema ao contatar o assistente de IA. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionContainer id="ai-advisor">
      <SectionTitle description={AI_ADVISOR_SECTION_DESCRIPTION}>
        {AI_ADVISOR_SECTION_TITLE}
      </SectionTitle>
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Wand2 className="h-6 w-6" />
              Descreva seu Projeto
            </CardTitle>
            <CardDescription>
              Forneça detalhes sobre suas necessidades de negócio e requisitos técnicos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Textarea
                  {...form.register("projectRequirements")}
                  placeholder="Ex: Estou construindo uma plataforma de e-learning que precisa ser escalável, suportar vídeos ao vivo e ter um sistema de recomendação personalizado..."
                  rows={8}
                  className="bg-background focus:ring-primary"
                  disabled={isLoading}
                />
                {form.formState.errors.projectRequirements && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.projectRequirements.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isLoading} variant="default">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  "Obter Recomendações"
                )}
              </Button>
            </form>

            {recommendation && (
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Sugestões Tecnológicas:</h3>
                <p className="text-foreground whitespace-pre-line">{recommendation.recommendations}</p>
              </div>
            )}
          </CardContent>
        </Card>
        <div className="mt-12 text-center">
          <WhatsAppButton>
            Discutir com um Especialista
          </WhatsAppButton>
        </div>
      </div>
    </SectionContainer>
  );
}
