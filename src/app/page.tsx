import { CtaSection } from "@/components/sections/CtaSection";
import { DeliveriesSection } from "@/components/sections/DeliveriesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <DeliveriesSection />
      <CtaSection />
    </main>
  );
}
