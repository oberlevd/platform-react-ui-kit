import type { VariantProps } from "class-variance-authority";

import * as React from "react";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { Separator } from "../Separator";
import { itemMediaVariants, itemVariants } from "./variants";

export const ItemGroup = ({
  className,
  ...properties
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("group/item-group flex flex-col", className)}
      data-slot="item-group"
      role="list"
      {...properties}
    />
  );
};

export const ItemSeparator = ({
  className,
  ...properties
}: React.ComponentProps<typeof Separator>) => {
  return (
    <Separator
      className={cn("my-0", className)}
      data-slot="item-separator"
      orientation="horizontal"
      {...properties}
    />
  );
};

export const Item = ({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...properties
}: React.ComponentProps<"div"> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp
      className={cn(itemVariants({ variant, size, className }))}
      data-size={size}
      data-slot="item"
      data-variant={variant}
      {...properties}
    />
  );
};

export const ItemMedia = ({
  className,
  variant = "default",
  ...properties
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) => {
  return (
    <div
      className={cn(itemMediaVariants({ variant, className }))}
      data-slot="item-media"
      data-variant={variant}
      {...properties}
    />
  );
};

export const ItemContent = ({
  className,
  ...properties
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        className,
      )}
      data-slot="item-content"
      {...properties}
    />
  );
};

export const ItemTitle = ({
  className,
  ...properties
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        className,
      )}
      data-slot="item-title"
      {...properties}
    />
  );
};

export const ItemDescription = ({
  className,
  ...properties
}: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
      data-slot="item-description"
      {...properties}
    />
  );
};

export const ItemActions = ({
  className,
  ...properties
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex items-center gap-2", className)}
      data-slot="item-actions"
      {...properties}
    />
  );
};

export const ItemHeader = ({
  className,
  ...properties
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      data-slot="item-header"
      {...properties}
    />
  );
};

export const ItemFooter = ({
  className,
  ...properties
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      data-slot="item-footer"
      {...properties}
    />
  );
};
