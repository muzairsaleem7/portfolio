import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "li";
};

export function Card({ children, className, hover = false, as: Tag = "div" }: Props) {
  return (
    <Tag className={cn("card rounded-2xl p-6 sm:p-7", hover && "card-hover", className)}>
      {children}
    </Tag>
  );
}
