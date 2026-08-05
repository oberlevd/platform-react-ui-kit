import { cn } from "@/lib/utils";

export const Skeleton = ({
  className,
  ...properties
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("bg-accent animate-pulse rounded-md", className)}
      data-slot="skeleton"
      {...properties}
    />
  );
};
