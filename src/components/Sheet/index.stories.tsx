import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./index";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { useState } from "react";
import { SettingsIcon, Mail, Bell, Shield, Filter } from "lucide-react";

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Открыта ли панель",
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
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Playground: Story = {
  args: {
    open: false,
  },
  render: function Render({ open }) {
    const [isOpen, setIsOpen] = useState(open);

    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Открыть панель</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Редактирование профиля</SheetTitle>
            <SheetDescription>
              Внесите изменения в свой профиль. Нажмите сохранить когда
              закончите.
            </SheetDescription>
          </SheetHeader>
          <div className="px-4 py-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Имя
                </Label>
                <Input
                  id="name"
                  defaultValue="Иван Петров"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="ivan@example.com"
                  className="col-span-3"
                />
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Отмена</Button>
            </SheetClose>
            <Button type="submit">Сохранить</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Right: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Справа</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Панель справа</SheetTitle>
            <SheetDescription>
              Панель появляется справа. Используется для дополнительных
              действий.
            </SheetDescription>
          </SheetHeader>
          <div className="px-4 py-4">
            <p className="text-sm text-muted-foreground">
              Здесь может быть любой контент: формы, списки, настройки.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Left: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Слева</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Меню</SheetTitle>
            <SheetDescription>Навигационное меню приложения</SheetDescription>
          </SheetHeader>
          <div className="px-4 py-4 space-y-2">
            {["Профиль", "Настройки", "Сообщения", "Уведомления"].map(
              (item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  {item}
                </Button>
              ),
            )}
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Top: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Сверху</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Поиск</SheetTitle>
            <SheetDescription>Быстрый поиск по приложению</SheetDescription>
          </SheetHeader>
          <div className="px-4 py-4">
            <Input placeholder="Введите запрос..." />
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Bottom: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Снизу</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Действия</SheetTitle>
            <SheetDescription>Выберите действие для файла</SheetDescription>
          </SheetHeader>
          <div className="px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline">Поделиться</Button>
              <Button variant="outline">Скачать</Button>
              <Button variant="outline">Переименовать</Button>
              <Button variant="destructive">Удалить</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const WithoutCloseButton: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Без кнопки закрытия</Button>
        </SheetTrigger>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Важное сообщение</SheetTitle>
            <SheetDescription>
              Эту панель можно закрыть только кликом вне области
            </SheetDescription>
          </SheetHeader>
          <div className="px-4 py-4">
            <p className="text-sm">
              Здесь нет кнопки закрытия, но можно нажать вне панели.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Settings: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <SettingsIcon className="mr-2 h-4 w-4" />
            Настройки
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Настройки</SheetTitle>
            <SheetDescription>Управление настройками аккаунта</SheetDescription>
          </SheetHeader>
          <div className="px-4 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <Label>Уведомления</Label>
              </div>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Label>Email-рассылка</Label>
              </div>
              <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <Label>Двухфакторка</Label>
              </div>
              <input type="checkbox" defaultChecked />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Отмена</Button>
            </SheetClose>
            <Button>Сохранить</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Filters: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Фильтры
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Фильтры</SheetTitle>
            <SheetDescription>Уточните параметры поиска</SheetDescription>
          </SheetHeader>
          <div className="px-4 py-4 space-y-4">
            <div>
              <Label>Цена от</Label>
              <Input type="number" placeholder="0" className="mt-1" />
            </div>
            <div>
              <Label>Цена до</Label>
              <Input type="number" placeholder="10000" className="mt-1" />
            </div>
            <div>
              <Label>Категория</Label>
              <select className="w-full rounded-md border p-2 mt-1">
                <option>Все</option>
                <option>Электроника</option>
                <option>Одежда</option>
                <option>Книги</option>
              </select>
            </div>
          </div>
          <SheetFooter>
            <Button className="w-full">Применить</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
