import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Max-width + responsive gutter wrapper (design system, section 9).
 * Gutters: 16px mobile, 24px tablet, 32–48px desktop.
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Tag = "div", ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12",
        className,
      )}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export { Container };
