import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects, projectsSection } from "~/content/projects";
import { siteConfig } from "~/site.config";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { ProjectBanner } from "@/components/projects/ProjectBanner";

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

  const index = projects.findIndex((p) => p.slug === project.slug);
  const t = projectsSection.detail;
  const hasLinks = Boolean(project.links.live || project.links.repo);

  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <Reveal className="max-w-3xl">
        <p className="text-accent text-xs font-semibold tracking-[0.22em] uppercase">{t.eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="text-fg mt-4 text-base leading-relaxed sm:text-lg">{project.summary}</p>
        <p className="text-muted mt-3 text-sm">{project.context}</p>
        <div className="mt-6">
          <ChipList items={project.stack} label={t.stackLabel} />
        </div>
      </Reveal>

      <Reveal delay={100} className="border-line mt-10 overflow-hidden rounded-2xl border">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1600}
            height={900}
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="h-auto w-full"
            priority
          />
        ) : (
          <ProjectBanner index={index} className="aspect-[16/6] w-full sm:aspect-[16/5]" />
        )}
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-6">
          <Reveal delay={120}>
            <Card>
              <h2 className="text-lg font-semibold">{t.problemHeading}</h2>
              <p className="text-fg mt-3 leading-relaxed">{project.problem}</p>
            </Card>
          </Reveal>
          <Reveal delay={200}>
            <Card>
              <h2 className="text-lg font-semibold">{t.solutionHeading}</h2>
              {project.solution ? (
                <p className="text-fg mt-3 leading-relaxed">{project.solution}</p>
              ) : null}
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="text-fg flex gap-3 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#38bdf8,#6366f1)]"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <Card className="h-full">
            <h2 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              {t.detailsHeading}
            </h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-heading font-semibold">{t.contextLabel}</dt>
                <dd className="text-fg mt-1">{project.context}</dd>
              </div>
              <div>
                <dt className="text-heading font-semibold">{t.roleLabel}</dt>
                <dd className="text-fg mt-1">{project.role}</dd>
              </div>
              <div>
                <dt className="text-heading font-semibold">{t.stackLabel}</dt>
                <dd className="mt-2">
                  <ChipList items={project.stack} size="sm" label={t.stackLabel} />
                </dd>
              </div>
              {hasLinks ? (
                <div>
                  <dt className="text-heading font-semibold">{t.linksLabel}</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.links.live ? (
                      <Button href={project.links.live} external size="sm">
                        {t.liveLabel}
                      </Button>
                    ) : null}
                    {project.links.repo ? (
                      <Button href={project.links.repo} external size="sm" variant="secondary">
                        {t.repoLabel}
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
        <Button href={projectsSection.viewAll.href} variant="secondary">
          <span aria-hidden="true">←</span> {t.backLabel}
        </Button>
        <Button href="/#contact">{t.ctaLabel}</Button>
      </Reveal>
    </Container>
  );
}
