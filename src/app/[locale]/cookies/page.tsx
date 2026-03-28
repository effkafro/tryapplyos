import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "de" ? "Cookie-Richtlinie — ApplyOS" : "Cookie Policy — ApplyOS";
  return { title };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isDE = locale === "de";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="mb-8 text-3xl font-bold">{isDE ? "Cookie-Richtlinie" : "Cookie Policy"}</h1>
        <div className="space-y-6 text-sm leading-relaxed text-[#94a3b8]">
          <p>{isDE ? "Stand: März 2026" : "Last updated: March 2026"}</p>

          {/* 1. Was sind Cookies? */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "1. Was sind Cookies?" : "1. What are Cookies?"}
          </h2>
          <p>
            {isDE
              ? "Cookies sind kleine Textdateien, die von einer Website auf Ihrem Gerät gespeichert werden. Sie dienen dazu, Ihr Nutzungserlebnis zu verbessern, Einstellungen zu speichern und die Nutzung der Website zu analysieren."
              : "Cookies are small text files stored on your device by a website. They serve to improve your user experience, save settings, and analyze website usage."}
          </p>

          {/* 2. Welche Cookies nutzen wir? */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "2. Welche Cookies nutzen wir?" : "2. Which Cookies Do We Use?"}
          </h2>
          <p>
            {isDE
              ? "Diese Website ist eine weitgehend statische Seite mit minimalem Cookie-Einsatz. Wir setzen keine Tracking- oder Marketing-Cookies ein. Falls Vercel Analytics aktiviert ist, können anonymisierte Nutzungsdaten erhoben werden — diese lassen keinen Rückschluss auf einzelne Personen zu."
              : "This website is a largely static site with minimal cookie usage. We do not use tracking or marketing cookies. If Vercel Analytics is enabled, anonymized usage data may be collected — this does not allow conclusions about individual persons."}
          </p>

          {/* 3. Notwendige Cookies */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "3. Notwendige Cookies" : "3. Necessary Cookies"}
          </h2>
          <p>
            {isDE
              ? "Wir verwenden ausschließlich technisch notwendige Cookies, um die grundlegende Funktionalität der Website sicherzustellen:"
              : "We only use technically necessary cookies to ensure the basic functionality of the website:"}
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <span className="font-medium text-[#e2e8f0]">NEXT_LOCALE</span>
              {" — "}
              {isDE
                ? "Speichert Ihre bevorzugte Sprache (Deutsch/Englisch), damit die Website bei Folgebesuchen in der richtigen Sprache angezeigt wird."
                : "Stores your preferred language (German/English) so the website is displayed in the correct language on subsequent visits."}
            </li>
          </ul>

          {/* 4. Ihre Rechte */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "4. Ihre Rechte" : "4. Your Rights"}
          </h2>
          <p>
            {isDE
              ? "Sie können Cookies jederzeit in Ihren Browser-Einstellungen deaktivieren oder löschen. Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität der Website einschränken kann (z.\u00A0B. wird Ihre Sprachpräferenz nicht gespeichert)."
              : "You can disable or delete cookies at any time in your browser settings. Please note that disabling cookies may limit the functionality of the website (e.g., your language preference will not be saved)."}
          </p>
          <p>
            {isDE
              ? "So deaktivieren Sie Cookies in gängigen Browsern:"
              : "How to disable cookies in common browsers:"}
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <span className="font-medium text-[#e2e8f0]">Chrome:</span>
              {" "}
              {isDE
                ? "Einstellungen → Datenschutz und Sicherheit → Cookies und andere Websitedaten"
                : "Settings → Privacy and Security → Cookies and other site data"}
            </li>
            <li>
              <span className="font-medium text-[#e2e8f0]">Safari:</span>
              {" "}
              {isDE
                ? "Einstellungen → Datenschutz → Cookies und Websitedaten verwalten"
                : "Settings → Privacy → Manage Website Data"}
            </li>
            <li>
              <span className="font-medium text-[#e2e8f0]">Firefox:</span>
              {" "}
              {isDE
                ? "Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten"
                : "Settings → Privacy & Security → Cookies and Site Data"}
            </li>
          </ul>

          {/* 5. Kontakt */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "5. Kontakt" : "5. Contact"}
          </h2>
          <p>
            {isDE
              ? "Bei Fragen zur Cookie-Richtlinie wenden Sie sich bitte an: [E-Mail-Adresse]"
              : "For questions about the cookie policy, please contact: [Email address]"}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
