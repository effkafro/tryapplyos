"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

/** Navigation link items mapped to section IDs */
const navLinks = [
  { key: "features" as const, href: "#features" },
  { key: "why" as const, href: "#why" },
  { key: "faq" as const, href: "#faq" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-xl border-b border-white/[0.08]">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <Image src="/appi-logo.png" alt="Appi" width={28} height={28} className="rounded-lg" />
          <span className="text-base font-bold tracking-tight text-white">
            ApplyOS
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                className="text-sm text-ink-muted hover:text-white transition-colors"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side: language switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher size="sm" />

          {/* CTA */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-teal-dark hover:bg-brand-teal-dark/90 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition-colors"
          >
            {t("download")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink-muted hover:text-white transition-colors"
          aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile slide-down panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-brand-bg/98 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-ink-muted hover:text-white transition-colors py-1"
              >
                {t(key)}
              </a>
            ))}

            <div className="pt-2 border-t border-white/[0.06]">
              <LanguageSwitcher size="sm" className="gap-2" onNavigate={() => setMobileOpen(false)} />
            </div>

            {/* Mobile CTA */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="bg-brand-teal-dark hover:bg-brand-teal-dark/90 text-white px-4 py-2 rounded-md text-sm font-semibold text-center transition-colors"
            >
              {t("download")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
