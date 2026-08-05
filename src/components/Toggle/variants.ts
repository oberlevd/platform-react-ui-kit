import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-alfa-red/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-alfa-text hover:bg-alfa-bg-control-hover data-[state=on]:bg-alfa-red/10 data-[state=on]:text-alfa-red",
        outline:
          "border border-alfa-border-control bg-transparent text-alfa-text hover:bg-alfa-bg-control-hover data-[state=on]:border-alfa-red data-[state=on]:bg-alfa-red/5 data-[state=on]:text-alfa-red shadow-sm",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-8 px-2 min-w-8 text-xs",
        lg: "h-12 px-4 min-w-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
