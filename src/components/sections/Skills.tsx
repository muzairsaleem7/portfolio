import {
  Database,
  GitBranch,
  Layers,
  MonitorSmartphone,
  Server,
  Wrench,
} from "@/components/ui/icons";
import { skills } from "~/content/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";
import { IconTile } from "@/components/ui/IconTile";

/** Icons for skills.groups, in order: front end, back end, data, delivery and practice. */
const GROUP_ICONS = [MonitorSmartphone, Server, Database, GitBranch] as const;

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        eyebrow={skills.eyebrow}
        heading={skills.heading}
        intro={skills.intro}
        icon={Wrench}
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {skills.groups.map((group, i) => (
          <Reveal key={group.label} as="li" delay={i * 80}>
            <Card className="h-full" hover>
              <div className="flex items-center gap-4">
                <IconTile icon={GROUP_ICONS[i] ?? Layers} />
                <h3 className="text-base font-semibold">{group.label}</h3>
              </div>
              <div className="mt-5">
                <ChipList items={group.items} label={group.label} />
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
