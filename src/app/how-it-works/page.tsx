import { MainLayout } from "@/components/layout/MainLayout";
import { HowItWorksHero, HowItWorksSteps, HowItWorksFeatures, HowItWorksCTA } from "@/components/solutions/HowItWorksContent";

export default function HowItWorksPage() {
  return (
    <MainLayout>
      <HowItWorksHero />
      <HowItWorksSteps />
      <HowItWorksFeatures />
      <HowItWorksCTA />
    </MainLayout>
  );
}