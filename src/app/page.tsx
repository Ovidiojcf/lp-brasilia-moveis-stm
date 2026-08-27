import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <CtaSection />
    </main>
  );
}
