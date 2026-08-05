import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypographyH1, TypographyH2 } from "./index";

const meta = {
  title: "Components/Typography",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <TypographyH1>Заголовок первого уровня (H1)</TypographyH1>
      <TypographyH2>Заголовок второго уровня (H2)</TypographyH2>
      <h3 className="text-lg font-semibold">Заголовок третьего уровня (H3)</h3>
      <h4 className="text-base font-medium">
        Заголовок четвёртого уровня (H4)
      </h4>
    </div>
  ),
};

export const Text: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">Маленький текст (text-sm)</p>
      <p className="text-base">Обычный текст (text-base)</p>
      <p className="text-lg">Большой текст (text-lg)</p>
      <p className="text-xl">Очень большой текст (text-xl)</p>
      <p className="text-2xl">Огромный текст (text-2xl)</p>
    </div>
  ),
};

export const TextStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="font-light">Тонкий текст (font-light)</p>
      <p className="font-normal">Обычный текст (font-normal)</p>
      <p className="font-medium">Средний текст (font-medium)</p>
      <p className="font-semibold">Полужирный текст (font-semibold)</p>
      <p className="font-bold">Жирный текст (font-bold)</p>
      <p className="italic">Курсив (italic)</p>
      <p className="underline">Подчёркнутый (underline)</p>
      <p className="line-through">Зачёркнутый (line-through)</p>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-primary">Основной цвет (primary)</p>
      <p className="text-secondary">Второстепенный цвет (secondary)</p>
      <p className="text-destructive">Цвет ошибки (destructive)</p>
      <p className="text-muted-foreground">
        Приглушённый цвет (muted-foreground)
      </p>
      <p className="text-blue-500">Синий цвет (blue-500)</p>
      <p className="text-green-500">Зелёный цвет (green-500)</p>
      <p className="text-red-500">Красный цвет (red-500)</p>
      <p className="text-yellow-500">Жёлтый цвет (yellow-500)</p>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-left">Текст выровнен по левому краю</p>
      <p className="text-center">Текст выровнен по центру</p>
      <p className="text-right">Текст выровнен по правому краю</p>
      <p className="text-justify">
        Текст с выравниванием по ширине. Этот текст будет распределён равномерно
        между левым и правым краями, создавая ровные края с обеих сторон.
      </p>
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <TypographyH1>Добро пожаловать в iBank UI Kit</TypographyH1>
        <p className="text-muted-foreground mt-2">
          Библиотека компонентов для создания современных интерфейсов
        </p>
      </div>

      <div>
        <TypographyH2>Установка</TypographyH2>
        <div className="bg-muted p-4 rounded-md mt-2">
          <code className="text-sm">npm install ibank-ui-kit</code>
        </div>
      </div>

      <div>
        <TypographyH2>Использование</TypographyH2>
        <p className="mt-2">
          Импортируйте компоненты из библиотеки и используйте их в своём
          проекте.
        </p>
        <div className="bg-muted p-4 rounded-md mt-2">
          <pre className="text-sm">
            {`import { Button } from 'ibank-ui-kit'

function App() {
  return <Button>Нажми меня</Button>
}`}
          </pre>
        </div>
      </div>
    </div>
  ),
};
