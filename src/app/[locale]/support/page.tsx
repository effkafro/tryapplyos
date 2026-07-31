import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

const SUPPORT_EMAIL = "Support@tryapplyos.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE ? "Support & Hilfe — ApplyOS" : "Support & Help — ApplyOS",
    description: isDE
      ? "Hilfe zu ApplyOS: Kontakt zum Support, Konto und Abo verwalten, Datenschutzanfragen."
      : "Help with ApplyOS: contact support, manage your account and subscription, privacy requests.",
  };
}

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isDE = locale === "de";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="mb-8 text-3xl font-bold">{isDE ? "Support & Hilfe" : "Support & Help"}</h1>
        <div className="space-y-6 text-sm leading-relaxed text-e-text-2">
          <p>
            {isDE
              ? "Du hast eine Frage, ein Problem mit der App oder einen Wunsch? Wir helfen dir gerne weiter — auf Deutsch oder Englisch."
              : "Do you have a question, a problem with the app, or a feature request? We're happy to help — in German or English."}
          </p>

          {/* 1. Kontakt */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "1. Kontakt zum Support" : "1. Contact Support"}
          </h2>
          <p>
            {isDE ? "E-Mail: " : "Email: "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-e-accent underline underline-offset-2 hover:text-e-accent"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p>
            {isDE
              ? "Wir antworten in der Regel innerhalb von zwei Werktagen (Mo–Fr). Einen telefonischen Support bieten wir derzeit nicht an."
              : "We usually respond within two business days (Mon–Fri). We currently do not offer phone support."}
          </p>

          {/* 2. Das hilft uns bei deiner Anfrage */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "2. Das hilft uns bei deiner Anfrage" : "2. What Helps Us Help You"}
          </h2>
          <p>
            {isDE
              ? "Damit wir dir schnell helfen können, nenne uns bitte:"
              : "So we can help you quickly, please tell us:"}
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              {isDE
                ? "die E-Mail-Adresse deines ApplyOS-Kontos"
                : "the email address of your ApplyOS account"}
            </li>
            <li>
              {isDE
                ? "Gerät und Betriebssystem-Version (z. B. iPhone 15, iOS 18.4)"
                : "device and OS version (e.g. iPhone 15, iOS 18.4)"}
            </li>
            <li>
              {isDE
                ? "die App-Version (in der App unter Einstellungen zu finden)"
                : "the app version (shown in the app's settings)"}
            </li>
            <li>
              {isDE
                ? "eine kurze Beschreibung: Was hast du getan, was ist passiert, was hast du erwartet?"
                : "a short description: what did you do, what happened, what did you expect?"}
            </li>
            <li>
              {isDE
                ? "wenn möglich ein Screenshot oder eine Bildschirmaufnahme"
                : "a screenshot or screen recording, if possible"}
            </li>
          </ul>
          <p>
            {isDE
              ? "Bitte sende uns niemals dein Passwort. Wir werden dich auch nie danach fragen."
              : "Please never send us your password. We will never ask you for it."}
          </p>

          {/* 3. Konto */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "3. Konto und Zugang" : "3. Account and Access"}
          </h2>
          <p>
            {isDE
              ? "Passwort vergessen? Nutze in der App die Funktion „Passwort vergessen“. Du erhältst eine E-Mail mit einem Link, über den du ein neues Passwort vergeben kannst. Prüfe bitte auch deinen Spam-Ordner."
              : "Forgot your password? Use the “Forgot password” function in the app. You will receive an email with a link to set a new password. Please also check your spam folder."}
          </p>
          <p>
            {isDE
              ? "Konto löschen: Du kannst dein Konto samt aller zugehörigen Daten jederzeit löschen lassen. Schreibe uns dazu von der im Konto hinterlegten E-Mail-Adresse an "
              : "Delete your account: You can have your account and all associated data deleted at any time. Just write to us from the email address registered with your account at "}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(isDE ? "Konto löschen" : "Delete account")}`}
              className="text-e-accent underline underline-offset-2 hover:text-e-accent"
            >
              {SUPPORT_EMAIL}
            </a>
            {isDE
              ? ". Wir bestätigen die Löschung per E-Mail. Ein laufendes Abonnement musst du zusätzlich über dein Apple-Konto kündigen (siehe Abschnitt 4)."
              : ". We will confirm the deletion by email. An active subscription must additionally be cancelled via your Apple account (see section 4)."}
          </p>

          {/* 4. Abonnement */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "4. Abonnement verwalten und kündigen" : "4. Managing and Cancelling Your Subscription"}
          </h2>
          <p>
            {isDE
              ? "Abonnements (ApplyOS Plus bzw. ApplyOS Studi) werden als In-App-Kauf über dein Apple-Konto abgewickelt. Verwaltung und Kündigung erfolgen deshalb direkt bei Apple: Einstellungen → dein Name → Abonnements. Die Kündigung muss mindestens 24 Stunden vor Ende der laufenden Periode erfolgen und wirkt zum Ende dieser Periode."
              : "Subscriptions (ApplyOS Plus or ApplyOS Studi) are processed as in-app purchases via your Apple account. Management and cancellation therefore happen directly with Apple: Settings → your name → Subscriptions. Cancellation must take place at least 24 hours before the end of the current period and takes effect at the end of that period."}
          </p>
          <p>
            {isDE
              ? "Erstattungen wickelt ebenfalls Apple ab. Einen Antrag stellst du unter "
              : "Refunds are also handled by Apple. You can request one at "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-e-accent underline underline-offset-2 hover:text-e-accent"
            >
              reportaproblem.apple.com
            </a>
            {isDE
              ? ". Die Einzelheiten findest du in unseren "
              : ". You can find the details in our "}
            <Link
              href="/nutzungsbedingungen"
              className="text-e-accent underline underline-offset-2 hover:text-e-accent"
            >
              {isDE ? "Nutzungsbedingungen" : "Terms of Service"}
            </Link>
            .
          </p>

          {/* 5. Datenschutz */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "5. Datenschutz und deine Rechte" : "5. Privacy and Your Rights"}
          </h2>
          <p>
            {isDE
              ? "Anfragen zu Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit oder Widerspruch richtest du bitte an "
              : "Requests regarding access, rectification, erasure, restriction of processing, data portability, or objection should be sent to "}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(isDE ? "Datenschutzanfrage" : "Privacy request")}`}
              className="text-e-accent underline underline-offset-2 hover:text-e-accent"
            >
              {SUPPORT_EMAIL}
            </a>
            {isDE ? ". Mehr dazu in unserer " : ". More on this in our "}
            <Link
              href="/datenschutz"
              className="text-e-accent underline underline-offset-2 hover:text-e-accent"
            >
              {isDE ? "Datenschutzerklärung" : "Privacy Policy"}
            </Link>
            .
          </p>

          {/* 6. Fehler und Wünsche */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "6. Fehler melden und Feedback" : "6. Reporting Bugs and Feedback"}
          </h2>
          <p>
            {isDE
              ? "Fehler, unpassende Job-Vorschläge oder problematische Inhalte kannst du uns jederzeit melden — ebenso Ideen für neue Funktionen. Schreib uns einfach an "
              : "You can report bugs, unsuitable job suggestions, or objectionable content to us at any time — as well as ideas for new features. Just write to us at "}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(isDE ? "Feedback zur App" : "App feedback")}`}
              className="text-e-accent underline underline-offset-2 hover:text-e-accent"
            >
              {SUPPORT_EMAIL}
            </a>
            {isDE
              ? ". Meldungen zu problematischen Inhalten bearbeiten wir innerhalb von 24 Stunden."
              : ". Reports of objectionable content are processed within 24 hours."}
          </p>

          {/* 7. Weitere Informationen */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "7. Weitere Informationen" : "7. Further Information"}
          </h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <a
                href={`/${locale}#faq`}
                className="text-e-accent underline underline-offset-2 hover:text-e-accent"
              >
                {isDE ? "Häufige Fragen (FAQ)" : "Frequently asked questions (FAQ)"}
              </a>
            </li>
            <li>
              <Link
                href="/nutzungsbedingungen"
                className="text-e-accent underline underline-offset-2 hover:text-e-accent"
              >
                {isDE ? "Nutzungsbedingungen" : "Terms of Service"}
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="text-e-accent underline underline-offset-2 hover:text-e-accent"
              >
                {isDE ? "Datenschutzerklärung" : "Privacy Policy"}
              </Link>
            </li>
            <li>
              <Link
                href="/impressum"
                className="text-e-accent underline underline-offset-2 hover:text-e-accent"
              >
                {isDE ? "Impressum (Anbieterangaben)" : "Imprint (provider information)"}
              </Link>
            </li>
          </ul>

          <p className="whitespace-pre-line">
            {isDE
              ? "Anbieter:\nSimple UG (haftungsbeschränkt)\nc/o ADIUVO Rechtsanwälte PartG mbB\nGrafenberger Allee 125\n40237 Düsseldorf"
              : "Provider:\nSimple UG (haftungsbeschränkt)\nc/o ADIUVO Rechtsanwälte PartG mbB\nGrafenberger Allee 125\n40237 Düsseldorf, Germany"}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
