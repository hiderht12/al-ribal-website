import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

/**
 * No real contact channel (phone/email/WhatsApp) has been provided yet, so
 * this button is intentionally a plain, non-wired call-to-action rather
 * than a link to a fabricated address — see the implementation notes for
 * what's needed to make it functional.
 */
export function ContactCta() {
  return (
    <Section id="contact" tone="alt">
      <Container className="flex flex-col items-start gap-6 text-start">
        <p className="font-mono text-sm tracking-wide text-gold-700">تواصل معنا</p>
        <h2 className="max-w-2xl text-3xl text-ink-950 sm:text-4xl">
          جاهزون لمناقشة احتياجاتكم الأمنية والتقنية؟
        </h2>
        <p className="max-w-xl text-lg text-ink-500">
          تواصلوا معنا للحصول على استشارة وعرض سعر يناسب متطلبات منشأتكم.
        </p>
        <Button variant="primary" size="lg" type="button">
          اطلب عرض سعر
        </Button>
      </Container>
    </Section>
  );
}
