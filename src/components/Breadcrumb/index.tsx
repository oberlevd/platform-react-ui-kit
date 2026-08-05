import { ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

export const Breadcrumb = ({ ...properties }: React.ComponentProps<"nav">) => {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...properties} />;
};

export const BreadcrumbList = ({
  className,
  ...properties
}: React.ComponentProps<"ol">) => {
  return (
    <ol
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word sm:gap-2.5",
        className,
      )}
      data-slot="breadcrumb-list"
      {...properties}
    />
  );
};

export const BreadcrumbItem = ({
  className,
  ...properties
}: React.ComponentProps<"li">) => {
  return (
    <li
      className={cn("inline-flex items-center gap-1.5", className)}
      data-slot="breadcrumb-item"
      {...properties}
    />
  );
};

export const BreadcrumbLink = ({
  asChild,
  className,
  ...properties
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot.Root : "a";

  return (
    <Comp
      className={cn("hover:text-foreground transition-colors", className)}
      data-slot="breadcrumb-link"
      {...properties}
    />
  );
};

export const BreadcrumbPage = ({
  className,
  ...properties
}: React.ComponentProps<"span">) => {
  return (
    <span
      aria-current="page"
      aria-disabled="true"
      className={cn("text-foreground font-normal", className)}
      data-slot="breadcrumb-page"
      role="link"
      {...properties}
    />
  );
};

export const BreadcrumbSeparator = ({
  children,
  className,
  ...properties
}: React.ComponentProps<"li">) => {
  return (
    <li
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      {...properties}
    >
      {children ?? <ChevronRight />}
    </li>
  );
};

export const BreadcrumbEllipsis = ({
  className,
  ...properties
}: React.ComponentProps<"span">) => {
  return (
    <span
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      {...properties}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
};
