import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
      index: true,
      follow: true,
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
    <html lang={locale} className={`${plusJakarta.variable} antialiased dark`}>
      <body className="min-h-dvh bg-brand-bg text-white font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
