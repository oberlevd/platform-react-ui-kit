import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./index";
import { Settings, ChevronRight, Mail } from "lucide-react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l", "xl"],
    },
    isRounded: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "m",
    children: "Отправить",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "m",
    children: "Отмена",
  },
};

export const Rounded: Story = {
  args: {
    variant: "primary",
    size: "m",
    isRounded: true,
    children: "Круглая кнопка",
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args}>
        <Settings />
        Настройки
      </Button>
      <Button {...args} variant="outline">
        Письмо
        <Mail />
      </Button>
      <Button {...args} variant="ghost" size="s">
        Далее
        <ChevronRight />
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="primary" isRounded>
          Primary
        </Button>
        <Button variant="secondary" isRounded>
          Secondary
        </Button>
        <Button variant="outline" isRounded>
          Outline
        </Button>
        <Button variant="ghost" isRounded>
          Ghost
        </Button>
      </div>
    </div>
  ),
};

export const OnColorTheme: Story = {
  render: (args) => (
    <div className="theme-alfa-on-color p-10 bg-alfa-indigo rounded-lg flex gap-4 justify-center">
      <Button {...args} variant="outline">
        Инверсия
      </Button>
      <Button {...args} variant="ghost">
        Ghost на цвете
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    fullWidth: true,
    children: "Кнопка на всю ширину",
  },
};
