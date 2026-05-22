import { getTranslations } from "next-intl/server";

type FaqAudience = "default" | "jobseeker" | "schueler";

type FaqItem = { q: string; a: string };

const NAMESPACE_FOR: Record<FaqAudience, string> = {
  default: "faq",
  jobseeker: "faqJobseeker",
  schueler: "faqSchueler",
};

export async function Faq({ audience = "default" }: { audience?: FaqAudience } = {}) {
  const namespace = NAMESPACE_FOR[audience];
  const t = await getTranslations(namespace);
  const items = t.raw("items") as FaqItem[];
  const accentColor =
    audience === "schueler" ? "var(--color-e-accent-2)" : "var(--color-e-accent)";

  return (
    <section id="faq" className="bg-e-paper py-24 lg:py-[100px] px-6 sm:px-10">
      <div className="mx-auto max-w-[920px] grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 lg:gap-[60px]">
        <div>
          <div
            className="text-xs uppercase tracking-[0.14em] font-medium mb-4"
            style={{ color: accentColor }}
          >
            — {t("eyebrow")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] tracking-[-0.03em] font-normal m-0 leading-[1.05] lg:leading-none md:sticky md:top-24">
            <span className="italic">{t("title")}</span>
          </h2>
        </div>
        <div>
          {items.map((item, i) => (
            <div
              key={i}
              className={`border-t border-[var(--line)] py-6 ${
                i === items.length - 1 ? "border-b" : ""
              }`}
            >
              <div
                className="text-[11px] font-serif italic mb-2"
                style={{ color: accentColor }}
              >
                Q. {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-serif text-lg font-normal mb-2.5 tracking-[-0.01em] text-e-text">
                {item.q}
              </div>
              <p className="text-sm text-e-text-2 leading-[1.65] m-0">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
