import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  /** Lift, border glow, and a cursor-following spotlight on hover. */
  hover?: boolean;
  /** Default inner padding. Turn off for full-bleed media such as project headers. */
  padded?: boolean;
  as?: "div" | "article" | "li";
};

export function Card({
  children,
  className,
  hover = false,
  padded = true,
  as: Tag = "div",
}: Props) {
  return (
    <Tag
      className={cn(
        "card rounded-2xl",
        padded && "p-6 sm:p-7",
        hover && "card-hover card-spotlight",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
