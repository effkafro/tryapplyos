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
        <div className="space-y-6 text-sm leading-relaxed text-e-text-2">
          <p>{isDE ? "Stand: August 2026" : "Last updated: August 2026"}</p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "1. Verantwortlicher" : "1. Controller"}
          </h2>
          <p className="whitespace-pre-line">
            {isDE
              ? 'Simple UG (haftungsbeschränkt)\nc/o ADIUVO Rechtsanwälte PartG mbB\nGrafenberger Allee 125\n40237 Düsseldorf\nE-Mail: Support@tryapplyos.com\n\nNachfolgend "wir" oder "Anbieter" genannt.'
              : "Simple UG (haftungsbeschränkt)\nc/o ADIUVO Rechtsanwälte PartG mbB\nGrafenberger Allee 125\n40237 Düsseldorf, Germany\nEmail: Support@tryapplyos.com\n\nHereinafter referred to as \"we\" or \"provider\"."}
          </p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "2. Erhebung und Verarbeitung personenbezogener Daten" : "2. Collection and Processing of Personal Data"}
          </h2>
          <p>
            {isDE
              ? "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung der App und dieser Website erforderlich ist. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO."
              : "We only process personal data insofar as it is necessary for providing the app and this website. Processing is based on Art. 6(1) GDPR."}
          </p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "3. Datenverarbeitung in der App" : "3. Data Processing in the App"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS ist nur mit einem Nutzerkonto nutzbar. Bei der Registrierung legen wir ein Konto auf unseren Servern (Supabase) an. Ihre Profil- und Bewerbungsdaten werden auf Ihrem Gerät gespeichert und mit Ihrem Konto synchronisiert, damit sie geräteübergreifend verfügbar bleiben und bei Geräteverlust nicht verloren gehen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Für die KI-gestützte Verarbeitung Ihrer Daten holen wir eine gesonderte Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit in den Datenschutz-Einstellungen der App widerrufen können. Folgende Daten werden verarbeitet:"
              : "ApplyOS can only be used with a user account. When you register, we create an account on our servers (Supabase). Your profile and application data are stored on your device and synchronized with your account so that they remain available across devices and are not lost if you lose your device. The legal basis is Art. 6(1)(b) GDPR (performance of contract). For AI-assisted processing of your data, we obtain separate consent (Art. 6(1)(a) GDPR), which you can withdraw at any time in the app's privacy settings. The following data is processed:"}
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>{isDE ? "Profildaten (Kompetenzen, Berufserfahrung, Präferenzen)" : "Profile data (skills, work experience, preferences)"}</li>
            <li>{isDE ? "Stellenangebote und Bewerbungsstatus" : "Job listings and application status"}</li>
            <li>{isDE ? "Generierte Dokumente (Lebensläufe, Anschreiben)" : "Generated documents (resumes, cover letters)"}</li>
          </ul>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "4. KI-gestützte Funktionen" : "4. AI-Powered Features"}
          </h2>
          <p>
            {isDE
              ? "Kernfunktionen von ApplyOS nutzen große Sprachmodelle (KI). Diese Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer gesonderten, ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die wir vor der ersten Nutzung einholen und die Sie jederzeit in den Datenschutz-Einstellungen der App mit Wirkung für die Zukunft widerrufen können. Ohne Einwilligung bleiben die KI-Funktionen deaktiviert; die übrige App bleibt nutzbar. Für die KI-Verarbeitung setzen wir den Dienst OpenRouter (OpenRouter, Inc., USA) als technischen Vermittler ein, der die Anfragen an Sprachmodelle von Google (Gemini) weiterleitet. Folgende Funktionen nutzen KI und übermitteln dabei die jeweils genannten Daten:"
              : "Core features of ApplyOS use large language models (AI). This processing takes place exclusively on the basis of your separate, explicit consent (Art. 6(1)(a) GDPR), which we obtain before first use and which you can withdraw at any time in the app's privacy settings with effect for the future. Without consent, the AI features remain disabled; the rest of the app remains usable. For AI processing we use the service OpenRouter (OpenRouter, Inc., USA) as a technical intermediary, which forwards the requests to language models operated by Google (Gemini). The following features use AI and transmit the data listed:"}
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>{isDE ? "Anschreiben-Generator: Vor- und Nachname, Wunschberuf, Kompetenzen und beruflicher Werdegang sowie die Stellenbeschreibung" : "Cover letter generator: first and last name, desired job, skills and career history, plus the job description"}</li>
            <li>{isDE ? "Lebenslauf-Analyse: der Text Ihres hochgeladenen Lebenslaufs — direkt identifizierende Angaben (Name, Adresse, E-Mail, Telefonnummer, Geburtsdatum) werden vor der Übertragung auf Ihrem Gerät entfernt" : "Résumé analysis: the text of your uploaded résumé — directly identifying details (name, address, email, phone number, date of birth) are removed on your device before transmission"}</li>
            <li>{isDE ? "ATS-Optimierung: Kurzprofil, Werdegang und Kompetenzen (ohne Name und Kontaktdaten) sowie die Stellenbeschreibung" : "ATS optimization: profile summary, career history and skills (without name and contact details), plus the job description"}</li>
            <li>{isDE ? "Kultur-Analyse und Aufgaben-Zusammenfassung von Stellenanzeigen: nur der Text der Stellenanzeige und der Unternehmensname, keine Daten aus Ihrem Profil" : "Culture analysis and task summary of job postings: only the text of the job posting and the company name, no data from your profile"}</li>
            <li>{isDE ? "Interview-Vorbereitung: Stellenbeschreibung und deren Analyse-Ergebnisse, keine Daten aus Ihrem Profil" : "Interview preparation: job description and its analysis results, no data from your profile"}</li>
            <li>{isDE ? "Berufsfeld-Zuordnung: Ihr Wunschberuf und Ihre Kompetenzen, ohne Name und Kontaktdaten" : "Career field matching: your desired job and your skills, without name and contact details"}</li>
          </ul>
          <p>
            {isDE
              ? "Die Server von OpenRouter und Google befinden sich in den USA. Die Übermittlung in dieses Drittland stützen wir auf die EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Zusätzlich übermitteln wir alle Anfragen mit der verbindlichen Vorgabe, dass sie beim Anbieter weder gespeichert noch für das Training von KI-Modellen verwendet werden dürfen (Zero-Data-Retention-Konfiguration); sie werden nur zur unmittelbaren Beantwortung verarbeitet. Jede KI-Funktion unterliegt einem Nutzungslimit. KI-generierte Inhalte werden in der App als solche gekennzeichnet. Automatisierte Entscheidungen mit rechtlicher Wirkung im Sinne des Art. 22 DSGVO finden nicht statt — alle Bewerbungsentscheidungen treffen Sie selbst. Erteilung und Widerruf Ihrer Einwilligung protokollieren wir (Datum, Version der Einwilligungserklärung) zum Nachweis nach Art. 7 DSGVO; dieses Protokoll wird mit Ihrem Konto gelöscht."
              : "The servers of OpenRouter and Google are located in the USA. We base this third-country transfer on the EU Standard Contractual Clauses (Art. 46(2)(c) GDPR). In addition, we submit all requests with the binding requirement that they may neither be stored by the provider nor used for training AI models (zero-data-retention configuration); they are processed solely to generate the immediate response. Each AI feature is subject to a usage limit. AI-generated content is labeled as such in the app. No automated decisions with legal effect within the meaning of Art. 22 GDPR are made — you make all application decisions yourself. We log the granting and withdrawal of your consent (date, version of the consent text) as proof under Art. 7 GDPR; this log is deleted together with your account."}
          </p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "5. Missbrauchsabwehr (Apple DeviceCheck)" : "5. Abuse Prevention (Apple DeviceCheck)"}
          </h2>
          <p>
            {isDE
              ? "Um zu verhindern, dass kostenlose Nutzungskontingente durch wiederholtes Löschen und Neuanlegen von Konten umgangen werden, nutzen wir den DeviceCheck-Dienst von Apple (Apple Inc.). Dabei werden bei Apple zwei gerätebezogene Markierungs-Bits gespeichert; deren Bedeutung ist nur uns bekannt, während wir umgekehrt keine Gerätekennung erhalten — eine Identifizierung Ihres Geräts oder Ihrer Person durch uns ist darüber nicht möglich. Wir speichern lediglich das Prüfergebnis (Kontingent verfügbar/aufgebraucht) mit Monatsbezug zu Ihrem Konto; es wird mit Ihrem Konto gelöscht. Rechtsgrundlage ist unser berechtigtes Interesse an der Verhinderung von Missbrauch unserer kostenlosen Leistungen (Art. 6 Abs. 1 lit. f DSGVO). Sie können dieser Verarbeitung unter den Voraussetzungen des Art. 21 DSGVO widersprechen."
              : "To prevent free usage quotas from being circumvented by repeatedly deleting and re-creating accounts, we use Apple's DeviceCheck service (Apple Inc.). Two device-related marker bits are stored with Apple; only we know their meaning, while we in turn receive no device identifier — we cannot identify your device or your person through this. We only store the check result (quota available/used up) with a month reference linked to your account; it is deleted together with your account. The legal basis is our legitimate interest in preventing abuse of our free services (Art. 6(1)(f) GDPR). You may object to this processing under the conditions of Art. 21 GDPR."}
          </p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "6. Nutzungsstatistiken und Fehlerdiagnose" : "6. Usage Statistics and Error Diagnostics"}
          </h2>
          <p>
            {isDE
              ? "Nur mit Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) erfassen wir in der App statistische Nutzungsdaten und Fehlerberichte über den Dienst PostHog (PostHog Inc.), betrieben auf Servern in der EU (Frankfurt). Die Einwilligung ist standardmäßig deaktiviert und kann jederzeit in den Datenschutz-Einstellungen der App widerrufen werden. Erfasst werden ausschließlich vordefinierte Ereignisse (z. B. welche Funktionen genutzt werden) sowie technische Absturz- und Fehlerberichte — keine Bewerbungsdaten, keine Freitexte, keine Suchbegriffe und keine Standortdaten; die IP-Adresse wird nicht gespeichert. Die Daten werden unter einer zufälligen, geräte-bezogenen Kennung ohne Verknüpfung zu Ihrem Nutzerkonto verarbeitet. Bei Widerruf der Einwilligung wird diese Kennung verworfen; eine spätere erneute Einwilligung beginnt mit einer neuen Kennung."
              : "Only with your explicit consent (Art. 6(1)(a) GDPR) do we collect statistical usage data and error reports in the app via PostHog (PostHog Inc.), operated on servers in the EU (Frankfurt). Consent is disabled by default and can be withdrawn at any time in the app's privacy settings. Only predefined events are collected (e.g. which features are used) as well as technical crash and error reports — no application data, no free text, no search terms, and no location data; the IP address is not stored. The data is processed under a random, device-based identifier with no link to your user account. If you withdraw consent, this identifier is discarded; renewed consent starts with a new identifier."}
          </p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "7. Käufe und Abonnements" : "7. Purchases and Subscriptions"}
          </h2>
          <p>
            {isDE
              ? "Abonnements (ApplyOS Plus / Studi) werden als In-App-Kauf über Apple abgeschlossen. Die Zahlungsabwicklung erfolgt ausschließlich durch Apple als eigenständigen Verantwortlichen; wir erhalten zu keinem Zeitpunkt Zahlungs- oder Kreditkartendaten. Zur Bereitstellung der Premium-Funktionen verarbeiten wir Abonnement-Informationen: Produktkennung, eine pseudonyme Apple-Transaktionsnummer, den Abo-Status und das Ablaufdatum, verknüpft mit Ihrem Nutzerkonto. Apple informiert unsere Server über Statusänderungen Ihres Abonnements (z. B. Verlängerung, Kündigung, Rückerstattung). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Diese Daten werden gelöscht, wenn Sie Ihr Konto löschen."
              : "Subscriptions (ApplyOS Plus / Studi) are purchased as in-app purchases via Apple. Payment processing is carried out exclusively by Apple as an independent controller; we never receive payment or credit card data. To provide premium features, we process subscription information: product identifier, a pseudonymous Apple transaction number, subscription status, and expiry date, linked to your user account. Apple notifies our servers of status changes to your subscription (e.g. renewal, cancellation, refund). The legal basis is Art. 6(1)(b) GDPR (performance of contract). This data is deleted when you delete your account."}
          </p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "8. Keine Weitergabe an Unternehmenskunden" : "8. No Sharing with Corporate Clients"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS hat keine Unternehmenskunden. Ihre Daten werden nicht an Arbeitgeber, Personalvermittler oder sonstige Dritte verkauft oder weitergegeben."
              : "ApplyOS has no corporate clients. Your data is not sold or shared with employers, recruiters, or any other third parties."}
          </p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "9. Hosting und Website" : "9. Hosting and Website"}
          </h2>
          <p>
            {isDE
              ? "Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website werden automatisch technische Daten (IP-Adresse, Browsertyp, Zugriffszeit) in Server-Logfiles gespeichert."
              : "This website is hosted by Vercel Inc. When visiting the website, technical data (IP address, browser type, access time) is automatically stored in server log files."}
          </p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "10. Ihre Rechte" : "10. Your Rights"}
          </h2>
          <p>
            {isDE
              ? "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierfür an die oben genannte E-Mail-Adresse."
              : "You have the right to access, rectification, erasure, restriction of processing, data portability, and objection. For this, please contact the email address mentioned above."}
          </p>

          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "11. Kontakt" : "11. Contact"}
          </h2>
          <p>
            {isDE
              ? "Bei Fragen zum Datenschutz wenden Sie sich bitte an: Support@tryapplyos.com"
              : "For questions about data protection, please contact: Support@tryapplyos.com"}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
