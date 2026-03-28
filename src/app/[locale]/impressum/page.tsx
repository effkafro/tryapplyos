import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "de" ? "Impressum — ApplyOS" : "Imprint — ApplyOS";
  return { title };
}

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isDE = locale === "de";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="mb-8 text-3xl font-bold">{isDE ? "Impressum" : "Imprint / Legal Notice"}</h1>
        <div className="space-y-6 text-sm leading-relaxed text-[#94a3b8]">

          {/* Angaben gemäß §5 DDG */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "Angaben gemäß §5 DDG" : "Information pursuant to §5 DDG"}
          </h2>
          <p className="whitespace-pre-line">
            {isDE
              ? "[Ihr Name / Firmenname]\n[Straße Hausnummer]\n[PLZ Ort]\n\nE-Mail: [E-Mail-Adresse]\nTelefon: [Telefonnummer]"
              : "[Your Name / Company Name]\n[Street Address]\n[Postal Code City]\n\nEmail: [Email address]\nPhone: [Phone number]"}
          </p>

          {/* Verantwortlich für den Inhalt */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "Verantwortlich für den Inhalt nach §18 Abs. 2 MStV" : "Responsible for content pursuant to §18(2) MStV"}
          </h2>
          <p className="whitespace-pre-line">
            {isDE
              ? "[Ihr Name]\n[Straße Hausnummer]\n[PLZ Ort]"
              : "[Your Name]\n[Street Address]\n[Postal Code City]"}
          </p>

          {/* Streitschlichtung */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "Streitschlichtung" : "Dispute Resolution"}
          </h2>
          <p>
            {isDE
              ? "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:"
              : "The European Commission provides a platform for online dispute resolution (ODR):"}
          </p>
          <p>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] underline underline-offset-2 hover:text-[#5eead4]"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>
            {isDE
              ? "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
              : "We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board."}
          </p>

          {/* Haftung für Inhalte */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "Haftung für Inhalte" : "Liability for Content"}
          </h2>
          <p>
            {isDE
              ? "Als Diensteanbieter sind wir gemäß §7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
              : "As a service provider, we are responsible for our own content on these pages in accordance with §7(1) DDG and general laws. However, pursuant to §§8 to 10 DDG, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity."}
          </p>

          {/* Haftung für Links */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "Haftung für Links" : "Liability for Links"}
          </h2>
          <p>
            {isDE
              ? "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar."
              : "Our website contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking."}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
