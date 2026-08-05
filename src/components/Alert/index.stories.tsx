import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertTitle, AlertDescription } from "./index";
import { Info, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "info", "warning", "success"],
      description: "Вариант алерта",
    },
  },
  args: {
    variant: "default",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {
  args: {
    variant: "info",
    children: (
      <>
        <Info className="h-4 w-4" />
        <AlertTitle>Заголовок</AlertTitle>
        <AlertDescription>
          Вы можете менять вариант этого алерта в панели Controls.
        </AlertDescription>
      </>
    ),
  },
};

export const Default: Story = {
  render: (args) => (
    <Alert {...args} variant="info">
      <Info className="h-4 w-4" />
      <AlertTitle>Информация</AlertTitle>
      <AlertDescription>
        Это обычный информационный алерт. Используйте его для отображения важной
        информации.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Ошибка</AlertTitle>
      <AlertDescription>
        Произошла ошибка при сохранении данных. Пожалуйста, попробуйте снова.
      </AlertDescription>
    </Alert>
  ),
};

export const WithSuccessIcon: Story = {
  render: (args) => (
    <Alert {...args} variant="success">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Успешно</AlertTitle>
      <AlertDescription>Изменения успешно сохранены.</AlertDescription>
    </Alert>
  ),
};

export const WithWarningIcon: Story = {
  render: (args) => (
    <Alert {...args} variant="warning">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Предупреждение</AlertTitle>
      <AlertDescription>Ваша сессия истекает через 5 минут.</AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info">
        <Info className="h-4 w-4" />
        <AlertTitle>Информация</AlertTitle>
        <AlertDescription>Обычный информационный алерт</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Ошибка</AlertTitle>
        <AlertDescription>Алерт об ошибке</AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Успех</AlertTitle>
        <AlertDescription>Алерт об успешном действии</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Предупреждение</AlertTitle>
        <AlertDescription>Алерт-предупреждение</AlertDescription>
      </Alert>
    </div>
  ),
};
