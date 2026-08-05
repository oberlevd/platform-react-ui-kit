import type { Meta, StoryObj } from "@storybook/react-vite";
import { cn } from "@/lib/utils";
import { Toggle } from "./index";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Star,
} from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "outline"],
    },
    size: {
      control: "radio",
      options: ["default", "sm", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center p-10 bg-white min-h-37.5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const AlfaStyle: Story = {
  render: function Render() {
    const [pressed, setPressed] = useState(false);

    return (
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-2">
          <Toggle
            variant="default"
            pressed={pressed}
            onPressedChange={setPressed}
          >
            <Bold className="size-4" />
            <span>Стандартный</span>
          </Toggle>
        </div>
      </div>
    );
  },
};

export const FormatGroup: Story = {
  render: function Render() {
    const [formats, setFormats] = useState({ b: false, i: false, u: false });

    return (
      <div className="flex items-center gap-1 border border-alfa-border-control p-1 rounded-lg bg-alfa-bg-control/20">
        <Toggle
          pressed={formats.b}
          onPressedChange={(v) => setFormats({ ...formats, b: v })}
          size="sm"
        >
          <Bold className="size-4" />
        </Toggle>
        <Toggle
          pressed={formats.i}
          onPressedChange={(v) => setFormats({ ...formats, i: v })}
          size="sm"
        >
          <Italic className="size-4" />
        </Toggle>
        <Toggle
          pressed={formats.u}
          onPressedChange={(v) => setFormats({ ...formats, u: v })}
          size="sm"
        >
          <Underline className="size-4" />
        </Toggle>
      </div>
    );
  },
};

export const Alignment: Story = {
  render: function Render() {
    const [align, setAlign] = useState("left");

    return (
      <div className="flex gap-1 border border-alfa-border-control p-1 rounded-lg">
        <Toggle
          pressed={align === "left"}
          onPressedChange={() => setAlign("left")}
          variant="default"
        >
          <AlignLeft className="size-4" />
        </Toggle>
        <Toggle
          pressed={align === "center"}
          onPressedChange={() => setAlign("center")}
          variant="default"
        >
          <AlignCenter className="size-4" />
        </Toggle>
        <Toggle
          pressed={align === "right"}
          onPressedChange={() => setAlign("right")}
          variant="default"
        >
          <AlignRight className="size-4" />
        </Toggle>
      </div>
    );
  },
};

export const Favorite: Story = {
  render: function Render() {
    const [active, setActive] = useState(false);

    return (
      <Toggle
        variant="outline"
        pressed={active}
        onPressedChange={setActive}
        className="group"
      >
        <Star
          className={cn(
            "size-4 transition-colors",
            active ? "fill-alfa-red text-alfa-red" : "text-alfa-text",
          )}
        />
        <span>В избранное</span>
      </Toggle>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle disabled variant="outline">
        <Bold className="size-4" />
      </Toggle>
      <Toggle disabled pressed variant="default">
        <Bold className="size-4" />
      </Toggle>
    </div>
  ),
};
