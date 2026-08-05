import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./index";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["single", "multiple"],
      description: "Тип аккордеона",
    },
    disabled: {
      control: "boolean",
      description: "Отключен ли аккордеон",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  {
    value: "billing",
    trigger: "Как работает оплата?",
    content:
      "Мы предлагаем ежемесячные и годовые тарифы. Оплата списывается в начале каждого периода. Вы можете отменить подписку в любое время. Все тарифы включают автоматическое резервное копирование, поддержку 24/7 и неограниченное количество участников команды.",
  },
  {
    value: "security",
    trigger: "Насколько защищены мои данные?",
    content:
      "Да, мы используем сквозное шифрование, соответствие стандарту SOC 2 Type II и регулярные проверки безопасности сторонними аудиторами. Все данные шифруются при передаче и хранении с использованием отраслевых протоколов.",
  },
  {
    value: "integration",
    trigger: "С какими сервисами есть интеграция?",
    content:
      "Мы интегрируемся с 500+ популярными инструментами, включая Slack, Zapier, Salesforce, HubSpot и другие. Вы также можете создавать собственные интеграции с помощью нашего REST API и вебхуков.",
  },
];

export const Playground: Story = {
  args: {
    type: "single",
    disabled: false,
  },
  render: ({ type = "single", disabled = false }) => (
    <Accordion type={type} disabled={disabled}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const SingleCollapsible: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const SingleNonCollapsible: Story = {
  render: () => (
    <Accordion type="single" defaultValue="billing">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={["billing", "security"]}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="billing">
        <AccordionTrigger>Как работает оплата?</AccordionTrigger>
        <AccordionContent>
          Мы предлагаем ежемесячные и годовые тарифы. Оплата списывается в
          начале каждого периода. Вы можете отменить подписку в любое время.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="security" disabled>
        <AccordionTrigger className="opacity-50 cursor-not-allowed">
          Насколько защищены мои данные? (Заблокировано)
        </AccordionTrigger>
        <AccordionContent>
          Этот раздел заблокирован и не может быть открыт.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="integration">
        <AccordionTrigger>С какими сервисами есть интеграция?</AccordionTrigger>
        <AccordionContent>
          Мы интегрируемся с 500+ популярными инструментами, включая Slack,
          Zapier, Salesforce, HubSpot и другие.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithBorders: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      className="max-w-lg rounded-lg border"
      defaultValue="billing"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
