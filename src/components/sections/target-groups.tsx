import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { PhoneFrame } from "./app-screens/phone-frame";
import { ScreenPipeline } from "./app-screens/screen-pipeline";
import { ScreenJobDetail } from "./app-screens/screen-job-detail";
import { ScreenResultImage } from "./app-screens/screen-result-image";
import { ScreenStudentResult } from "./app-screens/screen-student-result";
import { Link } from "@/i18n/navigation";

type CardData = {
  accent: string;
  title: string;
  sub: string;
  points: string[];
  ctaButton: string;
  href: "/fuer-jobsuchende" | "/fuer-schueler";
};

const CARD_SCREENS = [
  // Card 1 — Jobsuchende
  () => [<ScreenPipeline key="p" />, <ScreenJobDetail key="d" />],
  // Card 2 — Schüler
  () => [<ScreenResultImage key="r" />, <ScreenStudentResult key="s" />],
] as const;

const CARD_HREFS = ["/fuer-jobsuchende", "/fuer-schueler"] as const;

export async function TargetGroups() {
  const t = await getTranslations("groups");

  const cards: CardData[] = [
    {
      accent: t("cards.0.accent"),
      title: t("cards.0.title"),
      sub: t("cards.0.sub"),
      points: [0, 1, 2, 3, 4].map((j) => t(`cards.0.points.${j}`)),
      ctaButton: t("cards.0.ctaButton"),
      href: CARD_HREFS[0],
    },
    {
      accent: t("cards.1.accent"),
      title: t("cards.1.title"),
      sub: t("cards.1.sub"),
      points: [0, 1, 2, 3, 4].map((j) => t(`cards.1.points.${j}`)),
      ctaButton: t("cards.1.ctaButton"),
      href: CARD_HREFS[1],
    },
  ];

  const [titleHead, titleTailWithDot] = splitOnLastDot(t("title"));

  return (
    <section className="bg-e-paper py-24 lg:py-[100px] px-6 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center mb-12 lg:mb-14">
          <div className="text-xs text-e-accent uppercase tracking-[0.14em] font-medium mb-4">
            — {t("eyebrow")} —
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] tracking-[-0.035em] font-normal m-0 leading-[1.05] lg:leading-none">
            {titleHead}. <span className="italic">{titleTailWithDot}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {cards.map((card, i) => {
            const reverse = i % 2 === 1;
            const phones = CARD_SCREENS[i]();
            const isTeal = card.accent === "teal";
            const accentRgba = isTeal
              ? "rgba(58,171,131,0.08)"
              : "rgba(201,165,135,0.08)";
            const accentColor = isTeal
              ? "var(--color-e-accent)"
              : "var(--color-e-accent-2)";

            return (
              <Link
                key={i}
                href={card.href}
                className="group block border border-[var(--line)] rounded-3xl overflow-hidden bg-[#221f1b] lg:min-h-[480px] transition-colors duration-300 hover:border-[color:var(--hover-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-e-paper"
                style={
                  {
                    ["--hover-border" as string]: accentColor,
                  } as React.CSSProperties
                }
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
                  {/* Phone column */}
                  <div
                    className={`relative flex items-center justify-center p-8 lg:p-10 gap-4 ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                    style={{
                      backgroundImage: `radial-gradient(ellipse at center, ${accentRgba}, transparent 70%)`,
                    }}
                  >
                    <div
                      className="opacity-80"
                      style={{ transform: "rotate(-4deg) translateY(12px)" }}
                    >
                      <PhoneFrame scale={0.7}>{phones[0]}</PhoneFrame>
                    </div>
                    <div
                      className="z-[2]"
                      style={{ transform: "rotate(3deg) translateY(-12px)" }}
                    >
                      <PhoneFrame scale={0.78}>{phones[1]}</PhoneFrame>
                    </div>
                  </div>

                  {/* Content column */}
                  <div
                    className={`p-8 lg:p-10 flex flex-col justify-center ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <h3 className="font-serif text-3xl lg:text-4xl font-normal m-0 tracking-[-0.025em] leading-[1.05]">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-e-dim mt-2 uppercase tracking-[0.12em] m-0">
                      {card.sub}
                    </p>
                    <div className="h-px bg-[var(--line)] mt-6" />
                    <ul className="list-none p-0 m-0">
                      {card.points.map((point, j) => (
                        <li
                          key={j}
                          className={`flex gap-3 py-3 text-sm text-e-text-2 leading-[1.5] ${
                            j < card.points.length - 1
                              ? "border-b border-[var(--line)]"
                              : ""
                          }`}
                        >
                          <span
                            className="font-serif italic text-xs pt-[3px]"
                            style={{ color: accentColor }}
                          >
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA pill — sichtbarer Bifurcation-Affordance-Indikator */}
                    <div className="mt-7">
                      <span
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-e-bg transition-transform duration-300 group-hover:translate-x-1"
                        style={{ backgroundColor: accentColor }}
                      >
                        {card.ctaButton}
                        <ArrowRight className="size-4" aria-hidden />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function splitOnLastDot(s: string): [string, string] {
  // "Zwei Wege. Ein Ziel." → ["Zwei Wege", "Ein Ziel."]
  const parts = s.split(". ");
  if (parts.length < 2) return [s, ""];
  return [parts[0], parts.slice(1).join(". ")];
}
