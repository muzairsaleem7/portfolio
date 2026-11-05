import Link from "next/link";
import { ArrowUp, FileText, Mail } from "@/components/ui/icons";
import { siteConfig, telHref, whatsappHref } from "~/site.config";
import { footer, nav } from "~/content/nav";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";

/** Year of the build; the static export is regenerated on every deploy. */
const year = new Date().getFullYear();

const iconLink =
  "border-line bg-surface text-fg hover:text-heading hover:border-chip-border hover:bg-surface-strong ease-out-soft grid size-10 place-items-center rounded-xl border transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-0.5 motion-reduce:transition-none";
const textLink =
  "text-fg hover:text-heading inline-flex items-center gap-2 underline-offset-4 transition-colors hover:underline";

export function Footer() {
  const { email, phone, whatsapp } = siteConfig.contact;

  return (
    <footer className="no-print border-line border-t">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1.4fr_1fr] sm:items-start">
        <div>
          <Link href="/" className="text-heading inline-flex items-center gap-2.5 font-bold">
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-lg bg-[linear-gradient(135deg,#38bdf8,#6366f1)] text-[0.7rem] font-extrabold tracking-wider text-[#0b1526]"
            >
              {siteConfig.initials}
            </span>
            {siteConfig.name}
          </Link>
          <p className="text-muted mt-3 max-w-sm text-sm leading-relaxed">{siteConfig.title}</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="text-muted">{siteConfig.location.label}</li>
            {email ? (
              <li>
                <a href={`mailto:${email}`} className={textLink}>
                  {email}
                </a>
              </li>
            ) : null}
            {phone ? (
              <li>
                <a href={telHref(phone)} className={textLink}>
                  {phone}
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="sm:justify-self-end">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-2">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={footer.linkedinLabel}
                  className={iconLink}
                >
                  <LinkedinIcon size={17} />
                </a>
              </li>
              {siteConfig.links.github ? (
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={footer.githubLabel}
                    className={iconLink}
                  >
                    <GithubIcon size={18} />
                  </a>
                </li>
              ) : null}
              {phone && whatsapp ? (
                <li>
                  <a
                    href={whatsappHref(phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={footer.whatsappLabel}
                    className={iconLink}
                  >
                    <WhatsappIcon size={18} />
                  </a>
                </li>
              ) : null}
              {email ? (
                <li>
                  <a href={`mailto:${email}`} aria-label={footer.emailLabel} className={iconLink}>
                    <Mail aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
                  </a>
                </li>
              ) : null}
              {siteConfig.links.other.href ? (
                <li>
                  <a
                    href={siteConfig.links.other.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLink}
                  >
                    {siteConfig.links.other.label}
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <Link href={nav.resume.href} className={textLink}>
              <FileText aria-hidden="true" className="text-accent size-4" />
              {footer.resumeLabel}
            </Link>
            <a href="#content" className={textLink}>
              <ArrowUp aria-hidden="true" className="text-accent size-4" />
              {footer.backToTop}
            </a>
          </div>
        </div>
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
