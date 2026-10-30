import { MainLayout } from "@/components/layout/MainLayout";
import { SolutionsHero, SolutionsGrid, SolutionsCTA } from "@/components/solutions/SolutionsContent";

export default function SolutionsPage() {
  return (
    <MainLayout>
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsCTA />
    </MainLayout>
  );
}