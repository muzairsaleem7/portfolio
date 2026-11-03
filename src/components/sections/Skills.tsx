import { skills } from "~/content/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        eyebrow={skills.eyebrow}
        heading={skills.heading}
        intro={skills.intro}
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {skills.groups.map((group, i) => (
          <Reveal key={group.label} as="li" delay={i * 80}>
            <Card className="h-full" hover>
              <h3 className="text-base font-semibold">{group.label}</h3>
              <div className="mt-4">
                <ChipList items={group.items} label={group.label} />
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
