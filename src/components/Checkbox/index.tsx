import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { CheckIcon, MinusIcon } from "lucide-react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { checkboxVariants } from "./variants";

export interface CheckboxProps
  extends
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, checked, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ size }), className)}
    checked={checked}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center text-current transition-all duration-100 ease-out",
        "data-[state=checked]:opacity-100 data-[state=indeterminate]:opacity-100 data-[state=unchecked]:opacity-0",
        "-translate-y-0.5 data-[state=checked]:translate-y-0 data-[state=indeterminate]:translate-y-0",
      )}
    >
      {checked === "indeterminate" ? (
        <MinusIcon className={cn(size === "l" ? "size-4" : "size-3.5")} />
      ) : (
        <CheckIcon className={cn(size === "l" ? "size-4" : "size-3.5")} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = "Checkbox";
