"use client";

import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f766e] to-[#1e1b4b] pt-32 pb-20 text-center">
      {/* Decorative radial glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.15),transparent)]" />
      <div className="pointer-events-none absolute -bottom-60 -left-30 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {/* Badge */}
        <span className="mb-6 inline-block rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/15 px-4 py-1.5 text-sm font-semibold text-[#2dd4bf]">
          {t("badge")}
        </span>

        {/* Headline */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {t("title1")}
          <br />
          <span className="text-[#2dd4bf]">{t("title2")}</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-lg text-lg text-[#94a3b8]">
          {t("subtitle")}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#0f172a] transition-opacity hover:opacity-90"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {t("cta")}
          </a>
        </div>

        {/* Phone mockup placeholder */}
        <div className="mx-auto mt-12 flex h-[400px] w-[200px] items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.08]">
          <span className="text-sm text-white/30">{t("screenshotAlt")}</span>
        </div>
      </div>
    </section>
  );
}
