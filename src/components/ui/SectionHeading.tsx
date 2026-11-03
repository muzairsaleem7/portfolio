import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  eyebrow: string;
  heading: string;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ id, eyebrow, heading, intro, align = "left", className }: Props) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="text-accent text-xs font-semibold tracking-[0.22em] uppercase">{eyebrow}</p>
      <h2 id={`${id}-heading`} className="mt-3 text-3xl font-bold sm:text-4xl">
        {heading}
      </h2>
      {intro ? <p className="text-fg mt-4 text-base leading-relaxed sm:text-lg">{intro}</p> : null}
    </Reveal>
  );
}
