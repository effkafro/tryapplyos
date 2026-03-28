"use client";

import { useTranslations } from "next-intl";

const stepGradients = [
  "from-[#2dd4bf] to-[#0f766e]",
  "from-[#818cf8] to-[#6366f1]",
  "from-[#a78bfa] to-[#8b5cf6]",
];

const lineGradients = [
  "from-[#2dd4bf]/40 to-[#818cf8]/20",
  "from-[#818cf8]/40 to-[#a78bfa]/20",
];

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] py-20"
    >
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#818cf8]">
            {t("label")}
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("title")}</h2>
        </div>

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
                <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
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
