import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ContactCta() {
  return (
    <Section id="contact" tone="alt">
      <Container className="flex flex-col items-start gap-6 text-start">
        <p className="font-mono text-sm tracking-wide text-gold-700">تواصل معنا</p>
        <h2 className="max-w-2xl text-3xl text-ink-950 sm:text-4xl">
          جاهزون لمناقشة احتياجاتكم الأمنية والتقنية؟
        </h2>
        <p className="max-w-xl text-lg text-ink-500">
          راسلونا مباشرة على واتساب للحصول على استشارة وعرض سعر يناسب متطلبات
          منشأتكم.
        </p>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "primary", size: "lg" })}
        >
          تواصل عبر واتساب
        </a>
      </Container>
    </Section>
  );
}
