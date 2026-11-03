import type { Metadata } from "next";
import { experience, roles } from "~/content/experience";
import { siteConfig } from "~/site.config";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Timeline } from "@/components/experience/Timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: `Full work history of ${siteConfig.name}: product engineering, full-stack development, and SaaS delivery across four roles since 2021.`,
  alternates: { canonical: "/experience" },
  openGraph: { title: `Experience | ${siteConfig.name}`, url: "/experience" },
};

export default function ExperiencePage() {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-accent text-xs font-semibold tracking-[0.22em] uppercase">
          {experience.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{experience.heading}</h1>
        <p className="text-fg mt-4 text-base leading-relaxed sm:text-lg">{experience.intro}</p>
      </Reveal>
      <div className="mt-12">
        <Timeline roles={roles} detailed />
      </div>
      <Reveal className="mt-12 flex flex-wrap gap-3">
        <Button href="/#contact">Work with me</Button>
        <Button href="/resume" variant="secondary">
          View resume
        </Button>
      </Reveal>
    </Container>
  );
}
