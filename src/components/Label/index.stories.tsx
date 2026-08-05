import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { Label } from "./index";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Текст метки",
    },
    size: {
      control: "select",
      options: ["s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      description: "Размер метки",
    },
    theme: {
      control: "select",
      options: ["alfa-on-white", "alfa-on-color", "light", "dark"],
      description: "Тема оформления",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Playground: Story = {
  args: {
    children: "Метка с выбором параметров",
    size: "m",
    theme: "light",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Label size="s">Размер S (Small)</Label>
      <Label size="m">Размер M (Medium / Default)</Label>
      <Label size="l">Размер L (Large)</Label>
      <Label size="xl">Размер XL</Label>
      <Label size="2xl">Размер 2XL</Label>
      <Label size="3xl">Размер 3XL</Label>
      <Label size="4xl">Размер 4XL</Label>
    </div>
  ),
};

export const Themes: Story = {
  render: () => (
    <div className="grid gap-8">
      <div className="bg-white p-4">
        <Label theme="alfa-on-white">Alfa On White</Label>
      </div>
      <div className="bg-blue-600 p-4">
        <Label theme="alfa-on-color">Alfa On Color</Label>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid gap-1.5">
        <Label size="s" htmlFor="email-s">
          Email (Small Label)
        </Label>
        <Input id="email-s" type="email" placeholder="example@email.com" />
      </div>

      <div className="grid gap-1.5">
        <Label size="l" htmlFor="name-l">
          Имя (Large Label)
        </Label>
        <Input id="name-l" placeholder="Иван Иванов" />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label size="s" htmlFor="terms">
          Я принимаю условия использования
        </Label>
      </div>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="grid gap-1.5">
      <Label htmlFor="required">
        Обязательное поле <span className="text-destructive">*</span>
      </Label>
      <Input id="required" placeholder="Введите текст" required />
    </div>
  ),
};
