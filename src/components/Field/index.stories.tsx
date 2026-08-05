import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  FieldSet,
  FieldLegend,
  FieldGroup,
  Field,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldSeparator,
  FieldError,
} from "./index";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";
import { Button } from "../Button";
import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

const meta = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["vertical", "horizontal", "responsive"],
      description: "Ориентация поля",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof Field>;

export const Playground: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ orientation }) => (
    <Field orientation={orientation}>
      <FieldLabel htmlFor="name">Имя пользователя</FieldLabel>
      <FieldContent>
        <Input id="name" placeholder="Введите имя" />
        <FieldDescription>Введите ваше полное имя</FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const Basic: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldContent>
        <Input id="email" type="email" placeholder="example@email.com" />
      </FieldContent>
    </Field>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="password">Пароль</FieldLabel>
      <FieldContent>
        <Input id="password" type="password" placeholder="••••••••" />
        <FieldDescription>
          Пароль должен содержать минимум 8 символов
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Field data-invalid={value.length > 0 && value.length < 8}>
        <FieldLabel htmlFor="password2">Пароль</FieldLabel>
        <FieldContent>
          <Input
            id="password2"
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="••••••••"
            aria-invalid={value.length > 0 && value.length < 8}
          />
          <FieldDescription>Минимум 8 символов</FieldDescription>
          {value.length > 0 && value.length < 8 && (
            <FieldError>Пароль слишком короткий</FieldError>
          )}
        </FieldContent>
      </Field>
    );
  },
};

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="name2" className="min-w-24">
        Имя
      </FieldLabel>
      <FieldContent>
        <Input id="name2" placeholder="Иван Петров" />
      </FieldContent>
    </Field>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <Field orientation="horizontal" className="items-center">
      <Checkbox id="terms" />
      <FieldLabel htmlFor="terms" className="font-normal">
        Я принимаю условия использования
      </FieldLabel>
    </Field>
  ),
};

export const CheckboxGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const options = [
      { id: "react", label: "React" },
      { id: "vue", label: "Vue" },
      { id: "angular", label: "Angular" },
    ];

    return (
      <FieldSet>
        <FieldLegend>Выберите технологии</FieldLegend>
        <FieldGroup>
          {options.map((option) => (
            <Field
              key={option.id}
              orientation="horizontal"
              className="items-center"
            >
              <Checkbox
                id={option.id}
                checked={selected.includes(option.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelected([...selected, option.id]);
                  } else {
                    setSelected(selected.filter((id) => id !== option.id));
                  }
                }}
              />
              <FieldLabel htmlFor={option.id} className="font-normal">
                {option.label}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </FieldSet>
    );
  },
};

export const RadioGroupExample: Story = {
  render: function Render() {
    const [value, setValue] = useState("option1");

    return (
      <FieldSet>
        <FieldLegend>Выберите один вариант</FieldLegend>
        <RadioGroup value={value} onValueChange={setValue}>
          <FieldGroup>
            <Field orientation="horizontal" className="items-center">
              <RadioGroupItem value="option1" id="option1" />
              <FieldLabel htmlFor="option1" className="font-normal">
                Вариант 1
              </FieldLabel>
            </Field>
            <Field orientation="horizontal" className="items-center">
              <RadioGroupItem value="option2" id="option2" />
              <FieldLabel htmlFor="option2" className="font-normal">
                Вариант 2
              </FieldLabel>
            </Field>
            <Field orientation="horizontal" className="items-center">
              <RadioGroupItem value="option3" id="option3" />
              <FieldLabel htmlFor="option3" className="font-normal">
                Вариант 3
              </FieldLabel>
            </Field>
          </FieldGroup>
        </RadioGroup>
      </FieldSet>
    );
  },
};

export const RegistrationForm: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Регистрация</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="reg-name">Имя</FieldLabel>
          <FieldContent>
            <Input id="reg-name" placeholder="Иван Петров" />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="reg-email">Email</FieldLabel>
          <FieldContent>
            <Input id="reg-email" type="email" placeholder="ivan@example.com" />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="reg-password">Пароль</FieldLabel>
          <FieldContent>
            <Input id="reg-password" type="password" placeholder="••••••••" />
            <FieldDescription>Минимум 8 символов</FieldDescription>
          </FieldContent>
        </Field>

        <FieldSeparator />

        <Field orientation="horizontal" className="items-center">
          <Checkbox id="reg-terms" />
          <FieldLabel htmlFor="reg-terms" className="font-normal">
            Я принимаю условия использования
          </FieldLabel>
        </Field>

        <Button className="mt-2">Зарегистрироваться</Button>
      </FieldGroup>
    </FieldSet>
  ),
};

export const ProfileSettings: Story = {
  render: () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);

    return (
      <FieldSet>
        <FieldLegend>Настройки профиля</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="profile-name">Отображаемое имя</FieldLabel>
            <FieldContent>
              <Input id="profile-name" defaultValue="Иван Петров" />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="profile-bio">О себе</FieldLabel>
            <FieldContent>
              <Input id="profile-bio" placeholder="Расскажите о себе" />
              <FieldDescription>Максимум 160 символов</FieldDescription>
            </FieldContent>
          </Field>

          <FieldSeparator>Уведомления</FieldSeparator>

          <Field orientation="horizontal" className="items-center">
            <Checkbox
              id="email-notif"
              checked={emailNotifications}
              onCheckedChange={(checked) =>
                setEmailNotifications(checked as boolean)
              }
            />
            <FieldLabel htmlFor="email-notif" className="font-normal">
              Email уведомления
            </FieldLabel>
          </Field>

          <Field orientation="horizontal" className="items-center">
            <Checkbox
              id="push-notif"
              checked={pushNotifications}
              onCheckedChange={(checked) =>
                setPushNotifications(checked as boolean)
              }
            />
            <FieldLabel htmlFor="push-notif" className="font-normal">
              Push уведомления
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="icon-name">Имя</FieldLabel>
          <FieldContent>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="icon-name"
                placeholder="Иван Петров"
                className="pl-9"
              />
            </div>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="icon-email">Email</FieldLabel>
          <FieldContent>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="icon-email"
                type="email"
                placeholder="ivan@example.com"
                className="pl-9"
              />
            </div>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="icon-password">Пароль</FieldLabel>
          <FieldContent>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="icon-password"
                type="password"
                placeholder="••••••••"
                className="pl-9"
              />
            </div>
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

export const MultipleErrors: Story = {
  render: () => {
    const errors = [
      { message: "Пароль слишком короткий" },
      { message: "Пароль должен содержать цифру" },
      { message: "Пароль должен содержать заглавную букву" },
    ];

    return (
      <Field data-invalid>
        <FieldLabel htmlFor="password-errors">Пароль</FieldLabel>
        <FieldContent>
          <Input id="password-errors" type="password" aria-invalid />
          <FieldError errors={errors} />
        </FieldContent>
      </Field>
    );
  },
};
