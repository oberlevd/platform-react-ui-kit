import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./index";
import { Button } from "../Button";
import { Settings, User, Mail, Bell, Calendar, Star } from "lucide-react";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex justify-center p-10 bg-slate-50 min-h-75">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-87.5">
      <CardHeader>
        <CardTitle>Заголовок карточки</CardTitle>
        <CardDescription>
          Описание карточки с дополнительной информацией.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Основное содержимое карточки. Здесь может быть любой контент.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">Подвал карточки</p>
      </CardFooter>
    </Card>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <Card className="w-87.5">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
            <User className="h-6 w-6" />
          </div>
          <div>
            <CardTitle>Иван Петров</CardTitle>
            <CardDescription>Frontend-разработчик</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>ivan.petrov@example.com</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Присоединился в марте 2023</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" size="s" className="flex-1">
          Редактировать
        </Button>
        <Button size="s" className="flex-1">
          Сохранить
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const SettingsCard: Story = {
  render: () => (
    <Card className="w-100">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          <CardTitle>Настройки уведомлений</CardTitle>
        </div>
        <CardDescription>
          Управляйте тем, какие уведомления вы получаете.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {[
          { icon: Bell, label: "Push-уведомления", checked: true },
          { icon: Mail, label: "Email-рассылка", checked: false },
          { icon: Star, label: "Обновления продукта", checked: true },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
              defaultChecked={item.checked}
            />
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-end gap-2 border-t pt-6 mt-2">
        <Button variant="ghost" size="s">
          Отмена
        </Button>
        <Button size="s">Сохранить</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card className="w-75 overflow-hidden">
      <div className="h-48 bg-muted flex items-center justify-center border-b">
        <span className="text-muted-foreground font-medium">
          Изображение товара
        </span>
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-base">Наушники Pro</CardTitle>
        <CardDescription>
          Беспроводные наушники с шумоподавлением
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold">9 990 ₽</span>
          <span className="text-xs text-green-600 font-medium">в наличии</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">В корзину</Button>
      </CardFooter>
    </Card>
  ),
};

export const TableCard: Story = {
  render: () => (
    <Card className="w-125">
      <CardHeader>
        <CardTitle>Последние заказы</CardTitle>
        <CardDescription>Список последних 3 заказов</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
                  №
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
                  Товар
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground">
                  Сумма
                </th>
                <th className="h-10 px-2 text-right align-middle font-medium text-muted-foreground">
                  Статус
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              <tr className="border-b transition-colors hover:bg-muted/50">
                <td className="p-2 align-middle font-medium">1</td>
                <td className="p-2 align-middle">Ноутбук</td>
                <td className="p-2 align-middle">75 990 ₽</td>
                <td className="p-2 align-middle text-right text-green-600">
                  Доставлен
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50">
                <td className="p-2 align-middle font-medium">2</td>
                <td className="p-2 align-middle">Мышь</td>
                <td className="p-2 align-middle">2 490 ₽</td>
                <td className="p-2 align-middle text-right text-blue-600">
                  В пути
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="s" className="w-full">
          Все заказы
        </Button>
      </CardFooter>
    </Card>
  ),
};
