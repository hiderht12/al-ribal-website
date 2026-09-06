import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Vertical rhythm + background-band wrapper (design system, section 9).
 * Alternating light/alt/dark tones down the page is the signature layout
 * device for this site — it replaces card borders/shadows as the way
 * sections separate from one another.
 */
const sectionVariants = cva("py-16 sm:py-20 lg:py-24 xl:py-32", {
  variants: {
    tone: {
      light: "bg-ink-50 text-ink-950",
      alt: "bg-ink-100 text-ink-950",
      dark: "bg-ink-950 text-white",
    },
  },
  defaultVariants: {
    tone: "light",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, tone, as: Tag = "section", ...props }, ref) => (
    <Tag ref={ref} className={cn(sectionVariants({ tone, className }))} {...props} />
  ),
);
Section.displayName = "Section";

export { Section, sectionVariants };
