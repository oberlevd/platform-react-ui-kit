import { cva } from "class-variance-authority";

export const labelVariants = cva(
  "font-medium transition-colors peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        s: "text-sm leading-normal",
        m: "text-base leading-normal",
        l: "text-lg leading-[1.33]",
        xl: "text-xl leading-[1.2]",
        "2xl": "text-2xl leading-[1.2]",
        "3xl": "text-3xl leading-[1.2]",
        "4xl": "text-4xl leading-[1.1]",
      },
      theme: {
        "alfa-on-white": "text-foreground",
        "alfa-on-color": "text-foreground",
        light: "text-foreground",
        dark: "text-foreground",
      },
    },
    defaultVariants: {
      size: "m",
      theme: "light",
    },
  },
);
