import Image from 'next/image';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionContainer } from '@/components/SectionContainer';
import { HERO_TITLE, HERO_SUBTITLE, HERO_IMAGE_URL, HERO_IMAGE_HINT } from '@/lib/constants';

export function HeroSection() {
  return (
    <SectionContainer className="pt-0 pb-0 sm:pt-0 sm:pb-0 relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-background to-muted">
      <Image
        src={HERO_IMAGE_URL}
        alt="Synera Hero Background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="opacity-20 z-0"
        data-ai-hint={HERO_IMAGE_HINT}
        priority
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
          {HERO_TITLE}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground sm:text-xl md:text-2xl">
          {HERO_SUBTITLE}
        </p>
        <div className="mt-10">
          <WhatsAppButton size="lg" className="px-10 py-6 text-lg">
            Fale com um Especialista
          </WhatsAppButton>
        </div>
      </div>
    </SectionContainer>
  );
}
