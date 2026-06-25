"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Status = "verifying" | "success" | "invalid";

export function ConfirmEmail() {
  const t = useTranslations("authConfirm");
  const [supabase] = useState(() => getSupabaseBrowserClient());
  const [status, setStatus] = useState<Status>("verifying");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // E-Mail-Bestätigung über token_hash (verifyOtp) — prefetch-fest und deterministisch.
  // Link aus der Mail: https://www.tryapplyos.app/auth/confirm?token_hash=…&type=signup
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const query = new URLSearchParams(window.location.search);
      const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));

      const linkFehler =
        hash.get("error_code") ??
        query.get("error_code") ??
        hash.get("error") ??
        query.get("error");
      if (linkFehler) {
        console.warn("[auth/confirm] Bestätigungslink-Fehler:", linkFehler);
        if (!cancelled) setStatus("invalid");
        return;
      }

      const tokenHash = query.get("token_hash");
      const type = (query.get("type") ?? "signup") as "signup" | "email" | "email_change";
      if (!tokenHash) {
        console.warn("[auth/confirm] Kein token_hash in der URL.");
        if (!cancelled) setStatus("invalid");
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type });
        if (error) throw error;
        if (cancelled) return;
        // Temporäre Session entfernen + Token aus der Adresszeile.
        await supabase.auth.signOut();
        window.history.replaceState(null, "", window.location.pathname);
        setStatus("success");
      } catch (e) {
        console.warn("[auth/confirm] verifyOtp fehlgeschlagen:", e);
        if (!cancelled) setStatus("invalid");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [supabase]);

  return (
    <div
      className={cn(
        "relative w-full max-w-md transition-all duration-500 ease-out",
        mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -top-16 h-48 bg-[radial-gradient(circle,rgba(58,171,131,0.14),transparent_65%)]"
      />
      <div className="relative rounded-3xl border border-[var(--line-hi)] bg-e-paper p-8 shadow-2xl shadow-black/20 sm:p-10">
        {status === "verifying" ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <Spinner className="h-7 w-7 text-e-accent" />
            <p className="text-sm text-e-text-2">{t("verifying")}</p>
          </div>
        ) : status === "success" ? (
          <Panel variant="success" title={t("success.title")} body={t("success.body")} />
        ) : (
          <Panel variant="invalid" title={t("invalidToken.title")} body={t("invalidToken.body")} />
        )}
      </div>
    </div>
  );
}

function Panel({
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

/* ---------- Icons (inline) ---------- */

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
