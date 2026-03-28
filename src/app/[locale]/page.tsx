import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { WhyApplyOS } from "@/components/sections/why-applyos";
import { TargetGroups } from "@/components/sections/target-groups";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Faq } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyApplyOS />
        <TargetGroups />
        <HowItWorks />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
