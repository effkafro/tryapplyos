"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-header";

const stepGradients = [
  "from-brand-teal to-brand-teal-dark",
  "from-brand-indigo-light to-brand-indigo",
  "from-brand-purple-light to-brand-purple",
];

const lineGradients = [
  "from-brand-teal/40 to-brand-indigo-light/20",
  "from-brand-indigo-light/40 to-brand-purple-light/20",
];

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-brand-bg to-brand-indigo-deep py-20"
    >
      <div className="mx-auto max-w-2xl px-6">
        <SectionHeader
          label={t("label")}
          title={t("title")}
          labelClassName="text-brand-indigo-light"
        />

        <div className="flex flex-col">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-5">
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-lg font-extrabold text-white ${stepGradients[i]}`}
                >
                  {i + 1}
                </div>
                {i < 2 && (
                  <div
                    className={`w-0.5 flex-1 bg-gradient-to-b ${lineGradients[i]}`}
                    style={{ minHeight: "3rem" }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 pt-1">
                <h3 className="text-base font-bold">
                  {t(`steps.${i}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {t(`steps.${i}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
