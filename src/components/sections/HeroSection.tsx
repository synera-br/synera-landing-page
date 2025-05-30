import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/SectionContainer';
import { HERO_TITLE, HERO_SUBTITLE, HERO_IMAGE_URL, HERO_IMAGE_HINT } from '@/lib/constants';

const sectionLinks = [
  { href: '#services-overview', label: 'Nossos Serviços' },
  { href: '#technology-projects', label: 'Projetos de Sucesso' },
  { href: '#ai-advisor', label: 'Consultor IA' },
  { href: '#about-us', label: 'Sobre Nós' },
];

export function HeroSection() {
  return (
    <SectionContainer className="pt-0 pb-0 sm:pt-0 sm:pb-0 relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
      <Image
        src={HERO_IMAGE_URL}
        alt="Synera Hero Background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="opacity-40 z-0" 
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
        <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-3">
          {sectionLinks.map((link) => (
            <Button key={link.href} asChild variant="outline" size="default" className="bg-background/70 hover:bg-background/90 backdrop-blur-sm">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
