import { cva } from "class-variance-authority";

export const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        destructive:
          "border-alfa-red/50 bg-alfa-red/5 text-alfa-red [&>svg]:text-alfa-red",
        warning:
          "border-orange-500/50 bg-orange-500/5 text-orange-900 [&>svg]:text-orange-600",
        success:
          "border-green-600/50 bg-green-600/5 text-green-900 [&>svg]:text-green-600",
        info: "border-blue-600/50 bg-blue-600/5 text-blue-900 [&>svg]:text-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
