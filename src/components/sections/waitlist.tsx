"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { formatWaitlistNumber } from "@/lib/format";
import { PhoneFrame } from "./app-screens/phone-frame";
import { ScreenWaitlistConfirm } from "./app-screens/screen-waitlist-confirm";

type Props = {
  initialCount?: number;
};

const STORAGE_KEY = "applyOS_waitlist_count";

function readStoredCount(fallback: number): number {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;
    const n = parseInt(stored, 10);
    return Number.isNaN(n) ? fallback : n;
  } catch {
    return fallback;
  }
}

const formSchema = z.object({
  email: z.string().email(),
  _hp: z
    .string()
    .optional()
    .refine((v) => !v, { message: "spam" }),
});
type FormValues = z.infer<typeof formSchema>;

export function Waitlist({ initialCount = 28 }: Props) {
  const t = useTranslations("waitlist");
  const locale = useLocale();
  // Phase D: localStorage-Mock als Initial-State. Phase E ersetzt durch Server Action.
  const [count, setCount] = useState(() => readStoredCount(initialCount));
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onValid = () => {
    const next = count + 1;
    setCount(next);
    setSubmitted(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(next));
    } catch {
      /* ignore */
    }
    toast.success(t("toastSuccess"));
  };

  const onInvalid = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const formatted = (n: number) => formatWaitlistNumber(n, locale);
  const liveCount = formatted(count);

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-e-paper border-y border-[var(--line)] py-24 lg:py-[120px] px-6 sm:px-10"
    >
      {/* Decorative dotted grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[150px] -right-[150px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(58,171,131,0.12),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-[60px] items-center">
        {/* Left: Form */}
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[72px] leading-[1.05] lg:leading-[0.98] tracking-[-0.04em] font-normal m-0">
            {t("title.0")}
            <br />
            <span className="italic text-e-accent">{t("title.1")}</span>
          </h2>

          <p className="font-serif italic text-base sm:text-[17px] text-e-text-2 leading-[1.55] max-w-[480px] mt-6 m-0">
            {t("sub")}
          </p>

          <form
            onSubmit={handleSubmit(onValid, onInvalid)}
            className={cn(
              "mt-9 p-1.5 rounded-full border bg-e-bg flex gap-1.5 items-center max-w-[480px] transition-colors",
              submitted
                ? "border-e-accent/55"
                : "border-[var(--line-hi)]",
              shake && "animate-shake",
            )}
          >
            <input
              type="email"
              {...register("email")}
              placeholder={t("emailPlaceholder")}
              disabled={submitted}
              aria-label={t("emailPlaceholder")}
              className="flex-1 px-4 py-3 bg-transparent border-0 outline-none text-e-text text-sm font-sans placeholder:text-e-faint disabled:cursor-not-allowed"
            />
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              {...register("_hp")}
              className="absolute -left-[9999px] w-px h-px opacity-0 pointer-events-none"
            />
            <button
              type="submit"
              disabled={submitted || isSubmitting}
              className={cn(
                "bg-e-accent text-e-bg px-5 py-3 rounded-full text-[13px] font-semibold whitespace-nowrap transition-opacity",
                submitted
                  ? "opacity-65 cursor-default"
                  : "hover:opacity-90 cursor-pointer",
              )}
            >
              {submitted ? t("submittedLabel") : `${t("submit")} →`}
            </button>
          </form>

          {submitted && (
            <p className="text-xs text-e-accent mt-2.5 max-w-[480px] flex items-center gap-1.5">
              <span>✦</span>
              {t("successMessage", { position: liveCount })}
            </p>
          )}

          {/* Stats row */}
          <div className="mt-9 pt-7 border-t border-[var(--line)] grid grid-cols-2 gap-6 max-w-[480px]">
            {[0, 1].map((i) => {
              const isLive = i === 1;
              const num = isLive ? liveCount : t(`stats.${i}.num`);
              return (
                <div key={i}>
                  <div
                    className={`font-serif italic text-[28px] leading-none tracking-[-0.02em] flex items-baseline gap-2 ${
                      i === 0 ? "text-e-accent" : "text-e-text"
                    }`}
                  >
                    <span
                      className={cn(
                        "inline-block",
                        isLive && submitted && "animate-pulse-count",
                      )}
                    >
                      {num}
                    </span>
                    {isLive && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-sans not-italic text-e-accent uppercase tracking-[0.14em] font-semibold">
                        <span className="relative inline-flex w-1.5 h-1.5">
                          <span className="absolute inset-0 rounded-full bg-e-accent opacity-50 animate-ping-soft" />
                          <span className="relative w-1.5 h-1.5 rounded-full bg-e-accent" />
                        </span>
                        {t("live")}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-e-dim mt-1.5 uppercase tracking-[0.12em]">
                    {t(`stats.${i}.label`)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Phone confirm preview + perks */}
        <div className="flex flex-col items-center gap-7">
          <PhoneFrame scale={0.88}>
            <ScreenWaitlistConfirm count={count} locale={locale} />
          </PhoneFrame>

          <div className="border border-[var(--line)] rounded-2xl p-5 bg-e-bg max-w-[340px] w-full">
            <div className="text-[10px] text-e-accent uppercase tracking-[0.14em] mb-3 flex items-center gap-2">
              <span className="w-4 h-px bg-e-accent" />
              {t("perks.label")}
            </div>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`flex gap-3 text-xs text-e-text-2 leading-[1.5] py-2 ${
                  i === 0 ? "border-b border-[var(--line)]" : ""
                }`}
              >
                <span className="text-e-accent text-[10px] pt-0.5">✦</span>
                <span>{t(`perks.items.${i}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
