import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleGroup, ToggleGroupItem } from "./index";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
} from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "outline"],
      description: "Вариант кнопок",
    },
    size: {
      control: "radio",
      options: ["default", "sm", "lg"],
      description: "Размер кнопок",
    },
    spacing: {
      control: "number",
      description: "Отступ между кнопками (в пикселях)",
    },
    type: {
      control: "radio",
      options: ["single", "multiple"],
      description: "Тип группы (один или несколько выборов)",
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
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Playground: Story = {
  args: {
    variant: "default",
    size: "default",
    spacing: 0,
    type: "single",
  },
  render: ({ variant, size, spacing, type }) => {
    const [singleValue, setSingleValue] = useState("bold");
    const [multipleValue, setMultipleValue] = useState<string[]>(["bold"]);

    if (type === "single") {
      return (
        <ToggleGroup
          type="single"
          value={singleValue}
          onValueChange={(value) => {
            if (value) setSingleValue(value);
          }}
          variant={variant}
          size={size}
          spacing={spacing}
        >
          <ToggleGroupItem value="bold" aria-label="Жирный">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Курсив">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Подчеркнутый">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      );
    }

    return (
      <ToggleGroup
        type="multiple"
        value={multipleValue}
        onValueChange={setMultipleValue}
        variant={variant}
        size={size}
        spacing={spacing}
      >
        <ToggleGroupItem value="bold" aria-label="Жирный">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Курсив">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Подчеркнутый">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState("left");

    return (
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={(val) => val && setValue(val)}
      >
        <ToggleGroupItem value="left" aria-label="Выровнять влево">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Выровнять по центру">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Выровнять вправо">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const Multiple: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(["bold", "italic"]);

    return (
      <ToggleGroup type="multiple" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="bold" aria-label="Жирный">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Курсив">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Подчеркнутый">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const WithText: Story = {
  render: function Render() {
    const [value, setValue] = useState("bold");

    return (
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={(val) => val && setValue(val)}
      >
        <ToggleGroupItem value="bold" className="gap-2">
          <Bold className="h-4 w-4" />
          Жирный
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" className="gap-2">
          <Italic className="h-4 w-4" />
          Курсив
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" className="gap-2">
          <Underline className="h-4 w-4" />
          Подчеркнутый
        </ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm">Default</p>
        <ToggleGroup type="single" defaultValue="bold" variant="default">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="mb-2 text-sm">Outline</p>
        <ToggleGroup type="single" defaultValue="bold" variant="outline">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm">Small</p>
        <ToggleGroup type="single" defaultValue="bold" size="sm">
          <ToggleGroupItem value="bold">
            <Bold className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="mb-2 text-sm">Default</p>
        <ToggleGroup type="single" defaultValue="bold" size="default">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="mb-2 text-sm">Large</p>
        <ToggleGroup type="single" defaultValue="bold" size="lg">
          <ToggleGroupItem value="bold">
            <Bold className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const WithSpacing: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm">Spacing: 2px</p>
        <ToggleGroup type="single" defaultValue="bold" spacing={2}>
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="mb-2 text-sm">Spacing: 4px</p>
        <ToggleGroup type="single" defaultValue="bold" spacing={4}>
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="mb-2 text-sm">Spacing: 8px</p>
        <ToggleGroup type="single" defaultValue="bold" spacing={8}>
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const ListFormatting: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(["bold"]);

    return (
      <div className="space-y-4">
        <ToggleGroup type="multiple" value={value} onValueChange={setValue}>
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list">
            <List className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="ordered">
            <ListOrdered className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        <div className="rounded-md border p-4">
          <p
            className={`
            ${value.includes("bold") ? "font-bold" : ""}
            ${value.includes("italic") ? "italic" : ""}
            ${value.includes("underline") ? "underline" : ""}
          `}
          >
            Пример текста с форматированием
          </p>
          {value.includes("list") && (
            <ul className="mt-2 list-disc pl-5">
              <li>Элемент списка 1</li>
              <li>Элемент списка 2</li>
            </ul>
          )}
          {value.includes("ordered") && (
            <ol className="mt-2 list-decimal pl-5">
              <li>Первый элемент</li>
              <li>Второй элемент</li>
            </ol>
          )}
        </div>
      </div>
    );
  },
};
