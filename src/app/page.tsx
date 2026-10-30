import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { Benefits } from "@/components/home/Benefits";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <DashboardPreview />
      <Benefits />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </MainLayout>
  );
}