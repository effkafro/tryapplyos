import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { WhyApplyOS } from "@/components/sections/why-applyos";
import { TargetGroups } from "@/components/sections/target-groups";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Waitlist } from "@/components/sections/waitlist";
import { Faq } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getWaitlistCount } from "@/app/actions/waitlist";

// Fallback wenn Supabase nicht konfiguriert ist
const FALLBACK_INITIAL_COUNT = 28;

export default async function Home() {
  const count = await getWaitlistCount();
  const initialCount = count > 0 ? count : FALLBACK_INITIAL_COUNT;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyApplyOS />
        <TargetGroups />
        <HowItWorks />
        <Waitlist initialCount={initialCount} />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
