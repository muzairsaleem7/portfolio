import { cn } from "@/lib/cn";

/** Glow positions vary per project so cards don't look identical. */
const GLOWS = [
  { sky: "right-[-20%] top-[-60%]", indigo: "left-[-10%] bottom-[-70%]" },
  { sky: "left-[-15%] top-[-55%]", indigo: "right-[-5%] bottom-[-75%]" },
  { sky: "right-[10%] top-[-70%]", indigo: "left-[20%] bottom-[-80%]" },
  { sky: "left-[30%] top-[-65%]", indigo: "right-[-20%] bottom-[-60%]" },
] as const;

type Props = {
  index: number;
  className?: string;
  /** Zoom slightly when an ancestor with `group` is hovered. */
  hoverZoom?: boolean;
};

/**
 * Abstract project header in the banner palette, used in place of a screenshot:
 * navy gradient, 44px grid, two soft glows, the accent bar, and the project number.
 * Purely decorative, so it is hidden from assistive technology.
 */
export function ProjectBanner({ index, className, hoverZoom = false }: Props) {
  const glow = GLOWS[index % GLOWS.length];
  return (
    <div aria-hidden="true" className={cn("relative overflow-hidden bg-[#0b1526]", className)}>
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(115deg,#0b1526_0%,#0f2240_55%,#123a5e_100%)]",
          hoverZoom &&
            "ease-out-soft transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none",
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div
          className={cn(
            "absolute h-[180%] w-[80%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.28)_0%,transparent_62%)]",
            glow.sky,
          )}
        />
        <div
          className={cn(
            "absolute h-[160%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.24)_0%,transparent_65%)]",
            glow.indigo,
          )}
        />
      </div>
      <div className="accent-bar absolute inset-x-0 top-0 h-1" />
      <span className="absolute bottom-4 left-5 font-mono text-sm font-semibold tracking-[0.2em] text-[#7dd3fc]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute right-5 bottom-3 font-mono text-2xl text-[rgba(148,163,184,0.55)]">
        {"</>"}
      </span>
    </div>
  );
}
