"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  size?: "xs" | "sm";
  onNavigate?: () => void;
  className?: string;
};

export function LanguageSwitcher({ size = "sm", onNavigate, className }: Props) {
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === "de" ? "en" : "de";

  const textSize = size === "xs" ? "text-xs" : "text-sm";

  return (
    <div className={cn("flex items-center gap-1", textSize, className)}>
      <span
        className={
          locale === "de"
            ? "text-white font-semibold"
            : "text-ink-muted"
        }
      >
        DE
      </span>
      <span className="text-ink-faint">|</span>
      <Link
        href={pathname}
        locale={otherLocale}
        onClick={onNavigate}
        className={
          locale === "en"
            ? "text-white font-semibold"
            : "text-ink-muted hover:text-white transition-colors"
        }
      >
        EN
      </Link>
    </div>
  );
}
