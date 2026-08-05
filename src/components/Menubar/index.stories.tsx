import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarRadioGroup,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "./index";
import {
  File,
  Edit,
  View,
  HelpCircle,
  Save,
  Copy,
  Scissors,
  ClipboardPaste,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  Keyboard,
  Github,
  Twitter,
  Folder,
  Trash2,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Components/Menubar",
  component: Menubar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Файл</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <File className="mr-2 h-4 w-4" />
            Новый
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Folder className="mr-2 h-4 w-4" />
            Открыть
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Save className="mr-2 h-4 w-4" />
            Сохранить
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Удалить
            <MenubarShortcut>⌘⌫</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Правка</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Undo className="mr-2 h-4 w-4" />
            Отменить
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Redo className="mr-2 h-4 w-4" />
            Повторить
            <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Scissors className="mr-2 h-4 w-4" />
            Вырезать
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Copy className="mr-2 h-4 w-4" />
            Копировать
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <ClipboardPaste className="mr-2 h-4 w-4" />
            Вставить
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Вид</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <ZoomIn className="mr-2 h-4 w-4" />
            Приблизить
            <MenubarShortcut>⌘+</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <ZoomOut className="mr-2 h-4 w-4" />
            Отдалить
            <MenubarShortcut>⌘-</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem checked>
            <View className="mr-2 h-4 w-4" />
            Показывать линейку
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>
            <View className="mr-2 h-4 w-4" />
            Показывать сетку
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Помощь</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            Документация
          </MenubarItem>
          <MenubarItem>
            <Keyboard className="mr-2 h-4 w-4" />
            Горячие клавиши
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </MenubarItem>
          <MenubarItem>
            <Twitter className="mr-2 h-4 w-4" />
            Twitter
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const WithSubmenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Файл</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Новый файл</MenubarItem>
          <MenubarItem>Открыть</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Недавние</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>document.pdf</MenubarItem>
              <MenubarItem>image.jpg</MenubarItem>
              <MenubarItem>notes.txt</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Очистить список</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Сохранить</MenubarItem>
          <MenubarItem>Сохранить как...</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Экспортировать</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>PDF</MenubarItem>
              <MenubarItem>HTML</MenubarItem>
              <MenubarItem>Markdown</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Правка</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Вставить как</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Текст</MenubarItem>
              <MenubarItem>HTML</MenubarItem>
              <MenubarItem>Markdown</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Преобразовать</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Верхний регистр</MenubarItem>
              <MenubarItem>Нижний регистр</MenubarItem>
              <MenubarItem>Заглавные</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const WithRadioItems: Story = {
  render: function Render() {
    const [theme, setTheme] = useState("system");
    const [fontSize, setFontSize] = useState("medium");

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Настройки</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Тема</MenubarLabel>
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="light">
                <Sun className="mr-2 h-4 w-4" />
                Светлая
              </MenubarRadioItem>
              <MenubarRadioItem value="dark">
                <Moon className="mr-2 h-4 w-4" />
                Тёмная
              </MenubarRadioItem>
              <MenubarRadioItem value="system">
                <Laptop className="mr-2 h-4 w-4" />
                Системная
              </MenubarRadioItem>
            </MenubarRadioGroup>

            <MenubarSeparator />

            <MenubarLabel>Размер шрифта</MenubarLabel>
            <MenubarRadioGroup value={fontSize} onValueChange={setFontSize}>
              <MenubarRadioItem value="small">Маленький</MenubarRadioItem>
              <MenubarRadioItem value="medium">Средний</MenubarRadioItem>
              <MenubarRadioItem value="large">Большой</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  },
};

export const WithCheckboxes: Story = {
  render: function Render() {
    const [showToolbar, setShowToolbar] = useState(true);
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Вид</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem
              checked={showToolbar}
              onCheckedChange={setShowToolbar}
            >
              <View className="mr-2 h-4 w-4" />
              Панель инструментов
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              <View className="mr-2 h-4 w-4" />
              Строка состояния
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={showSidebar}
              onCheckedChange={setShowSidebar}
            >
              <View className="mr-2 h-4 w-4" />
              Боковая панель
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <File className="h-4 w-4 mr-2" />
          Файл
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <File className="mr-2 h-4 w-4" />
            Новый
          </MenubarItem>
          <MenubarItem>
            <Folder className="mr-2 h-4 w-4" />
            Открыть
          </MenubarItem>
          <MenubarItem>
            <Save className="mr-2 h-4 w-4" />
            Сохранить
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Edit className="h-4 w-4 mr-2" />
          Правка
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Copy className="mr-2 h-4 w-4" />
            Копировать
          </MenubarItem>
          <MenubarItem>
            <Scissors className="mr-2 h-4 w-4" />
            Вырезать
          </MenubarItem>
          <MenubarItem>
            <ClipboardPaste className="mr-2 h-4 w-4" />
            Вставить
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const Editor: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Файл</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Новый файл</MenubarItem>
          <MenubarItem>Открыть...</MenubarItem>
          <MenubarItem>Сохранить</MenubarItem>
          <MenubarItem>Сохранить как...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Экспорт</MenubarItem>
          <MenubarItem>Печать</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Правка</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Отменить</MenubarItem>
          <MenubarItem>Повторить</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Вырезать</MenubarItem>
          <MenubarItem>Копировать</MenubarItem>
          <MenubarItem>Вставить</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Найти...</MenubarItem>
          <MenubarItem>Заменить...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Формат</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Полужирный</MenubarItem>
          <MenubarItem>Курсив</MenubarItem>
          <MenubarItem>Подчёркнутый</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Размер шрифта</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>12</MenubarItem>
              <MenubarItem>14</MenubarItem>
              <MenubarItem>16</MenubarItem>
              <MenubarItem>18</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Вид</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            Показать номера строк
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>Перенос строк</MenubarCheckboxItem>
          <MenubarCheckboxItem>Подсветка синтаксиса</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
