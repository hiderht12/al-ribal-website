import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "الريبال الذهبي",
  description: "الريبال الذهبي — حلول المراقبة الأمنية والشبكات.",
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
      </body>
    </html>
  );
}
