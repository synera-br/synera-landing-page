import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesOverviewSection } from '@/components/sections/ServicesOverviewSection';
import { TechnologyProjectsSection } from '@/components/sections/TechnologyProjectsSection';
import { AiAdvisorSection } from '@/components/sections/AiAdvisorSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverviewSection />
      <TechnologyProjectsSection />
      <AiAdvisorSection />
      <AboutUsSection />
    </>
  );
}
