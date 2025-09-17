import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const unlockButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-aeonik ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-unlock-green text-white hover:bg-unlock-green/90 font-medium",
        secondary:
          "bg-unlock-light text-unlock-dark hover:bg-unlock-light/90 font-medium",
        outline:
          "border border-unlock-green text-unlock-green hover:bg-unlock-green hover:text-white font-medium",
        ghost: "text-unlock-green hover:bg-unlock-green/10 font-medium",
      },
      size: {
        default: "px-8 py-2.5 text-sm font-medium uppercase tracking-wide",
        sm: "px-6 py-2 text-xs font-medium uppercase tracking-wide",
        lg: "px-10 py-3 text-base font-medium uppercase tracking-wide",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface UnlockButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof unlockButtonVariants> {
  asChild?: boolean;
}

const UnlockButton = React.forwardRef<HTMLButtonElement, UnlockButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(unlockButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
UnlockButton.displayName = "UnlockButton";

export { UnlockButton, unlockButtonVariants };
