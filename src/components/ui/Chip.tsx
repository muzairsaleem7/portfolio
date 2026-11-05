import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = { children: ReactNode; className?: string; size?: "sm" | "md" };

export function Chip({ children, className, size = "md" }: Props) {
  return (
    <span className={cn("chip", size === "md" ? "chip-md" : "chip-sm", className)}>{children}</span>
  );
}

export function ChipList({
  items,
  size = "md",
  className,
  label,
}: {
  items: readonly string[];
  size?: "sm" | "md";
  className?: string;
  label?: string;
}) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Chip size={size}>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}
