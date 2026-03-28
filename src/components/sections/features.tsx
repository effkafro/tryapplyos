"use client";

import { useTranslations } from "next-intl";
import { Search, Star, FileText, Columns3 } from "lucide-react";

const iconConfigs = [
  { icon: Search, gradient: "from-[#0f766e] to-[#14b8a6]" },
  { icon: Star, gradient: "from-[#6366f1] to-[#818cf8]" },
  { icon: FileText, gradient: "from-[#8b5cf6] to-[#a78bfa]" },
  { icon: Columns3, gradient: "from-[#0891b2] to-[#22d3ee]" },
];

export function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="bg-[#0f172a] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2dd4bf]">
            {t("label")}
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>
        </div>

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
              <p className="mt-2 text-sm text-[#64748b]">
                {t(`items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
