import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Adds a faint top border to separate from the previous section. */
  divider?: boolean;
};

/** Semantic section with a consistent rhythm. Pair with <SectionHeading id={id}> for aria-labelledby. */
export function Section({ id, children, className, divider = true }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-20 py-20 sm:py-24 lg:py-28",
        divider && "border-line/60 border-t",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
