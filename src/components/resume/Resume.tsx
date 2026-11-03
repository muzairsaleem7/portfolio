import { siteConfig } from "~/site.config";
import { resume } from "~/content/resume";
import { roles } from "~/content/experience";
import { education } from "~/content/education";
import { skills } from "~/content/skills";
import { services } from "~/content/services";
import { formatRange, toDateTime } from "@/lib/dates";

/**
 * One-page resume rendered from the same content files as the site.
 * Print styles (globals.css + print: variants) turn this into a clean A4 page.
 */
export function Resume() {
  const linkedinShort = siteConfig.links.linkedin
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");
  const githubShort = siteConfig.links.github
    ? siteConfig.links.github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
    : "";

  return (
    <article
      id="resume"
      className="card rounded-2xl p-6 text-[13.5px] leading-snug sm:p-10 print:rounded-none print:border-0 print:bg-white print:p-0 print:text-[10.5pt] print:leading-[1.3] print:shadow-none print:backdrop-blur-none"
    >
      <header className="border-line border-b pb-4 print:border-gray-300">
        <h1 className="text-2xl font-bold sm:text-3xl print:text-[20pt]">{siteConfig.name}</h1>
        <p className="text-heading mt-1 font-medium print:text-[11pt]">{siteConfig.title}</p>
        <p className="text-muted mt-1 print:text-gray-700">{siteConfig.tagline}</p>
        <ul className="text-muted mt-3 flex flex-wrap gap-x-4 gap-y-1 print:text-gray-700">
          <li>{siteConfig.location.label}</li>
          <li>
            <a href={siteConfig.links.linkedin} className="underline-offset-2 hover:underline">
              {linkedinShort}
            </a>
          </li>
          {githubShort ? (
            <li>
              <a href={siteConfig.links.github} className="underline-offset-2 hover:underline">
                {githubShort}
              </a>
            </li>
          ) : null}
          {siteConfig.contact.email ? (
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline-offset-2 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          ) : null}
          {siteConfig.contact.phone ? <li>{siteConfig.contact.phone}</li> : null}
        </ul>
      </header>

      <section aria-labelledby="resume-summary" className="mt-5 print:mt-3">
        <h2
          id="resume-summary"
          className="text-accent text-xs font-bold tracking-[0.18em] uppercase print:text-[8.5pt] print:text-sky-800"
        >
          {resume.summaryHeading}
        </h2>
        <p className="text-fg mt-2 print:text-gray-800">{resume.summary}</p>
      </section>

      <section aria-labelledby="resume-experience" className="mt-5 print:mt-3">
        <h2
          id="resume-experience"
          className="text-accent text-xs font-bold tracking-[0.18em] uppercase print:text-[8.5pt] print:text-sky-800"
        >
          {resume.sections.experience}
        </h2>
        <ol className="mt-2 space-y-4 print:space-y-2.5">
          {roles.map((role) => (
            <li key={role.slug} className="break-inside-avoid">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between print:flex-row">
                <h3 className="font-semibold print:text-[10.5pt]">
                  {role.title} · <span className="font-medium">{role.company}</span>
                </h3>
                <p className="text-muted tabular-nums print:text-gray-700">
                  <time dateTime={toDateTime(role.start)}>{formatRange(role.start, role.end)}</time>
                </p>
              </div>
              <p className="text-muted print:text-gray-700">
                {role.employmentType} · {role.workMode} · {role.location}
              </p>
              <ul className="text-fg mt-1.5 list-disc space-y-0.5 pl-4 print:text-gray-800">
                {role.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-5 grid gap-5 sm:grid-cols-[1.3fr_1fr] print:mt-3 print:grid-cols-[1.3fr_1fr] print:gap-4">
        <section aria-labelledby="resume-skills">
          <h2
            id="resume-skills"
            className="text-accent text-xs font-bold tracking-[0.18em] uppercase print:text-[8.5pt] print:text-sky-800"
          >
            {resume.sections.skills}
          </h2>
          <dl className="mt-2 space-y-1.5">
            {skills.groups.map((g) => (
              <div key={g.label} className="flex gap-2">
                <dt className="text-heading w-28 shrink-0 font-semibold print:w-24">{g.label}</dt>
                <dd className="text-fg print:text-gray-800">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="space-y-5 print:space-y-3">
          <section aria-labelledby="resume-education">
            <h2
              id="resume-education"
              className="text-accent text-xs font-bold tracking-[0.18em] uppercase print:text-[8.5pt] print:text-sky-800"
            >
              {resume.sections.education}
            </h2>
            <ul className="mt-2 space-y-1.5">
              {education.items.map((e) => (
                <li key={e.degree}>
                  <p className="text-heading font-semibold">{e.degree}</p>
                  <p className="text-muted print:text-gray-700">
                    {e.school} · {e.start}–{e.end}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="resume-services">
            <h2
              id="resume-services"
              className="text-accent text-xs font-bold tracking-[0.18em] uppercase print:text-[8.5pt] print:text-sky-800"
            >
              {resume.sections.services}
            </h2>
            <p className="text-fg mt-2 print:text-gray-800">
              {services.items.map((s) => s.title).join(" · ")}
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
