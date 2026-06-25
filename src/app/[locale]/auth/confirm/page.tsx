import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
import { ConfirmEmail } from "./confirm-email";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "de" ? "E-Mail bestätigen — ApplyOS" : "Confirm Email — ApplyOS";
  return { title, robots: { index: false, follow: false } };
}

export default function AuthConfirmPage() {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 pt-32 pb-24">
        <ConfirmEmail />
      </main>
      <Footer />
    </>
  );
}
