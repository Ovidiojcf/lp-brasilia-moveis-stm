import { CtaSection } from "@/components/sections/CtaSection";
import { DeliveriesSection } from "@/components/sections/DeliveriesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { Header } from "@/components/layout/Header";
import { LocationSection } from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <DeliveriesSection />
      <LocationSection />
      <CtaSection />
    </main>
  );
}
