import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./index";

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Ориентация разделителя",
    },
    decorative: {
      control: "boolean",
      description: "Декоративный ли разделитель (невидим для скринридеров)",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Playground: Story = {
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  render: ({ orientation, decorative }) => {
    if (orientation === "horizontal") {
      return (
        <div className="space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Заголовок сверху</h4>
            <p className="text-sm text-muted-foreground">
              Текст над разделителем
            </p>
          </div>
          <Separator orientation={orientation} decorative={decorative} />
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Заголовок снизу</h4>
            <p className="text-sm text-muted-foreground">
              Текст под разделителем
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex h-20 items-center space-x-4">
          <div className="text-sm">Левый блок</div>
          <Separator orientation={orientation} decorative={decorative} />
          <div className="text-sm">Центральный блок</div>
          <Separator orientation={orientation} decorative={decorative} />
          <div className="text-sm">Правый блок</div>
        </div>
      );
    }
  },
};

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Заголовок сверху</h4>
        <p className="text-sm text-muted-foreground">Текст над разделителем</p>
      </div>
      <Separator orientation="horizontal" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Заголовок снизу</h4>
        <p className="text-sm text-muted-foreground">Текст под разделителем</p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div className="text-sm">Левый блок</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Центральный блок</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Правый блок</div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="w-80 rounded-md border">
      <div className="p-4">
        <h4 className="font-medium">Пункт 1</h4>
        <p className="text-sm text-muted-foreground">Описание первого пункта</p>
      </div>
      <Separator />
      <div className="p-4">
        <h4 className="font-medium">Пункт 2</h4>
        <p className="text-sm text-muted-foreground">Описание второго пункта</p>
      </div>
      <Separator />
      <div className="p-4">
        <h4 className="font-medium">Пункт 3</h4>
        <p className="text-sm text-muted-foreground">
          Описание третьего пункта
        </p>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">
        Текст до разделителя. Он может быть любой длины и содержать любую
        информацию.
      </p>
      <Separator />
      <p className="text-sm">
        Текст после разделителя. Разделитель визуально отделяет один блок
        контента от другого.
      </p>
    </div>
  ),
};

export const InMenu: Story = {
  render: () => (
    <div className="w-48 rounded-md border p-2">
      <div className="p-2 text-sm hover:bg-muted rounded-sm">Профиль</div>
      <div className="p-2 text-sm hover:bg-muted rounded-sm">Настройки</div>
      <div className="p-2 text-sm hover:bg-muted rounded-sm">Помощь</div>
      <Separator className="my-2" />
      <div className="p-2 text-sm text-destructive hover:bg-muted rounded-sm">
        Выйти
      </div>
    </div>
  ),
};

export const InFooter: Story = {
  render: () => (
    <div className="border-t bg-background p-4">
      <Separator className="mb-4" />
      <div className="flex justify-center space-x-4 text-sm">
        <a href="#" className="hover:underline">
          О нас
        </a>
        <Separator orientation="vertical" className="h-4" />
        <a href="#" className="hover:underline">
          Контакты
        </a>
        <Separator orientation="vertical" className="h-4" />
        <a href="#" className="hover:underline">
          Политика
        </a>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        © 2024 iBank UI Kit. Все права защищены.
      </p>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm">Обычный разделитель</p>
        <Separator />
      </div>
      <div>
        <p className="mb-2 text-sm">С кастомным цветом</p>
        <Separator className="bg-primary/20" />
      </div>
      <div>
        <p className="mb-2 text-sm">С кастомной толщиной</p>
        <Separator className="h-0.5" />
      </div>
      <div>
        <p className="mb-2 text-sm">С отступами</p>
        <Separator className="my-4" />
      </div>
    </div>
  ),
};
