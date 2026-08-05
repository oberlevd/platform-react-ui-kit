import type { VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { alertVariants } from "./variants";

export const Alert = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & VariantProps<typeof alertVariants>
>(({ className, variant, ...properties }, reference) => {
  return (
    <div
      ref={reference}
      className={cn(alertVariants({ variant }), className)}
      data-slot="alert"
      role="alert"
      {...properties}
    />
  );
});
Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...properties }, reference) => {
  return (
    <div
      ref={reference}
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-bold tracking-tight text-inherit",
        className,
      )}
      data-slot="alert-title"
      {...properties}
    />
  );
});
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...properties }, reference) => {
  return (
    <div
      ref={reference}
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm leading-relaxed opacity-100 text-inherit",
        className,
      )}
      data-slot="alert-description"
      {...properties}
    />
  );
});
AlertDescription.displayName = "AlertDescription";
