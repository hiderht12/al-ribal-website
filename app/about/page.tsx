import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "من نحن — الريال الذهبي",
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <>
      <Section id="top" tone="light">
        <Container className="flex flex-col gap-6 text-start">
          <p className="font-mono text-sm tracking-wide text-gold-700">من نحن</p>
          <h1 className="max-w-3xl text-3xl text-ink-950 sm:text-4xl">{siteConfig.name}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-700">{siteConfig.description}</p>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="max-w-2xl text-start">
            <p className="font-mono text-sm tracking-wide text-gold-400">مجالات العمل</p>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl">حلول أنظمة المراقبة والشبكات والطاقة</h2>
          </div>
          <ul className="mt-12 divide-y divide-ink-800 border-y border-ink-800">
            {[
              {
                label: "أنظمة المراقبة",
                note: "كاميرات IP بدقة تصل إلى 12 ميجابكسل وتقنيات كشف ذكية مدعومة بالذكاء الاصطناعي.",
              },
              {
                label: "أجهزة التسجيل NVR",
                note: "أجهزة تسجيل شبكية تدعم حتى 64 قناة وتخزين بسعات كبيرة.",
              },
              {
                label: "سويتشات الشبكة PoE",
                note: "سويتشات تغذية عبر الشبكة لتشغيل الكاميرات والأجهزة بكابل واحد.",
              },
            ].map((item, i) => (
              <li
                key={item.label}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-sm text-gold-500 sm:w-12 sm:shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-xl font-semibold text-white sm:w-64 sm:shrink-0">
                  {item.label}
                </span>
                <span className="text-ink-400">{item.note}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="flex flex-col gap-6 text-start">
          <p className="font-mono text-sm tracking-wide text-gold-700">العلامات التي نتعامل بها</p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.brands.map((brand) => (
              <span
                key={brand}
                className="rounded-sm border border-ink-200 bg-white px-6 py-3 font-mono text-lg font-semibold text-ink-950"
              >
                {brand}
              </span>
            ))}
          </div>
          <p className="max-w-2xl text-ink-500">{siteConfig.delivery}</p>
        </Container>
      </Section>
    </>
  );
}
