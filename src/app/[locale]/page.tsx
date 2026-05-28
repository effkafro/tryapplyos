import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { WhyApplyOS } from "@/components/sections/why-applyos";
import { TargetGroups } from "@/components/sections/target-groups";
import { Waitlist } from "@/components/sections/waitlist";
import { Faq } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getWaitlistCount } from "@/app/actions/waitlist";
import { redirect } from "@/i18n/navigation";

type Locale = "de" | "en";
type RouteParams = Promise<{ locale: Locale }>;
type SearchParams = Promise<{ path?: string }>;

export default async function Home({
  params,
  searchParams,
}: {
  params: RouteParams;
  searchParams: SearchParams;
}) {
  const { locale } = await params;
  const search = await searchParams;

  // Backward-Compat: ?path=schueler / ?path=jobseeker leiten auf die neuen Sub-Pages um
  if (search.path === "schueler" || search.path === "student") {
    redirect({ href: "/fuer-schueler", locale });
  }
  if (search.path === "jobseeker") {
    redirect({ href: "/fuer-jobsuchende", locale });
  }

  // Roher DB-Count. Waitlist-Component addiert WAITLIST_BASE_COUNT für die Anzeige.
  const initialCount = await getWaitlistCount();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TargetGroups />
        <WhyApplyOS />
        <Waitlist initialCount={initialCount} />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
