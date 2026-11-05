import {
  Activity,
  Cloud,
  Database,
  Layers,
  MonitorSmartphone,
  Server,
  UserRound,
  UsersRound,
} from "lucide-react";
import { about } from "~/content/about";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/Chip";
import { IconTile } from "@/components/ui/IconTile";

/** Icons for about.stack groups, in order: front end, back end, data, delivery. */
const STACK_ICONS = [MonitorSmartphone, Server, Database, Cloud] as const;
/** Icons for about.principles, in order: scope with users, own the stack, keep it running. */
const PRINCIPLE_ICONS = [UsersRound, Layers, Activity] as const;

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            id="about"
            eyebrow={about.eyebrow}
            heading={about.heading}
            icon={UserRound}
          />
          <div className="text-fg mt-6 space-y-5 text-base leading-relaxed sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={80 + i * 80}>
                <p className={i === 0 ? "text-heading/90" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={160}>
          <Card className="h-full">
            <h3 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              {about.stackHeading}
            </h3>
            <dl className="mt-6 space-y-6">
              {about.stack.map((group, i) => (
                <div key={group.label} className="relative min-h-[2.1rem] pl-[3.1rem]">
                  {/* dt/dd must be direct children of the group, so the icon lives inside dt. */}
                  <dt className="text-heading pt-1.5 text-sm font-semibold">
                    <IconTile
                      icon={STACK_ICONS[i] ?? Layers}
                      size="sm"
                      className="absolute top-0 left-0"
                    />
                    {group.label}
                  </dt>
                  <dd className="mt-2">
                    <ChipList items={group.items} size="sm" label={group.label} />
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-4 md:grid-cols-3">
        {about.principles.map((item, i) => (
          <Reveal key={item.title} as="li" delay={i * 90}>
            <Card className="h-full" hover>
              <IconTile icon={PRINCIPLE_ICONS[i] ?? Layers} />
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="text-fg mt-2 text-sm leading-relaxed">{item.body}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
