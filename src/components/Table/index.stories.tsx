import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableSortHeader,
  TableEmptyState,
  LinkCell,
} from "./index";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { MoreVertical, Edit, Eye, Download, Star, Archive } from "lucide-react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

const invoices = [
  { invoice: "INV001", status: "Оплачен", method: "Карта", amount: "250.00" },
  { invoice: "INV002", status: "Ожидает", method: "PayPal", amount: "150.00" },
  { invoice: "INV003", status: "Оплачен", method: "Карта", amount: "350.00" },
  { invoice: "INV004", status: "Просрочен", method: "Карта", amount: "450.00" },
  { invoice: "INV005", status: "Оплачен", method: "PayPal", amount: "550.00" },
  { invoice: "INV006", status: "Ожидает", method: "Карта", amount: "200.00" },
  { invoice: "INV007", status: "Оплачен", method: "Карта", amount: "300.00" },
];

const users = [
  {
    id: 1,
    name: "Иван Петров",
    email: "ivan@example.com",
    role: "Админ",
    status: "Активен",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    name: "Анна Смирнова",
    email: "anna@example.com",
    role: "Пользователь",
    status: "Активен",
    avatar: "",
  },
  {
    id: 3,
    name: "Петр Иванов",
    email: "petr@example.com",
    role: "Модератор",
    status: "Неактивен",
    avatar: "",
  },
  {
    id: 4,
    name: "Елена Козлова",
    email: "elena@example.com",
    role: "Пользователь",
    status: "Активен",
    avatar: "",
  },
  {
    id: 5,
    name: "Дмитрий Сидоров",
    email: "dmitry@example.com",
    role: "Админ",
    status: "Активен",
    avatar: "https://github.com/vercel.png",
  },
];

const projects = [
  {
    id: 1,
    name: "iBank UI Kit",
    status: "Активен",
    progress: 75,
    url: "https://github.com/ibank/ui-kit",
  },
  {
    id: 2,
    name: "Dashboard",
    status: "В разработке",
    progress: 45,
    url: "https://github.com/ibank/dashboard",
  },
  {
    id: 3,
    name: "Mobile App",
    status: "Завершен",
    progress: 100,
    url: "https://github.com/ibank/mobile",
  },
  {
    id: 4,
    name: "API Gateway",
    status: "Активен",
    progress: 60,
    url: "https://github.com/ibank/api",
  },
  {
    id: 5,
    name: "Documentation",
    status: "В разработке",
    progress: 30,
    url: "https://github.com/ibank/docs",
  },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Список счетов за последние 3 месяца</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">Счет</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead>Метод</TableHead>
          <TableHead className="text-right">Сумма</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>
              <Badge
                variant={
                  invoice.status === "Оплачен"
                    ? "success"
                    : invoice.status === "Ожидает"
                      ? "secondary"
                      : "destructive"
                }
              >
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount} ₽</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Всего</TableCell>
          <TableCell className="text-right">2,250.00 ₽</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Название</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead>Прогресс</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableEmptyState colSpan={3} message="Проекты не найдены" />
      </TableBody>
    </Table>
  ),
};

export const WithCheckboxes: Story = {
  render: function Render() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleAll = () => {
      if (selected.length === invoices.length) {
        setSelected([]);
      } else {
        setSelected(invoices.map((i) => i.invoice));
      }
    };

    const toggleRow = (invoice: string) => {
      if (selected.includes(invoice)) {
        setSelected(selected.filter((i) => i !== invoice));
      } else {
        setSelected([...selected, invoice]);
      }
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selected.length === invoices.length}
                onCheckedChange={toggleAll}
              />
            </TableHead>
            <TableHead>Счет</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Сумма</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell>
                <Checkbox
                  checked={selected.includes(invoice.invoice)}
                  onCheckedChange={() => toggleRow(invoice.invoice)}
                />
              </TableCell>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    invoice.status === "Оплачен"
                      ? "success"
                      : invoice.status === "Ожидает"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>{invoice.amount} ₽</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const WithSorting: Story = {
  render: function Render() {
    const [sorting, setSorting] = useState<SortingState>([]);

    type Invoice = (typeof invoices)[0];

    const columnHelper = createColumnHelper<Invoice>();

    const columns = [
      columnHelper.accessor("invoice", {
        header: ({ column }) => (
          <TableSortHeader column={column} title="Счет" />
        ),
        cell: (info) => <span className="font-medium">{info.getValue()}</span>,
      }),
      columnHelper.accessor("status", {
        header: ({ column }) => (
          <TableSortHeader column={column} title="Статус" />
        ),
        cell: (info) => (
          <Badge
            variant={
              info.getValue() === "Оплачен"
                ? "success"
                : info.getValue() === "Ожидает"
                  ? "secondary"
                  : "destructive"
            }
          >
            {info.getValue()}
          </Badge>
        ),
      }),
      columnHelper.accessor("method", {
        header: ({ column }) => (
          <TableSortHeader column={column} title="Метод" />
        ),
      }),
      columnHelper.accessor("amount", {
        header: ({ column }) => (
          <TableSortHeader column={column} title="Сумма" />
        ),
        cell: (info) => <span className="text-right">{info.getValue()} ₽</span>,
      }),
    ];

    const table = useReactTable({
      data: invoices,
      columns,
      state: { sorting },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
    });

    return (
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const WithLinks: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Проект</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead>Прогресс</TableHead>
          <TableHead>Ссылка</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.id}</TableCell>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>
              <Badge
                variant={
                  project.status === "Активен"
                    ? "primary"
                    : project.status === "Завершен"
                      ? "success"
                      : "outline"
                }
              >
                {project.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="bg-alfa-bg-control h-2 w-24 rounded-full">
                  <div
                    className="bg-alfa-red h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-xs">{project.progress}%</span>
              </div>
            </TableCell>
            <TableCell>
              <LinkCell href={project.url}>
                {project.url.replace("https://github.com/", "")}
              </LinkCell>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithAvatars: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Пользователь</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Роль</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar>
                  {user.avatar ? <AvatarImage src={user.avatar} /> : null}
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">{user.name}</span>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge variant="outline">{user.role}</Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant={user.status === "Активен" ? "success" : "secondary"}
              >
                {user.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button size="s" variant="ghost">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="s" variant="ghost">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Название</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead>Прогресс</TableHead>
          <TableHead className="text-right">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>
              <Badge
                variant={
                  project.status === "Активен"
                    ? "primary"
                    : project.status === "Завершен"
                      ? "success"
                      : "outline"
                }
              >
                {project.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="bg-alfa-bg-control h-2 w-24 rounded-full">
                  <div
                    className="bg-alfa-red h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-xs">{project.progress}%</span>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Button size="s" variant="ghost">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="s" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="s" variant="ghost">
                  <Archive className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithFavorites: Story = {
  render: function Render() {
    const [favorites, setFavorites] = useState<number[]>([1, 3]);

    const toggleFavorite = (id: number) => {
      if (favorites.includes(id)) {
        setFavorites(favorites.filter((f) => f !== id));
      } else {
        setFavorites([...favorites, id]);
      }
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"></TableHead>
            <TableHead>Проект</TableHead>
            <TableHead>Статус</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <Button
                  size="s"
                  variant="ghost"
                  onClick={() => toggleFavorite(project.id)}
                >
                  <Star
                    className={`h-4 w-4 ${
                      favorites.includes(project.id)
                        ? "fill-yellow-400 text-yellow-400"
                        : ""
                    }`}
                  />
                </Button>
              </TableCell>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    project.status === "Активен"
                      ? "primary"
                      : project.status === "Завершен"
                        ? "success"
                        : "outline"
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
