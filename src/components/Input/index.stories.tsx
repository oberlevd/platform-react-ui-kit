import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./index";
import { Label } from "../Label";
import { Button } from "../Button";
import { Mail, Lock, User, Search, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url", "search"],
      description: "Тип поля ввода",
    },
    placeholder: {
      control: "text",
      description: "Подсказка в поле",
    },
    disabled: {
      control: "boolean",
      description: "Отключено ли поле",
    },
    readOnly: {
      control: "boolean",
      description: "Только для чтения",
    },
    required: {
      control: "boolean",
      description: "Обязательное поле",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    placeholder: "Введите текст...",
    type: "text",
    disabled: false,
  },
};

export const Default: Story = {
  args: {
    placeholder: "Введите текст...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="example@email.com" />
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid gap-1.5">
        <Label htmlFor="text">Текст</Label>
        <Input type="text" id="text" placeholder="Обычный текст" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email2">Email</Label>
        <Input type="email" id="email2" placeholder="email@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="password">Пароль</Label>
        <Input type="password" id="password" placeholder="••••••••" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="number">Число</Label>
        <Input type="number" id="number" placeholder="0" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="tel">Телефон</Label>
        <Input type="tel" id="tel" placeholder="+7 (999) 999-99-99" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="search">Поиск</Label>
        <Input type="search" id="search" placeholder="Поиск..." />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Input placeholder="Обычный размер" className="h-9" />
      <Input placeholder="Большой размер" className="h-11 text-lg" />
      <Input placeholder="Маленький размер" className="h-7 text-xs" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Input placeholder="Обычное состояние" />
      <Input placeholder="Отключенное" disabled />
      <Input placeholder="Только чтение" readOnly value="Нельзя изменить" />
      <Input
        placeholder="С ошибкой"
        className="border-red-500 focus-visible:ring-red-500"
      />
      <Input placeholder="Обязательное" required />
    </div>
  ),
};

export const WithLeftIcon: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="relative">
        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Имя пользователя" className="pl-9" />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="email" placeholder="Email" className="pl-9" />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="password" placeholder="Пароль" className="pl-9" />
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Поиск" className="pl-9" />
      </div>
    </div>
  ),
};

export const WithRightIcon: Story = {
  render: function Render() {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-4">
        <div className="relative">
          <Input type="text" placeholder="Сумма" className="pr-9" />
          <span className="absolute right-3 top-2.5 text-sm text-muted-foreground">
            ₽
          </span>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Пароль"
            className="pr-9"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>
        <div className="relative">
          <Input type="text" placeholder="Поиск" className="pr-9" />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    );
  },
};

export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="login-email"
            type="email"
            placeholder="ivan@example.com"
            className="pl-9"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="login-password">Пароль</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="login-password"
            type="password"
            placeholder="••••••••"
            className="pl-9"
          />
        </div>
      </div>
      <Button className="w-full">Войти</Button>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <Input placeholder="Введите код" className="flex-1" />
      <Button>Применить</Button>
    </div>
  ),
};

export const FileInput: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="file">Загрузить файл</Label>
      <Input id="file" type="file" />
    </div>
  ),
};
