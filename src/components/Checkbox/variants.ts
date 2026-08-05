import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "peer shrink-0 rounded-[var(--border-radius-control,4px)] border border-alfa-border-control transition-all outline-none focus-visible:ring-2 focus-visible:ring-alfa-red disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-alfa-red data-[state=checked]:border-alfa-red data-[state=checked]:text-white data-[state=indeterminate]:bg-alfa-red data-[state=indeterminate]:border-alfa-red data-[state=indeterminate]:text-white",
  {
    variants: {
      size: {
        m: "size-4",
        l: "size-6",
      },
    },
    defaultVariants: {
      size: "m",
    },
  },
);
