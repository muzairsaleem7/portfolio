import type { IconComponent } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type Props = { icon: IconComponent; className?: string; size?: "sm" | "md" };

/** Gradient-tinted square that frames a lucide icon; decorative. */
export function IconTile({ icon: Icon, className, size = "md" }: Props) {
  return (
    <span
      aria-hidden="true"
      className={cn("icon-tile", size === "sm" && "icon-tile-sm", className)}
    >
      <Icon className={size === "sm" ? "size-4" : "size-5"} strokeWidth={1.8} />
    </span>
  );
}
