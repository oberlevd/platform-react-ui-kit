import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./index";
import { Button } from "../Button";
import { useState, useEffect } from "react";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Значение прогресса (0-100)",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Playground: Story = {
  args: {
    value: 45,
  },
};

export const Default: Story = {
  args: {
    value: 60,
  },
};

export const Values: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm">0%</p>
        <Progress value={0} />
      </div>
      <div>
        <p className="mb-2 text-sm">25%</p>
        <Progress value={25} />
      </div>
      <div>
        <p className="mb-2 text-sm">50%</p>
        <Progress value={50} />
      </div>
      <div>
        <p className="mb-2 text-sm">75%</p>
        <Progress value={75} />
      </div>
      <div>
        <p className="mb-2 text-sm">100%</p>
        <Progress value={100} />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: function Render() {
    const [progress, setProgress] = useState(13);

    return (
      <div className="space-y-4">
        <Progress value={progress} />
        <div className="flex gap-2">
          <Button
            size="m"
            onClick={() => setProgress(Math.max(0, progress - 10))}
            disabled={progress <= 0}
          >
            -10%
          </Button>
          <Button
            size="m"
            onClick={() => setProgress(Math.min(100, progress + 10))}
            disabled={progress >= 100}
          >
            +10%
          </Button>
          <Button size="m" variant="outline" onClick={() => setProgress(0)}>
            Сброс
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Текущее значение: {progress}%
        </p>
      </div>
    );
  },
};

export const Animated: Story = {
  render: function Render() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 100);
      return () => clearInterval(timer);
    }, []);

    return (
      <div className="space-y-2">
        <Progress value={progress} />
        <p className="text-center text-sm text-muted-foreground">
          Загрузка... {progress}%
        </p>
      </div>
    );
  },
};

export const FileUpload: Story = {
  render: function Render() {
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const startUpload = () => {
      setIsUploading(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button onClick={startUpload} disabled={isUploading}>
            {isUploading ? "Загрузка..." : "Загрузить файл"}
          </Button>
          <span className="text-sm text-muted-foreground">document.pdf</span>
        </div>
        <Progress value={progress} />
        {progress > 0 && (
          <p className="text-sm text-muted-foreground">
            {progress < 100 ? `Загружено ${progress}%` : "Загрузка завершена!"}
          </p>
        )}
      </div>
    );
  },
};

export const MultipleBars: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>React</span>
          <span className="text-muted-foreground">75%</span>
        </div>
        <Progress value={75} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>TypeScript</span>
          <span className="text-muted-foreground">60%</span>
        </div>
        <Progress value={60} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Tailwind</span>
          <span className="text-muted-foreground">90%</span>
        </div>
        <Progress value={90} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Next.js</span>
          <span className="text-muted-foreground">45%</span>
        </div>
        <Progress value={45} />
      </div>
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Выполнение проекта</span>
          <span className="text-sm text-muted-foreground">8/12 задач</span>
        </div>
        <Progress value={66} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Бюджет</span>
          <span className="text-sm text-muted-foreground">
            ₽45,000 / ₽100,000
          </span>
        </div>
        <Progress value={45} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Время</span>
          <span className="text-sm text-muted-foreground">12/30 дней</span>
        </div>
        <Progress value={40} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm">Маленький</p>
        <Progress value={75} className="h-1" />
      </div>
      <div>
        <p className="mb-2 text-sm">Стандартный</p>
        <Progress value={75} className="h-2" />
      </div>
      <div>
        <p className="mb-2 text-sm">Большой</p>
        <Progress value={75} className="h-4" />
      </div>
    </div>
  ),
};
