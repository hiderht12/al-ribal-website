import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <Section id="top" tone="dark">
      <Container className="flex flex-col items-start gap-6 text-start">
        <p className="font-mono text-sm tracking-wide text-gold-400">
          حلول المراقبة الأمنية والشبكات
        </p>
        <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          الريبال الذهبي
        </h1>
        <div className="h-1 w-16 bg-gold-500" />
        <p className="max-w-2xl text-lg text-ink-300 sm:text-xl">
          أنظمة كاميرات مراقبة، حلول شبكات، وبنية أمنية متكاملة — مصممة للأداء
          الموثوق والدقة الفنية.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            اطلب عرض سعر عبر واتساب
          </a>
          <a
            href="#bsd4blt"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            استعرض المنتج
          </a>
        </div>
      </Container>
    </Section>
  );
}
