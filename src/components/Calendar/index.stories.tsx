import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "./index";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border border-alfa-border-control shadow-sm"
      />
    );
  },
};

export const Range: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>();
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-lg border border-alfa-border-control"
      />
    );
  },
};

export const OnColorTheme: Story = {
  render: () => (
    <div className="theme-alfa-on-color p-10 bg-alfa-indigo rounded-lg flex justify-center">
      <Calendar
        mode="single"
        className="bg-transparent text-white"
        classNames={{
          day: "text-white hover:bg-white/10",
          weekday: "text-white/30",
          month_caption: "text-white",
          button_previous: "text-white",
          button_next: "text-white",
        }}
      />
    </div>
  ),
};
