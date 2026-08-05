import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  useComboboxAnchor,
} from "./index";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Отключен ли комбобокс",
    },
    multiple: {
      control: "boolean",
      description: "Множественный выбор",
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
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
  { value: "qwik", label: "Qwik" },
  { value: "alpine", label: "Alpine" },
  { value: "preact", label: "Preact" },
];

const groupedItems = [
  {
    label: "Фреймворки",
    items: [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "angular", label: "Angular" },
    ],
  },
  {
    label: "Библиотеки",
    items: [
      { value: "solid", label: "Solid" },
      { value: "preact", label: "Preact" },
      { value: "alpine", label: "Alpine" },
    ],
  },
];

export const Playground: Story = {
  args: {
    disabled: false,
    multiple: false,
  },
  render: function Render({ disabled, multiple }) {
    const [value, setValue] = useState<string | string[] | null>(
      multiple ? [] : null,
    );
    const anchorRef = useComboboxAnchor();

    return (
      <div ref={anchorRef} className="w-64">
        <Combobox
          disabled={disabled}
          multiple={multiple}
          onValueChange={setValue}
          value={value}
        >
          <ComboboxInput
            disabled={disabled}
            placeholder="Выберите фреймворк..."
            showClear
            showTrigger
          />
          <ComboboxContent anchor={anchorRef.current} className="w-64">
            <ComboboxList>
              {frameworks.map((item) => (
                <ComboboxItem key={item.value} value={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>(null);
    const anchorRef = useComboboxAnchor();

    return (
      <div ref={anchorRef} className="w-64">
        <Combobox onValueChange={setValue} value={value}>
          <ComboboxInput placeholder="Выберите фреймворк..." showTrigger />
          <ComboboxContent anchor={anchorRef.current} className="w-64">
            <ComboboxList>
              {frameworks.map((item) => (
                <ComboboxItem key={item.value} value={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export const WithEmptyState: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const anchorRef = useComboboxAnchor();

    return (
      <div ref={anchorRef} className="w-64">
        <Combobox
          onInputValueChange={setSearch}
          onValueChange={setValue}
          value={value}
        >
          <ComboboxInput
            placeholder="Выберите что-нибудь.."
            showTrigger
            value={search}
          />
          <ComboboxContent anchor={anchorRef.current} className="w-64">
            <ComboboxEmpty>Результатов не найдено</ComboboxEmpty>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export const WithGroups: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>(null);
    const anchorRef = useComboboxAnchor();

    return (
      <div ref={anchorRef} className="w-64">
        <Combobox onValueChange={setValue} value={value}>
          <ComboboxInput placeholder="Выберите технологию..." showTrigger />
          <ComboboxContent anchor={anchorRef.current} className="w-64">
            <ComboboxList>
              {groupedItems.map((group) => (
                <ComboboxGroup key={group.label}>
                  <ComboboxLabel>{group.label}</ComboboxLabel>
                  {group.items.map((item) => (
                    <ComboboxItem key={item.value} value={item.value}>
                      {item.label}
                    </ComboboxItem>
                  ))}
                </ComboboxGroup>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export const Multiple: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>([]);
    const anchorRef = useComboboxAnchor();

    return (
      <div ref={anchorRef} className="w-64">
        <Combobox multiple onValueChange={setValue} value={value}>
          <ComboboxInput
            placeholder="Выберите фреймворки..."
            showClear
            showTrigger
          />
          <ComboboxContent anchor={anchorRef.current} className="w-64">
            <ComboboxList>
              {frameworks.map((item) => (
                <ComboboxItem key={item.value} value={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export const WithChips: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(["react", "vue"]);
    const anchorRef = useComboboxAnchor();

    return (
      <div ref={anchorRef} className="w-96">
        <Combobox multiple onValueChange={setValue} value={value}>
          <ComboboxChips>
            {value.map((item) => (
              <ComboboxChip id={item} key={item}>
                {frameworks.find((f) => f.value === item)?.label}
              </ComboboxChip>
            ))}
            <ComboboxChipsInput placeholder="Добавить..." />
          </ComboboxChips>
          <ComboboxContent anchor={anchorRef.current} className="w-96">
            <ComboboxList>
              {frameworks
                .filter((item) => !value.includes(item.value))
                .map((item) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export const WithSeparator: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>(null);
    const anchorRef = useComboboxAnchor();

    return (
      <div ref={anchorRef} className="w-64">
        <Combobox onValueChange={setValue} value={value}>
          <ComboboxInput placeholder="Выберите..." showTrigger />
          <ComboboxContent anchor={anchorRef.current} className="w-64">
            <ComboboxList>
              <ComboboxItem value="new">Создать новый</ComboboxItem>
              <ComboboxSeparator />
              <ComboboxGroup>
                <ComboboxLabel>Недавние</ComboboxLabel>
                {frameworks.slice(0, 3).map((item) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>("react");
    const anchorRef = useComboboxAnchor();

    return (
      <div ref={anchorRef} className="w-64">
        <Combobox disabled onValueChange={setValue} value={value}>
          <ComboboxInput
            disabled
            placeholder="Выберите фреймворк..."
            showClear
            showTrigger
          />
          <ComboboxContent anchor={anchorRef.current} className="w-64">
            <ComboboxList>
              {frameworks.map((item) => (
                <ComboboxItem key={item.value} value={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};
