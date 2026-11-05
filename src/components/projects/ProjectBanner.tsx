import {
  Building2,
  Code2,
  LayoutDashboard,
  Target,
  Workflow,
  type IconComponent,
} from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/** One icon per project, keyed by slug; unknown slugs fall back to a code mark. */
const PROJECT_ICONS: Record<string, IconComponent> = {
  "multi-tenant-b2b-saas-platform": Building2,
  "b2b-lead-generation-sales-pipeline": Target,
  "business-workflow-automation-platform": Workflow,
  "customer-portal-integrations": LayoutDashboard,
};

/** Glow positions vary per project so cards don't look identical. */
const GLOWS = [
  { sky: "right-[-20%] top-[-60%]", indigo: "left-[-10%] bottom-[-70%]" },
  { sky: "left-[-15%] top-[-55%]", indigo: "right-[-5%] bottom-[-75%]" },
  { sky: "right-[10%] top-[-70%]", indigo: "left-[20%] bottom-[-80%]" },
  { sky: "left-[30%] top-[-65%]", indigo: "right-[-20%] bottom-[-60%]" },
] as const;

type Props = {
  index: number;
  slug?: string;
  className?: string;
  /** Zoom slightly when an ancestor with `group` is hovered. */
  hoverZoom?: boolean;
};

/**
 * Abstract project header in the banner palette, used in place of a screenshot:
 * theme-aware gradient (zinc in dark, navy in light), 44px grid, two soft glows, the accent bar,
 * and a per-project icon.
 * Purely decorative, so it is hidden from assistive technology.
 */
export function ProjectBanner({ index, slug, className, hoverZoom = false }: Props) {
  const glow = GLOWS[index % GLOWS.length];
  const Icon = (slug && PROJECT_ICONS[slug]) || Code2;
  return (
    <div
      aria-hidden="true"
      className={cn("relative overflow-hidden bg-[var(--banner-base)]", className)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-[image:var(--banner-gradient)]",
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
      <span
        className={cn(
          "absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-[rgba(125,211,252,0.35)] bg-[rgba(0,0,0,0.45)] text-[#7dd3fc] shadow-[0_18px_40px_-18px_rgba(56,189,248,0.7)] backdrop-blur-sm",
          hoverZoom &&
            "ease-out-soft transition-transform duration-500 group-hover:-translate-y-[58%] group-hover:scale-105 motion-reduce:transition-none",
        )}
      >
        <Icon className="size-7" strokeWidth={1.6} />
      </span>
    </div>
  );
}
