import type { Role } from "~/content/experience";
import { formatDuration, formatRange, toDateTime } from "@/lib/dates";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";

type Props = { roles: readonly Role[]; detailed?: boolean };

export function Timeline({ roles, detailed = false }: Props) {
  return (
    <ol className="border-line relative ml-3 border-l pl-8 sm:ml-4 sm:pl-10">
      {roles.map((role, i) => (
        <Reveal key={role.slug} as="li" delay={i * 90} className="relative pb-10 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute top-7 -left-[41px] flex h-4 w-4 items-center justify-center sm:-left-[49px]"
          >
            <span className="bg-sky/25 absolute h-4 w-4 rounded-full" />
            <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#38bdf8,#6366f1)]" />
          </span>
          <RoleCard role={role} detailed={detailed} />
        </Reveal>
      ))}
    </ol>
  );
}

export function RoleCard({ role, detailed }: { role: Role; detailed: boolean }) {
  return (
    <Card as="article" hover className="p-6 sm:p-7">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-lg font-semibold sm:text-xl">
            {role.title}
            <span className="text-fg font-medium"> · {role.company}</span>
          </h3>
          <p className="text-muted mt-1 text-sm">
            {role.employmentType} · {role.workMode} · {role.location}
          </p>
        </div>
        <p className="text-accent shrink-0 text-sm font-medium">
          <time dateTime={toDateTime(role.start)}>{formatRange(role.start, role.end)}</time>
          {role.end ? (
            <span className="text-muted"> · {formatDuration(role.start, role.end)}</span>
          ) : null}
        </p>
      </header>

      <p className="text-fg mt-4 text-sm leading-relaxed sm:text-base">{role.summary}</p>

      {detailed ? (
        <ul className="mt-4 space-y-2">
          {role.highlights.map((h) => (
            <li key={h} className="text-fg flex gap-3 text-sm leading-relaxed">
              <span
                aria-hidden="true"
                className="bg-sky mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
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
