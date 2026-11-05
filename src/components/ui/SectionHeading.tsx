import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  eyebrow: string;
  heading: string;
  intro?: ReactNode;
  icon?: LucideIcon;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  heading,
  intro,
  icon: Icon,
  align = "left",
  className,
}: Props) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow">
        {Icon ? <Icon aria-hidden="true" className="size-3.5" strokeWidth={2.2} /> : null}
        {eyebrow}
      </p>
      <h2 id={`${id}-heading`} className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.6rem]">
        {heading}
      </h2>
      {intro ? <p className="text-fg mt-4 text-base leading-relaxed sm:text-lg">{intro}</p> : null}
    </Reveal>
  );
}
