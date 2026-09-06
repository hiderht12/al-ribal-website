import { Container } from "@/components/ui/container";
import { NAV_LINKS } from "./nav-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <Container className="flex flex-col gap-6 py-10 text-start sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-lg font-bold text-white">الريبال الذهبي</p>
          <p className="mt-1 text-sm text-ink-500">حلول المراقبة الأمنية والشبكات</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-400 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
      <div className="border-t border-ink-800">
        <Container className="py-4 text-sm text-ink-500">
          © {year} الريبال الذهبي. جميع الحقوق محفوظة.
        </Container>
      </div>
    </footer>
  );
}
