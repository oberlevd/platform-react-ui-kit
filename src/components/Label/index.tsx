import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { labelVariants } from "./variants";

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, size, theme, ...properties }, reference) => (
  <LabelPrimitive.Root
    ref={reference}
    className={cn(labelVariants({ size, theme }), className)}
    {...properties}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;
