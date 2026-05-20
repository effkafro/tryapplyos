"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  size?: "xs" | "sm";
  onNavigate?: () => void;
  className?: string;
};

const LOCALES = ["de", "en"] as const;
type Locale = (typeof LOCALES)[number];

export function LanguageSwitcher({ size = "sm", onNavigate, className }: Props) {
  const locale = useLocale();
  const pathname = usePathname();
  const textSize = size === "xs" ? "text-xs" : "text-sm";

  return (
    <div className={cn("flex items-center gap-1", textSize, className)}>
      {LOCALES.map((target: Locale, i) => {
        const isActive = locale === target;
        return (
          <span key={target} className="flex items-center gap-1">
            {i > 0 && <span className="text-e-faint">|</span>}
            <Link
              href={pathname}
              locale={target}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                isActive
                  ? "text-e-text font-semibold cursor-default"
                  : "text-e-text-2 hover:text-e-text transition-colors",
              )}
            >
              {target.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
