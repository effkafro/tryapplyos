"use client";
import { useTranslations } from "next-intl";
import { WAITLIST_LIMIT } from "@/lib/config";
import { formatWaitlistNumber } from "@/lib/format";

type Props = {
  count: number;
  locale: string;
};

export function ScreenWaitlistConfirm({ count, locale }: Props) {
  const t = useTranslations("waitlist");
  const fmt = (n: number) => formatWaitlistNumber(n, locale);
  const position = fmt(count);
  const total = fmt(WAITLIST_LIMIT);
  const positionValue = t("confirm.positionValue", { position });
  const totalSignups = t("confirm.totalSignups", { total });

  return (
    <>
      <div className="flex items-center gap-2 mb-4.5">
        <div className="w-[22px] h-[22px] rounded-md bg-app-teal flex items-center justify-center text-white text-[11px] font-bold">
          A
        </div>
        <span className="text-[11px] font-serif italic text-app-text">
          {t("confirm.appName")}
        </span>
      </div>

      <div className="w-16 h-16 rounded-full mx-auto mt-4 mb-3.5 bg-app-teal-soft border-2 border-app-teal flex items-center justify-center text-app-teal text-[28px] font-bold relative">
        <span>✓</span>
        <span className="absolute -inset-2 rounded-full border border-app-teal/20" />
      </div>

      <div className="text-center mb-4.5">
        <div className="text-[15px] font-serif font-normal text-app-text">
          <span className="italic text-app-teal">{t("confirm.title")}</span>
        </div>
        <div className="text-[10px] text-app-dim mt-1">{t("confirm.sub")}</div>
      </div>

      <div className="bg-app-card rounded-xl p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.05)] text-center mb-2.5">
        <div className="text-[8px] text-app-dim uppercase tracking-[0.14em] mb-1 font-semibold">
          {t("confirm.positionLabel")}
        </div>
        <div className="text-[22px] font-serif italic text-app-teal leading-none">
          {positionValue}
        </div>
        <div className="text-[9px] text-app-dim mt-1.5">{totalSignups}</div>
      </div>

      <div className="mt-3">
        <div className="text-[8px] text-app-dim uppercase tracking-[0.1em] mb-1.5 flex justify-between font-semibold">
          <span>{t("confirm.betaStart")}</span>
          <span>{t("confirm.betaDate")}</span>
        </div>
        <div className="flex gap-[3px]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-[1px] ${
                i < 5 ? "bg-app-teal" : "bg-app-divider"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3.5 px-3 py-2 rounded-[10px] bg-app-teal-soft text-[9.5px] text-app-teal flex items-center gap-1.5 font-medium">
        <span>✦</span>
        {t("confirm.notify")}
      </div>
    </>
  );
}
