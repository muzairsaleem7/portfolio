import { projects, projectsSection } from "~/content/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          id="projects"
          eyebrow={projectsSection.eyebrow}
          heading={projectsSection.heading}
          intro={projectsSection.intro}
        />
        <Reveal delay={120} className="shrink-0">
          <Button href={projectsSection.viewAll.href} variant="secondary">
            {projectsSection.viewAll.label}
            <span aria-hidden="true">→</span>
          </Button>
        </Reveal>
      </div>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} as="li" delay={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
