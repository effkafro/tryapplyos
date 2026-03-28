"use client";

import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";

export function WhyApplyOS() {
  const t = useTranslations("why");

  return (
    <section
      id="why"
      className="bg-gradient-to-b from-[#0f172a] to-[#131a30] py-20"
    >
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b]">
            {t("label")}
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("title")}</h2>
        </div>

        {/* Problem */}
        <div className="rounded-2xl border border-red-500/15 bg-red-500/[0.06] p-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-sm font-semibold text-red-300">
              {t("problem.label")}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[#94a3b8]">
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
        <div className="rounded-2xl border border-[#2dd4bf]/20 bg-gradient-to-br from-[#0f766e]/12 to-[#2dd4bf]/[0.06] p-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#2dd4bf]" />
            <span className="text-sm font-semibold text-[#2dd4bf]">
              {t("solution.label")}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[#e2e8f0]">
            {t.rich("solution.text", {
              highlight: (chunks) => (
                <span className="font-semibold text-[#2dd4bf]">{chunks}</span>
              ),
            })}
          </p>

          {/* Stats */}
          <div className="mt-5 flex gap-6">
            <div className="flex-1 text-center">
              <div className="text-xl font-extrabold text-[#2dd4bf]">100%</div>
              <div className="mt-1 text-xs text-[#64748b]">
                {t("stats.userFocused")}
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-xl font-extrabold text-[#2dd4bf]">0</div>
              <div className="mt-1 text-xs text-[#64748b]">
                {t("stats.noCorpClients")}
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-xl font-extrabold text-[#2dd4bf]">
                &darr;
              </div>
              <div className="mt-1 text-xs text-[#64748b]">
                {t("stats.lessEffort")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
