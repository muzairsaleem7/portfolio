import { BriefcaseBusiness, CalendarDays, CircleCheck, MapPin } from "lucide-react";
import { experience, type Role } from "~/content/experience";
import { formatDuration, formatRange, toDateTime } from "@/lib/dates";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";

type Props = { roles: readonly Role[]; detailed?: boolean };

export function Timeline({ roles, detailed = false }: Props) {
  return (
    <div className="relative">
      {/* Static rail, plus an accent line that GSAP draws as the section scrolls by. */}
      <div aria-hidden="true" className="bg-line absolute top-2 bottom-2 left-[19px] w-px" />
      <div
        aria-hidden="true"
        data-timeline-line
        className="absolute top-2 bottom-2 left-[19px] w-px origin-top bg-[linear-gradient(to_bottom,#38bdf8,#6366f1)]"
      />
      <ol className="relative space-y-6 sm:space-y-8">
        {roles.map((role, i) => (
          <Reveal key={role.slug} as="li" delay={i * 90} className="relative pl-14 sm:pl-16">
            <span
              aria-hidden="true"
              className="text-accent border-chip-border absolute top-6 left-0 grid size-10 place-items-center rounded-full border bg-[var(--bg)] shadow-[0_0_0_6px_var(--bg)]"
            >
              <BriefcaseBusiness className="size-[18px]" strokeWidth={1.8} />
            </span>
            <RoleCard role={role} detailed={detailed} />
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function RoleCard({ role, detailed }: { role: Role; detailed: boolean }) {
  const current = role.end === null;
  return (
    <Card as="article" hover className="p-6 sm:p-7">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-lg font-semibold sm:text-xl">
              {role.title}
              <span className="text-fg font-medium"> · {role.company}</span>
            </h3>
            {current ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 [[data-theme=light]_&]:text-emerald-700">
                <span className="status-dot" aria-hidden="true" />
                {experience.currentBadge}
              </span>
            ) : null}
          </div>
          <p className="text-muted mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <span>
              {role.employmentType} · {role.workMode}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="size-3.5" />
              {role.location}
            </span>
          </p>
        </div>
        <p className="text-accent inline-flex shrink-0 items-center gap-1.5 text-sm font-medium">
          <CalendarDays aria-hidden="true" className="size-4" />
          <span>
            <time dateTime={toDateTime(role.start)}>{formatRange(role.start, role.end)}</time>
            {role.end ? (
              <span className="text-muted"> · {formatDuration(role.start, role.end)}</span>
            ) : null}
          </span>
        </p>
      </header>

      <p className="text-fg mt-4 text-sm leading-relaxed sm:text-base">{role.summary}</p>

      {detailed ? (
        <ul className="mt-4 space-y-2.5">
          {role.highlights.map((h) => (
            <li key={h} className="text-fg flex gap-3 text-sm leading-relaxed">
              <CircleCheck
                aria-hidden="true"
                className="text-accent mt-0.5 size-4 shrink-0"
                strokeWidth={2}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5">
        <ChipList items={role.stack} size="sm" label={`${role.company} stack`} />
      </div>
    </Card>
  );
}
