import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <Section id="top" tone="dark">
      <Container className="flex flex-col items-start gap-6 text-start">
        <p className="font-mono text-sm tracking-wide text-gold-400">
          حلول متكاملة للأمن والمراقبة والشبكات
        </p>
        <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>
        <div className="h-1 w-16 bg-gold-500" />
        <p className="max-w-2xl text-lg text-ink-300 sm:text-xl">{siteConfig.description}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/products" className={buttonVariants({ variant: "primary", size: "lg" })}>
            تصفح المنتجات
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "secondary-inverse", size: "lg" })}>
            تواصل معنا
          </Link>
        </div>
      </Container>
    </Section>
  );
}
