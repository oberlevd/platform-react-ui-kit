import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-alfa-red focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-alfa-red text-white shadow",
        secondary: "border-transparent bg-alfa-bg-control text-alfa-text",
        outline: "border-alfa-border-control text-alfa-text",
        success: "border-transparent bg-green-500/10 text-green-600",
        destructive: "border-transparent bg-red-500/10 text-red-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
