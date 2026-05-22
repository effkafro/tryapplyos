"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ENABLE_APP_STORE_CTA, APP_STORE_URL } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

// Audience-Pages: führen auf eigene Sub-Routes (locale-aware Link)
const audienceLinks = [
  { key: "forJobseekers" as const, href: "/fuer-jobsuchende" as const },
  { key: "forStudents" as const, href: "/fuer-schueler" as const },
];

// Anker-Links auf der aktuellen Page (funktionieren primär auf /)
const anchorLinks = [
  { key: "why" as const, href: "#why" },
  { key: "how" as const, href: "#how-it-works" },
  { key: "faq" as const, href: "#faq" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const ctaHref = ENABLE_APP_STORE_CTA ? APP_STORE_URL : "#waitlist";
  const ctaLabel = t("download");
  const ctaProps = ENABLE_APP_STORE_CTA
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-e-bg/[0.88] backdrop-blur-xl border-b border-[var(--line)]">
      <nav className="mx-auto max-w-[1180px] flex items-center justify-between px-4 sm:px-6 lg:px-10 h-[60px] lg:h-16">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/appi-logo.png"
            alt="Appi"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-base font-serif italic font-semibold tracking-[-0.01em] text-e-text">
            ApplyOS
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {audienceLinks.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={href}
                className="text-[13px] font-semibold text-e-text hover:text-e-accent transition-colors"
              >
                {t(key)}
              </Link>
            </li>
          ))}
          <li aria-hidden className="h-3 w-px bg-[var(--line)]" />
          {anchorLinks.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                className="text-[13px] text-e-text-2 hover:text-e-text transition-colors"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher size="sm" />
          <a
            href={ctaHref}
            {...ctaProps}
            className="bg-e-accent text-e-bg px-4 py-2 rounded-full text-[13px] font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-e-accent focus-visible:ring-offset-2 focus-visible:ring-offset-e-bg"
          >
            {ctaLabel}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-e-text-2 hover:text-e-text transition-colors"
          aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--line)] bg-e-bg/95 backdrop-blur-xl">
          <div className="px-4 sm:px-6 py-5 flex flex-col gap-4">
            {audienceLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-e-text hover:text-e-accent transition-colors py-1"
              >
                {t(key)}
              </Link>
            ))}

            <div className="h-px bg-[var(--line)]" aria-hidden />

            {anchorLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-e-text-2 hover:text-e-text transition-colors py-1"
              >
                {t(key)}
              </a>
            ))}

            <div className="pt-3 border-t border-[var(--line)]">
              <LanguageSwitcher
                size="sm"
                className="gap-2"
                onNavigate={() => setMobileOpen(false)}
              />
            </div>

            <a
              href={ctaHref}
              {...ctaProps}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "bg-e-accent text-e-bg px-4 py-2.5 rounded-full text-sm font-semibold text-center transition-opacity hover:opacity-90",
              )}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
