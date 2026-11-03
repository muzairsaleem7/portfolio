import { services } from "~/content/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        id="services"
        eyebrow={services.eyebrow}
        heading={services.heading}
        intro={services.pitch}
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item, i) => (
          <Reveal key={item.title} as="li" delay={i * 70}>
            <Card className="h-full" hover>
              <span className="text-accent text-xs font-semibold tracking-[0.2em] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="text-fg mt-2 text-sm leading-relaxed">{item.description}</p>
            </Card>
          </Reveal>
        ))}
        <Reveal as="li" delay={services.items.length * 70}>
          <Card className="bg-surface-strong flex h-full flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">{services.process.heading}</h3>
              <ol className="mt-4 space-y-3">
                {services.process.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className="text-navy-900 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#38bdf8,#6366f1)] text-[10px] font-bold"
                    >
                      {i + 1}
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
              <Button href={services.cta.href} size="sm">
                {services.cta.label}
              </Button>
            </div>
          </Card>
        </Reveal>
      </ul>
    </Section>
  );
}
