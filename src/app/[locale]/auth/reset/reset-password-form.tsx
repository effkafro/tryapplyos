"use client";

import { useEffect, useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Status = "verifying" | "ready" | "invalid" | "success";

// Passwort-Regeln gespiegelt von iOS (PasswortValidator): min. 8 Zeichen,
// mind. ein Großbuchstabe, mind. eine Zahl.
const schema = z
  .object({
    password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, { path: ["confirm"], message: "mismatch" });

type FormValues = z.infer<typeof schema>;

export function ResetPasswordForm() {
  const t = useTranslations("authReset");
  const [supabase] = useState(() => getSupabaseBrowserClient());
  const [status, setStatus] = useState<Status>("verifying");
  const [mounted, setMounted] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirm: "" },
    mode: "onChange",
  });

  const pw = watch("password");
  const confirm = watch("confirm");
  const reqs = {
    length: pw.length >= 8,
    uppercase: /[A-Z]/.test(pw),
    digit: /[0-9]/.test(pw),
  };
  const allMet = reqs.length && reqs.uppercase && reqs.digit;
  const match = pw.length > 0 && pw === confirm;
  const canSubmit = allMet && match && !isSubmitting;

  useEffect(() => setMounted(true), []);

  // Recovery-Session aus der URL herstellen: ?code= (PKCE) oder #access_token (Implicit).
  // Supabase leitet abgelaufene Links mit #error=… zurück — das fangen wir ab.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      const query = new URLSearchParams(window.location.search);

      if (hash.get("error") || query.get("error")) {
        if (!cancelled) setStatus("invalid");
        return;
      }
      try {
        const code = query.get("code");
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
        } else {
          const accessToken = hash.get("access_token");
          const refreshToken = hash.get("refresh_token");
          if (accessToken && refreshToken) {
            const { error } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });
            if (error) throw error;
          }
        }
        const { data } = await supabase.auth.getSession();
        if (cancelled) return;
        if (data.session) {
          setStatus("ready");
          // Token aus der Adresszeile entfernen (Sicherheit).
          window.history.replaceState(null, "", window.location.pathname);
        } else {
          setStatus("invalid");
        }
      } catch {
        if (!cancelled) setStatus("invalid");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [supabase]);

  const onSubmit = async (data: FormValues) => {
    try {
      const { error } = await supabase.auth.updateUser({ password: data.password });
      if (error) {
        toast.error(t("error"));
        return;
      }
      // Temporäre Recovery-Session aus dem Browser entfernen.
      await supabase.auth.signOut();
      setStatus("success");
    } catch {
      toast.error(t("networkError"));
    }
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-md transition-all duration-500 ease-out",
        mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
    >
      {/* Akzent-Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -top-16 h-48 bg-[radial-gradient(circle,rgba(58,171,131,0.14),transparent_65%)]"
      />

      <div className="relative rounded-3xl border border-[var(--line-hi)] bg-e-paper p-8 shadow-2xl shadow-black/20 sm:p-10">
        {status === "success" ? (
          <StatePanel variant="success" title={t("success.title")} body={t("success.body")} />
        ) : status === "invalid" ? (
          <StatePanel variant="invalid" title={t("invalidToken.title")} body={t("invalidToken.body")} />
        ) : status === "verifying" ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <Spinner className="h-7 w-7 text-e-accent" />
            <p className="text-sm text-e-text-2">{t("verifying")}</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-e-accent/10 text-e-accent">
              <LockIcon className="h-7 w-7" />
            </div>

            <h1 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-e-text">
              {t("title")} <em className="text-e-accent">{t("titleAccent")}</em>
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-e-text-2">{t("subtitle")}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-4">
              <PasswordField
                label={t("passwordLabel")}
                placeholder={t("passwordPlaceholder")}
                show={showPw}
                onToggle={() => setShowPw((s) => !s)}
                showLabel={t("showPassword")}
                hideLabel={t("hidePassword")}
                field={register("password")}
              />

              <ul className="space-y-1.5">
                <Requirement met={reqs.length} label={t("requirements.length")} />
                <Requirement met={reqs.uppercase} label={t("requirements.uppercase")} />
                <Requirement met={reqs.digit} label={t("requirements.digit")} />
              </ul>

              <PasswordField
                label={t("confirmLabel")}
                placeholder={t("confirmPlaceholder")}
                show={showPw}
                field={register("confirm")}
                hideToggle
              />
              {confirm.length > 0 && !match && (
                <p className="text-xs text-e-problem">{t("mismatch")}</p>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className={cn(
                  "mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-e-accent px-5 py-3.5 text-sm font-semibold text-e-bg transition-opacity",
                  canSubmit ? "cursor-pointer hover:opacity-90" : "cursor-not-allowed opacity-50",
                )}
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="h-4 w-4" />
                    {t("submitting")}
                  </>
                ) : (
                  t("submit")
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function PasswordField({
  label,
  placeholder,
  show,
  onToggle,
  showLabel,
  hideLabel,
  field,
  hideToggle,
}: {
  label: string;
  placeholder?: string;
  show: boolean;
  onToggle?: () => void;
  showLabel?: string;
  hideLabel?: string;
  field: UseFormRegisterReturn;
  hideToggle?: boolean;
}) {
  const id = field.name;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-e-dim"
      >
        {label}
      </label>
      <div className="relative flex items-center rounded-xl border border-[var(--line-hi)] bg-e-bg transition-colors focus-within:border-e-accent">
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          autoComplete="new-password"
          {...field}
          className={cn(
            "w-full bg-transparent px-4 py-3 text-sm text-e-text outline-none placeholder:text-e-faint",
            !hideToggle && "pr-11",
          )}
        />
        {!hideToggle && onToggle && (
          <button
            type="button"
            onClick={onToggle}
            aria-label={show ? hideLabel : showLabel}
            className="absolute right-3 text-e-dim transition-colors hover:text-e-text"
          >
            {show ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  );
}

function Requirement({ met, label }: { met: boolean; label: string }) {
  return (
    <li className="flex items-center gap-2 text-xs">
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
          met ? "border-e-accent bg-e-accent text-e-bg" : "border-[var(--line-hi)] text-transparent",
        )}
      >
        <CheckIcon className="h-2.5 w-2.5" />
      </span>
      <span className={cn("transition-colors duration-200", met ? "text-e-text-2" : "text-e-faint")}>
        {label}
      </span>
    </li>
  );
}

function StatePanel({
  variant,
  title,
  body,
}: {
  variant: "success" | "invalid";
  title: string;
  body: string;
}) {
  const isSuccess = variant === "success";
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div
        className={cn(
          "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl",
          isSuccess ? "bg-e-accent/10 text-e-accent" : "bg-e-problem/10 text-e-problem",
        )}
      >
        {isSuccess ? <CheckCircleIcon className="h-9 w-9" /> : <AlertIcon className="h-9 w-9" />}
      </div>
      <h1 className="font-serif text-2xl tracking-[-0.02em] text-e-text">{title}</h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-e-text-2">{body}</p>
    </div>
  );
}

/* ---------- Icons (inline, keine zusätzliche Dependency) ---------- */

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.243 4.243L9.88 9.88" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
  );
}

function Spinner({ className }: { className?: string }) {
  return (
    <svg className={cn("animate-spin", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
    </svg>
  );
}
