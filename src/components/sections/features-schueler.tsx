import { getTranslations } from "next-intl/server";
import { PhoneFrame } from "./app-screens/phone-frame";
import { ScreenOnboarding } from "./app-screens/screen-onboarding";
import { ScreenStudentResult } from "./app-screens/screen-student-result";
import { ScreenResultImage } from "./app-screens/screen-result-image";

const SCREENS = [ScreenOnboarding, ScreenStudentResult, ScreenResultImage] as const;

export async function FeaturesSchueler() {
  const t = await getTranslations("featuresSchueler");

  return (
    <section
      id="features"
      className="bg-e-paper py-24 lg:py-[100px] px-6 sm:px-10"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 lg:mb-14">
          <div
            className="text-xs uppercase tracking-[0.14em] font-medium mb-4"
            style={{ color: "var(--color-e-accent-2)" }}
          >
            — {t("eyebrow")}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] font-normal m-0 max-w-[720px]">
            {(() => {
              const words = t("title").split(" ");
              const last = words.slice(-1).join(" ");
              const head = words.slice(0, -1).join(" ");
              return (
                <>
                  {head} <span className="italic">{last}</span>
                </>
              );
            })()}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => {
            const Screen = SCREENS[i];
            return (
              <article
                key={i}
                className="border border-[var(--line)] rounded-[20px] bg-e-bg overflow-hidden flex flex-col"
              >
                <div className="relative px-8 pt-8 flex justify-center min-h-[280px] md:min-h-[360px] overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(201,165,135,0.08),transparent_70%),linear-gradient(180deg,#221f1b,#1c1a17)] border-b border-[var(--line)]">
                  <span className="absolute top-[18px] right-[22px] text-[9px] uppercase tracking-[0.14em] text-e-faint z-[2]">
                    {t(`items.${i}.label`)}
                  </span>
                  <div className="translate-y-9">
                    <PhoneFrame scale={0.78}>
                      <Screen />
                    </PhoneFrame>
                  </div>
                </div>
                <div className="p-7 md:p-8">
                  <div
                    className="text-xs font-serif italic mb-3"
                    style={{ color: "var(--color-e-accent-2)" }}
                  >
                    — {t(`items.${i}.tag`)}
                  </div>
                  <h3 className="font-serif text-2xl font-normal tracking-[-0.02em] m-0">
                    {t(`items.${i}.title`)}
                  </h3>
                  <p className="text-sm text-e-text-2 leading-[1.6] mt-3 m-0">
                    {t(`items.${i}.desc`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
