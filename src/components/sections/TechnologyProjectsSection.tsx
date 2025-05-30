import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionTitle } from '@/components/SectionTitle';
import { PROJECTS_DATA, PROJECTS_SECTION_TITLE, PROJECTS_SECTION_DESCRIPTION } from '@/lib/constants';
import { WhatsAppButton } from '../WhatsAppButton';

export function TechnologyProjectsSection() {
  return (
    <SectionContainer id="technology-projects" className="bg-muted">
      <SectionTitle description={PROJECTS_SECTION_DESCRIPTION}>
        {PROJECTS_SECTION_TITLE}
      </SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS_DATA.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.dataAiHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 text-foreground">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <WhatsAppButton>
          Conheça mais Projetos
        </WhatsAppButton>
      </div>
    </SectionContainer>
  );
}
