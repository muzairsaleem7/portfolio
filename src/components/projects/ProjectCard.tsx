import Image from "next/image";
import Link from "next/link";
import type { Project } from "~/content/projects";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";

export function isPlaceholder(project: Project): boolean {
  return project.summary.startsWith("[Placeholder]");
}

export function ProjectCard({ project }: { project: Project }) {
  const placeholder = isPlaceholder(project);
  const href = `/projects/${project.slug}`;

  return (
    <Card as="article" hover className="flex h-full flex-col overflow-hidden p-0">
      <Link href={href} className="group block focus-visible:outline-offset-[-3px]">
        <div className="border-line relative aspect-[16/9] overflow-hidden border-b">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
              className="ease-out-soft object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
            />
          ) : (
            <div
              aria-hidden="true"
              className="ease-out-soft flex h-full w-full items-center justify-center bg-[linear-gradient(115deg,#0b1526,#0f2240_55%,#123a5e)] transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
            >
              <span className="text-sky/60 font-mono text-2xl">{"</>"}</span>
            </div>
          )}
          {placeholder ? (
            <span className="rounded-pill absolute top-3 left-3 border border-amber-400/50 bg-amber-400/15 px-2.5 py-1 text-xs font-semibold text-amber-200 [[data-theme=light]_&]:text-amber-800">
              Placeholder
            </span>
          ) : null}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">
          <Link href={href} className="hover:text-accent transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="text-fg mt-2 flex-1 text-sm leading-relaxed">{project.summary}</p>
        <div className="mt-4">
          <ChipList items={project.stack} size="sm" label={`${project.title} stack`} />
        </div>
        <p className="text-muted mt-4 text-xs">{project.role}</p>
      </div>
    </Card>
  );
}
