import { GraduationCap, School } from "@/components/ui/icons";
import { education } from "~/content/education";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";

/** University first, then college. */
const EDUCATION_ICONS = [GraduationCap, School] as const;

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        id="education"
        eyebrow={education.eyebrow}
        heading={education.heading}
        icon={GraduationCap}
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {education.items.map((item, i) => (
          <Reveal key={item.degree} as="li" delay={i * 80}>
            <Card className="flex h-full gap-5" hover>
              <IconTile icon={EDUCATION_ICONS[i] ?? GraduationCap} />
              <div className="min-w-0">
                <p className="text-accent text-sm font-medium tabular-nums">
                  {item.start} – {item.end}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.degree}</h3>
                <p className="text-fg mt-1 text-sm">{item.school}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
