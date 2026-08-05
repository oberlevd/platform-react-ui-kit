import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster } from "./index";
import { Button } from "../Button";
import { toast } from "sonner";
import {
  Mail,
  Download,
  Upload,
  Trash2,
  Bell,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const meta = {
  title: "Components/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "top-center",
        "bottom-center",
      ] as const,
      description: "Позиция тостов",
    },
    richColors: {
      control: "boolean",
      description: "Использовать насыщенные цвета",
    },
    expand: {
      control: "boolean",
      description: "Расширять тосты",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  args: {
    position: "bottom-right",
    richColors: false,
    expand: false,
  },
  render: (args) => (
    <>
      <Toaster {...args} />
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => toast("Обычное уведомление")}>
          Обычный тост
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            toast.message("Сообщение", {
              description: "Тост с заголовком и описанием",
            })
          }
        >
          С описанием
        </Button>
      </div>
    </>
  ),
};

export const Types: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-4">
        <Button
          variant="outline"
          onClick={() =>
            toast.success("Успешно!", {
              description: "Данные успешно сохранены",
            })
          }
        >
          Успех
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            toast.error("Ошибка!", {
              description: "Не удалось сохранить данные",
            })
          }
        >
          Ошибка
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Предупреждение!", {
              description: "Ваша сессия истекает",
            })
          }
        >
          Предупреждение
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            toast.info("Информация", {
              description: "Доступно обновление системы",
            })
          }
        >
          Информация
        </Button>
      </div>
    </>
  ),
};

export const RichColors: Story = {
  render: () => (
    <>
      <Toaster richColors />
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => toast.success("Успешно сохранено!")}>
          Успех
        </Button>
        <Button onClick={() => toast.error("Ошибка валидации")}>Ошибка</Button>
        <Button onClick={() => toast.warning("Заполните все поля")}>
          Предупреждение
        </Button>
        <Button onClick={() => toast.info("Новое обновление")}>
          Информация
        </Button>
      </div>
    </>
  ),
};

export const Loading: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => {
            const toastId = toast.loading("Загрузка...");
            setTimeout(() => {
              toast.success("Загрузка завершена!", {
                id: toastId,
              });
            }, 2000);
          }}
        >
          Загрузить данные
        </Button>

        <Button
          onClick={() => {
            const toastId = toast.loading("Отправка...");
            setTimeout(() => {
              toast.error("Ошибка отправки", {
                id: toastId,
                description: "Попробуйте позже",
              });
            }, 2000);
          }}
        >
          Отправить (с ошибкой)
        </Button>
      </div>
    </>
  ),
};

export const WithActions: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => {
            toast("Новое сообщение", {
              description: "У вас 3 непрочитанных сообщения",
              action: {
                label: "Просмотреть",
                onClick: () => console.log("Просмотр"),
              },
            });
          }}
        >
          С кнопкой действия
        </Button>

        <Button
          onClick={() => {
            toast("Файл загружен", {
              description: "document.pdf успешно загружен",
              action: {
                label: "Открыть",
                onClick: () => console.log("Открыть"),
              },
              cancel: {
                label: "Отмена",
                onClick: () => console.log("Отмена"),
              },
            });
          }}
        >
          С двумя кнопками
        </Button>
      </div>
    </>
  ),
};

export const Positions: Story = {
  render: () => {
    const positions = [
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
    ] as const;

    type Position = (typeof positions)[number];

    return (
      <>
        <Toaster />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {positions.map((position) => (
            <Button
              key={position}
              variant="outline"
              onClick={() =>
                toast(`Тост в позиции ${position}`, {
                  position: position as Position,
                })
              }
            >
              {position}
            </Button>
          ))}
        </div>
      </>
    );
  },
};

export const Examples: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Действия с файлами</h4>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              onClick={() =>
                toast.success("Файл сохранен", {
                  description: "document.pdf",
                  icon: <Download className="h-4 w-4" />,
                })
              }
            >
              <Download className="mr-2 h-4 w-4" />
              Скачать
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.success("Файл загружен", {
                  description: "image.jpg",
                  icon: <Upload className="h-4 w-4" />,
                })
              }
            >
              <Upload className="mr-2 h-4 w-4" />
              Загрузить
            </Button>

            <Button
              variant="primary"
              onClick={() =>
                toast.error("Файл удален", {
                  description: "document.pdf",
                  icon: <Trash2 className="h-4 w-4" />,
                })
              }
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Удалить
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Уведомления</h4>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              onClick={() =>
                toast.success("Подписка оформлена", {
                  description: "Вы получите уведомление о новых статьях",
                  duration: 5000,
                })
              }
            >
              <Bell className="mr-2 h-4 w-4" />
              Подписаться
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.info("Новое сообщение", {
                  description: "От: Иван Петров",
                  action: {
                    label: "Ответить",
                    onClick: () => console.log("Ответить"),
                  },
                })
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              Отправить сообщение
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() =>
            toast("Готово!", {
              icon: <CheckCircle className="h-4 w-4 text-green-500" />,
            })
          }
        >
          С кастомной иконкой
        </Button>

        <Button
          onClick={() =>
            toast("Внимание!", {
              icon: <AlertCircle className="h-4 w-4 text-red-500" />,
              description: "Это важное уведомление",
            })
          }
        >
          С иконкой и описанием
        </Button>
      </div>
    </>
  ),
};

export const Durations: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() =>
            toast("Короткий тост (2 сек)", {
              duration: 2000,
            })
          }
        >
          2 секунды
        </Button>

        <Button
          onClick={() =>
            toast("Средний тост (5 сек)", {
              duration: 5000,
            })
          }
        >
          5 секунд
        </Button>

        <Button
          onClick={() =>
            toast("Длинный тост (10 сек)", {
              duration: 10000,
            })
          }
        >
          10 секунд
        </Button>

        <Button
          onClick={() =>
            toast("Бесконечный тост (не исчезает)", {
              duration: Infinity,
            })
          }
        >
          Бесконечно
        </Button>
      </div>
    </>
  ),
};
