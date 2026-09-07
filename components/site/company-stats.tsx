"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { formatInstallations, getSuccessfulInstallations, YEARS_OF_EXPERIENCE } from "@/lib/site-stats";

/**
 * The installations count is computed from the visitor's own clock (not
 * fetched or baked in at build time), so it climbs on schedule for every
 * visitor even though the site is statically exported and only redeploys
 * on a push. That means the number legitimately differs from the static
 * HTML Next.js prerenders at build time — suppressHydrationWarning is
 * expected here, not a bug to chase.
 */
export function CompanyStats() {
  const installations = formatInstallations(getSuccessfulInstallations());

  return (
    <Section tone="light" className="py-10 sm:py-12 lg:py-14">
      <Container className="grid grid-cols-2 gap-6 border-y border-ink-200 py-8 sm:gap-10">
        <div className="text-start">
          <p className="font-mono text-4xl font-bold text-gold-700 sm:text-5xl">
            {YEARS_OF_EXPERIENCE}+
          </p>
          <p className="mt-2 text-sm text-ink-600 sm:text-base">سنة خبرة</p>
        </div>
        <div className="text-start">
          <p
            suppressHydrationWarning
            className="font-mono text-4xl font-bold text-gold-700 sm:text-5xl"
          >
            {installations}+
          </p>
          <p className="mt-2 text-sm text-ink-600 sm:text-base">تركيب ناجح</p>
        </div>
      </Container>
    </Section>
  );
}
