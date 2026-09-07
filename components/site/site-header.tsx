"use client";

import * as React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { NAV_LINKS } from "./nav-links";

/**
 * Sticky site header + mobile nav drawer. The drawer is anchored with the
 * logical `start-0` (never a hardcoded side) and its closed-state offset
 * uses Tailwind's `rtl:`/`ltr:` variants, which key off the ancestor
 * `dir` attribute — not a component-level left/right decision. That means
 * it opens from the right in the current Arabic/RTL layout and will open
 * from the left automatically once an English/LTR locale sets `dir="ltr"`,
 * with no change needed here.
 */
export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gold-500 bg-ink-950">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-heading text-lg font-bold text-white">
          الريبال الذهبي
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink-300 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "primary", size: "sm" }), "hidden lg:inline-flex")}
        >
          اطلب عرض سعر
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-white lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-0.5 bg-current transition-transform",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-ink-950/60 transition-opacity lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="القائمة الرئيسية"
        className={cn(
          "fixed inset-y-0 start-0 z-50 flex w-full max-w-xs flex-col gap-1 bg-ink-950 p-6 shadow-raised-dark transition-transform duration-200 lg:hidden",
          open ? "translate-x-0" : "rtl:translate-x-full ltr:-translate-x-full",
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-sm px-3 py-3 font-body text-base text-ink-200 hover:bg-white/5 hover:text-gold-400"
          >
            {link.label}
          </a>
        ))}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className={cn(buttonVariants({ variant: "primary" }), "mt-4 justify-center")}
        >
          اطلب عرض سعر
        </a>
      </div>
    </header>
  );
}
