import Image from 'next/image';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionTitle } from '@/components/SectionTitle';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CheckCircle } from 'lucide-react';
import { 
  COMPANY_VALUES, 
  ABOUT_US_TEXT_PARAGRAPH_1,
  ABOUT_US_TEXT_PARAGRAPH_2,
  ABOUT_US_IMAGE_URL,
  ABOUT_US_IMAGE_HINT,
  ABOUT_US_SECTION_TITLE
} from '@/lib/constants';

export function AboutUsSection() {
  return (
    <SectionContainer id="about-us" className="bg-muted">
      <SectionTitle>{ABOUT_US_SECTION_TITLE}</SectionTitle>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6 text-lg text-foreground">
          <p>{ABOUT_US_TEXT_PARAGRAPH_1}</p>
          <p>{ABOUT_US_TEXT_PARAGRAPH_2}</p>
          
          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Nossos Valores</h3>
          <ul className="space-y-3">
            {COMPANY_VALUES.map((value) => (
              <li key={value} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={ABOUT_US_IMAGE_URL}
            alt="Equipe Synera em colaboração"
            layout="fill"
            objectFit="cover"
            data-ai-hint={ABOUT_US_IMAGE_HINT}
          />
        </div>
      </div>
      <div className="mt-16 text-center">
        <WhatsAppButton>
          Converse com Nossa Equipe
        </WhatsAppButton>
      </div>
    </SectionContainer>
  );
}
