import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup, ButtonGroupText } from "./index";
import { Button } from "../Button";
import { Settings, User, Edit, Copy } from "lucide-react";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Левая</Button>
      <Button variant="outline">Центр</Button>
      <Button variant="outline">Правая</Button>
    </ButtonGroup>
  ),
};

export const Pagination: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="s">
        Назад
      </Button>
      <ButtonGroupText className="px-5">2 из 10</ButtonGroupText>
      <Button variant="outline" size="s">
        Вперед
      </Button>
    </ButtonGroup>
  ),
};

export const IconGroup: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="s">
        <Settings className="size-4" />
      </Button>
      <Button variant="outline" size="s">
        <User className="size-4" />
      </Button>
      <Button variant="outline" size="s">
        <Edit className="size-4" />
      </Button>
      <Button variant="outline" size="s">
        <Copy className="size-4" />
      </Button>
    </ButtonGroup>
  ),
};

export const OnColorTheme: Story = {
  render: (args) => (
    <div className="theme-alfa-on-color p-10 bg-alfa-indigo rounded-lg flex justify-center">
      <ButtonGroup {...args}>
        <Button variant="outline">Один</Button>
        <Button variant="outline">Два</Button>
        <Button variant="outline">Три</Button>
      </ButtonGroup>
    </div>
  ),
};
