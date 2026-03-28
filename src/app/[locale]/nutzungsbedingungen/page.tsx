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
        <div className="space-y-6 text-sm leading-relaxed text-[#94a3b8]">
          <p>{isDE ? "Stand: März 2026" : "Last updated: March 2026"}</p>

          {/* 1. Geltungsbereich */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "1. Geltungsbereich" : "1. Scope"}
          </h2>
          <p>
            {isDE
              ? "Diese Nutzungsbedingungen gelten für die Nutzung der mobilen App &quot;ApplyOS&quot; sowie der zugehörigen Website. Mit der Nutzung der App oder Website erklären Sie sich mit diesen Bedingungen einverstanden."
              : "These Terms of Service apply to the use of the mobile app \"ApplyOS\" and the associated website. By using the app or website, you agree to these terms."}
          </p>

          {/* 2. Nutzung der App */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "2. Nutzung der App" : "2. Use of the App"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS ist ein KI-gestützter Karriere-Agent, der Sie bei der Jobsuche und Berufsorientierung unterstützt. Die App richtet sich an Personen ab 16 Jahren. Sie sind verantwortlich für die Richtigkeit der von Ihnen eingegebenen Profildaten."
              : "ApplyOS is an AI-powered career agent that supports you in job searching and career orientation. The app is intended for persons aged 16 and older. You are responsible for the accuracy of the profile data you enter."}
          </p>

          {/* 3. Stellenangebote */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "3. Stellenangebote" : "3. Job Listings"}
          </h2>
          <p>
            {isDE
              ? "Die in ApplyOS angezeigten Stellenangebote stammen von der Bundesagentur für Arbeit. ApplyOS übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der angezeigten Stellenangebote. Wir sind weder Vermittler noch Arbeitgeber und haben keinen Einfluss auf den Inhalt der Stellenanzeigen."
              : "The job listings displayed in ApplyOS come from the German Federal Employment Agency (Bundesagentur für Arbeit). ApplyOS does not guarantee the accuracy, completeness, or timeliness of displayed job listings. We are neither an employment agency nor an employer and have no influence on the content of job advertisements."}
          </p>

          {/* 4. Generierte Inhalte */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "4. Generierte Inhalte" : "4. Generated Content"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS kann mithilfe von Künstlicher Intelligenz Anschreiben, Lebensläufe und andere Dokumente generieren. Diese Inhalte sind als Entwürfe zu verstehen. Sie sind als Nutzer allein verantwortlich für die Überprüfung, Anpassung und finale Verwendung aller generierten Dokumente. ApplyOS übernimmt keine Haftung für Inhalte, die durch die KI erstellt wurden."
              : "ApplyOS can generate cover letters, resumes, and other documents using artificial intelligence. These contents are to be understood as drafts. As a user, you are solely responsible for reviewing, adapting, and final use of all generated documents. ApplyOS assumes no liability for content created by the AI."}
          </p>

          {/* 5. Verfügbarkeit */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "5. Verfügbarkeit" : "5. Availability"}
          </h2>
          <p>
            {isDE
              ? "Wir bemühen uns, die App und Website jederzeit verfügbar zu halten, können jedoch keine ununterbrochene Verfügbarkeit garantieren. Wartungsarbeiten, technische Störungen oder höhere Gewalt können zu vorübergehenden Einschränkungen führen."
              : "We strive to keep the app and website available at all times but cannot guarantee uninterrupted availability. Maintenance, technical issues, or force majeure may lead to temporary restrictions."}
          </p>

          {/* 6. Haftungsbeschränkung */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "6. Haftungsbeschränkung" : "6. Limitation of Liability"}
          </h2>
          <p>
            {isDE
              ? "ApplyOS wird &quot;wie besehen&quot; bereitgestellt. Wir haften nicht für Schäden, die aus der Nutzung der App oder Website entstehen, es sei denn, diese beruhen auf vorsätzlichem oder grob fahrlässigem Verhalten unsererseits. Insbesondere haften wir nicht für den Erfolg von Bewerbungen oder die Qualität der KI-generierten Inhalte."
              : "ApplyOS is provided \"as is\". We are not liable for damages arising from the use of the app or website, unless caused by intentional or grossly negligent conduct on our part. In particular, we are not liable for the success of applications or the quality of AI-generated content."}
          </p>

          {/* 7. Änderungen der Nutzungsbedingungen */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "7. Änderungen der Nutzungsbedingungen" : "7. Changes to Terms"}
          </h2>
          <p>
            {isDE
              ? "Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite veröffentlicht. Die fortgesetzte Nutzung der App nach Veröffentlichung von Änderungen gilt als Zustimmung zu den aktualisierten Bedingungen."
              : "We reserve the right to modify these Terms of Service at any time. Changes will be published on this page. Continued use of the app after publication of changes constitutes acceptance of the updated terms."}
          </p>

          {/* 8. Anwendbares Recht */}
          <h2 className="text-lg font-semibold text-[#e2e8f0]">
            {isDE ? "8. Anwendbares Recht" : "8. Applicable Law"}
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
