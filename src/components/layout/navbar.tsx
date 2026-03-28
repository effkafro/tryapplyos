"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

/** Navigation link items mapped to section IDs */
const navLinks = [
  { key: "features" as const, href: "#features" },
  { key: "why" as const, href: "#why" },
  { key: "faq" as const, href: "#faq" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = locale === "de" ? "en" : "de";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/[0.08]">
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
                className="text-sm text-[#94a3b8] hover:text-white transition-colors"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side: language switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-1 text-sm">
            <span
              className={
                locale === "de"
                  ? "text-white font-semibold"
                  : "text-[#94a3b8]"
              }
            >
              DE
            </span>
            <span className="text-[#475569]">|</span>
            <Link
              href={pathname}
              locale={otherLocale}
              className={
                locale === "en"
                  ? "text-white font-semibold"
                  : "text-[#94a3b8] hover:text-white transition-colors"
              }
            >
              EN
            </Link>
          </div>

          {/* CTA */}
          <a
            href="#download"
            className="bg-[#0f766e] hover:bg-[#0f766e]/90 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition-colors"
          >
            {t("download")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#94a3b8] hover:text-white transition-colors"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile slide-down panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#0f172a]/98 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[#94a3b8] hover:text-white transition-colors py-1"
              >
                {t(key)}
              </a>
            ))}

            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 text-sm pt-2 border-t border-white/[0.06]">
              <span
                className={
                  locale === "de"
                    ? "text-white font-semibold"
                    : "text-[#94a3b8]"
                }
              >
                DE
              </span>
              <span className="text-[#475569]">|</span>
              <Link
                href={pathname}
                locale={otherLocale}
                onClick={() => setMobileOpen(false)}
                className={
                  locale === "en"
                    ? "text-white font-semibold"
                    : "text-[#94a3b8] hover:text-white transition-colors"
                }
              >
                EN
              </Link>
            </div>

            {/* Mobile CTA */}
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="bg-[#0f766e] hover:bg-[#0f766e]/90 text-white px-4 py-2 rounded-md text-sm font-semibold text-center transition-colors"
            >
              {t("download")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
