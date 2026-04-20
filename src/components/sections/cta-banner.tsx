"use client";

import { useTranslations } from "next-intl";

import { AppStoreButton } from "@/components/ui/app-store-button";

export function CtaBanner() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-teal-dark to-brand-indigo py-20 text-center">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent)]" />
      <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-xl px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-base text-white/80">{t("subtitle")}</p>
        <div className="mt-8">
          <AppStoreButton label={t("button")} variant="banner" />
        </div>
      </div>
    </section>
  );
}
