import type { ReactNode } from "react";
import type { Column } from "@tanstack/react-table";

import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export const Table = ({
  className,
  ...props
}: React.ComponentProps<"table">) => {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
};

export const TableHeader = ({
  className,
  ...props
}: React.ComponentProps<"thead">) => {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
};

export const TableBody = ({
  className,
  ...props
}: React.ComponentProps<"tbody">) => {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
};

export const TableFooter = ({
  className,
  ...props
}: React.ComponentProps<"tfoot">) => {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
};

export const TableRow = ({
  className,
  ...props
}: React.ComponentProps<"tr">) => {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
};

export const TableHead = ({
  className,
  ...props
}: React.ComponentProps<"th">) => {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
};

export const TableCell = ({
  className,
  ...props
}: React.ComponentProps<"td">) => {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
};

export const TableCaption = ({
  className,
  ...props
}: React.ComponentProps<"caption">) => {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
};

interface TableSortHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
  className?: string;
}

export const TableSortHeader = <TData, TValue>({
  column,
  title,
  className,
}: TableSortHeaderProps<TData, TValue>) => {
  const isSorted = column.getIsSorted();

  return (
    <div
      className={cn(
        "hover:text-foreground flex cursor-pointer items-center gap-1.5 transition-colors select-none",
        className,
      )}
      onClick={() => column.toggleSorting(isSorted === "asc")}
    >
      {title}
      {isSorted === "asc" && <ArrowUp className="text-primary h-3.5 w-3.5" />}
      {isSorted === "desc" && (
        <ArrowDown className="text-primary h-3.5 w-3.5" />
      )}
      {!isSorted && <ArrowUpDown className="h-3.5 w-3.5 opacity-40" />}
    </div>
  );
};
interface TableEmptyStateProperties {
  colSpan: number;
  message?: string;
}

export const TableEmptyState = ({
  colSpan,
  message = "Данные не найдены",
}: TableEmptyStateProperties) => {
  return (
    <TableRow>
      <TableCell
        className="text-muted-foreground h-24 text-center"
        colSpan={colSpan}
      >
        {message}
      </TableCell>
    </TableRow>
  );
};

interface LinkCellProperties {
  href: string;
  children: ReactNode;
  className?: string;
}

export const LinkCell = ({ href, children, className }: LinkCellProperties) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("text-primary cursor-pointer hover:underline", className)}
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </a>
  );
};
