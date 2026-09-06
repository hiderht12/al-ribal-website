import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Primary is the single, consistent CTA style across the whole site (gold
 * fill, black text) regardless of what section it sits in — see the
 * approved design system, section 6. Do not introduce a second "primary
 * look" for a specific page; extend variants here instead.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-body font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-500 text-ink-950 hover:bg-gold-400 active:bg-gold-600 focus-visible:outline-ink-950 disabled:bg-ink-300 disabled:text-ink-500",
        secondary:
          "border-[1.5px] border-ink-950 bg-transparent text-ink-950 hover:bg-ink-950/5 active:bg-ink-950/10 focus-visible:outline-ink-950 disabled:border-ink-300 disabled:text-ink-400",
        ghost:
          "bg-transparent text-ink-700 hover:text-gold-600 focus-visible:outline-ink-950 disabled:text-ink-400",
        destructive:
          "bg-error text-white hover:bg-error/90 active:bg-error/80 focus-visible:outline-error disabled:bg-ink-300 disabled:text-ink-500",
        link: "bg-transparent text-gold-700 underline underline-offset-4 focus-visible:outline-gold-700",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-5 text-base",
        lg: "h-12 px-7 text-lg",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        size: ["sm", "md", "lg"],
        className: "h-auto p-0",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
