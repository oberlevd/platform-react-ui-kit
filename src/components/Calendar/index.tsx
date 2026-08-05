import * as React from "react";
import {
  DayPicker,
  getDefaultClassNames,
  useDayPicker,
  type DayButtonProps,
  type MonthCaptionProps,
} from "react-day-picker";
import { ru } from "date-fns/locale/ru";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";

import * as SelectPrimitive from "@radix-ui/react-select";

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost";
}) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      locale={ru}
      captionLayout={captionLayout}
      className={cn(
        "bg-background p-3 rounded-lg border border-border relative",
        className,
      )}
      classNames={{
        root: cn("w-[280px]", defaultClassNames.root),
        months: cn("flex flex-col", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-2", defaultClassNames.month),
        month_caption: cn(
          "flex items-center justify-between h-10 w-full mb-2",
          defaultClassNames.month_caption,
        ),
        nav: "hidden",
        weekdays: cn("flex justify-between mt-2", defaultClassNames.weekdays),
        weekday: cn(
          "text-alfa-text/30 w-9 text-[11px] font-medium text-center uppercase tracking-wider",
          defaultClassNames.weekday,
        ),
        week: cn("flex w-full mt-1", defaultClassNames.week),
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          defaultClassNames.day,
        ),
        today: cn("relative", defaultClassNames.today),
        outside: cn("text-alfa-text/30 opacity-50", defaultClassNames.outside),
        disabled: cn("text-alfa-text/30", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        range_start: "rounded-l-md",
        range_end: "rounded-r-md",
        range_middle:
          "aria-selected:bg-alfa-bg-control aria-selected:text-alfa-text",
        ...classNames,
      }}
      components={{
        MonthCaption: (captionProps) => (
          <CustomMonthCaption {...captionProps} buttonVariant={buttonVariant} />
        ),
        DayButton: CalendarDayButton,
        ...components,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
};

const CustomMonthCaption = ({
  calendarMonth,
  className,
  buttonVariant = "ghost",
}: MonthCaptionProps & {
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost";
}) => {
  const { previousMonth, nextMonth, goToMonth } = useDayPicker();
  const [open, setOpen] = React.useState(false);

  const currentDate = calendarMonth.date;
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthOptions = React.useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        value: i.toString(),
        label: new Intl.DateTimeFormat("ru-RU", { month: "long" }).format(
          new Date(2024, i, 1),
        ),
      })),
    [],
  );

  const yearOptions = React.useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => (currentYear - 50 + i).toString()),
    [currentYear],
  );

  const handleMonthChange = (value: string) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(parseInt(value, 10));
    goToMonth(newDate);
  };

  const handleYearChange = (value: string) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(parseInt(value, 10));
    goToMonth(newDate);
  };

  return (
    <div className={cn("flex items-center w-full h-10 px-1", className)}>
      <Button
        variant={buttonVariant}
        size="s"
        className="h-8 w-8 p-0"
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
        type="button"
      >
        <ChevronLeftIcon className="size-4" />
      </Button>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="flex-1 text-sm font-medium capitalize py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors mx-1"
          >
            {new Intl.DateTimeFormat("ru-RU", {
              month: "long",
              year: "numeric",
            }).format(currentDate)}
          </button>
        </PopoverTrigger>

        <PopoverContent
          className="w-64 p-3  shadow-2xl border border-border  bg-background"
          style={{ backgroundColor: "var(--background, white)" }}
          align="center"
          sideOffset={5}
        >
          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <span className="text-[11px] uppercase text-muted-foreground font-semibold">
                Месяц
              </span>
              <SelectPrimitive.Root
                value={currentMonth.toString()}
                onValueChange={handleMonthChange}
              >
                <SelectPrimitive.Trigger className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring capitalize">
                  <SelectPrimitive.Value />
                </SelectPrimitive.Trigger>
                <SelectPrimitive.Portal>
                  <SelectPrimitive.Content
                    className="relative z-1000 min-w-32 overflow-hidden rounded-md border bg-background text-popover-foreground shadow-md "
                    style={{ backgroundColor: "var(--background, white)" }}
                  >
                    <SelectPrimitive.Viewport className="p-1">
                      {monthOptions.map((m) => (
                        <SelectPrimitive.Item
                          key={m.value}
                          value={m.value}
                          className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground capitalize"
                        >
                          <SelectPrimitive.ItemText>
                            {m.label}
                          </SelectPrimitive.ItemText>
                        </SelectPrimitive.Item>
                      ))}
                    </SelectPrimitive.Viewport>
                  </SelectPrimitive.Content>
                </SelectPrimitive.Portal>
              </SelectPrimitive.Root>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase text-muted-foreground font-semibold">
                Год
              </span>
              <SelectPrimitive.Root
                value={currentYear.toString()}
                onValueChange={handleYearChange}
              >
                <SelectPrimitive.Trigger className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring opacity-100!">
                  <SelectPrimitive.Value />
                </SelectPrimitive.Trigger>
                <SelectPrimitive.Portal>
                  <SelectPrimitive.Content
                    className="relative z-1000 min-w-32 overflow-hidden rounded-md border bg-background text-popover-foreground shadow-md"
                    style={{ backgroundColor: "var(--background, white)" }}
                  >
                    <SelectPrimitive.Viewport className="p-1">
                      {yearOptions.map((year) => (
                        <SelectPrimitive.Item
                          key={year}
                          value={year}
                          className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground"
                        >
                          <SelectPrimitive.ItemText>
                            {year}
                          </SelectPrimitive.ItemText>
                        </SelectPrimitive.Item>
                      ))}
                    </SelectPrimitive.Viewport>
                  </SelectPrimitive.Content>
                </SelectPrimitive.Portal>
              </SelectPrimitive.Root>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Button
        variant={buttonVariant}
        size="s"
        className="h-8 w-8 p-0"
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
        type="button"
      >
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
};

const CalendarDayButton = ({
  className,
  modifiers,
  ...props
}: DayButtonProps) => {
  const reference = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) reference.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={reference}
      variant="ghost"
      size="s"
      className={cn(
        "size-9 p-0 font-normal transition-none rounded-lg",
        modifiers.today &&
          "border border-alfa-text shadow-[inset_0_0_0_1px_var(--alfa-text)]",
        modifiers.selected &&
          !modifiers.range_middle &&
          "bg-alfa-text text-background hover:bg-alfa-text hover:text-background",
        modifiers.range_middle &&
          "bg-alfa-bg-control text-alfa-text rounded-none",
        modifiers.range_start && "rounded-r-none",
        modifiers.range_end && "rounded-l-none",
        className,
      )}
      {...props}
    />
  );
};
