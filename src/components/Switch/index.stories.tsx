import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./index";
import { Label } from "../Label";
import { useState } from "react";
import { Moon, Sun, ShieldCheck, Zap } from "lucide-react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      control: "radio",
      options: ["default", "sm"],
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-100 mx-auto p-10 bg-white min-h-50">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  args: {
    size: "default",
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex items-center gap-3">
        <Switch
          {...args}
          checked={checked}
          onCheckedChange={setChecked}
          id="switch-p"
        />
        <Label htmlFor="switch-p" className="cursor-pointer font-medium">
          {checked ? "Активно" : "Выключено"}
        </Label>
      </div>
    );
  },
};

export const AlfaSettings: Story = {
  render: function Render() {
    return (
      <div className="w-full space-y-1 border border-alfa-border-control rounded-2xl overflow-hidden bg-white shadow-sm">
        <div className="flex items-center justify-between p-4 hover:bg-alfa-bg-control/20 transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-alfa-red/10 rounded-lg text-alfa-red">
              <ShieldCheck size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-alfa-text">
                Безопасный вход
              </span>
              <span className="text-xs text-muted-foreground">
                Подтверждение через СМС
              </span>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between p-4 hover:bg-alfa-bg-control/20 transition-colors border-t border-alfa-border-control/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-alfa-bg-control rounded-lg text-alfa-text">
              <Zap size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-alfa-text">
                Быстрый платеж
              </span>
              <span className="text-xs text-muted-foreground">
                Оплата в один клик
              </span>
            </div>
          </div>
          <Switch />
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Switch size="sm" id="s-sm" />
        <Label htmlFor="s-sm">Компактный (sm)</Label>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="default" id="s-def" />
        <Label htmlFor="s-def">Стандартный (default)</Label>
      </div>
    </div>
  ),
};

export const DarkModeToggle: Story = {
  render: function Render() {
    const [isDark, setIsDark] = useState(false);
    return (
      <div className="p-6 rounded-2xl border border-alfa-border-control flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          {isDark ? (
            <Moon className="text-alfa-red" />
          ) : (
            <Sun className="text-amber-500" />
          )}
          <span className="font-bold text-alfa-text">Оформление темы</span>
        </div>
        <Switch checked={isDark} onCheckedChange={setIsDark} />
      </div>
    );
  },
};

export const DisabledStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 opacity-60">
        <Switch disabled id="d1" />
        <Label htmlFor="d1">Недоступно (выкл)</Label>
      </div>
      <div className="flex items-center gap-3 opacity-60">
        <Switch disabled checked id="d2" />
        <Label htmlFor="d2">Недоступно (вкл)</Label>
      </div>
    </div>
  ),
};
