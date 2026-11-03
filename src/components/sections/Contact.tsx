import { contact } from "~/content/contact";
import { siteConfig, telHref, whatsappHref } from "~/site.config";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {
  const { email, phone, whatsapp } = siteConfig.contact;
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

          {email || phone ? (
            <Reveal delay={180} className="mt-6">
              <h3 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                {contact.directHeading}
              </h3>
              <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                {email ? (
                  <div>
                    <dt className="text-muted">{contact.emailFieldLabel}</dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${email}`}
                        className="text-heading font-medium break-all underline-offset-4 hover:underline"
                      >
                        {email}
                      </a>
                    </dd>
                  </div>
                ) : null}
                {phone ? (
                  <div>
                    <dt className="text-muted">{contact.phoneFieldLabel}</dt>
                    <dd className="mt-0.5">
                      <a
                        href={telHref(phone)}
                        className="text-heading font-medium underline-offset-4 hover:underline"
                      >
                        {phone}
                      </a>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </Reveal>
          ) : null}

          <Reveal delay={240} className="mt-6 flex flex-wrap gap-3">
            {email ? (
              <Button href={`mailto:${email}`} external>
                {contact.emailLabel}
              </Button>
            ) : null}
            {phone && whatsapp ? (
              <Button href={whatsappHref(phone)} external variant="secondary">
                {contact.whatsappLabel}
                <span aria-hidden="true">↗</span>
              </Button>
            ) : null}
            <Button href={siteConfig.links.linkedin} external variant="secondary">
              {contact.linkedinLabel}
              <span aria-hidden="true">↗</span>
            </Button>
          </Reveal>
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
