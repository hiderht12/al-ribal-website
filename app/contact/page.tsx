import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "تواصل معنا — الريال الذهبي",
  description: "تواصلوا مع الريال الذهبي عبر الهاتف أو تيليجرام، أو زوروا فرعنا في بغداد.",
};

export default function ContactPage() {
  return (
    <Section id="top" tone="light">
      <Container className="flex flex-col gap-10">
        <div className="max-w-2xl text-start">
          <p className="font-mono text-sm tracking-wide text-gold-700">تواصل معنا</p>
          <h1 className="mt-3 text-3xl text-ink-950 sm:text-4xl">
            جاهزون لمناقشة احتياجاتكم الأمنية والتقنية
          </h1>
          <p className="mt-4 text-ink-500">
            تواصلوا معنا للاستفسار عن المنتجات والأسعار عبر الهاتف أو تيليجرام، أو زوروا فرعنا في
            بغداد.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Surface tone="light" className="flex flex-col gap-3 p-6 text-start">
            <p className="font-mono text-sm tracking-wide text-gold-700">الهاتف</p>
            <a
              href={siteConfig.phoneHref}
              className="font-mono text-2xl font-semibold text-ink-950 hover:text-gold-700"
              dir="ltr"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.phoneHref}
              className={buttonVariants({ variant: "secondary", size: "sm" }) + " mt-2 w-fit"}
            >
              اتصل الآن
            </a>
          </Surface>

          <Surface tone="light" className="flex flex-col gap-3 p-6 text-start">
            <p className="font-mono text-sm tracking-wide text-gold-700">Telegram</p>
            <p className="text-ink-700">راسلونا مباشرة على تيليجرام للاستفسار والدعم.</p>
            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary", size: "sm" }) + " mt-2 w-fit"}
            >
              فتح تيليجرام
            </a>
          </Surface>

          <Surface tone="light" className="flex flex-col gap-2 p-6 text-start">
            <p className="font-mono text-sm tracking-wide text-gold-700">أوقات الدوام</p>
            <p className="text-lg text-ink-950">
              {siteConfig.hours.from} إلى {siteConfig.hours.to}
            </p>
            <p className="text-ink-500">{siteConfig.hours.days}</p>
          </Surface>
        </div>

        <Surface tone="light" className="flex flex-col gap-2 p-6 text-start sm:max-w-xl">
          <p className="font-mono text-sm tracking-wide text-gold-700">العنوان</p>
          <p className="text-lg text-ink-950">
            {siteConfig.address.country} - {siteConfig.address.city}
          </p>
          <address className="not-italic leading-relaxed text-ink-700">
            {siteConfig.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-2 text-sm text-ink-500">{siteConfig.delivery}</p>
        </Surface>
      </Container>
    </Section>
  );
}
