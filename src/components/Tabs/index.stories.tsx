import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./index";
import { User, Settings, Shield } from "lucide-react";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: { control: "text" },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultValue: "account",
  },
  render: (args) => (
    <Tabs {...args} className="w-full">
      <TabsList>
        <TabsTrigger value="account">Аккаунт</TabsTrigger>
        <TabsTrigger value="security">Безопасность</TabsTrigger>
        <TabsTrigger value="notifications">Уведомления</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4 text-sm text-alfa-text/80">
        Управление настройками вашего профиля.
      </TabsContent>
      <TabsContent value="security" className="p-4 text-sm text-alfa-text/80">
        Настройки двухфакторной аутентификации.
      </TabsContent>
      <TabsContent
        value="notifications"
        className="p-4 text-sm text-alfa-text/80"
      >
        Выберите, какие пуши вы хотите получать.
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="user" className="w-full">
      <TabsList>
        <TabsTrigger value="user">
          <User className="size-4" />
          Профиль
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="size-4" />
          Настройки
        </TabsTrigger>
        <TabsTrigger value="shield">
          <Shield className="size-4" />
          Приватность
        </TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

export const OnColor: Story = {
  render: () => (
    <div className="theme-alfa-on-color p-10 bg-alfa-indigo rounded-lg">
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Белый текст</TabsTrigger>
          <TabsTrigger value="tab2">Инверсия</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  ),
};
