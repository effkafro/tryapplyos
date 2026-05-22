import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Faq } from "@/components/sections/faq";
import { WhyApplyOS } from "@/components/sections/why-applyos";
import { Waitlist } from "@/components/sections/waitlist";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getWaitlistCount } from "@/app/actions/waitlist";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metaJobseeker" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ForJobseekersPage() {
  const initialCount = await getWaitlistCount();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Faq audience="jobseeker" />
        <WhyApplyOS />
        <Waitlist initialCount={initialCount} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
