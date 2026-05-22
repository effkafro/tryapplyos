import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSchueler } from "@/components/sections/hero-schueler";
import { FeaturesSchueler } from "@/components/sections/features-schueler";
import { HowItWorksSchueler } from "@/components/sections/how-it-works-schueler";
import { Faq } from "@/components/sections/faq";
import { WhyApplyOSSchueler } from "@/components/sections/why-applyos-schueler";
import { Waitlist } from "@/components/sections/waitlist";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getWaitlistCount } from "@/app/actions/waitlist";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metaSchueler" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ForStudentsPage() {
  const initialCount = await getWaitlistCount();

  return (
    <>
      <Navbar />
      <main>
        <HeroSchueler />
        <FeaturesSchueler />
        <HowItWorksSchueler />
        <Faq audience="schueler" />
        <WhyApplyOSSchueler />
        <Waitlist initialCount={initialCount} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
