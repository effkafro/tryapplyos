"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const groups = [
  {
    key: "jobSeekers",
    accentColor: "text-brand-teal",
    mockupBg:
      "from-brand-teal-dark/20 to-brand-teal/[0.08] border-brand-teal/20",
  },
  {
    key: "students",
    accentColor: "text-brand-indigo-light",
    mockupBg:
      "from-brand-indigo/20 to-brand-purple/[0.08] border-brand-indigo-light/20",
  },
] as const;

export function TargetGroups() {
  const t = useTranslations("targetGroups");

  return (
    <section className="bg-brand-bg py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader label={t("label")} title={t("title")} />

        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {groups.map(({ key, accentColor, mockupBg }) => (
            <div
              key={key}
              className="flex flex-col gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:flex-row sm:items-start"
            >
              {/* Mockup placeholder */}
              <div
                className={`flex h-32 w-full flex-shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br sm:h-40 sm:w-28 ${mockupBg}`}
              >
                <span className="text-center text-xs text-white/25">
                  Screen
                  <br />
                  Mockup
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-lg font-bold ${accentColor}`}>
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {t(`${key}.subtitle`)}
                </p>

                <ul className="mt-4 space-y-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accentColor}`}
                      />
                      <span>{t(`${key}.benefits.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
