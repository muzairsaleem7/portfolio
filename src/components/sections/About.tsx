import { about } from "~/content/about";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading id="about" eyebrow={about.eyebrow} heading={about.heading} />
          <div className="text-fg mt-6 space-y-5 text-base leading-relaxed sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={80 + i * 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={160}>
          <Card className="h-full">
            <h3 className="text-accent text-sm font-semibold tracking-[0.18em] uppercase">
              {about.stackHeading}
            </h3>
            <dl className="mt-6 space-y-6">
              {about.stack.map((group) => (
                <div key={group.label}>
                  <dt className="text-heading text-sm font-semibold">{group.label}</dt>
                  <dd className="mt-2">
                    <ChipList items={group.items} size="sm" label={group.label} />
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {about.principles.map((item, i) => (
          <Reveal key={item.title} as="li" delay={i * 90}>
            <Card className="h-full" hover>
              <div aria-hidden="true" className="accent-bar h-1 w-8 rounded-full" />
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="text-fg mt-2 text-sm leading-relaxed">{item.body}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
