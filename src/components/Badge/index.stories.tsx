import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./index";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "success", "destructive"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Акцент",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Второстепенный",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Готово",
    variant: "success",
  },
};

export const Destructive: Story = {
  args: {
    children: "Ошибка",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Контур",
    variant: "outline",
  },
};

export const OnColorTheme: Story = {
  render: () => (
    <div className="theme-alfa-on-color p-10 bg-alfa-indigo rounded-lg flex gap-4 justify-center">
      <Badge variant="primary">Акцент</Badge>
      <Badge variant="outline">Контур</Badge>
      <Badge variant="secondary">Инверсия</Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge variant="primary">New</Badge>
      <Badge variant="secondary">Processing</Badge>
      <Badge variant="success">Completed</Badge>
      <Badge variant="destructive">Failed</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
};
