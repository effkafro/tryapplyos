import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "de" ? "Datenschutzerklärung — ApplyOS" : "Privacy Policy — ApplyOS";
  return { title };
}

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isDE = locale === "de";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="mb-8 text-3xl font-bold">{isDE ? "Datenschutzerklärung" : "Privacy Policy"}</h1>
        <div className="space-y-6 text-sm leading-relaxed text-[#94a3b8]">
          <p>{isDE ? "Stand: März 2026" : "Last updated: March 2026"}</p>

          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "1. Verantwortlicher" : "1. Controller"}
          </h2>
          <p className="whitespace-pre-line">
            {isDE
              ? '[Ihr Name / Firmenname]\n[Adresse]\n[E-Mail]\n\nNachfolgend "wir" oder "Anbieter" genannt.'
              : "[Your Name / Company Name]\n[Address]\n[Email]\n\nHereinafter referred to as \"we\" or \"provider\"."}
          </p>

          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "2. Erhebung und Verarbeitung personenbezogener Daten" : "2. Collection and Processing of Personal Data"}
          </h2>
          <p>
            {isDE
              ? "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung der App und dieser Website erforderlich ist. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO."
              : "We only process personal data insofar as it is necessary for providing the app and this website. Processing is based on Art. 6(1) GDPR."}
          </p>

          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "3. Datenverarbeitung in der App" : "3. Data Processing in the App"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS speichert Ihre Profildaten primär lokal auf Ihrem Gerät (SwiftData). Eine optionale Synchronisation mit unseren Servern (Supabase) erfolgt nur mit Ihrer ausdrücklichen Einwilligung. Folgende Daten werden verarbeitet:"
              : "ApplyOS stores your profile data primarily locally on your device (SwiftData). Optional synchronization with our servers (Supabase) only occurs with your explicit consent. The following data is processed:"}
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>{isDE ? "Profildaten (Kompetenzen, Berufserfahrung, Präferenzen)" : "Profile data (skills, work experience, preferences)"}</li>
            <li>{isDE ? "Stellenangebote und Bewerbungsstatus" : "Job listings and application status"}</li>
            <li>{isDE ? "Generierte Dokumente (Lebensläufe, Anschreiben)" : "Generated documents (resumes, cover letters)"}</li>
          </ul>

          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "4. Keine Weitergabe an Unternehmenskunden" : "4. No Sharing with Corporate Clients"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS hat keine Unternehmenskunden. Ihre Daten werden nicht an Arbeitgeber, Personalvermittler oder sonstige Dritte verkauft oder weitergegeben."
              : "ApplyOS has no corporate clients. Your data is not sold or shared with employers, recruiters, or any other third parties."}
          </p>

          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "5. Hosting und Website" : "5. Hosting and Website"}
          </h2>
          <p>
            {isDE
              ? "Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website werden automatisch technische Daten (IP-Adresse, Browsertyp, Zugriffszeit) in Server-Logfiles gespeichert."
              : "This website is hosted by Vercel Inc. When visiting the website, technical data (IP address, browser type, access time) is automatically stored in server log files."}
          </p>

          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "6. Ihre Rechte" : "6. Your Rights"}
          </h2>
          <p>
            {isDE
              ? "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierfür an die oben genannte E-Mail-Adresse."
              : "You have the right to access, rectification, erasure, restriction of processing, data portability, and objection. For this, please contact the email address mentioned above."}
          </p>

          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "7. Kontakt" : "7. Contact"}
          </h2>
          <p>
            {isDE
              ? "Bei Fragen zum Datenschutz wenden Sie sich bitte an: [E-Mail-Adresse]"
              : "For questions about data protection, please contact: [Email address]"}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
