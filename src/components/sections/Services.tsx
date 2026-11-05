import {
  AppWindow,
  ArrowRight,
  Boxes,
  Check,
  Database,
  Globe,
  Handshake,
  Layers,
  Puzzle,
} from "@/components/ui/icons";
import { services } from "~/content/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconTile } from "@/components/ui/IconTile";

/** Icons for services.items, in order: web, SaaS, custom software, applications, databases. */
const SERVICE_ICONS = [Globe, Boxes, Puzzle, AppWindow, Database] as const;

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        id="services"
        eyebrow={services.eyebrow}
        heading={services.heading}
        intro={services.pitch}
        icon={Layers}
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item, i) => (
          <Reveal key={item.title} as="li" delay={i * 70}>
            <Card className="h-full" hover>
              <div className="flex items-start justify-between gap-4">
                <IconTile icon={SERVICE_ICONS[i] ?? Layers} />
                <span className="text-muted/70 font-mono text-xs font-semibold tracking-[0.2em] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="text-fg mt-2 text-sm leading-relaxed">{item.description}</p>
            </Card>
          </Reveal>
        ))}
        <Reveal as="li" delay={services.items.length * 70}>
          <Card className="card-feature relative flex h-full flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center gap-3">
                <IconTile icon={Handshake} size="sm" />
                <h3 className="text-lg font-semibold">{services.process.heading}</h3>
              </div>
              <ol className="mt-5 space-y-3">
                {services.process.steps.map((step) => (
                  <li key={step.title} className="flex gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#38bdf8,#6366f1)] text-[#0b1526]"
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span>
                      <span className="text-heading font-semibold">{step.title}.</span>{" "}
                      <span className="text-fg">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-muted text-sm">{services.pricing}</p>
              <Button href={services.cta.href} size="sm" className="group/cta">
                {services.cta.label}
                <ArrowRight
                  aria-hidden="true"
                  className="ease-out-soft size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                />
              </Button>
            </div>
          </Card>
        </Reveal>
      </ul>
    </Section>
  );
}
