import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "~/content/projects";
import { siteConfig } from "~/site.config";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { isPlaceholder } from "@/components/projects/ProjectCard";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const placeholder = isPlaceholder(project);

  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <Reveal className="max-w-3xl">
        <p className="text-accent text-xs font-semibold tracking-[0.22em] uppercase">Project</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{project.title}</h1>
        <p className="text-fg mt-4 text-base leading-relaxed sm:text-lg">{project.summary}</p>
        {placeholder ? (
          <p className="rounded-pill mt-4 inline-block border border-amber-400/50 bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-200 [[data-theme=light]_&]:text-amber-800">
            Placeholder content. Real project details are being added.
          </p>
        ) : null}
      </Reveal>

      {project.image ? (
        <Reveal delay={100} className="border-line mt-10 overflow-hidden rounded-2xl border">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1600}
            height={900}
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="h-auto w-full"
            priority
          />
        </Reveal>
      ) : null}

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-6">
          <Reveal delay={120}>
            <Card>
              <h2 className="text-lg font-semibold">The problem</h2>
              <p className="text-fg mt-3 leading-relaxed">{project.problem}</p>
            </Card>
          </Reveal>
          <Reveal delay={200}>
            <Card>
              <h2 className="text-lg font-semibold">The solution</h2>
              <p className="text-fg mt-3 leading-relaxed">{project.solution}</p>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <Card className="h-full">
            <h2 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              Details
            </h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-heading font-semibold">Role</dt>
                <dd className="text-fg mt-1">{project.role}</dd>
              </div>
              <div>
                <dt className="text-heading font-semibold">Stack</dt>
                <dd className="mt-2">
                  <ChipList items={project.stack} size="sm" label="Stack" />
                </dd>
              </div>
              {project.links.live || project.links.repo ? (
                <div>
                  <dt className="text-heading font-semibold">Links</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.links.live ? (
                      <Button href={project.links.live} external size="sm">
                        Live site
                      </Button>
                    ) : null}
                    {project.links.repo ? (
                      <Button href={project.links.repo} external size="sm" variant="secondary">
                        Source
                      </Button>
                    ) : null}
                  </dd>
                </div>
              ) : null}
            </dl>
          </Card>
        </Reveal>
      </div>

      <Reveal className="mt-12 flex flex-wrap gap-3">
        <Button href="/projects" variant="secondary">
          <span aria-hidden="true">←</span> All projects
        </Button>
        <Button href="/#contact">Work with me</Button>
      </Reveal>
    </Container>
  );
}
