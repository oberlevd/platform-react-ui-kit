import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./index";
import { Button } from "../Button";
import { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Info,
  Settings,
  Mail,
  Lock,
  LogOut,
} from "lucide-react";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Открыт ли диалог",
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
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Playground: Story = {
  args: {
    open: false,
  },
  render: function Render({ open }) {
    const [isOpen, setIsOpen] = useState(open);

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Открыть диалог</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Редактирование профиля</DialogTitle>
            <DialogDescription>
              Внесите изменения в свой профиль. Нажмите сохранить когда
              закончите.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right text-sm">
                Имя
              </label>
              <input
                id="name"
                defaultValue="Иван Петров"
                className="col-span-3 rounded-md border p-2"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right text-sm">
                Email
              </label>
              <input
                id="email"
                defaultValue="ivan@example.com"
                className="col-span-3 rounded-md border p-2"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Отмена</Button>
            </DialogClose>
            <Button type="submit">Сохранить</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Открыть диалог</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Подтверждение</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите продолжить? Это действие нельзя будет
              отменить.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Отмена</Button>
            </DialogClose>
            <Button>Подтвердить</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const InfoDialog: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Показать информацию</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
              <Info className="h-6 w-6 text-blue-600" />
            </div>
            <DialogTitle className="text-center">Информация</DialogTitle>
            <DialogDescription className="text-center">
              Обновление системы запланировано на завтра в 03:00. Ожидаемое
              время простоя — 30 минут.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button>Понятно</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const SuccessDialog: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Завершить операцию</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-center">Успешно!</DialogTitle>
            <DialogDescription className="text-center">
              Ваши изменения успешно сохранены.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button>Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const WarningDialog: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Удалить аккаунт</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-center">Удалить аккаунт?</DialogTitle>
            <DialogDescription className="text-center">
              Это действие нельзя отменить. Все ваши данные будут безвозвратно
              удалены.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center gap-2">
            <DialogClose asChild>
              <Button variant="outline">Отмена</Button>
            </DialogClose>
            <Button variant="destructive">Удалить</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const LoginDialog: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Войти</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Вход в систему</DialogTitle>
            <DialogDescription>
              Введите свои учетные данные для входа.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  className="w-full rounded-md border pl-9 p-2"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium">
                Пароль
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-md border pl-9 p-2"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Отмена</Button>
            </DialogClose>
            <Button>Войти</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const SettingsDialog: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Настройки
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Настройки</DialogTitle>
            <DialogDescription>
              Управляйте настройками вашего аккаунта.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-between">
              <label htmlFor="notifications" className="text-sm">
                Уведомления по email
              </label>
              <input type="checkbox" id="notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="darkMode" className="text-sm">
                Тёмная тема
              </label>
              <input type="checkbox" id="darkMode" />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="autoSave" className="text-sm">
                Автосохранение
              </label>
              <input type="checkbox" id="autoSave" defaultChecked />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Отмена</Button>
            </DialogClose>
            <Button>Сохранить</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const LogoutDialog: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Выйти
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Выход из системы</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите выйти из системы?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="flex-1">
                Отмена
              </Button>
            </DialogClose>
            <Button variant="destructive" className="flex-1">
              Выйти
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const LongContent: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Условия использования</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Условия использования</DialogTitle>
          </DialogHeader>
          <div className="max-h-96 overflow-y-auto py-4">
            <p className="mb-4">
              1. Принимая настоящие Условия, вы подтверждаете, что ознакомились
              с ними и согласны соблюдать все положения.
            </p>
            <p className="mb-4">
              2. Мы оставляем за собой право изменять настоящие Условия в любое
              время с уведомлением пользователей.
            </p>
            <p className="mb-4">
              3. Вы несете ответственность за сохранность своих учетных данных и
              за все действия, совершенные под вашей учетной записью.
            </p>
            <p className="mb-4">
              4. Мы не несем ответственности за любой ущерб, возникший в
              результате использования или невозможности использования сервиса.
            </p>
            <p className="mb-4">
              5. Сервис предоставляется "как есть" без каких-либо гарантий,
              явных или подразумеваемых.
            </p>
            <p className="mb-4">
              6. Вы соглашаетесь не использовать сервис для любых незаконных
              целей или действий.
            </p>
            <p className="mb-4">
              7. Мы уважаем вашу конфиденциальность и обрабатываем персональные
              данные в соответствии с нашей Политикой конфиденциальности.
            </p>
            <p className="mb-4">
              8. Настоящие Условия регулируются законодательством Российской
              Федерации.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Закрыть</Button>
            </DialogClose>
            <Button>Принять</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
