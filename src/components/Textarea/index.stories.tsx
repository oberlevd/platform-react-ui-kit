import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./index";
import { Label } from "../Label";
import { Button } from "../Button";
import { useState } from "react";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Подсказка в поле",
    },
    disabled: {
      control: "boolean",
      description: "Отключено ли поле",
    },
    readOnly: {
      control: "boolean",
      description: "Только для чтения",
    },
    required: {
      control: "boolean",
      description: "Обязательное поле",
    },
    rows: {
      control: "number",
      description: "Количество строк",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {
  args: {
    placeholder: "Введите текст...",
    disabled: false,
    rows: 4,
  },
};

export const Default: Story = {
  args: {
    placeholder: "Введите текст...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Сообщение</Label>
      <Textarea id="message" placeholder="Введите ваше сообщение..." />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="bio">О себе</Label>
      <Textarea id="bio" placeholder="Расскажите о себе..." />
      <p className="text-sm text-muted-foreground">
        Краткое описание, максимум 500 символов.
      </p>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Label>Маленький (2 строки)</Label>
        <Textarea placeholder="Маленькое поле..." rows={2} />
      </div>
      <div>
        <Label>Средний (5 строк)</Label>
        <Textarea placeholder="Среднее поле..." rows={5} />
      </div>
      <div>
        <Label>Большой (8 строк)</Label>
        <Textarea placeholder="Большое поле..." rows={8} />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Label>Обычное состояние</Label>
        <Textarea placeholder="Обычное поле" />
      </div>
      <div>
        <Label>Отключенное</Label>
        <Textarea placeholder="Отключенное поле" disabled />
      </div>
      <div>
        <Label>Только чтение</Label>
        <Textarea value="Этот текст нельзя изменить" readOnly />
      </div>
      <div>
        <Label>С ошибкой</Label>
        <Textarea
          placeholder="Поле с ошибкой"
          className="border-destructive focus-visible:ring-destructive"
        />
      </div>
    </div>
  ),
};

export const WithButton: Story = {
  render: function Render() {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <div className="grid gap-1.5">
          <Label htmlFor="comment">Комментарий</Label>
          <Textarea
            id="comment"
            placeholder="Оставьте комментарий..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <Button disabled={!value.trim()}>Отправить</Button>
      </div>
    );
  },
};

export const FeedbackForm: Story = {
  render: () => (
    <div className="space-y-4 rounded-lg border p-4">
      <h3 className="text-lg font-medium">Обратная связь</h3>
      <div className="space-y-2">
        <div className="grid gap-1.5">
          <Label htmlFor="feedback-name">Имя</Label>
          <Textarea id="feedback-name" placeholder="Ваше имя" rows={1} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="feedback-message">Сообщение</Label>
          <Textarea
            id="feedback-message"
            placeholder="Опишите вашу проблему или предложение..."
            rows={5}
          />
        </div>
        <Button className="w-full">Отправить</Button>
      </div>
    </div>
  ),
};

export const ProfileEdit: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid gap-1.5">
        <Label htmlFor="bio">О себе</Label>
        <Textarea
          id="bio"
          defaultValue="Frontend-разработчик с 5-летним опытом. Специализируюсь на React и TypeScript. Люблю создавать красивые и удобные интерфейсы."
          rows={4}
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="interests">Интересы</Label>
        <Textarea
          id="interests"
          defaultValue="• Веб-разработка\n• UI/UX дизайн\n• Open Source\n• Настольные игры"
          rows={4}
        />
      </div>
    </div>
  ),
};

export const AutoHeight: Story = {
  render: function Render() {
    const [value, setValue] = useState("");

    return (
      <div className="grid gap-1.5">
        <Label>Автоматическая высота</Label>
        <Textarea
          placeholder="Введите текст, поле будет расширяться..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="min-h-15"
          rows={1}
        />
        <p className="text-sm text-muted-foreground">
          Поле автоматически увеличивается по мере ввода текста.
        </p>
      </div>
    );
  },
};

export const Prefilled: Story = {
  render: () => (
    <div className="grid gap-1.5">
      <Label>Описание</Label>
      <Textarea
        defaultValue="Это предварительно заполненное поле с длинным текстом, который показывает, как выглядит textarea с контентом. Можно использовать для отображения уже существующих данных."
        rows={4}
      />
    </div>
  ),
};
