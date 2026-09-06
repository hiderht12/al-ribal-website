import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Generic elevated surface (design system, sections 5 & 7): a hairline
 * border does the separation job at rest — no shadow until raised. On a
 * dark tone, "raised" uses a gold-tinted ring instead of a black shadow,
 * since a black shadow is invisible on a near-black background.
 */
const surfaceVariants = cva("rounded-md border transition-[box-shadow,transform] duration-150", {
  variants: {
    tone: {
      light: "border-ink-200 bg-white text-ink-950",
      dark: "border-ink-700 bg-ink-900 text-white",
    },
    elevation: {
      resting: "",
      raised: "hover:-translate-y-0.5",
    },
  },
  compoundVariants: [
    { tone: "light", elevation: "raised", className: "hover:shadow-raised" },
    { tone: "dark", elevation: "raised", className: "hover:shadow-raised-dark" },
  ],
  defaultVariants: {
    tone: "light",
    elevation: "resting",
  },
});

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {}

const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, tone, elevation, ...props }, ref) => (
    <div ref={ref} className={cn(surfaceVariants({ tone, elevation, className }))} {...props} />
  ),
);
Surface.displayName = "Surface";

export { Surface, surfaceVariants };
