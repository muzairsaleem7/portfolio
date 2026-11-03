import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "~/site.config";
import { resume } from "~/content/resume";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Resume } from "@/components/resume/Resume";
import { PrintButton } from "@/components/resume/PrintButton";

export const metadata: Metadata = {
  title: resume.pageTitle,
  description: `Printable one-page resume of ${siteConfig.name}, ${siteConfig.title}.`,
  alternates: { canonical: "/resume" },
  openGraph: { title: `${resume.pageTitle} | ${siteConfig.name}`, url: "/resume" },
};

export default function ResumePage() {
  return (
    <Container className="max-w-4xl py-12 sm:py-16 print:max-w-none print:px-0 print:py-0">
      <Reveal className="no-print mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-accent text-xs font-semibold tracking-[0.22em] uppercase">
            {resume.pageTitle}
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{siteConfig.name}</h1>
          <p className="text-muted mt-2 text-sm">{resume.printHint}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <PrintButton label={resume.downloadLabel} />
          <Link
            href="/"
            className="rounded-pill text-fg hover:text-heading px-3 py-2 text-sm font-medium underline-offset-4 transition-colors hover:underline"
          >
            {resume.backLabel}
          </Link>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <Resume />
      </Reveal>
    </Container>
  );
}
