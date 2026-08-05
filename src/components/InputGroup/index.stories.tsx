import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "./index";
import {
  Search,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  DollarSign,
  Percent,
  AtSign,
  Phone,
  Copy,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus,
  Globe,
} from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Playground: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <User className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Имя пользователя" />
    </InputGroup>
  ),
};

export const Basic: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <User className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Имя пользователя" />
    </InputGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Сумма" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>₽</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="username" />
      </InputGroup>
    </div>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupInput placeholder="Поиск..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs">
            <Search className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupButton size="icon-xs">
            <ArrowLeft className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupInput placeholder="Страница" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs">
            <ArrowRight className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupButton size="icon-xs">
            <Minus className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs">
            <Plus className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const SearchInput: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <Search className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Поиск по сайту..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs">⌘K</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const EmailInput: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <Mail className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput type="email" placeholder="email@example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs">
          <Copy className="h-4 w-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const PasswordInput: Story = {
  render: function Render() {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Lock className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput
          type={showPassword ? "text" : "password"}
          placeholder="Пароль"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    );
  },
};

export const PhoneInput: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <Phone className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput type="tel" placeholder="+7 (999) 999-99-99" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>📞</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const MoneyInput: Story = {
  render: () => (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <DollarSign className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>₽</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
      </InputGroup>
    </div>
  ),
};

export const PercentageInput: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput type="number" placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <Percent className="h-4 w-4" />
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const DomainInput: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <Globe className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="example" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="h-auto">
      <InputGroupAddon align="block-start">
        <User className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupTextarea placeholder="Введите описание..." />
      <InputGroupAddon align="block-end">
        <div className="flex w-full justify-end gap-1">
          <InputGroupButton size="icon-xs">
            <Check className="h-4 w-4" />
          </InputGroupButton>
          <InputGroupButton size="icon-xs" variant="outline">
            <X className="h-4 w-4" />
          </InputGroupButton>
        </div>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const Combined: Story = {
  render: () => (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs">
            <Copy className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="email@example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="default" size="xs">
            Отправить
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <AtSign className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@domain.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <User className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Отключенный" disabled />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="Отключенный" disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" disabled>
            <Copy className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};
