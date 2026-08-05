import type { Button } from "../Button";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../Button/variants";

export const Pagination = ({
  className,
  ...properties
}: React.ComponentProps<"nav">) => {
  return (
    <nav
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      data-slot="pagination"
      role="navigation"
      {...properties}
    />
  );
};

export const PaginationContent = ({
  className,
  ...properties
}: React.ComponentProps<"ul">) => {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1", className)}
      data-slot="pagination-content"
      {...properties}
    />
  );
};

export const PaginationItem = ({
  ...properties
}: React.ComponentProps<"li">) => {
  return <li data-slot="pagination-item" {...properties} />;
};

type PaginationLinkProperties = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

export const PaginationLink = ({
  className,
  isActive,
  size = "m",
  ...properties
}: PaginationLinkProperties) => {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      data-active={isActive}
      data-slot="pagination-link"
      {...properties}
    />
  );
};

export const PaginationPrevious = ({
  className,
  ...properties
}: React.ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      size="m"
      {...properties}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
};

export const PaginationNext = ({
  className,
  ...properties
}: React.ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      size="m"
      {...properties}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
};

export const PaginationEllipsis = ({
  className,
  ...properties
}: React.ComponentProps<"span">) => {
  return (
    <span
      aria-hidden
      className={cn("flex size-9 items-center justify-center", className)}
      data-slot="pagination-ellipsis"
      {...properties}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
};
