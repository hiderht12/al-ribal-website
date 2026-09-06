import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { NAV_LINKS } from "./nav-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <Container className="grid gap-10 py-12 text-start sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-ink-500">{siteConfig.tagline}</p>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-400 transition-colors hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-ink-400">
          <a href={siteConfig.phoneHref} className="hover:text-gold-400" dir="ltr">
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400"
          >
            Telegram
          </a>
        </div>

        <div className="flex flex-col gap-1 text-sm text-ink-400">
          <p>
            {siteConfig.address.country} - {siteConfig.address.city}
          </p>
          {siteConfig.address.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="mt-2 text-ink-500">
            {siteConfig.hours.from} إلى {siteConfig.hours.to}
          </p>
          <p className="text-ink-500">{siteConfig.hours.days}</p>
        </div>
      </Container>
      <div className="border-t border-ink-800">
        <Container className="py-4 text-sm text-ink-500">
          © {year} {siteConfig.name}. جميع الحقوق محفوظة.
        </Container>
      </div>
    </footer>
  );
}
