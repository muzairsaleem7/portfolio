import type { CSSProperties } from "react";
import { hero } from "~/content/hero";
import { siteConfig } from "~/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChipList } from "@/components/ui/Chip";
import { Avatar } from "@/components/ui/Avatar";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-32">
        <div>
          <p
            className="animate-rise-soft text-accent text-xs font-semibold tracking-[0.28em] uppercase sm:text-sm"
            style={rise(0)}
          >
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="animate-rise-soft mt-4 max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            style={rise(80)}
          >
            {hero.heading}
          </h1>
          <p
            className="animate-rise-soft text-fg mt-5 max-w-xl text-lg leading-relaxed sm:text-xl"
            style={rise(160)}
          >
            {hero.sub}
          </p>

          <div className="animate-rise mt-7" style={rise(240)}>
            <ChipList items={hero.chips} label="Core stack" />
          </div>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={rise(320)}>
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <p className="animate-rise text-muted mt-8 text-sm" style={rise(400)}>
            {siteConfig.tagline}
          </p>
        </div>

        <div
          className="animate-rise relative mx-auto w-full max-w-sm lg:max-w-none"
          style={rise(200)}
        >
          <div className="card relative rounded-3xl p-6 sm:p-8">
            <span
              aria-hidden="true"
              className="text-muted/50 absolute top-5 right-6 font-mono text-xl select-none"
            >
              {"</>"}
            </span>
            <div className="flex items-center gap-5">
              <Avatar size={96} priority />
              <div>
                <p className="text-heading text-lg font-bold">{siteConfig.name}</p>
                <p className="text-fg mt-0.5 text-sm">{siteConfig.title}</p>
              </div>
            </div>
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5">
              {hero.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-muted text-xs font-medium tracking-wide uppercase">
                    {f.label}
                  </dt>
                  <dd className="text-heading mt-1 text-sm font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div aria-hidden="true" className="accent-bar mt-7 h-px w-full opacity-70" />
            <p className="text-fg mt-5 text-sm leading-relaxed">{siteConfig.availability}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
