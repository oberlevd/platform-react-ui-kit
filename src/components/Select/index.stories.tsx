import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "./index";
import { useState } from "react";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Отключен ли селект",
    },
    required: {
      control: "boolean",
      description: "Обязателен ли селект",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  args: {
    disabled: false,
  },
  render: ({ disabled }) => {
    const [value, setValue] = useState("");

    return (
      <Select value={value} onValueChange={setValue} disabled={disabled}>
        <SelectTrigger>
          <SelectValue placeholder="Выберите фрукт" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Яблоко</SelectItem>
          <SelectItem value="banana">Банан</SelectItem>
          <SelectItem value="orange">Апельсин</SelectItem>
          <SelectItem value="grape">Виноград</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Выберите фрукт" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Яблоко</SelectItem>
        <SelectItem value="banana">Банан</SelectItem>
        <SelectItem value="orange">Апельсин</SelectItem>
        <SelectItem value="grape">Виноград</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithSelected: Story = {
  render: () => (
    <Select defaultValue="banana">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Яблоко</SelectItem>
        <SelectItem value="banana">Банан</SelectItem>
        <SelectItem value="orange">Апельсин</SelectItem>
        <SelectItem value="grape">Виноград</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Выберите время" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Утро</SelectLabel>
          <SelectItem value="9:00">9:00</SelectItem>
          <SelectItem value="10:00">10:00</SelectItem>
          <SelectItem value="11:00">11:00</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>День</SelectLabel>
          <SelectItem value="12:00">12:00</SelectItem>
          <SelectItem value="13:00">13:00</SelectItem>
          <SelectItem value="14:00">14:00</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Вечер</SelectLabel>
          <SelectItem value="15:00">15:00</SelectItem>
          <SelectItem value="16:00">16:00</SelectItem>
          <SelectItem value="17:00">17:00</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithSeparators: Story = {
  render: () => (
    <Select defaultValue="react">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="angular">Angular</SelectItem>
        <SelectSeparator />
        <SelectItem value="svelte">Svelte</SelectItem>
        <SelectItem value="solid">Solid</SelectItem>
        <SelectSeparator />
        <SelectItem value="next">Next.js</SelectItem>
        <SelectItem value="nuxt">Nuxt</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled defaultValue="apple">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Яблоко</SelectItem>
        <SelectItem value="banana">Банан</SelectItem>
        <SelectItem value="orange">Апельсин</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const LongLabels: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Выберите пункт" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">
          Очень длинный пункт меню, который может не поместиться
        </SelectItem>
        <SelectItem value="2">
          Ещё один пункт с очень длинным названием для проверки
        </SelectItem>
        <SelectItem value="3">Короткий</SelectItem>
        <SelectItem value="4">
          И ещё один длинный пункт для проверки переноса текста
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Interactive: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
      if (value) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
      }
    };

    return (
      <div className="space-y-4">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder="Выберите вариант ответа" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Да, согласен</SelectItem>
            <SelectItem value="no">Нет, не согласен</SelectItem>
            <SelectItem value="maybe">Возможно</SelectItem>
          </SelectContent>
        </Select>

        <button
          onClick={handleSubmit}
          disabled={!value}
          className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50"
        >
          {submitted ? "✓ Отправлено!" : "Отправить"}
        </button>
      </div>
    );
  },
};
