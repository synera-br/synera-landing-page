import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SERVICES_DATA, COMPANY_NAME } from '@/lib/constants';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionTitle } from '@/components/SectionTitle';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

type Props = {
  params: { serviceName: string };
};

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    serviceName: service.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const serviceName = params.serviceName;
  const service = SERVICES_DATA.find((s) => s.slug === serviceName);

  if (!service) {
    return {
      title: `Serviço não encontrado | ${COMPANY_NAME}`,
    };
  }

  return {
    title: `${service.name} | ${COMPANY_NAME}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | ${COMPANY_NAME}`,
      description: service.shortDescription,
      images: [{ url: service.image }], // Assuming service.image is an absolute URL
    },
  };
}

export default function ServicePage({ params }: Props) {
  const serviceName = params.serviceName;
  const service = SERVICES_DATA.find((s) => s.slug === serviceName);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <SectionContainer className="pt-12 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8">
          {IconComponent && <IconComponent className="h-16 w-16 text-primary flex-shrink-0" />}
          <SectionTitle className="text-left mb-0 pb-0 sm:pb-0" description={service.shortDescription}>
            {service.name}
          </SectionTitle>
        </div>
        
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-12">
          <Image
            src={service.image}
            alt={service.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={service.dataAiHint}
          />
        </div>

        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Descrição Detalhada</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground whitespace-pre-line">{service.longDescription}</p>
          </CardContent>
        </Card>
        
        {service.details && service.details.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Principais Aspectos do Serviço</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.details.map((detail, index) => (
                <Card key={index} className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                       <CheckCircle className="h-5 w-5 text-accent mr-2" />
                      {detail.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{detail.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <WhatsAppButton 
            message={`Olá! Gostaria de saber mais sobre o serviço de ${service.name} da Synera.`}
            size="lg"
            className="px-8 py-4"
          >
            Solicitar Orçamento para {service.name}
          </WhatsAppButton>
        </div>
      </div>
    </SectionContainer>
  );
}
