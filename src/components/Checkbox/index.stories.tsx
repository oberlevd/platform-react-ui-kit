import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./index";
import { Label } from "../Label";
import { useState } from "react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["m", "l"],
      control: { type: "select" },
    },
    checked: {
      options: [true, false, "indeterminate"],
      control: { type: "select" },
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8 bg-white min-h-32">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const AlfaStyle: Story = {
  args: {
    size: "m",
    checked: true,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="alfa-checked" {...args} checked={true} />
        <Label htmlFor="alfa-checked">Выбран (alfa-red)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="alfa-ind" {...args} checked="indeterminate" />
        <Label htmlFor="alfa-ind">Частичный (минус)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="alfa-empty" {...args} checked={false} />
        <Label htmlFor="alfa-empty">Пустой</Label>
      </div>
    </div>
  ),
};

export const GroupLogic: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(["1"]);
    const options = ["Опция 1", "Опция 2", "Опция 3"];

    const isAll = selected.length === options.length;
    const isInd = selected.length > 0 && !isAll;

    return (
      <div className="space-y-3 p-4 border rounded-xl w-64 shadow-sm">
        <div className="flex items-center gap-2 pb-2 border-b">
          <Checkbox
            id="all"
            checked={isInd ? "indeterminate" : isAll}
            onCheckedChange={(c) => setSelected(c ? options : [])}
          />
          <Label htmlFor="all" className="font-bold">
            Все настройки
          </Label>
        </div>
        {options.map((opt) => (
          <div key={opt} className="flex items-center gap-2">
            <Checkbox
              id={opt}
              checked={selected.includes(opt)}
              onCheckedChange={(c) =>
                setSelected((s) =>
                  c ? [...s, opt] : s.filter((i) => i !== opt),
                )
              }
            />
            <Label htmlFor={opt}>{opt}</Label>
          </div>
        ))}
      </div>
    );
  },
};
