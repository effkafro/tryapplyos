import { getTranslations } from "next-intl/server";
import { Sparkles } from "lucide-react";
import { PhoneFrame } from "./app-screens/phone-frame";
import { ScreenCV } from "./app-screens/screen-cv";
import { ENABLE_APP_STORE_CTA, APP_STORE_URL } from "@/lib/config";

export async function CtaBanner() {
  const t = await getTranslations("cta");
  const ctaHref = ENABLE_APP_STORE_CTA ? APP_STORE_URL : "#waitlist";
  const ctaLabel = ENABLE_APP_STORE_CTA ? t("appStoreBtn") : t("btn");

  return (
    <section className="relative overflow-hidden py-24 lg:py-[110px] px-6 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(58,171,131,0.12),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-[60px] items-center">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] tracking-[-0.035em] font-normal m-0 leading-[1.05] lg:leading-none">
            <span className="italic text-e-accent">{t("title")}</span>
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-e-text-2 mt-6 mb-10">
            {t("sub")}
          </p>
          <a
            href={ctaHref}
            target={ENABLE_APP_STORE_CTA ? "_blank" : undefined}
            rel={ENABLE_APP_STORE_CTA ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2.5 bg-e-accent text-e-bg px-7 py-4 rounded-full text-[15px] font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-e-accent focus-visible:ring-offset-2 focus-visible:ring-offset-e-bg"
          >
            <Sparkles className="size-5" aria-hidden />
            {ctaLabel}
          </a>
        </div>
        <div className="flex justify-center">
          <div style={{ transform: "rotate(-3deg)" }}>
            <PhoneFrame scale={0.72}>
              <ScreenCV />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
