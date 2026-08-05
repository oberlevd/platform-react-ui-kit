import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./index";
import { Button } from "../Button";
import { useState } from "react";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Дополнительные CSS классы",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-5" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-10" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="text-primary" />
      <Spinner className="text-secondary" />
      <Spinner className="text-destructive" />
      <Spinner className="text-muted-foreground" />
      <Spinner className="text-blue-500" />
      <Spinner className="text-green-500" />
    </div>
  ),
};

export const InButton: Story = {
  render: function Render() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div className="flex gap-4">
        <Button disabled={isLoading} onClick={handleClick}>
          {isLoading && <Spinner className="mr-2" />}
          {isLoading ? "Загрузка..." : "Нажми меня"}
        </Button>

        <Button variant="outline" disabled>
          <Spinner className="mr-2" />
          Отправка...
        </Button>
      </div>
    );
  },
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner />
      <span>Загрузка данных...</span>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-64 rounded-lg border p-4">
      <div className="flex flex-col items-center space-y-4">
        <Spinner className="size-8" />
        <p className="text-sm font-medium">Идёт загрузка</p>
        <p className="text-center text-xs text-muted-foreground">
          Пожалуйста, подождите. Это может занять несколько секунд.
        </p>
      </div>
    </div>
  ),
};

export const Fullscreen: Story = {
  render: () => (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <Spinner className="size-10" />
        <p className="text-lg font-medium">Загрузка приложения...</p>
      </div>
    </div>
  ),
};
