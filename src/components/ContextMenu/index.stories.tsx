import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "./index";
import { useState } from "react";
import {
  Copy,
  FileText,
  Folder,
  Trash2,
  Download,
  Upload,
  Edit,
  Share2,
  Star,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Music,
  Video,
  Image,
  Archive,
  Info,
} from "lucide-react";

const meta = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "100px 20px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-context-menu w-64">
          <p className="text-muted-foreground">Щелкните правой кнопкой мыши</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          Открыть
          <ContextMenuShortcut>⌘O</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Копировать
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Download className="mr-2 h-4 w-4" />
          Скачать
          <ContextMenuShortcut>⌘D</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Удалить
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-context-menu w-64">
          <p className="text-muted-foreground">
            Правый клик для меню с подменю
          </p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <Folder className="mr-2 h-4 w-4" />
          Открыть в папке
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Share2 className="mr-2 h-4 w-4" />
            Поделиться
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              <span>Telegram</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <span>WhatsApp</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <span>Email</span>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Удалить
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithCheckboxes: Story = {
  render: function Render() {
    const [showHidden, setShowHidden] = useState(false);
    const [showPreview, setShowPreview] = useState(true);
    const [showDetails, setShowDetails] = useState(true);

    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-context-menu w-64">
            <p className="text-muted-foreground">Настройки отображения</p>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Вид</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={showPreview}
            onCheckedChange={setShowPreview}
          >
            <Eye className="mr-2 h-4 w-4" />
            Показывать превью
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showDetails}
            onCheckedChange={setShowDetails}
          >
            <Info className="mr-2 h-4 w-4" />
            Показывать детали
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showHidden}
            onCheckedChange={setShowHidden}
          >
            <EyeOff className="mr-2 h-4 w-4" />
            Показывать скрытые
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <div className="px-2 py-1.5 text-xs text-muted-foreground">
            Превью: {showPreview ? "✓" : "✗"} | Детали:{" "}
            {showDetails ? "✓" : "✗"} | Скрытые: {showHidden ? "✓" : "✗"}
          </div>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const WithRadioItems: Story = {
  render: function Render() {
    const [fileType, setFileType] = useState("all");

    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-context-menu w-64">
            <p className="text-muted-foreground">Фильтр по типу файлов</p>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuLabel>Показывать</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={fileType} onValueChange={setFileType}>
            <ContextMenuRadioItem value="all">
              <span>Все файлы</span>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="documents">
              <FileText className="mr-2 h-4 w-4" />
              Документы
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="images">
              <Image className="mr-2 h-4 w-4" />
              Изображения
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="audio">
              <Music className="mr-2 h-4 w-4" />
              Аудио
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="video">
              <Video className="mr-2 h-4 w-4" />
              Видео
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <div className="px-2 py-1.5 text-xs text-muted-foreground">
            Текущий фильтр: {fileType === "all" ? "Все файлы" : fileType}
          </div>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const FileContextMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border rounded-lg p-6 bg-card w-48 text-center">
          <FileText className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
          <p className="font-medium">document.pdf</p>
          <p className="text-xs text-muted-foreground">2.5 MB</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <Folder className="mr-2 h-4 w-4" />
          Открыть с помощью...
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Копировать
        </ContextMenuItem>
        <ContextMenuItem>
          <Download className="mr-2 h-4 w-4" />
          Скачать
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Archive className="mr-2 h-4 w-4" />
            Отправить
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              <span>По email</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <span>В Telegram</span>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Удалить
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const FolderContextMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border rounded-lg p-6 bg-card w-48 text-center">
          <Folder className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
          <p className="font-medium">Проекты</p>
          <p className="text-xs text-muted-foreground">12 элементов</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <Folder className="mr-2 h-4 w-4" />
          Открыть
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Копировать
        </ContextMenuItem>
        <ContextMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          Переименовать
        </ContextMenuItem>
        <ContextMenuItem>
          <Upload className="mr-2 h-4 w-4" />
          Загрузить сюда
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Info className="mr-2 h-4 w-4" />
          Свойства
        </ContextMenuItem>
        <ContextMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Удалить
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const TextContextMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border rounded-lg p-4 bg-card w-64">
          <p className="text-sm">
            Выделите этот текст и нажмите правую кнопку мыши для контекстного
            меню.
          </p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Копировать
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          Вырезать
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <span>Вставить</span>
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <span>Выделить всё</span>
          <ContextMenuShortcut>⌘A</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const LargeMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-context-menu w-64">
          <p className="text-muted-foreground">
            Контекстное меню с большим количеством пунктов
          </p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>Действия с файлом</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          Открыть
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Копировать
        </ContextMenuItem>
        <ContextMenuItem>
          <Download className="mr-2 h-4 w-4" />
          Скачать
        </ContextMenuItem>
        <ContextMenuItem>
          <Upload className="mr-2 h-4 w-4" />
          Загрузить
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Настройки доступа</ContextMenuLabel>
        <ContextMenuItem>
          <Lock className="mr-2 h-4 w-4" />
          Заблокировать
        </ContextMenuItem>
        <ContextMenuItem>
          <Unlock className="mr-2 h-4 w-4" />
          Разблокировать
        </ContextMenuItem>
        <ContextMenuCheckboxItem checked>
          <Star className="mr-2 h-4 w-4" />
          Добавить в избранное
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Удалить навсегда
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
