"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";

export function Faq() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="bg-brand-bg py-20">
      <div className="mx-auto max-w-2xl px-6">
        <SectionHeader label={t("label")} title={t("title")} />

        <Accordion defaultValue={[0]}>
          {[0, 1, 2, 3, 4].map((i) => (
            <AccordionItem
              key={i}
              value={i}
              className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 not-last:mb-3 [&:not(:last-child)]:border-b"
            >
              <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                {t(`items.${i}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-ink-muted">
                {t(`items.${i}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
