import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ItemGroup,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
  ItemSeparator,
} from "./index";
import { Button } from "../Button";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { Badge } from "../Badge";
import { Switch } from "../Switch";
import {
  User,
  Mail,
  Phone,
  FileText,
  Image,
  Music,
  Download,
  Copy,
  MoreVertical,
  Bell,
  Shield,
  Star,
  Archive,
} from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
      description: "Вариант элемента",
    },
    size: {
      control: "select",
      options: ["default", "sm"],
      description: "Размер элемента",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof Item>;

export const Playground: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  render: ({ variant, size }) => (
    <Item variant={variant} size={size}>
      <ItemMedia variant="image">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>Иван Петров</ItemTitle>
          <Badge>Онлайн</Badge>
        </ItemHeader>
        <ItemDescription>Frontend-разработчик</ItemDescription>
        <ItemActions>
          <Button size="s" variant="outline">
            Написать
          </Button>
          <Button size="s">Позвонить</Button>
        </ItemActions>
      </ItemContent>
    </Item>
  ),
};

export const Basic: Story = {
  render: () => (
    <Item>
      <ItemMedia variant="image">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Иван Петров</ItemTitle>
        <ItemDescription>Frontend-разработчик</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const Variants: Story = {
  render: () => (
    <ItemGroup>
      <Item variant="default">
        <ItemMedia variant="icon">
          <User className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Обычный элемент (default)</ItemTitle>
        </ItemContent>
      </Item>

      <ItemSeparator />

      <Item variant="outline">
        <ItemMedia variant="icon">
          <User className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Контурный элемент (outline)</ItemTitle>
        </ItemContent>
      </Item>

      <ItemSeparator />

      <Item variant="muted">
        <ItemMedia variant="icon">
          <User className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Приглушённый элемент (muted)</ItemTitle>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <ItemGroup>
      <Item size="sm">
        <ItemMedia variant="image">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Маленький элемент (sm)</ItemTitle>
          <ItemDescription>Описание маленького элемента</ItemDescription>
        </ItemContent>
      </Item>

      <ItemSeparator />

      <Item size="default">
        <ItemMedia variant="image">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DF</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Обычный элемент (default)</ItemTitle>
          <ItemDescription>Описание обычного элемента</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

export const MediaVariants: Story = {
  render: () => (
    <ItemGroup>
      <Item>
        <ItemMedia variant="default">
          <div className="size-4 bg-primary rounded-full" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Обычное медиа (default)</ItemTitle>
        </ItemContent>
      </Item>

      <ItemSeparator />

      <Item>
        <ItemMedia variant="icon">
          <Star className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Медиа-иконка (icon)</ItemTitle>
          <ItemDescription>
            С иконкой в стилизованном контейнере
          </ItemDescription>
        </ItemContent>
      </Item>

      <ItemSeparator />

      <Item>
        <ItemMedia variant="image">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=50&h=50&fit=crop"
            alt="Preview"
            className="size-full object-cover"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Медиа-изображение (image)</ItemTitle>
          <ItemDescription>С изображением</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Item>
      <ItemMedia variant="icon">
        <FileText className="h-4 w-4" />
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>document.pdf</ItemTitle>
          <ItemActions>
            <Button size="s" variant="ghost">
              <Download className="h-4 w-4" />
            </Button>
            <Button size="s" variant="ghost">
              <Copy className="h-4 w-4" />
            </Button>
            <Button size="s" variant="ghost">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </ItemActions>
        </ItemHeader>
        <ItemDescription>2.5 MB • Изменён 15.03.2024</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const WithSwitch: Story = {
  render: function Render() {
    const [enabled, setEnabled] = useState(false);

    return (
      <Item>
        <ItemMedia variant="icon">
          <Bell className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemHeader>
            <ItemTitle>Уведомления</ItemTitle>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </ItemHeader>
          <ItemDescription>
            Получать уведомления о новых сообщениях
          </ItemDescription>
        </ItemContent>
      </Item>
    );
  },
};

export const Contact: Story = {
  render: () => (
    <Item variant="outline">
      <ItemMedia variant="image">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>ИП</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>Иван Петров</ItemTitle>
          <Badge variant="outline">Друг</Badge>
        </ItemHeader>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-3 w-3" />
            <span>ivan@example.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-3 w-3" />
            <span>+7 (999) 123-45-67</span>
          </div>
        </div>
        <ItemActions className="mt-2">
          <Button size="s" variant="outline" className="flex-1">
            Написать
          </Button>
          <Button size="s" className="flex-1">
            Позвонить
          </Button>
        </ItemActions>
      </ItemContent>
    </Item>
  ),
};

export const File: Story = {
  render: () => (
    <Item variant="muted">
      <ItemMedia variant="icon">
        <Image className="h-4 w-4" />
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>mountain-view.jpg</ItemTitle>
          <Badge>Изображение</Badge>
        </ItemHeader>
        <ItemDescription>
          2.4 MB • 1920x1080 • Изменён 2 часа назад
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const FileGroup: Story = {
  render: () => (
    <ItemGroup>
      <Item>
        <ItemMedia variant="icon">
          <FileText className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>document.pdf</ItemTitle>
          <ItemDescription>2.5 MB</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="s" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </ItemActions>
      </Item>

      <ItemSeparator />

      <Item>
        <ItemMedia variant="icon">
          <Image className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>photo.jpg</ItemTitle>
          <ItemDescription>1.8 MB</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="s" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </ItemActions>
      </Item>

      <ItemSeparator />

      <Item>
        <ItemMedia variant="icon">
          <Music className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>song.mp3</ItemTitle>
          <ItemDescription>5.2 MB</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="s" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
};

export const Settings: Story = {
  render: () => (
    <ItemGroup>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <User className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Аккаунт</ItemTitle>
          <ItemDescription>Управление личными данными</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="s" variant="ghost">
            Изменить
          </Button>
        </ItemActions>
      </Item>

      <ItemSeparator />

      <Item variant="muted">
        <ItemMedia variant="icon">
          <Bell className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Уведомления</ItemTitle>
          <ItemDescription>Настройка оповещений</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch />
        </ItemActions>
      </Item>

      <ItemSeparator />

      <Item variant="muted">
        <ItemMedia variant="icon">
          <Shield className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Безопасность</ItemTitle>
          <ItemDescription>Двухфакторная аутентификация</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge>Включено</Badge>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <Archive className="h-4 w-4" />
      </ItemMedia>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>Архив проектов</ItemTitle>
          <Badge variant="secondary">12 элементов</Badge>
        </ItemHeader>
        <ItemDescription>Последнее обновление: сегодня</ItemDescription>
        <ItemFooter className="mt-2">
          <div className="flex gap-2">
            <Button size="s" variant="outline">
              Открыть
            </Button>
            <Button size="s" variant="outline">
              Скачать всё
            </Button>
          </div>
          <Button size="s" variant="primary">
            Удалить
          </Button>
        </ItemFooter>
      </ItemContent>
    </Item>
  ),
};
