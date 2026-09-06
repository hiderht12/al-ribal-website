import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CompanyIntro() {
  return (
    <Section id="about" tone="light">
      <Container className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div className="text-start">
          <p className="font-mono text-sm tracking-wide text-gold-700">من نحن</p>
          <h2 className="mt-3 text-3xl text-ink-950 sm:text-4xl">الريبال الذهبي</h2>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-700">
          الريبال الذهبي شريكك المتخصص في حلول المراقبة الأمنية والشبكات، نوفر
          أنظمة كاميرات مراقبة CCTV، حلول تسجيل NVR، تغذية كهربائية عبر الشبكة
          PoE، وبنية شبكات احترافية — بجودة فنية عالية وموثوقية تشغيلية تناسب
          المنشآت التي لا تحتمل التهاون في الأمان.
        </p>
      </Container>
    </Section>
  );
}
