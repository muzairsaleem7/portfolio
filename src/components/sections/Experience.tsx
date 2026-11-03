import { experience, roles } from "~/content/experience";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Timeline } from "@/components/experience/Timeline";

export function Experience() {
  return (
    <Section id="experience">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          id="experience"
          eyebrow={experience.eyebrow}
          heading={experience.heading}
          intro={experience.intro}
        />
        <Reveal delay={120} className="shrink-0">
          <Button href={experience.viewAll.href} variant="secondary">
            {experience.viewAll.label}
            <span aria-hidden="true">→</span>
          </Button>
        </Reveal>
      </div>
      <div className="mt-12">
        <Timeline roles={roles} />
      </div>
    </Section>
  );
}
