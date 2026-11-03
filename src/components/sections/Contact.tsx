import { contact } from "~/content/contact";
import { siteConfig } from "~/site.config";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {
  const { email, phone } = siteConfig.contact;
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact"
            eyebrow={contact.eyebrow}
            heading={contact.heading}
            intro={contact.intro}
          />

          <Reveal delay={120} className="mt-8">
            <Card>
              <h3 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                {contact.availabilityLabel}
              </h3>
              <p className="text-fg mt-3 text-sm leading-relaxed sm:text-base">
                {siteConfig.availability}
              </p>
              <p className="text-muted mt-3 text-sm">{siteConfig.location.label}</p>
            </Card>
          </Reveal>

          <Reveal delay={200} className="mt-6 flex flex-wrap gap-3">
            <Button href={siteConfig.links.linkedin} external variant="secondary">
              {contact.linkedinLabel}
              <span aria-hidden="true">↗</span>
            </Button>
            {email ? (
              <Button href={`mailto:${email}`} external variant="secondary">
                {contact.emailLabel}
              </Button>
            ) : null}
          </Reveal>

          {email || phone ? (
            <Reveal delay={260} className="text-fg mt-6 space-y-1 text-sm">
              {email ? (
                <p>
                  <a href={`mailto:${email}`} className="underline-offset-4 hover:underline">
                    {email}
                  </a>
                </p>
              ) : null}
              {phone ? (
                <p>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {phone}
                  </a>
                </p>
              ) : null}
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={160}>
          <Card className="sm:p-8">
            <h3 className="text-lg font-semibold">{contact.form.heading}</h3>
            <div className="mt-5">
              <ContactForm />
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
