import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import { projects, projectsSection } from "~/content/projects";
import { siteConfig } from "~/site.config";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: `Products and internal tools built by ${siteConfig.name}: B2B SaaS and business applications, end to end.`,
  alternates: { canonical: "/projects" },
  openGraph: { title: `Projects | ${siteConfig.name}`, url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">
          <FolderKanban aria-hidden="true" className="size-3.5" strokeWidth={2.2} />
          {projectsSection.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
          {projectsSection.heading}
        </h1>
        <p className="text-fg mt-4 text-base leading-relaxed sm:text-lg">{projectsSection.intro}</p>
      </Reveal>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} as="li" delay={i * 90}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </ul>
    </Container>
  );
}
