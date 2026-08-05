import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...properties }, reference) => {
  return (
    <ProgressPrimitive.Root
      ref={reference}
      className={cn(
        "bg-border relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      data-slot="progress"
      {...properties}
    >
      <ProgressPrimitive.Indicator
        className="bg-alfa-red h-full w-full flex-1 transition-all"
        data-slot="progress-indicator"
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;
