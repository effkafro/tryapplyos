import { getTranslations } from "next-intl/server";

export async function WhyApplyOSSchueler() {
  const t = await getTranslations("whySchueler");

  return (
    <section id="why" className="py-24 lg:py-[100px] px-6 sm:px-10">
      <div className="mx-auto max-w-[880px]">
        <div className="text-center mb-14">
          <div
            className="text-xs uppercase tracking-[0.14em] font-medium mb-4"
            style={{ color: "var(--color-e-accent-2)" }}
          >
            — {t("eyebrow")} —
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] tracking-[-0.035em] font-normal m-0 leading-[1.05] lg:leading-none">
            <span className="italic">{t("title")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-[var(--line)] rounded-2xl overflow-hidden">
          <div className="p-7 md:p-8 bg-e-bg/85 md:border-r border-b md:border-b-0 border-[var(--line)]">
            <div className="text-[11px] text-e-problem uppercase tracking-[0.14em] mb-3.5">
              — {t("problem.label")}
            </div>
            <p className="font-serif text-[15px] text-e-dim leading-[1.65] m-0">
              {t("problem.text")}
            </p>
          </div>
          <div className="p-7 md:p-8 bg-e-paper">
            <div
              className="text-[11px] uppercase tracking-[0.14em] mb-3.5"
              style={{ color: "var(--color-e-accent-2)" }}
            >
              — {t("solution.label")}
            </div>
            <p className="font-serif text-[15px] text-e-text leading-[1.65] m-0">
              {t("solution.text")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 border border-[var(--line)] rounded-2xl overflow-hidden mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`bg-e-bg px-3 py-7 md:px-6 md:py-8 text-center ${
                i < 2 ? "border-r border-[var(--line)]" : ""
              }`}
            >
              <div
                className="font-serif italic text-2xl md:text-[44px] tracking-[-0.02em] leading-none"
                style={{ color: "var(--color-e-accent-2)" }}
              >
                {t(`stats.${i}.num`)}
              </div>
              <div className="text-[10px] md:text-xs text-e-dim mt-2 uppercase tracking-[0.12em]">
                {t(`stats.${i}.label`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
