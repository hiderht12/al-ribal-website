import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const SOLUTIONS = [
  {
    label: "كاميرات المراقبة CCTV",
    note: "أنظمة مراقبة عالية الدقة للمنشآت والمواقع الحساسة.",
  },
  {
    label: "أنظمة التسجيل NVR",
    note: "تسجيل وإدارة مركزية لمقاطع المراقبة.",
  },
  {
    label: "تغذية الشبكة PoE",
    note: "تشغيل الأجهزة وتغذيتها عبر كابل الشبكة نفسه.",
  },
  {
    label: "البنية التحتية للشبكات",
    note: "تصميم وتنفيذ شبكات موثوقة للمنشآت.",
  },
  {
    label: "أنظمة الأمن والتحكم بالدخول",
    note: "حلول متكاملة لحماية المواقع والتحكم بالوصول.",
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
          <h2 className="mt-3 text-3xl text-white sm:text-4xl">
            حلول أمنية وتقنية متكاملة
          </h2>
        </div>
        <ul className="mt-12 divide-y divide-ink-800 border-y border-ink-800">
          {SOLUTIONS.map((item, i) => (
            <li
              key={item.label}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-sm text-gold-500 sm:w-12 sm:shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-heading text-xl font-semibold text-white sm:w-72 sm:shrink-0">
                {item.label}
              </span>
              <span className="text-ink-400">{item.note}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
