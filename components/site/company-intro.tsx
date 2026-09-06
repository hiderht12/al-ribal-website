import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export function CompanyIntro() {
  return (
    <Section id="about" tone="light">
      <Container className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div className="text-start">
          <p className="font-mono text-sm tracking-wide text-gold-700">من نحن</p>
          <h2 className="mt-3 text-3xl text-ink-950 sm:text-4xl">{siteConfig.name}</h2>
        </div>
        <div className="flex max-w-2xl flex-col gap-6 text-start">
          <p className="text-lg leading-relaxed text-ink-700">{siteConfig.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-3">
              {siteConfig.brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-sm border border-ink-200 bg-white px-4 py-2 font-mono text-sm font-semibold text-ink-950"
                >
                  {brand}
                </span>
              ))}
            </div>
            <Link href="/about" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              اقرأ المزيد ←
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
