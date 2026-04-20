"use client";

import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function WhyApplyOS() {
  const t = useTranslations("why");

  return (
    <section
      id="why"
      className="bg-gradient-to-b from-brand-bg to-[#131a30] py-20"
    >
      <div className="mx-auto max-w-2xl px-6">
        <SectionHeader
          label={t("label")}
          title={t("title")}
          className="mb-10"
          labelClassName="text-[#f59e0b]"
        />

        {/* Problem */}
        <div className="rounded-2xl border border-red-500/15 bg-red-500/[0.06] p-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-sm font-semibold text-red-300">
              {t("problem.label")}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-ink-muted">
            {t.rich("problem.text", {
              highlight: (chunks) => (
                <span className="font-semibold text-red-300">{chunks}</span>
              ),
            })}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-3">
          <ArrowDown className="h-5 w-5 text-white/15" />
        </div>

        {/* Solution */}
        <div className="rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-teal-dark/12 to-brand-teal/[0.06] p-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal">
              {t("solution.label")}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-ink">
            {t.rich("solution.text", {
              highlight: (chunks) => (
                <span className="font-semibold text-brand-teal">{chunks}</span>
              ),
            })}
          </p>

          {/* Stats */}
          <div className="mt-5 flex gap-6">
            <div className="flex-1 text-center">
              <div className="text-xl font-extrabold text-brand-teal">100%</div>
              <div className="mt-1 text-xs text-ink-dim">
                {t("stats.userFocused")}
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-xl font-extrabold text-brand-teal">0</div>
              <div className="mt-1 text-xs text-ink-dim">
                {t("stats.noCorpClients")}
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-xl font-extrabold text-brand-teal">
                &darr;
              </div>
              <div className="mt-1 text-xs text-ink-dim">
                {t("stats.lessEffort")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
