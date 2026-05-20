"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { WAITLIST_BASE_COUNT } from "@/lib/config";
import { formatWaitlistNumber } from "@/lib/format";
import { joinWaitlist } from "@/app/actions/waitlist";
import { PhoneFrame } from "./app-screens/phone-frame";
import { ScreenWaitlistConfirm } from "./app-screens/screen-waitlist-confirm";

type Props = {
  /** Roher DB-Count (ohne Base-Offset). Default 0 = leere Tabelle. */
  initialCount?: number;
};

const formSchema = z.object({
  email: z.string().email(),
  consent: z.boolean().refine((v) => v === true, {
    message: "consent_required",
  }),
  _hp: z
    .string()
    .optional()
    .refine((v) => !v, { message: "spam" }),
});
type FormValues = z.infer<typeof formSchema>;

export function Waitlist({ initialCount = 0 }: Props) {
  const t = useTranslations("waitlist");
  const locale = useLocale();
  // actualCount = roher Wert aus der DB. Anzeige addiert WAITLIST_BASE_COUNT.
  const [actualCount, setActualCount] = useState(initialCount);
  const [submitted, setSubmitted] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [shake, setShake] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", consent: false },
  });

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const onValid = async (data: FormValues) => {
    const result = await joinWaitlist({
      email: data.email,
      locale: locale === "en" ? "en" : "de",
      _hp: data._hp,
    });
    if (result.ok) {
      setActualCount(result.count);
      setSubmitted(true);
      toast.success(t("toastSuccess"));
      return;
    }
    if (result.error === "duplicate") {
      setAlreadyRegistered(true);
      toast.info(t("toastDuplicate"));
      return;
    }
    if (result.error === "spam") {
      return;
    }
    triggerShake();
    toast.error(t("toastError"));
  };

  const onInvalid = () => {
    triggerShake();
  };

  const isLocked = submitted || alreadyRegistered;
  const displayCount = actualCount + WAITLIST_BASE_COUNT;
  const formatted = (n: number) => formatWaitlistNumber(n, locale);
  const liveCount = formatted(displayCount);

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-e-paper border-y border-[var(--line)] py-24 lg:py-[120px] px-6 sm:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
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

          <form onSubmit={handleSubmit(onValid, onInvalid)} className="mt-9 max-w-[480px]">
            <div
              className={cn(
                "p-1.5 rounded-full border bg-e-bg flex gap-1.5 items-center transition-colors",
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
                disabled={isLocked}
                aria-label={t("emailPlaceholder")}
                className="flex-1 min-w-0 px-4 py-3 bg-transparent border-0 outline-none appearance-none text-e-text text-sm font-sans placeholder:text-e-faint disabled:cursor-not-allowed disabled:opacity-100 disabled:bg-transparent disabled:text-e-text"
              />
              {/* Honeypot */}
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
                disabled={isLocked || isSubmitting}
                className={cn(
                  "bg-e-accent text-e-bg px-5 py-3 rounded-full text-[13px] font-semibold whitespace-nowrap transition-opacity",
                  isLocked
                    ? "opacity-65 cursor-default"
                    : "hover:opacity-90 cursor-pointer",
                )}
              >
                {submitted ? t("submittedLabel") : `${t("submit")} →`}
              </button>
            </div>

            {/* Consent (DSGVO) */}
            <label
              className={cn(
                "mt-4 flex items-start gap-2.5 text-[12px] leading-[1.5] cursor-pointer select-none",
                errors.consent ? "text-e-problem" : "text-e-text-2",
                isLocked && "opacity-65 cursor-not-allowed",
              )}
            >
              <input
                type="checkbox"
                {...register("consent")}
                disabled={isLocked}
                aria-invalid={errors.consent ? true : undefined}
                className={cn(
                  "mt-0.5 size-4 shrink-0 rounded border bg-e-bg appearance-none cursor-pointer transition-colors",
                  "checked:bg-e-accent checked:border-e-accent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-e-accent focus-visible:ring-offset-2 focus-visible:ring-offset-e-paper",
                  errors.consent
                    ? "border-e-problem"
                    : "border-[var(--line-hi)]",
                )}
              />
              <span>
                {t("consentLabelPrefix")}
                <Link
                  href="/datenschutz"
                  className="underline underline-offset-2 hover:text-e-text"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t("consentLink")}
                </Link>
                {t("consentLabelSuffix")}
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1.5 ml-6 text-[11px] text-e-problem">
                {t("consentRequired")}
              </p>
            )}
          </form>

          {submitted && (
            <p className="text-xs text-e-accent mt-4 max-w-[480px] flex items-center gap-1.5">
              <span>✦</span>
              {t("successMessage", { position: liveCount })}
            </p>
          )}
          {alreadyRegistered && !submitted && (
            <p className="text-xs text-e-text-2 mt-4 max-w-[480px] flex items-center gap-1.5">
              <span>✦</span>
              {t("alreadyRegisteredMessage")}
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
            <ScreenWaitlistConfirm count={displayCount} locale={locale} />
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
