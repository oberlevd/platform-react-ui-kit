import type { Meta, StoryObj } from "@storybook/react-vite";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./index";
import { Button } from "../Button";
import { Switch } from "../Switch";
import { Label } from "../Label";
import { ChevronDown, HelpCircle, Settings2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-100 mx-auto p-10 bg-alfa-bg-page min-h-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const [emailPublic, setEmailPublic] = useState(true);
    const [auth, setAuth] = useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2 border border-alfa-border-control rounded-2xl p-4 bg-white shadow-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-alfa-bg-control rounded-lg">
              <Settings2 size={18} className="text-alfa-text" />
            </div>
            <h3 className="text-base font-bold text-alfa-text">
              Настройки профиля
            </h3>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="s" className="h-8 w-8 p-0">
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="text-sm text-muted-foreground ml-11">
          Управление приватностью данных
        </div>
        <CollapsibleContent>
          <div className="pt-4 space-y-4 border-t border-alfa-border-control mt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-pub" className="cursor-pointer">
                Публичный email
              </Label>
              <Switch
                id="email-pub"
                size="sm"
                checked={emailPublic}
                onCheckedChange={setEmailPublic}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="2fa" className="cursor-pointer">
                Двухфакторная защита
              </Label>
              <Switch
                id="2fa"
                size="sm"
                checked={auth}
                onCheckedChange={setAuth}
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const FAQGroup: Story = {
  render: () => {
    const [openId, setOpenId] = useState<string | null>("item-1");

    const items = [
      {
        id: "item-1",
        q: "Как пополнить счет?",
        a: "Вы можете пополнить счет через СБП или переводом с другой карты без комиссии.",
      },
      {
        id: "item-2",
        q: "Где найти реквизиты?",
        a: "Реквизиты доступны в разделе 'Инфо' вашей выбранной карты.",
      },
      {
        id: "item-3",
        q: "Лимиты на переводы",
        a: "Стандартный лимит составляет 500 000 ₽ в день для верифицированных пользователей.",
      },
    ];

    return (
      <div className="space-y-3">
        {items.map((item) => (
          <Collapsible
            key={item.id}
            open={openId === item.id}
            onOpenChange={() => setOpenId(openId === item.id ? null : item.id)}
            className="border border-alfa-border-control rounded-2xl overflow-hidden bg-white shadow-sm"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-between p-4 h-auto hover:bg-alfa-bg-control/20"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-alfa-red" />
                  <span className="font-bold text-alfa-text text-left">
                    {item.q}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    openId === item.id && "rotate-180",
                  )}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-12 pb-5 text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};
