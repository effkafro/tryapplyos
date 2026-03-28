"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

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
  const locale = useLocale();
  const pathname = usePathname();

  const otherLocale = locale === "de" ? "en" : "de";

  return (
    <footer className="bg-[#020617]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-[#0f766e] to-[#14b8a6] rounded-lg w-7 h-7" />
              <span className="text-base font-bold tracking-tight text-white">
                ApplyOS
              </span>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16 sm:gap-24">
            {/* Legal */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                {t("legal")}
              </h3>
              <ul className="flex flex-col gap-2">
                {legalLinks.map(({ key, href }) => (
                  <li key={key}>
                    <Link
                      href={href}
                      className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                    >
                      {t(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                {t("product")}
              </h3>
              <ul className="flex flex-col gap-2">
                {productLinks.map(({ key, href }) => (
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
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/[0.06] mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[#475569]">{t("copyright")}</p>

            {/* Language switcher */}
            <div className="flex items-center gap-1 text-xs">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
