"use client";

import { useTranslations } from "next-intl";

export function CtaBanner() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0f766e] to-[#6366f1] py-20 text-center">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent)]" />
      <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-xl px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-base text-white/80">{t("subtitle")}</p>
        <div className="mt-8">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#0f172a] transition-opacity hover:opacity-90"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {t("button")}
          </a>
        </div>
      </div>
    </section>
  );
}
