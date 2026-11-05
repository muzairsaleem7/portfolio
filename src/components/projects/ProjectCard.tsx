import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { projectsSection, type Project } from "~/content/projects";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";
import { ProjectBanner } from "@/components/projects/ProjectBanner";

type Props = {
  project: Project;
  /** Position in the full projects list; drives the banner number and glow layout. */
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const href = `/projects/${project.slug}`;

  return (
    <Card
      as="article"
      hover
      padded={false}
      className="group relative flex h-full flex-col overflow-hidden"
    >
      <div className="border-line relative aspect-[16/7] overflow-hidden border-b">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
            className="ease-out-soft object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        ) : (
          <ProjectBanner index={index} slug={project.slug} hoverZoom className="h-full w-full" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-accent flex items-start gap-1.5 text-xs font-medium">
          <BriefcaseBusiness aria-hidden="true" className="mt-px size-3.5 shrink-0" />
          {project.context}
        </p>
        <h3 className="mt-2 text-lg font-semibold">
          {/* The stretched link makes the whole card clickable with a single tab stop. */}
          <Link
            href={href}
            className="hover:text-accent transition-colors after:absolute after:inset-0 after:rounded-2xl"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-fg mt-2 flex-1 text-sm leading-relaxed">{project.summary}</p>
        <div className="mt-5">
          <ChipList items={project.stack} size="sm" label={`${project.title} stack`} />
        </div>
        <p className="text-heading mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
          {projectsSection.cardCta}
          <ArrowUpRight
            aria-hidden="true"
            className="ease-out-soft text-accent size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          />
        </p>
      </div>
    </Card>
  );
}
