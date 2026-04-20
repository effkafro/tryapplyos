"use client";

import { useTranslations } from "next-intl";
import { Search, Star, FileText, Columns3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const iconConfigs = [
  { icon: Search, gradient: "from-brand-teal-dark to-[#14b8a6]" },
  { icon: Star, gradient: "from-brand-indigo to-brand-indigo-light" },
  { icon: FileText, gradient: "from-brand-purple to-brand-purple-light" },
  { icon: Columns3, gradient: "from-[#0891b2] to-[#22d3ee]" },
];

export function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="bg-brand-bg py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader label={t("label")} title={t("title")} />

        <div className="grid gap-4 sm:grid-cols-2">
          {iconConfigs.map(({ icon: Icon, gradient }, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-6"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradient}`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-semibold">
                {t(`items.${i}.title`)}
              </h3>
              <p className="mt-2 text-sm text-ink-dim">
                {t(`items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
