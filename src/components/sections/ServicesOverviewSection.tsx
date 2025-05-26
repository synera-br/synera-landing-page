import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionTitle } from '@/components/SectionTitle';
import { SERVICES_DATA, SERVICE_ICONS, SERVICES_SECTION_TITLE, SERVICES_SECTION_DESCRIPTION } from '@/lib/constants';
import { WhatsAppButton } from '../WhatsAppButton';
import { ArrowRight } from 'lucide-react';

export function ServicesOverviewSection() {
  return (
    <SectionContainer>
      <SectionTitle description={SERVICES_SECTION_DESCRIPTION}>
        {SERVICES_SECTION_TITLE}
      </SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SERVICES_DATA.map((service) => {
          const IconComponent = service.icon || SERVICE_ICONS.default;
          return (
            <Card key={service.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <IconComponent className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl font-semibold text-primary">{service.name}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground min-h-[3em] line-clamp-2">{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4">
                <Button asChild variant="link" className="text-accent p-0 hover:text-primary">
                  <Link href={`/services/${service.slug}`}>
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="mt-16 text-center">
        <WhatsAppButton>
          Discuta suas Necessidades
        </WhatsAppButton>
      </div>
    </SectionContainer>
  );
}
