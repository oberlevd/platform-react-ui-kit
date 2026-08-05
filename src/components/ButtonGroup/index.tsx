import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Separator } from "../Separator";
import { buttonGroupVariants } from "./variants";

export const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>
>(({ className, orientation, ...properties }, reference) => {
  return (
    <div
      ref={reference}
      className={cn(buttonGroupVariants({ orientation }), className)}
      data-orientation={orientation}
      data-slot="button-group"
      role="group"
      {...properties}
    />
  );
});
ButtonGroup.displayName = "ButtonGroup";

export const ButtonGroupText = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...properties }, reference) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={reference}
      className={cn(
        "flex items-center gap-2 border border-alfa-border-control bg-alfa-bg-control px-4 text-sm font-medium text-alfa-text",
        "group-data-[orientation=horizontal]:first:rounded-l-lg group-data-[orientation=horizontal]:last:rounded-r-lg",
        "group-data-[orientation=vertical]:first:rounded-t-lg group-data-[orientation=vertical]:last:rounded-b-lg",
        className,
      )}
      {...properties}
    />
  );
});
ButtonGroupText.displayName = "ButtonGroupText";

export const ButtonGroupSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Separator>
>(({ className, orientation = "vertical", ...properties }, reference) => {
  return (
    <Separator
      ref={reference}
      className={cn(
        "relative z-10 bg-alfa-border-control",
        orientation === "vertical" ? "w-px h-auto self-stretch" : "h-px w-auto",
        className,
      )}
      data-slot="button-group-separator"
      orientation={orientation}
      {...properties}
    />
  );
});
ButtonGroupSeparator.displayName = "ButtonGroupSeparator";
