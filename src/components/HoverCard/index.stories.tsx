import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./index";
import {
  Calendar,
  User,
  Mail,
  CalendarDays,
  MapPin,
  Link as LinkIcon,
  Github,
  Twitter,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { Button } from "../Button";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  argTypes: {
    openDelay: {
      control: "number",
      description: "Задержка перед открытием (мс)",
    },
    closeDelay: {
      control: "number",
      description: "Задержка перед закрытием (мс)",
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
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Playground: Story = {
  args: {
    openDelay: 200,
    closeDelay: 200,
  },
  render: ({ openDelay, closeDelay }) => (
    <HoverCard openDelay={openDelay} closeDelay={closeDelay}>
      <HoverCardTrigger asChild>
        <Button variant="link">@example</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@example</h4>
            <p className="text-sm">
              Разработчик интерфейсов. Люблю React и Tailwind CSS.
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-muted-foreground text-xs">
                Присоединился в декабре 2023
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex cursor-pointer items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">shadcn</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-2 flex-1">
            <div>
              <h4 className="text-sm font-semibold">shadcn</h4>
              <p className="text-muted-foreground text-xs">@shadcn</p>
            </div>
            <p className="text-sm">
              Создатель shadcn/ui. Работаю над инструментами для разработчиков.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CalendarDays className="h-3 w-3" />
              <span>Присоединился в январе 2022</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ProjectInfo: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">iBank UI Kit</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">iBank UI Kit</h4>
          <p className="text-sm text-muted-foreground">
            Библиотека React компонентов для интернет-банка. Построена на Radix
            UI и Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 text-xs">
              React
            </span>
            <span className="bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 text-xs">
              TypeScript
            </span>
            <span className="bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 text-xs">
              Tailwind
            </span>
            <span className="bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 text-xs">
              Radix UI
            </span>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1">
              <Github className="h-3 w-3" />
              <span className="text-xs">42 ★</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs">v1.0.0</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const EventInfo: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="text-primary cursor-help underline decoration-dotted">
          React Meetup
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">React Moscow Meetup</h4>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Calendar className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
              <div>
                <p className="text-sm font-medium">15 марта 2024, 19:00</p>
                <p className="text-xs text-muted-foreground">2 часа</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
              <div>
                <p className="text-sm font-medium">Москва, ул. Тверская, 7</p>
                <p className="text-xs text-muted-foreground">Офис Яндекс</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Обсуждение новых возможностей React 19 и Server Components.
          </p>
          <Button size="s" className="w-full">
            Записаться
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ContactInfo: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex cursor-pointer items-center gap-2 rounded-md border p-2">
          <User className="h-4 w-4" />
          <span className="text-sm">Иван Петров</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>ИП</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold">Иван Петров</h4>
              <p className="text-xs text-muted-foreground">
                Frontend Developer
              </p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <Mail className="h-3 w-3 opacity-70" />
              <span>ivan.petrov@example.com</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Github className="h-3 w-3 opacity-70" />
              <span>@ivan-dev</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Twitter className="h-3 w-3 opacity-70" />
              <span>@ivan_dev</span>
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <Button size="s" variant="outline" className="flex-1">
              Написать
            </Button>
            <Button size="s" className="flex-1">
              Позвонить
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const LinkPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="text-primary cursor-help underline decoration-dotted">
          https://example.com
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="bg-muted aspect-video w-full rounded-md" />
          <div>
            <h4 className="text-sm font-semibold">Example Domain</h4>
            <p className="text-xs text-muted-foreground">example.com</p>
          </div>
          <p className="text-sm text-muted-foreground">
            This domain is for use in illustrative examples in documents.
          </p>
          <div className="flex items-center gap-2">
            <LinkIcon className="h-3 w-3 opacity-70" />
            <span className="text-xs text-muted-foreground">
              https://example.com
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ImagePreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="text-primary cursor-help underline decoration-dotted">
          mountain.jpg
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
            alt="Mountain"
            className="aspect-video w-full rounded-md object-cover"
          />
          <div>
            <h4 className="text-sm font-semibold">Горный пейзаж</h4>
            <p className="text-xs text-muted-foreground">2.4 MB • 1920x1080</p>
          </div>
          <div className="flex gap-2">
            <Button size="s" variant="outline" className="flex-1">
              Скачать
            </Button>
            <Button size="s" className="flex-1">
              Просмотр
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Вверх</Button>
        </HoverCardTrigger>
        <HoverCardContent side="top" className="w-48 text-center">
          Контент сверху
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Вниз</Button>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" className="w-48 text-center">
          Контент снизу
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Слева</Button>
        </HoverCardTrigger>
        <HoverCardContent side="left" className="w-48 text-center">
          Контент слева
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Справа</Button>
        </HoverCardTrigger>
        <HoverCardContent side="right" className="w-48 text-center">
          Контент справа
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Start</Button>
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-48">
          <p>Выравнивание по началу</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Center</Button>
        </HoverCardTrigger>
        <HoverCardContent align="center" className="w-48">
          <p>Выравнивание по центру</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">End</Button>
        </HoverCardTrigger>
        <HoverCardContent align="end" className="w-48">
          <p>Выравнивание по концу</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};
