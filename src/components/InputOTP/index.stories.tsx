import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./index";
import { Label } from "../Label";
import { Button } from "../Button";
import { useState } from "react";

const meta = {
  title: "Components/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  argTypes: {
    maxLength: {
      control: "number",
      description: "Максимальная длина кода",
    },
    disabled: {
      control: "boolean",
      description: "Отключен ли ввод",
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
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Playground: Story = {
  args: {
    maxLength: 6,
    disabled: false,
  },
  render: ({ maxLength, disabled }) => {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <InputOTP
          maxLength={maxLength}
          value={value}
          onChange={setValue}
          disabled={disabled}
        >
          <InputOTPGroup>
            {Array.from({ length: maxLength || 6 }).map((_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm">
          {value ? `Введено: ${value}` : "Ожидание ввода..."}
        </div>
      </div>
    );
  },
};

export const FourDigits: Story = {
  render: function Render() {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <InputOTP maxLength={4} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm text-muted-foreground">
          Введите 4-значный код
        </div>
      </div>
    );
  },
};

export const SixDigits: Story = {
  render: function Render() {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm text-muted-foreground">
          Введите 6-значный код
        </div>
      </div>
    );
  },
};

export const WithSeparator: Story = {
  render: function Render() {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm text-muted-foreground">
          Код формата XXX-XXX
        </div>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: function Render() {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-2">
        <Label htmlFor="otp">Код подтверждения</Label>
        <InputOTP id="otp" maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-muted-foreground">
          Введите код из SMS-сообщения
        </p>
      </div>
    );
  },
};

export const WithButton: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = () => {
      if (value.length === 6) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(true);
          setTimeout(() => setIsSuccess(false), 2000);
        }, 1000);
      }
    };

    return (
      <div className="space-y-4">
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <Button
          onClick={handleSubmit}
          disabled={value.length !== 6 || isLoading}
          className="w-full"
        >
          {isLoading
            ? "Проверка..."
            : isSuccess
              ? "✓ Подтверждено"
              : "Подтвердить"}
        </Button>
      </div>
    );
  },
};

export const TwoFactor: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (newValue.length === 6) {
        if (newValue !== "123456") {
          setError(true);
        } else {
          setError(false);
          alert("Успешная верификация!");
        }
      } else {
        setError(false);
      }
    };

    return (
      <div className="space-y-4 max-w-sm">
        <div className="space-y-2">
          <Label htmlFor="2fa">Двухэтапная аутентификация</Label>
          <InputOTP
            id="2fa"
            maxLength={6}
            value={value}
            onChange={handleChange}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          {error && (
            <p className="text-sm text-destructive">
              Неверный код. Попробуйте 123456
            </p>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          Для теста используйте код: 123456
        </p>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: function Render() {
    const [value, setValue] = useState("123456");

    return (
      <div className="space-y-4">
        <InputOTP maxLength={6} value={value} onChange={setValue} disabled>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-center text-sm text-muted-foreground">
          Поле отключено
        </p>
      </div>
    );
  },
};

export const WithError: Story = {
  render: function Render() {
    const [value, setValue] = useState("12345");

    return (
      <div className="space-y-2">
        <Label htmlFor="otp-error">Код подтверждения</Label>
        <InputOTP
          id="otp-error"
          maxLength={6}
          value={value}
          onChange={setValue}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-destructive">
          Неверный код. Осталось 2 попытки
        </p>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm mb-2">Маленький</p>
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="h-7 w-7 text-sm" />
            <InputOTPSlot index={1} className="h-7 w-7 text-sm" />
            <InputOTPSlot index={2} className="h-7 w-7 text-sm" />
            <InputOTPSlot index={3} className="h-7 w-7 text-sm" />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div>
        <p className="text-sm mb-2">Стандартный</p>
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div>
        <p className="text-sm mb-2">Большой</p>
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="h-11 w-11 text-lg" />
            <InputOTPSlot index={1} className="h-11 w-11 text-lg" />
            <InputOTPSlot index={2} className="h-11 w-11 text-lg" />
            <InputOTPSlot index={3} className="h-11 w-11 text-lg" />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
};
