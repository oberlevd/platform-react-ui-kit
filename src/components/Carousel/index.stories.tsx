import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./index";
import { Card, CardContent } from "../Card";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-12 min-h-100 w-full bg-slate-50">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="bg-primary text-primary-foreground flex aspect-square items-center justify-center rounded-xl p-6 shadow-inner">
              <span className="text-6xl font-bold">{index + 1}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="border-2">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-5xl font-extrabold text-primary">
                  {index + 1}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Carousel className="w-full max-w-md">
      <CarouselContent className="-ml-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 basis-1/3">
            <div className="bg-purple-500 text-white flex h-32 items-center justify-center rounded-lg shadow-lg">
              <span className="text-2xl font-bold">{index + 1}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const CustomControls: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="bg-teal-500 text-white flex aspect-video items-center justify-center rounded-lg">
              <span className="text-3xl font-bold">Слайд {index + 1}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-2 mt-4">
        <CarouselPrevious className="static translate-y-0" variant="primary" />
        <CarouselNext className="static translate-y-0" variant="primary" />
      </div>
    </Carousel>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Carousel orientation="vertical" className="w-full max-w-xs">
      <CarouselContent className="h-50">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-4">
            <div className="bg-indigo-500 text-white flex h-full items-center justify-center rounded-lg">
              <span className="text-2xl font-bold">{index + 1}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
