import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea, ScrollBar } from "./index";
import { Separator } from "../Separator";

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Дополнительные CSS классы",
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
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-80 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Список элементов</h4>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="py-2">
            <div className="text-sm">Элемент {i + 1}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const LongText: Story = {
  render: () => (
    <ScrollArea className="h-48 w-80 rounded-md border">
      <div className="p-4">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="mt-4 text-sm">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border">
      <div className="flex p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="mr-4 flex h-32 w-32 shrink-0 items-center justify-center rounded-md border bg-muted"
          >
            <span className="text-sm">Карточка {i + 1}</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const BothDirections: Story = {
  render: () => (
    <ScrollArea className="h-64 w-96 rounded-md border">
      <div style={{ width: "600px" }}>
        <div className="grid grid-cols-3 gap-4 p-4">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="flex h-32 items-center justify-center rounded-md border bg-muted p-4"
            >
              <span className="text-sm text-center">Элемент {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const MessagesList: Story = {
  render: () => (
    <ScrollArea className="h-96 w-80 rounded-md border">
      <div className="p-4 space-y-4">
        <h4 className="font-medium">Чат поддержки</h4>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                i % 2 === 0 ? "bg-muted" : "bg-primary text-primary-foreground"
              }`}
            >
              <p className="text-sm">
                Сообщение номер {i + 1}. Это пример сообщения в чате.
              </p>
              <span className="mt-1 block text-xs opacity-70">
                {new Date().toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const FilesList: Story = {
  render: () => (
    <ScrollArea className="h-64 w-80 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 font-medium">Документы</h4>
        <div className="space-y-2">
          {[
            "Проект_отчет.pdf",
            "Презентация.pptx",
            "Изображение1.jpg",
            "Изображение2.png",
            "Документация.docx",
            "Таблица.xlsx",
            "Архив.zip",
            "Контракт.pdf",
            "Спецификация.pdf",
            "Руководство.pdf",
          ].map((file, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-md p-2 hover:bg-muted"
            >
              <span className="text-sm flex-1">{file}</span>
              <span className="text-xs text-muted-foreground">
                {(Math.random() * 10 + 1).toFixed(1)} MB
              </span>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

export const CustomScrollbar: Story = {
  render: () => (
    <ScrollArea className="h-48 w-80 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 font-medium">Настройки</h4>
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="py-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Настройка {i + 1}</span>
              <span className="text-xs text-muted-foreground">значение</span>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
      <ScrollBar className="bg-muted/50 hover:bg-muted/80 [&>div]:bg-primary/50" />
    </ScrollArea>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm">Маленький</p>
        <ScrollArea className="h-24 w-48 rounded-md border">
          <div className="p-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="py-1 text-xs">
                Элемент {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <p className="mb-2 text-sm">Средний</p>
        <ScrollArea className="h-32 w-64 rounded-md border">
          <div className="p-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="py-1 text-sm">
                Элемент {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <p className="mb-2 text-sm">Большой</p>
        <ScrollArea className="h-48 w-80 rounded-md border">
          <div className="p-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="py-2">
                Элемент {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
};
