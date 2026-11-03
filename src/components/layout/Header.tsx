import Link from "next/link";
import { nav } from "~/content/nav";
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
            className="text-heading rounded-md text-base font-bold tracking-tight transition-opacity hover:opacity-80"
          >
            {nav.brand}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-pill text-fg after:bg-accent after:ease-out-soft hover:text-heading relative px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={nav.resume.href}
              className="rounded-pill text-fg after:bg-accent after:ease-out-soft hover:text-heading relative px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none"
            >
              {nav.resume.label}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Button href={nav.cta.href} size="sm">
                {nav.cta.label}
              </Button>
            </div>
            <ThemeToggle />
            <MobileNav items={nav.links} />
          </div>
        </Container>
      </div>
    </header>
  );
}
