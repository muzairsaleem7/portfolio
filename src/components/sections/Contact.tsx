import { CalendarCheck, Mail, MapPin, MessageSquareText, Phone, Send } from "lucide-react";
import { contact } from "~/content/contact";
import { siteConfig, telHref, whatsappHref } from "~/site.config";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconTile } from "@/components/ui/IconTile";
import { LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { ContactForm } from "@/components/forms/ContactForm";

const rowLink =
  "group border-line bg-surface hover:border-chip-border hover:bg-surface-strong ease-out-soft flex items-center gap-4 rounded-2xl border p-4 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 motion-reduce:transition-none";

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
            icon={MessageSquareText}
          />

          <Reveal delay={120} className="mt-8">
            <Card className="card-feature flex gap-4">
              <IconTile icon={CalendarCheck} />
              <div className="min-w-0">
                <h3 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                  {contact.availabilityLabel}
                </h3>
                <p className="text-fg mt-2 text-sm leading-relaxed sm:text-base">
                  {siteConfig.availability}
                </p>
                <p className="text-muted mt-3 inline-flex items-center gap-1.5 text-sm">
                  <MapPin aria-hidden="true" className="size-4" />
                  {siteConfig.location.label}
                </p>
              </div>
            </Card>
          </Reveal>

          {email || phone ? (
            <Reveal delay={180} className="mt-6">
              <h3 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                {contact.directHeading}
              </h3>
              <ul className="mt-3 grid gap-3">
                {email ? (
                  <li>
                    <a href={`mailto:${email}`} className={rowLink}>
                      <IconTile icon={Mail} size="sm" />
                      <span className="min-w-0">
                        <span className="text-muted block text-xs">{contact.emailFieldLabel}</span>
                        <span className="text-heading block font-medium break-all">{email}</span>
                      </span>
                    </a>
                  </li>
                ) : null}
                {phone ? (
                  <li>
                    <a href={telHref(phone)} className={rowLink}>
                      <IconTile icon={Phone} size="sm" />
                      <span className="min-w-0">
                        <span className="text-muted block text-xs">{contact.phoneFieldLabel}</span>
                        <span className="text-heading block font-medium">{phone}</span>
                      </span>
                    </a>
                  </li>
                ) : null}
              </ul>
            </Reveal>
          ) : null}

          <Reveal delay={240} className="mt-6 flex flex-wrap gap-3">
            {email ? (
              <span data-magnetic className="inline-flex">
                <Button href={`mailto:${email}`} external>
                  <Send aria-hidden="true" className="size-4" />
                  {contact.emailLabel}
                </Button>
              </span>
            ) : null}
            {phone && whatsapp ? (
              <Button href={whatsappHref(phone)} external variant="secondary">
                <WhatsappIcon size={16} />
                {contact.whatsappLabel}
              </Button>
            ) : null}
            <Button href={siteConfig.links.linkedin} external variant="secondary">
              <LinkedinIcon size={15} />
              {contact.linkedinLabel}
            </Button>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <Card className="sm:p-8">
            <div className="flex items-center gap-3">
              <IconTile icon={Send} size="sm" />
              <h3 className="text-lg font-semibold">{contact.form.heading}</h3>
            </div>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
