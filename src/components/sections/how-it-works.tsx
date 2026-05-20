import { getTranslations } from "next-intl/server";
import { PhoneFrame } from "./app-screens/phone-frame";
import { ScreenOnboarding } from "./app-screens/screen-onboarding";
import { ScreenRadar } from "./app-screens/screen-radar";
import { ScreenPipeline } from "./app-screens/screen-pipeline";

const STEP_SCREENS = [ScreenOnboarding, ScreenRadar, ScreenPipeline] as const;

export async function HowItWorks() {
  const t = await getTranslations("how");

  return (
    <section id="how-it-works" className="py-24 lg:py-[100px] px-6 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center mb-12 lg:mb-14">
          <div className="text-xs text-e-accent uppercase tracking-[0.14em] font-medium mb-4">
            — {t("eyebrow")} —
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] tracking-[-0.035em] font-normal m-0 leading-[1.05] lg:leading-none">
            <span className="italic">{t("title")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => {
            const Screen = STEP_SCREENS[i];
            return (
              <div
                key={i}
                className="border border-[var(--line)] rounded-[20px] bg-e-paper overflow-hidden flex flex-col"
              >
                <div className="relative px-6 pt-7 flex justify-center min-h-[280px] md:min-h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(58,171,131,0.08),transparent_70%),linear-gradient(180deg,#221f1b,#2a2620)]">
                  <div className="translate-y-7">
                    <PhoneFrame scale={0.78}>
                      <Screen />
                    </PhoneFrame>
                  </div>
                </div>
                <div className="p-7 border-t border-[var(--line)] bg-e-paper">
                  <div className="flex items-baseline gap-3 mb-2.5">
                    <span className="font-serif italic text-[44px] text-e-accent leading-[0.9]">
                      {i + 1}.
                    </span>
                    <span className="text-[10px] text-e-faint uppercase tracking-[0.14em]">
                      {t("stepLabel")}
                    </span>
                  </div>
                  <h3 className="font-serif text-[22px] font-normal m-0 tracking-[-0.01em]">
                    {t(`steps.${i}.title`)}
                  </h3>
                  <p className="text-sm text-e-text-2 leading-[1.6] mt-2.5 m-0">
                    {t(`steps.${i}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
