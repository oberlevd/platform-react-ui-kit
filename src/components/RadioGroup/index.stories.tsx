import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, RadioGroupItem } from "./index";
import { Label } from "../Label";
import { Button } from "../Button";
import { useState } from "react";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Отключена ли группа",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Playground: Story = {
  args: {
    disabled: false,
  },
  render: ({ disabled }) => {
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup value={value} onValueChange={setValue} disabled={disabled}>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Вариант 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Вариант 2</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option3" id="option3" />
          <Label htmlFor="option3">Вариант 3</Label>
        </div>
      </RadioGroup>
    );
  },
};

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("react");

    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="react" id="react" />
          <Label htmlFor="react">React</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="vue" id="vue" />
          <Label htmlFor="vue">Vue</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="angular" id="angular" />
          <Label htmlFor="angular">Angular</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="svelte" id="svelte" />
          <Label htmlFor="svelte">Svelte</Label>
        </div>
      </RadioGroup>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState("small");

    return (
      <RadioGroup
        value={value}
        onValueChange={setValue}
        className="flex flex-row gap-4"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="small" id="small" />
          <Label htmlFor="small">Маленький</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="medium" id="medium" />
          <Label htmlFor="medium">Средний</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="large" id="large" />
          <Label htmlFor="large">Большой</Label>
        </div>
      </RadioGroup>
    );
  },
};

export const HorizontalWithDescription: Story = {
  render: () => {
    const [value, setValue] = useState("free");

    return (
      <RadioGroup
        value={value}
        onValueChange={setValue}
        className="flex flex-row gap-6"
      >
        <div className="flex items-start gap-2">
          <RadioGroupItem value="free" id="free-horizontal" className="mt-1" />
          <div>
            <Label htmlFor="free-horizontal" className="font-medium">
              Бесплатный
            </Label>
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              Базовые функции
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <RadioGroupItem value="pro" id="pro-horizontal" className="mt-1" />
          <div>
            <Label htmlFor="pro-horizontal" className="font-medium">
              Pro
            </Label>
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              Все функции
            </p>
          </div>
        </div>
      </RadioGroup>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [value, setValue] = useState("free");

    return (
      <div className="space-y-4">
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-start gap-2">
            <RadioGroupItem value="free" id="free" className="mt-1" />
            <div>
              <Label htmlFor="free" className="font-medium">
                Бесплатный
              </Label>
              <p className="text-sm text-muted-foreground">
                Доступ к базовым функциям
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <RadioGroupItem value="pro" id="pro" className="mt-1" />
            <div>
              <Label htmlFor="pro" className="font-medium">
                Pro
              </Label>
              <p className="text-sm text-muted-foreground">
                Все функции + приоритетная поддержка
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <RadioGroupItem
              value="enterprise"
              id="enterprise"
              className="mt-1"
            />
            <div>
              <Label htmlFor="enterprise" className="font-medium">
                Enterprise
              </Label>
              <p className="text-sm text-muted-foreground">
                Индивидуальные решения для бизнеса
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("option1");

    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="disabled1" disabled />
          <Label htmlFor="disabled1" className="text-muted-foreground">
            Отключенный вариант
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="disabled2" />
          <Label htmlFor="disabled2">Доступный вариант</Label>
        </div>
      </RadioGroup>
    );
  },
};

export const WithSelected: Story = {
  render: () => (
    <RadioGroup defaultValue="medium">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="small" id="size-small" />
        <Label htmlFor="size-small">Маленький</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="medium" id="size-medium" />
        <Label htmlFor="size-medium">Средний</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="large" id="size-large" />
        <Label htmlFor="size-large">Большой</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithButton: Story = {
  render: function Render() {
    const [value, setValue] = useState("option1");

    return (
      <div className="space-y-4">
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="confirm-yes" />
            <Label htmlFor="confirm-yes">Да, подтверждаю</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="confirm-no" />
            <Label htmlFor="confirm-no">Нет, отменить</Label>
          </div>
        </RadioGroup>
        <Button>Продолжить</Button>
      </div>
    );
  },
};
