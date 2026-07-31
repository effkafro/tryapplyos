import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "de" ? "Nutzungsbedingungen — ApplyOS" : "Terms of Service — ApplyOS";
  return { title };
}

export default async function NutzungsbedingungenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isDE = locale === "de";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="mb-8 text-3xl font-bold">{isDE ? "Nutzungsbedingungen" : "Terms of Service"}</h1>
        <div className="space-y-6 text-sm leading-relaxed text-e-text-2">
          <p>{isDE ? "Stand: Juli 2026" : "Last updated: July 2026"}</p>

          {/* 1. Geltungsbereich */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "1. Geltungsbereich" : "1. Scope"}
          </h2>
          <p>
            {isDE
              ? "Diese Nutzungsbedingungen gelten für die Nutzung der mobilen App &quot;ApplyOS&quot; sowie der zugehörigen Website. Mit der Nutzung der App oder Website erklären Sie sich mit diesen Bedingungen einverstanden."
              : "These Terms of Service apply to the use of the mobile app \"ApplyOS\" and the associated website. By using the app or website, you agree to these terms."}
          </p>

          {/* 2. Nutzung der App */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "2. Nutzung der App" : "2. Use of the App"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS ist ein KI-gestützter Karriere-Agent, der Sie bei der Jobsuche und Berufsorientierung unterstützt. Die App richtet sich an Personen ab 16 Jahren. Sie sind verantwortlich für die Richtigkeit der von Ihnen eingegebenen Profildaten."
              : "ApplyOS is an AI-powered career agent that supports you in job searching and career orientation. The app is intended for persons aged 16 and older. You are responsible for the accuracy of the profile data you enter."}
          </p>

          {/* 3. Abonnements */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "3. Kostenlose Nutzung und Abonnements" : "3. Free Use and Subscriptions"}
          </h2>
          <p>
            {isDE
              ? "Die Kernfunktionen von ApplyOS (Profil, Job-Radar, Bewerbungs-Pipeline) sind kostenlos nutzbar. Erweiterte Zusatzfunktionen können über ein automatisch verlängerndes Abonnement freigeschaltet werden („ApplyOS Plus“ bzw. „ApplyOS Studi“ für Nutzer im Schulabgänger-Modus, d. h. bei Ausbildungs- und Studienplatzsuche). Abonnements sind mit Laufzeiten von 1 Monat, 3 Monaten oder 1 Jahr erhältlich; die jeweils gültigen Preise werden vor dem Kauf in der App und im App Store angezeigt. Einzelne Zusatzfunktionen unterliegen fairen Nutzungskontingenten (z. B. einer monatlichen Höchstzahl KI-gestützter Vorgänge); Details werden in der App angezeigt."
              : "The core features of ApplyOS (profile, job radar, application pipeline) are free to use. Additional premium features can be unlocked via an auto-renewing subscription (“ApplyOS Plus” or “ApplyOS Studi” for users in school-leaver mode, i.e. searching for apprenticeships or study places). Subscriptions are available with terms of 1 month, 3 months, or 1 year; the applicable prices are displayed in the app and in the App Store before purchase. Certain premium features are subject to fair-use quotas (e.g. a monthly maximum of AI-assisted operations); details are shown in the app."}
          </p>
          <p>
            {isDE
              ? "Der Kauf erfolgt als In-App-Kauf über Ihr Apple-Konto und wird von Apple abgewickelt; wir erhalten keine Zahlungsdaten. Neukunden erhalten einmalig ein kostenloses Probeabo von 7 Tagen (einmal pro Apple-ID). Abonnements — einschließlich des Probeabos — verlängern sich automatisch um die jeweilige Laufzeit bzw. gehen in ein kostenpflichtiges Abonnement über, sofern sie nicht mindestens 24 Stunden vor Ende der laufenden Periode gekündigt werden. Die Kündigung ist jederzeit in den Abonnement-Einstellungen Ihres Apple-Kontos möglich und wirkt zum Ende der laufenden Periode. Erstattungen richten sich nach den Bedingungen von Apple und können unter reportaproblem.apple.com beantragt werden; gesetzliche Widerrufsrechte gegenüber Apple bleiben unberührt."
              : "Purchases are made as in-app purchases via your Apple account and are processed by Apple; we do not receive any payment data. New customers receive a one-time free trial of 7 days (once per Apple ID). Subscriptions — including the trial — renew automatically for the respective term or convert into a paid subscription unless cancelled at least 24 hours before the end of the current period. You can cancel at any time in the subscription settings of your Apple account, effective at the end of the current period. Refunds are subject to Apple's terms and can be requested at reportaproblem.apple.com; statutory withdrawal rights vis-à-vis Apple remain unaffected."}
          </p>

          {/* 4. Stellenangebote */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "4. Stellenangebote" : "4. Job Listings"}
          </h2>
          <p>
            {isDE
              ? "Die in ApplyOS angezeigten Stellenangebote stammen aus einer der größten Jobdatenbanken Deutschlands. ApplyOS übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der angezeigten Stellenangebote. Wir sind weder Vermittler noch Arbeitgeber und haben keinen Einfluss auf den Inhalt der Stellenanzeigen."
              : "The job listings displayed in ApplyOS come from one of Germany's largest job databases. ApplyOS does not guarantee the accuracy, completeness, or timeliness of displayed job listings. We are neither an employment agency nor an employer and have no influence on the content of job advertisements."}
          </p>

          {/* 5. Generierte Inhalte */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "5. Generierte Inhalte" : "5. Generated Content"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS kann mithilfe von Künstlicher Intelligenz Anschreiben, Lebensläufe und andere Dokumente generieren. Diese Inhalte sind als Entwürfe zu verstehen. Sie sind als Nutzer allein verantwortlich für die Überprüfung, Anpassung und finale Verwendung aller generierten Dokumente. ApplyOS übernimmt keine Haftung für Inhalte, die durch die KI erstellt wurden."
              : "ApplyOS can generate cover letters, resumes, and other documents using artificial intelligence. These contents are to be understood as drafts. As a user, you are solely responsible for reviewing, adapting, and final use of all generated documents. ApplyOS assumes no liability for content created by the AI."}
          </p>

          {/* 6. Verfügbarkeit */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "6. Verfügbarkeit" : "6. Availability"}
          </h2>
          <p>
            {isDE
              ? "Wir bemühen uns, die App und Website jederzeit verfügbar zu halten, können jedoch keine ununterbrochene Verfügbarkeit garantieren. Wartungsarbeiten, technische Störungen oder höhere Gewalt können zu vorübergehenden Einschränkungen führen."
              : "We strive to keep the app and website available at all times but cannot guarantee uninterrupted availability. Maintenance, technical issues, or force majeure may lead to temporary restrictions."}
          </p>

          {/* 7. Haftungsbeschränkung */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "7. Haftungsbeschränkung" : "7. Limitation of Liability"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS wird &quot;wie besehen&quot; bereitgestellt. Wir haften nicht für Schäden, die aus der Nutzung der App oder Website entstehen, es sei denn, diese beruhen auf vorsätzlichem oder grob fahrlässigem Verhalten unsererseits. Insbesondere haften wir nicht für den Erfolg von Bewerbungen oder die Qualität der KI-generierten Inhalte."
              : "ApplyOS is provided \"as is\". We are not liable for damages arising from the use of the app or website, unless caused by intentional or grossly negligent conduct on our part. In particular, we are not liable for the success of applications or the quality of AI-generated content."}
          </p>

          {/* 8. Änderungen der Nutzungsbedingungen */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "8. Änderungen der Nutzungsbedingungen" : "8. Changes to Terms"}
          </h2>
          <p>
            {isDE
              ? "Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite veröffentlicht. Die fortgesetzte Nutzung der App nach Veröffentlichung von Änderungen gilt als Zustimmung zu den aktualisierten Bedingungen."
              : "We reserve the right to modify these Terms of Service at any time. Changes will be published on this page. Continued use of the app after publication of changes constitutes acceptance of the updated terms."}
          </p>

          {/* 9. Anwendbares Recht */}
          <h2 className="text-lg font-semibold text-e-text">
            {isDE ? "9. Anwendbares Recht" : "9. Applicable Law"}
          </h2>
          <p>
            {isDE
              ? "Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Anbieters."
              : "The laws of the Federal Republic of Germany apply. The place of jurisdiction is, to the extent permitted by law, the registered office of the provider."}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
