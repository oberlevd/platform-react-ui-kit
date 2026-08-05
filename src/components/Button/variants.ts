import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-alfa-red text-white shadow hover:bg-alfa-red/90 active:bg-alfa-red-active",
        secondary:
          "bg-alfa-bg-control text-alfa-text border border-alfa-border-control hover:bg-alfa-bg-control-hover",
        outline:
          "border border-alfa-border-control bg-transparent text-alfa-text hover:bg-alfa-bg-control-hover",
        ghost: "hover:bg-alfa-bg-control-hover text-alfa-text",
        link: "text-alfa-red underline-offset-4 hover:underline",
      },
      size: {
        s: "h-8 px-3 text-xs",
        m: "h-10 px-4 py-2",
        l: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
      },
      isRounded: {
        true: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "m",
      isRounded: false,
    },
  },
);
