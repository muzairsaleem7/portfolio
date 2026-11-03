import { education } from "~/content/education";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education" eyebrow={education.eyebrow} heading={education.heading} />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {education.items.map((item, i) => (
          <Reveal key={item.degree} as="li" delay={i * 80}>
            <Card className="h-full" hover>
              <p className="text-accent text-sm font-medium tabular-nums">
                {item.start} – {item.end}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.degree}</h3>
              <p className="text-fg mt-1 text-sm">{item.school}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
