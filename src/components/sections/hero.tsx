"use client";

import { useTranslations } from "next-intl";

import { AppStoreButton } from "@/components/ui/app-store-button";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal-dark to-brand-indigo-deep pt-32 pb-20 text-center">
      {/* Decorative radial glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.15),transparent)]" />
      <div className="pointer-events-none absolute -bottom-60 -left-30 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {/* Badge */}
        <span className="mb-6 inline-block rounded-full border border-brand-teal/30 bg-brand-teal/15 px-4 py-1.5 text-sm font-semibold text-brand-teal">
          {t("badge")}
        </span>

        {/* Headline */}
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {t("title1")}
          <br />
          <span className="text-brand-teal">{t("title2")}</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-lg text-lg text-ink-muted">
          {t("subtitle")}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <AppStoreButton label={t("cta")} variant="hero" />
        </div>

        {/* Phone mockup placeholder */}
        <div className="mx-auto mt-12 flex h-[400px] w-[200px] items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.08]">
          <span className="text-sm text-white/30">{t("screenshotAlt")}</span>
        </div>
      </div>
    </section>
  );
}
