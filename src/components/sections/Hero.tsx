import type { CSSProperties } from "react";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  Globe,
  Layers,
  Mail,
  MapPin,
  Rocket,
} from "@/components/ui/icons";
import { hero } from "~/content/hero";
import { siteConfig, whatsappHref } from "~/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChipList } from "@/components/ui/Chip";
import { Avatar } from "@/components/ui/Avatar";
import { IconTile } from "@/components/ui/IconTile";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

/** Icons for hero.facts, in order: experience, focus, based in, working. */
const FACT_ICONS = [BriefcaseBusiness, Layers, MapPin, Globe] as const;

const socialClass =
  "border-line bg-surface text-fg hover:text-heading hover:border-chip-border hover:bg-surface-strong ease-out-soft grid size-10 place-items-center rounded-xl border transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-0.5 motion-reduce:transition-none";

export function Hero() {
  const hasAccent = hero.heading.endsWith(hero.headingAccent);
  const lead = hasAccent ? hero.heading.slice(0, -hero.headingAccent.length) : hero.heading;
  const { email, phone, whatsapp } = siteConfig.contact;

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 lg:py-28">
        <div>
          <p
            className="animate-rise-soft border-line bg-surface text-fg inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-sm font-medium"
            style={rise(0)}
          >
            <span className="status-dot" aria-hidden="true" />
            {hero.status}
          </p>
          <p
            className="animate-rise-soft text-accent mt-6 text-xs font-semibold tracking-[0.28em] uppercase sm:text-sm"
            style={rise(40)}
          >
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="animate-rise-soft mt-3 max-w-3xl text-4xl leading-[1.06] font-bold tracking-tight text-balance sm:text-5xl lg:text-[4rem]"
            style={rise(80)}
          >
            {lead}
            {hasAccent ? <span className="text-gradient">{hero.headingAccent}</span> : null}
          </h1>
          <p
            className="animate-rise-soft text-fg mt-5 max-w-xl text-lg leading-relaxed sm:text-xl"
            style={rise(160)}
          >
            {hero.sub}
          </p>

          <div
            className="animate-rise mt-9 grid gap-3 sm:flex sm:flex-wrap sm:items-center"
            style={rise(240)}
          >
            <span data-magnetic className="flex sm:inline-flex">
              <Button href={hero.primaryCta.href} size="lg" className="group/cta w-full sm:w-auto">
                {hero.primaryCta.label}
                <ArrowRight
                  aria-hidden="true"
                  className="ease-out-soft size-[18px] transition-transform duration-300 group-hover/cta:translate-x-1"
                />
              </Button>
            </span>
            <Button
              href={hero.secondaryCta.href}
              size="lg"
              variant="secondary"
              className="group/cta w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
              <ArrowDown
                aria-hidden="true"
                className="ease-out-soft size-[18px] transition-transform duration-300 group-hover/cta:translate-y-0.5"
              />
            </Button>
            {/* No prefetch: it would fetch /resume during page load, inside the loading window. */}
            <Button href={hero.resumeCta.href} size="lg" variant="ghost" prefetch={false}>
              <FileText aria-hidden="true" className="size-[18px]" />
              {hero.resumeCta.label}
            </Button>
          </div>

          <div
            className="animate-rise border-line/70 mt-10 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:gap-5"
            style={rise(320)}
          >
            <p className="text-muted flex shrink-0 items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
              <Code2 aria-hidden="true" className="size-4" />
              {hero.stackLabel}
            </p>
            <ChipList items={hero.chips} label={hero.stackLabel} />
          </div>
        </div>

        <div
          className="animate-rise relative mx-auto w-full max-w-md lg:max-w-none"
          style={rise(200)}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-px rounded-[1.6rem] bg-[linear-gradient(140deg,rgba(56,189,248,0.55),rgba(99,102,241,0.15)_40%,transparent_70%)] opacity-70"
          />
          <div className="card hero-card relative rounded-3xl p-6 sm:p-7">
            <div className="flex items-center gap-4">
              <Avatar size={80} priority />
              <div className="min-w-0">
                <p className="text-heading text-lg font-bold">{siteConfig.name}</p>
                <p className="text-fg mt-0.5 text-sm leading-snug">{siteConfig.title}</p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
              {hero.facts.map((f, i) => (
                <div key={f.label} className="relative min-h-[2.1rem] pl-[2.85rem]">
                  {/* dt/dd must be direct children of the group, so the icon lives inside dt. */}
                  <dt className="text-muted text-[0.7rem] font-medium tracking-wide uppercase">
                    <IconTile
                      icon={FACT_ICONS[i] ?? Layers}
                      size="sm"
                      className="absolute top-0 left-0"
                    />
                    {f.label}
                  </dt>
                  <dd className="text-heading mt-0.5 text-sm leading-snug font-semibold">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="border-line bg-surface mt-6 flex items-center gap-3 rounded-2xl border px-4 py-3">
              <Rocket
                aria-hidden="true"
                className="text-accent size-5 shrink-0"
                strokeWidth={1.8}
              />
              <p className="text-sm">
                <span className="text-muted">{hero.currentLabel}: </span>
                <span className="text-heading font-semibold">{hero.current}</span>
              </p>
            </div>

            <p className="text-fg mt-5 text-sm leading-relaxed">{siteConfig.availability}</p>

            <div className="mt-6 flex items-center gap-2">
              <span className="sr-only">{hero.socialLabel}</span>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialClass}
              >
                <LinkedinIcon size={17} />
              </a>
              {siteConfig.links.github ? (
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={socialClass}
                >
                  <GithubIcon size={18} />
                </a>
              ) : null}
              {email ? (
                <a href={`mailto:${email}`} aria-label={`Email ${email}`} className={socialClass}>
                  <Mail aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
                </a>
              ) : null}
              {phone && whatsapp ? (
                <a
                  href={whatsappHref(phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={socialClass}
                >
                  <WhatsappIcon size={18} />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
