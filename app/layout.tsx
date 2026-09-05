import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al-Ribal",
  description: "Al-Ribal — security, surveillance, and networking solutions.",
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
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
