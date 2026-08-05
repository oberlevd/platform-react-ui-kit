import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "../Button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../InputGroup";

export const Combobox = ComboboxPrimitive.Root;

export const ComboboxValue = ({
  ...properties
}: ComboboxPrimitive.Value.Props) => {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...properties} />;
};

export const ComboboxTrigger = React.forwardRef<
  HTMLButtonElement,
  ComboboxPrimitive.Trigger.Props
>(({ className, children, ...properties }, reference) => {
  return (
    <ComboboxPrimitive.Trigger
      ref={reference}
      className={cn(
        "flex items-center gap-2 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="combobox-trigger"
      {...properties}
    >
      {children}
      <ChevronDownIcon
        className="text-muted-foreground pointer-events-none size-4"
        data-slot="combobox-trigger-icon"
      />
    </ComboboxPrimitive.Trigger>
  );
});
ComboboxTrigger.displayName = "ComboboxTrigger";

export const ComboboxClear = ({
  className,
  ...properties
}: ComboboxPrimitive.Clear.Props) => {
  return (
    <ComboboxPrimitive.Clear
      className={cn(className)}
      data-slot="combobox-clear"
      render={<InputGroupButton size="icon-xs" variant="ghost" />}
      {...properties}
    >
      <XIcon className="pointer-events-none" />
    </ComboboxPrimitive.Clear>
  );
};

export const ComboboxInput = ({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...properties
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean;
  showClear?: boolean;
}) => {
  return (
    <InputGroup className={cn("w-auto", className)}>
      <ComboboxPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        {...properties}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            asChild
            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
            data-slot="input-group-button"
            disabled={disabled}
            size="icon-xs"
            variant="ghost"
          >
            <ComboboxTrigger />
          </InputGroupButton>
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  );
};

export const ComboboxContent = ({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...properties
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) => {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50"
        side={side}
        sideOffset={sideOffset}
      >
        <ComboboxPrimitive.Popup
          className={cn(
            "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 group/combobox-content relative max-h-96 w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-md shadow-md ring-1 duration-100 data-[chips=true]:min-w-(--anchor-width) *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none",
            className,
          )}
          data-chips={!!anchor}
          data-slot="combobox-content"
          {...properties}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
};

export const ComboboxList = ({
  className,
  ...properties
}: ComboboxPrimitive.List.Props) => {
  return (
    <ComboboxPrimitive.List
      className={cn(
        "max-h-[min(calc(--spacing(96)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0",
        className,
      )}
      data-slot="combobox-list"
      {...properties}
    />
  );
};

export const ComboboxItem = ({
  className,
  children,
  ...properties
}: ComboboxPrimitive.Item.Props) => {
  return (
    <ComboboxPrimitive.Item
      className={cn(
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="combobox-item"
      {...properties}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        data-slot="combobox-item-indicator"
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none size-4 pointer-coarse:size-5" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
};

export const ComboboxGroup = ({
  className,
  ...properties
}: ComboboxPrimitive.Group.Props) => {
  return (
    <ComboboxPrimitive.Group
      className={cn(className)}
      data-slot="combobox-group"
      {...properties}
    />
  );
};

export const ComboboxLabel = ({
  className,
  ...properties
}: ComboboxPrimitive.GroupLabel.Props) => {
  return (
    <ComboboxPrimitive.GroupLabel
      className={cn(
        "text-muted-foreground px-2 py-1.5 text-xs pointer-coarse:px-3 pointer-coarse:py-2 pointer-coarse:text-sm",
        className,
      )}
      data-slot="combobox-label"
      {...properties}
    />
  );
};

export const ComboboxCollection = ({
  ...properties
}: ComboboxPrimitive.Collection.Props) => {
  return (
    <ComboboxPrimitive.Collection
      data-slot="combobox-collection"
      {...properties}
    />
  );
};

export const ComboboxEmpty = ({
  className,
  ...properties
}: ComboboxPrimitive.Empty.Props) => {
  return (
    <ComboboxPrimitive.Empty
      className={cn(
        "text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex",
        className,
      )}
      data-slot="combobox-empty"
      {...properties}
    />
  );
};

export const ComboboxSeparator = ({
  className,
  ...properties
}: ComboboxPrimitive.Separator.Props) => {
  return (
    <ComboboxPrimitive.Separator
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      data-slot="combobox-separator"
      {...properties}
    />
  );
};

export const ComboboxChips = ({
  className,
  ...properties
}: ComboboxPrimitive.Chips.Props) => {
  return (
    <ComboboxPrimitive.Chips
      className={cn(
        "dark:bg-input/30 border-input focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive dark:has-aria-invalid:border-destructive/50 flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border bg-transparent bg-clip-padding px-2.5 py-1.5 text-sm shadow-xs transition-[color,box-shadow] focus-within:ring-[3px] has-aria-invalid:ring-[3px] has-data-[slot=combobox-chip]:px-1.5",
        className,
      )}
      data-slot="combobox-chips"
      {...properties}
    />
  );
};

export const ComboboxChip = ({
  className,
  children,
  showRemove = true,
  ...properties
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean;
}) => {
  return (
    <ComboboxPrimitive.Chip
      className={cn(
        "bg-muted text-foreground flex h-[calc(--spacing(5.5))] w-fit items-center justify-center gap-1 rounded-sm px-1.5 text-xs font-medium whitespace-nowrap has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0",
        className,
      )}
      data-slot="combobox-chip"
      {...properties}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          className="-ml-1 opacity-50 hover:opacity-100"
          data-slot="combobox-chip-remove"
          render={<Button size="m" variant="ghost" />}
        >
          <XIcon className="pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  );
};

export const ComboboxChipsInput = ({
  className,
  ...properties
}: ComboboxPrimitive.Input.Props) => {
  return (
    <ComboboxPrimitive.Input
      className={cn("min-w-16 flex-1 outline-none", className)}
      data-slot="combobox-chip-input"
      {...properties}
    />
  );
};

export const useComboboxAnchor = () => {
  return React.useRef<HTMLDivElement | null>(null);
};
