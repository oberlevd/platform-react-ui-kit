import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, PopoverTrigger, PopoverContent } from "./index";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { Calendar } from "../Calendar";
import {
  Settings,
  User,
  Mail,
  Bell,
  HelpCircle,
  LogOut,
  Calendar as CalendarIcon,
} from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Открыт ли поповер",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "50px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Открыть поповер</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Размеры</h4>
            <p className="text-sm text-muted-foreground">
              Установите размеры для нового элемента
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Ширина</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Высота</Label>
              <Input
                id="height"
                defaultValue="50px"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Profile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <User className="h-4 w-4" />
          Профиль
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex items-center gap-4 pb-4">
          <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium">Иван Петров</h4>
            <p className="text-sm text-muted-foreground">ivan@example.com</p>
          </div>
        </div>
        <div className="grid gap-2">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-4 w-4" />
            Настройки
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Mail className="h-4 w-4" />
            Сообщения
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Bell className="h-4 w-4" />
            Уведомления
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-destructive"
          >
            <LogOut className="h-4 w-4" />
            Выйти
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const CalendarPopover: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-48 justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? date.toLocaleDateString() : "Выберите дату"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  },
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Редактировать профиль</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <form className="grid gap-4">
          <h4 className="font-medium">Редактирование профиля</h4>
          <div className="grid gap-2">
            <Label htmlFor="name">Имя</Label>
            <Input id="name" defaultValue="Иван Петров" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="ivan@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">О себе</Label>
            <textarea
              id="bio"
              className="min-h-20 w-full rounded-md border p-2"
              defaultValue="Frontend-разработчик"
            />
          </div>
          <Button type="submit">Сохранить</Button>
        </form>
      </PopoverContent>
    </Popover>
  ),
};

export const Help: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="s">
          <HelpCircle className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium">Помощь</h4>
          <p className="text-sm text-muted-foreground">
            Здесь вы найдете ответы на часто задаваемые вопросы о работе с
            приложением.
          </p>
          <div className="pt-2">
            <Button size="s" className="w-full">
              Перейти в справку
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Сверху</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p>Контент сверху</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Снизу</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p>Контент снизу</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Слева</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p>Контент слева</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Справа</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p>Контент справа</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const WithMarkdown: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Форматирование</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h4 className="font-medium">Доступные команды</h4>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-mono">**жирный**</span> →{" "}
              <strong>жирный</strong>
            </p>
            <p>
              <span className="font-mono">*курсив*</span> → <em>курсив</em>
            </p>
            <p>
              <span className="font-mono">~~зачеркнутый~~</span> →{" "}
              <del>зачеркнутый</del>
            </p>
            <p>
              <span className="font-mono">`код`</span> → <code>код</code>
            </p>
          </div>
          <Button size="s" className="w-full">
            Применить
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
