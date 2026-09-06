import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const CATEGORIES = [
  {
    label: "كاميرات المراقبة",
    note: "كاميرات IP بدقة تصل إلى 12 ميجابكسل، بتقنيات كشف ذكية مدعومة بالذكاء الاصطناعي.",
  },
  {
    label: "أجهزة التسجيل NVR",
    note: "أجهزة تسجيل شبكية تدعم من 12 إلى 64 قناة مع تخزين بسعات كبيرة.",
  },
  {
    label: "سويتشات الشبكة PoE",
    note: "تغذية وتشغيل الكاميرات وأجهزة الشبكة عبر كابل واحد.",
  },
] as const;

/*
 * Deliberately a numbered list, not a card grid — a repeated card grid was
 * explicitly out of scope for this design system (design-system /
 * ui-ux-pro skills, "avoid repetitive cards").
 */
export function SolutionsOverview() {
  return (
    <Section id="solutions" tone="dark">
      <Container>
        <div className="max-w-2xl text-start">
          <p className="font-mono text-sm tracking-wide text-gold-400">مجالات الحلول</p>
          <h2 className="mt-3 text-3xl text-white sm:text-4xl">حلول أمنية وتقنية متكاملة</h2>
        </div>
        <ul className="mt-12 divide-y divide-ink-800 border-y border-ink-800">
          {CATEGORIES.map((item, i) => (
            <li key={item.label}>
              <Link
                href="/products"
                className="flex flex-col gap-2 py-6 transition-colors hover:bg-white/5 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-sm text-gold-500 sm:w-12 sm:shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-xl font-semibold text-white sm:w-72 sm:shrink-0">
                  {item.label}
                </span>
                <span className="text-ink-400">{item.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
