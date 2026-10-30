import { MainLayout } from "@/components/layout/MainLayout";
import { AboutHero, MissionVision, OurApproach, Roadmap, AboutCTA } from "@/components/solutions/AboutContent";

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <MissionVision />
      <OurApproach />
      <Roadmap />
      <AboutCTA />
    </MainLayout>
  );
}