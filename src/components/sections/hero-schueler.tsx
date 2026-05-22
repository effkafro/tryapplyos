import { getTranslations } from "next-intl/server";
import { Sparkles } from "lucide-react";
import { PhoneFrame } from "./app-screens/phone-frame";
import { ScreenStudentResult } from "./app-screens/screen-student-result";
import { ScreenResultImage } from "./app-screens/screen-result-image";

export async function HeroSchueler() {
  const t = await getTranslations("heroSchueler");
  const titleLine1 = t("title.0");
  const titleLine2 = t("title.1");

  return (
    <section className="relative overflow-hidden pt-24 pb-16 px-6 sm:px-10 lg:pt-[110px] lg:pb-20">
      {/* Background glow — Terracotta für Schüler */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(201,165,135,0.18),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-3 mb-7 lg:mb-8">
            <span
              className="w-0.5 h-4"
              style={{ backgroundColor: "var(--color-e-accent-2)" }}
            />
            <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-e-text-2">
              {t("eyebrow")}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[72px] leading-[1.05] lg:leading-[0.98] tracking-[-0.04em] font-normal m-0">
            {titleLine1}
            <br />
            <span
              className="italic"
              style={{ color: "var(--color-e-accent-2)" }}
            >
              {titleLine2}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-e-text-2 leading-[1.55] max-w-[500px] mt-6 lg:mt-7">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap items-center gap-5 mt-8 lg:mt-9">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2.5 text-e-bg px-6 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-e-bg"
              style={{ backgroundColor: "var(--color-e-accent-2)" }}
            >
              <Sparkles className="size-4" aria-hidden />
              {t("cta")}
            </a>
            <span className="text-xs text-e-faint">{t("meta")}</span>
          </div>
        </div>

        {/* Phone stack — desktop only */}
        <div className="relative h-[600px] hidden lg:flex justify-center items-center">
          <div
            className="absolute opacity-55 blur-[0.4px]"
            style={{ left: -10, top: 80, transform: "rotate(-6deg)" }}
          >
            <PhoneFrame scale={0.78}>
              <ScreenResultImage />
            </PhoneFrame>
          </div>
          <div className="relative z-[2]">
            <PhoneFrame>
              <ScreenStudentResult />
            </PhoneFrame>
          </div>
        </div>

        {/* Mobile phone */}
        <div className="flex justify-center lg:hidden mt-4">
          <PhoneFrame scale={0.7}>
            <ScreenStudentResult />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
