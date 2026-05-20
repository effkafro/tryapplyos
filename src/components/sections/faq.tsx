import { getTranslations } from "next-intl/server";

export async function Faq() {
  const t = await getTranslations("faq");

  return (
    <section id="faq" className="bg-e-paper py-24 lg:py-[100px] px-6 sm:px-10">
      <div className="mx-auto max-w-[920px] grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 lg:gap-[60px]">
        <div>
          <div className="text-xs text-e-accent uppercase tracking-[0.14em] font-medium mb-4">
            — {t("eyebrow")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] tracking-[-0.03em] font-normal m-0 leading-[1.05] lg:leading-none md:sticky md:top-24">
            <span className="italic">{t("title")}</span>
          </h2>
        </div>
        <div>
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`border-t border-[var(--line)] py-6 ${
                i === 4 ? "border-b" : ""
              }`}
            >
              <div className="text-[11px] font-serif italic text-e-accent mb-2">
                Q. {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-serif text-lg font-normal mb-2.5 tracking-[-0.01em] text-e-text">
                {t(`items.${i}.q`)}
              </div>
              <p className="text-sm text-e-text-2 leading-[1.65] m-0">
                {t(`items.${i}.a`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
