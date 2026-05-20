import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const siteUrl = "https://tryapplyos.app";
  const ogImage = {
    url: `${siteUrl}/og-image.png`,
    width: 1200,
    height: 630,
    alt: t("title"),
  };

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(siteUrl),
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: siteUrl,
      siteName: "ApplyOS",
      locale: locale === "de" ? "de_DE" : "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImage.url],
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geist.variable} ${sourceSerif.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-e-bg text-e-text font-sans" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster position="top-right" theme="dark" richColors closeButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
