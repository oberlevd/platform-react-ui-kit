import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeToggle } from "./index";
import { useEffect } from "react";

const meta = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    themes: {
      disable: true,
    },
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        return () => {
          document.documentElement.classList.remove("dark", "light");
          localStorage.removeItem("theme");
        };
      }, []);

      return (
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  render: () => <ThemeToggle />,
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <span className="text-sm font-medium">
          Текущая тема определяется автоматически
        </span>
        <ThemeToggle />
      </div>
      <div className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          Нажмите на кнопку, чтобы переключить тему. Тема сохраняется в
          localStorage.
        </p>
      </div>
    </div>
  ),
};

export const WithPreview: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <span className="text-sm">Кнопка переключения темы</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border bg-background p-4">
          <h4 className="mb-2 font-medium">Светлая тема</h4>
          <p className="text-sm text-muted-foreground">
            Пример контента в светлой теме
          </p>
        </div>
        <div className="rounded-lg border bg-background p-4 dark">
          <h4 className="mb-2 font-medium">Тёмная тема</h4>
          <p className="text-sm text-muted-foreground">
            Пример контента в тёмной теме
          </p>
        </div>
      </div>
    </div>
  ),
};
