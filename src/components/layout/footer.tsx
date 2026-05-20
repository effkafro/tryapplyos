"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const legalLinks = [
  { key: "privacy" as const, href: "/datenschutz" },
  { key: "terms" as const, href: "/nutzungsbedingungen" },
  { key: "imprint" as const, href: "/impressum" },
  { key: "cookies" as const, href: "/cookies" },
] as const;

const productLinks = [
  { key: "features" as const, href: "#features" },
  { key: "how" as const, href: "#how-it-works" },
  { key: "faq" as const, href: "#faq" },
  { key: "waitlist" as const, href: "#waitlist" },
] as const;

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-e-footer border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <Image
                src="/appi-logo.png"
                alt="Appi"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="text-base font-serif italic font-semibold text-e-text">
                ApplyOS
              </span>
            </div>
            <p className="text-[13px] text-e-text-2 leading-[1.6] max-w-[320px] m-0">
              {t("tagline")}
            </p>
          </div>

          <div>
            <div className="text-[11px] text-e-faint uppercase tracking-[0.14em] mb-3.5">
              {t("product")}
            </div>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {productLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-[13px] text-e-text-2 hover:text-e-text transition-colors"
                  >
                    {t(`links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] text-e-faint uppercase tracking-[0.14em] mb-3.5">
              {t("legal")}
            </div>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {legalLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-[13px] text-e-text-2 hover:text-e-text transition-colors"
                  >
                    {t(`links.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-e-faint m-0">{t("copyright")}</p>
          <LanguageSwitcher size="xs" />
        </div>
      </div>
    </footer>
  );
}
