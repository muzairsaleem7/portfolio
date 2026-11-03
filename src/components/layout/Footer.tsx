import Link from "next/link";
import { cacheLife } from "next/cache";
import { siteConfig, telHref, whatsappHref } from "~/site.config";
import { footer, nav } from "~/content/nav";
import { Container } from "@/components/ui/Container";

/** Current year, read inside a cached scope so the page stays fully prerendered. */
async function getYear(): Promise<number> {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();
  const { email, phone, whatsapp } = siteConfig.contact;
  const links: Array<{ label: string; href: string; external: boolean }> = [
    { label: footer.linkedinLabel, href: siteConfig.links.linkedin, external: true },
  ];
  if (siteConfig.links.github) {
    links.push({ label: footer.githubLabel, href: siteConfig.links.github, external: true });
  }
  if (phone && whatsapp) {
    links.push({ label: footer.whatsappLabel, href: whatsappHref(phone), external: true });
  }
  if (siteConfig.links.other.href) {
    links.push({
      label: siteConfig.links.other.label,
      href: siteConfig.links.other.href,
      external: true,
    });
  }
  links.push({ label: footer.resumeLabel, href: nav.resume.href, external: false });

  return (
    <footer className="no-print border-line border-t">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-heading font-semibold">{siteConfig.name}</p>
          <p className="text-muted mt-1 text-sm">{siteConfig.title}</p>
          <p className="text-muted mt-1 text-sm">{siteConfig.location.label}</p>
          {email || phone ? (
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="text-fg hover:text-heading underline-offset-4 transition-colors hover:underline"
                >
                  {email}
                </a>
              ) : null}
              {phone ? (
                <a
                  href={telHref(phone)}
                  className="text-fg hover:text-heading underline-offset-4 transition-colors hover:underline"
                >
                  {phone}
                </a>
              ) : null}
            </p>
          ) : null}
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                {l.external ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg hover:text-heading underline-offset-4 transition-colors hover:underline"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    href={l.href}
                    className="text-fg hover:text-heading underline-offset-4 transition-colors hover:underline"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="border-line/60 text-muted flex flex-col gap-1 border-t py-5 text-xs sm:flex-row sm:justify-between">
        <p>
          © {year} {siteConfig.name}. {footer.rights}
        </p>
        <p>{footer.builtWith}</p>
      </Container>
    </footer>
  );
}
