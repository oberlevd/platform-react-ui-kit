import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "./index";
import { useState } from "react";
import {
  Calculator,
  Calendar,
  Settings,
  Smile,
  User,
  Mail,
  MessageSquare,
  Github,
  Twitter,
  Linkedin,
  Home,
  FileText,
  HelpCircle,
  LogOut,
} from "lucide-react";

const meta = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <div className="w-full max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Введите команду или поиск..." />
      <CommandList>
        <CommandEmpty>Ничего не найдено</CommandEmpty>
        <CommandGroup heading="Рекомендации">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Календарь</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Смайлы</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Калькулятор</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Настройки">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Профиль</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Почта</span>
            <CommandShortcut>⌘M</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Настройки</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Dialog: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm"
        >
          Открыть командное меню (⌘K)
        </button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Введите команду..." />
          <CommandList>
            <CommandEmpty>Ничего не найдено</CommandEmpty>
            <CommandGroup heading="Общее">
              <CommandItem>
                <Home className="mr-2 h-4 w-4" />
                <span>Главная</span>
              </CommandItem>
              <CommandItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>Документы</span>
              </CommandItem>
              <CommandItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Помощь</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Аккаунт">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Профиль</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Настройки</span>
              </CommandItem>
              <CommandItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Выйти</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Поиск..." />
      <CommandList>
        <CommandEmpty>Ничего не найдено</CommandEmpty>
        <CommandGroup heading="Социальные сети">
          <CommandItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem>
            <Twitter className="mr-2 h-4 w-4" />
            <span>Twitter</span>
          </CommandItem>
          <CommandItem>
            <Linkedin className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Коммуникация">
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Отправить email</span>
          </CommandItem>
          <CommandItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Новое сообщение</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Поиск..." />
      <CommandList>
        <CommandEmpty>Ничего не найдено</CommandEmpty>
        <CommandGroup heading="Файл">
          <CommandItem>
            <span>Новый файл</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Открыть</span>
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Сохранить</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Правка">
          <CommandItem>
            <span>Копировать</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Вставить</span>
            <CommandShortcut>⌘V</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Вырезать</span>
            <CommandShortcut>⌘X</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithSeparators: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Поиск..." />
      <CommandList>
        <CommandEmpty>Ничего не найдено</CommandEmpty>
        <CommandGroup heading="Основные">
          <CommandItem>Панель управления</CommandItem>
          <CommandItem>Проекты</CommandItem>
          <CommandItem>Задачи</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Дополнительно">
          <CommandItem>Настройки</CommandItem>
          <CommandItem>Помощь</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Аккаунт">
          <CommandItem>Профиль</CommandItem>
          <CommandItem>Выйти</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Empty: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Поиск..." />
      <CommandList>
        <CommandEmpty>Ничего не найдено</CommandEmpty>
      </CommandList>
    </Command>
  ),
};

export const CustomTitle: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Поиск приложений..." />
      <CommandList>
        <CommandEmpty>Приложения не найдены</CommandEmpty>
        <CommandGroup heading="Популярные">
          <CommandItem>
            <span>Chrome</span>
          </CommandItem>
          <CommandItem>
            <span>Figma</span>
          </CommandItem>
          <CommandItem>
            <span>VS Code</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Недавние">
          <CommandItem>
            <span>Slack</span>
          </CommandItem>
          <CommandItem>
            <span>Notion</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Small: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md max-w-xs">
      <CommandInput placeholder="Поиск..." className="h-8" />
      <CommandList>
        <CommandEmpty>Ничего не найдено</CommandEmpty>
        <CommandItem className="py-1.5">
          <span>Быстрый поиск</span>
        </CommandItem>
        <CommandItem className="py-1.5">
          <span>Недавние</span>
        </CommandItem>
        <CommandItem className="py-1.5">
          <span>Избранное</span>
        </CommandItem>
      </CommandList>
    </Command>
  ),
};
