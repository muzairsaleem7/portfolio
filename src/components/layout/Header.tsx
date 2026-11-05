import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { nav } from "~/content/nav";
import { siteConfig } from "~/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header
      className="no-print border-line sticky top-0 z-40 border-b backdrop-blur-md"
      style={{ background: "var(--header-bg)" }}
    >
      <div aria-hidden="true" className="accent-bar h-[3px] w-full" />
      <div className="relative">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group text-heading flex items-center gap-2.5 rounded-md text-base font-bold tracking-tight"
          >
            <span
              aria-hidden="true"
              className="ease-out-soft grid size-8 place-items-center rounded-lg bg-[linear-gradient(135deg,#38bdf8,#6366f1)] text-[0.7rem] font-extrabold tracking-wider text-[#0b1526] shadow-[0_6px_18px_-8px_rgba(56,189,248,0.8)] transition-transform duration-500 group-hover:-rotate-6"
            >
              {siteConfig.initials}
            </span>
            <span className="transition-opacity group-hover:opacity-80">{nav.brand}</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
            <Link href={nav.resume.href} className="nav-link">
              {nav.resume.label}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block" data-magnetic>
              <Button href={nav.cta.href} size="sm" className="group/cta">
                {nav.cta.label}
                <ArrowRight
                  aria-hidden="true"
                  className="ease-out-soft size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                />
              </Button>
            </div>
            <ThemeToggle />
            <MobileNav items={nav.links} />
          </div>
        </Container>
        <div
          aria-hidden="true"
          className="scroll-progress accent-bar absolute inset-x-0 -bottom-px h-[2px]"
        />
      </div>
    </header>
  );
}
