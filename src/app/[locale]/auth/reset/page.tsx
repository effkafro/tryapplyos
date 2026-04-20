import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "de" ? "Passwort zurücksetzen — ApplyOS" : "Reset Password — ApplyOS";
  return { title, robots: { index: false, follow: false } };
}

export default async function AuthResetPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isDE = locale === "de";

  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-indigo-500 text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </div>

        <h1 className="mb-4 text-3xl font-bold">
          {isDE ? "Passwort zurücksetzen" : "Reset your password"}
        </h1>

        <p className="mb-2 text-lg text-ink-muted">
          {isDE
            ? "Öffne diesen Link auf deinem iPhone — ApplyOS führt dich dann direkt durch das Zurücksetzen."
            : "Open this link on your iPhone — ApplyOS will guide you through the reset."}
        </p>

        <p className="mt-6 text-sm text-ink-muted">
          {isDE
            ? "ApplyOS ist noch nicht installiert? Lade die App im App Store herunter und öffne den Link erneut."
            : "Don't have ApplyOS yet? Install it from the App Store and open the link again."}
        </p>
      </main>
      <Footer />
    </>
  );
}
