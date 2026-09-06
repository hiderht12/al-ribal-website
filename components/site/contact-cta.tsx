import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export function ContactCta() {
  return (
    <Section id="contact" tone="alt">
      <Container className="flex flex-col items-start gap-6 text-start">
        <p className="font-mono text-sm tracking-wide text-gold-700">تواصل معنا</p>
        <h2 className="max-w-2xl text-3xl text-ink-950 sm:text-4xl">
          جاهزون لمناقشة احتياجاتكم الأمنية والتقنية؟
        </h2>
        <p className="max-w-xl text-lg text-ink-500">
          تواصلوا معنا عبر الهاتف أو تيليجرام للاستفسار عن المنتجات والأسعار.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={siteConfig.phoneHref} className={buttonVariants({ variant: "primary", size: "lg" })}>
            اتصل بنا
          </a>
          <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
            جميع طرق التواصل
          </Link>
        </div>
      </Container>
    </Section>
  );
}
