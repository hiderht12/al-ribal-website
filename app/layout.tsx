import type { Metadata } from "next";
import { FloatingContact } from "@/components/site/floating-contact";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { fontVariables } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — حلول المراقبة الأمنية والشبكات`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["الريال الذهبي", "Alribal Security", "كاميرات مراقبة", "HASNET", "Xvision", "NVR", "PoE", "العراق", "بغداد"],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "ar_IQ",
    type: "website",
  },
};

/**
 * Arabic-first for now: the root <html> is RTL/Arabic by default. When the
 * English locale is added, `dir`/`lang` become a per-locale pair set
 * together (never independently) instead of this hardcoded default — no
 * component below should assume a fixed direction.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={fontVariables}>
      <body className="min-h-screen">
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingContact />
      </body>
    </html>
  );
}
