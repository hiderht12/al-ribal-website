import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

/**
 * Fonts are loaded once, here, and exposed to the rest of the app only as
 * CSS custom properties (see the `--font-heading` / `--font-body` /
 * `--font-mono` mapping in `app/globals.css`). Components use the semantic
 * `font-heading` / `font-body` / `font-mono` Tailwind classes, never a font
 * name directly — so swapping the typeface later means editing only this
 * file and the two lines in globals.css that reference it, with no changes
 * to any component.
 *
 * IBM Plex Sans Arabic and IBM Plex Sans are a matched family across both
 * scripts (same weights, same design language), so Arabic and Latin text
 * don't read as two unrelated typefaces once the English locale ships.
 */

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const plexLatin = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-latin",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = [
  plexArabic.variable,
  plexLatin.variable,
  plexMono.variable,
].join(" ");
