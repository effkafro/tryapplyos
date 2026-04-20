"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

/** Legal page links */
const legalLinks = [
  { key: "privacy" as const, href: "/datenschutz" },
  { key: "terms" as const, href: "/nutzungsbedingungen" },
  { key: "imprint" as const, href: "/impressum" },
  { key: "cookies" as const, href: "/cookies" },
] as const;

/** Product anchor links */
const productLinks = [
  { key: "features" as const, href: "#features" },
  { key: "howItWorks" as const, href: "#how-it-works" },
  { key: "faq" as const, href: "#faq" },
] as const;

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-brand-bg-deep">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image src="/appi-logo.png" alt="Appi" width={28} height={28} className="rounded-lg" />
              <span className="text-base font-bold tracking-tight text-white">
                ApplyOS
              </span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16 sm:gap-24">
            {/* Legal */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-dim">
                {t("legal")}
              </h3>
              <ul className="flex flex-col gap-2">
                {legalLinks.map(({ key, href }) => (
                  <li key={key}>
                    <Link
                      href={href}
                      className="text-sm text-ink-muted hover:text-white transition-colors"
                    >
                      {t(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-dim">
                {t("product")}
              </h3>
              <ul className="flex flex-col gap-2">
                {productLinks.map(({ key, href }) => (
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
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/[0.06] mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-ink-faint">{t("copyright")}</p>

            <LanguageSwitcher size="xs" />
          </div>
        </div>
      </div>
    </footer>
  );
}
