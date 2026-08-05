import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "./index";
import { useState } from "react";
import { Moon, Sun, Volume2, VolumeX } from "lucide-react";

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number", description: "Минимальное значение" },
    max: { control: "number", description: "Максимальное значение" },
    step: { control: "number", description: "Шаг" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="max-w-100 mx-auto p-10 bg-white min-h-50 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Playground: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = useState([50]);

    return (
      <div className="w-full space-y-6">
        <Slider {...args} value={value} onValueChange={setValue} />
        <div className="text-center font-bold text-alfa-text">{value[0]}%</div>
      </div>
    );
  },
};

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([20, 80]);

    return (
      <div className="w-full space-y-6">
        <div className="flex justify-between text-xs font-medium text-muted-foreground uppercase tracking-wider">
          <span>Мин: {value[0]}₽</span>
          <span>Макс: {value[1]}₽</span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          min={0}
          max={100}
          step={1}
        />
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState([65]);

    return (
      <div className="flex h-64 items-end justify-center gap-12">
        <div className="flex flex-col items-center gap-4 h-full">
          <Slider
            value={value}
            onValueChange={setValue}
            orientation="vertical"
          />
          <span className="text-sm font-bold">{value[0]}</span>
        </div>
        <Slider value={[30]} orientation="vertical" disabled />
        <Slider value={[85]} orientation="vertical" />
      </div>
    );
  },
};

export const VolumeControl: Story = {
  render: () => {
    const [value, setValue] = useState([40]);
    const isMuted = value[0] === 0;

    return (
      <div className="w-full bg-alfa-bg-control/30 p-6 rounded-2xl flex items-center gap-4">
        <button onClick={() => setValue([0])} className="text-alfa-text">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          className="flex-1"
        />
        <span className="text-sm tabular-nums font-medium w-8">{value[0]}</span>
      </div>
    );
  },
};

export const Brightness: Story = {
  render: () => {
    const [value, setValue] = useState([70]);

    return (
      <div className="w-full space-y-4">
        <div className="flex items-center gap-4">
          <Moon size={16} className="text-muted-foreground" />
          <Slider value={value} onValueChange={setValue} className="flex-1" />
          <Sun size={18} className="text-alfa-red" />
        </div>
        <div
          className="h-2 w-full rounded-full transition-all duration-300"
          style={{ opacity: value[0] / 100, backgroundColor: "#EF3124" }}
        />
      </div>
    );
  },
};
