import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";

/**
 * Temporary scaffold placeholder — exists only to prove the design tokens
 * and foundational primitives render correctly (colors, fonts, RTL,
 * spacing). This is not the homepage; it gets replaced when the real
 * homepage is built.
 */
export default function Home() {
  return (
    <Section tone="dark">
      <Container className="flex flex-col items-start gap-6 text-start">
        <p className="font-mono text-sm tracking-wide text-gold-400">
          AL-RIBAL — SCAFFOLD
        </p>
        <h1 className="text-4xl text-white">نظام التصميم جاهز</h1>
        <Surface tone="dark" elevation="raised" className="max-w-md p-6">
          <p className="text-ink-300">
            هذه صفحة مؤقتة للتحقق من الألوان والخطوط والمكوّنات الأساسية قبل
            بناء الصفحة الرئيسية.
          </p>
        </Surface>
        <Button variant="primary">إجراء أساسي</Button>
      </Container>
    </Section>
  );
}
