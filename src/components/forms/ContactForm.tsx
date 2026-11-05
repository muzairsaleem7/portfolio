"use client";

import { useId, useState, type FormEvent } from "react";
import { contact } from "~/content/contact";
import { siteConfig } from "~/site.config";
import { Button } from "@/components/ui/Button";

type Fields = { name: string; email: string; company: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "success" | "error" | "fallback";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(values: Fields): Errors {
  const v = contact.form.validation;
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = v.nameRequired;
  if (!values.email.trim()) errors.email = v.emailRequired;
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = v.emailInvalid;
  if (!values.message.trim()) errors.message = v.messageRequired;
  else if (values.message.trim().length < 20) errors.message = v.messageShort;
  return errors;
}

const inputClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-heading placeholder:text-muted/70 transition-[border-color,box-shadow,background-color] duration-300 focus:border-chip-border focus:bg-surface-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 aria-[invalid=true]:border-red-400/70";

/** Prefilled email for when the server can't deliver: the visitor's own mail app sends it. */
function buildMailto(values: Fields): string {
  const subject = `Portfolio inquiry from ${values.name.trim()}`;
  const signature = `${values.name.trim()} <${values.email.trim()}>`;
  const company = values.company.trim();
  const lines = [values.message.trim(), "", signature, ...(company ? [`Company: ${company}`] : [])];
  const body = lines.join("\n");
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Fields>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    if (honeypot) {
      // Bots fill hidden fields; pretend success without sending.
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { fallback?: string } | null;
        if (data?.fallback === "mailto") {
          // Keep the typed values so nothing is lost; the visitor sends it from their mail app.
          setMailtoHref(buildMailto(values));
          setStatus("fallback");
          return;
        }
        throw new Error(`Request failed: ${res.status}`);
      }
      setStatus("success");
      setValues({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const f = contact.form.fields;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={`${id}-name`} label={f.name.label} error={errors.name}>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder={f.name.placeholder}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            className={inputClass}
          />
        </Field>
        <Field id={`${id}-email`} label={f.email.label} error={errors.email}>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder={f.email.placeholder}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <Field id={`${id}-company`} label={f.company.label}>
        <input
          id={`${id}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          placeholder={f.company.placeholder}
          className={inputClass}
        />
      </Field>

      <Field id={`${id}-message`} label={f.message.label} error={errors.message}>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={f.message.placeholder}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={`${inputClass} resize-y`}
        />
      </Field>

      {/* Honeypot: hidden from users, tempting for bots. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
        >
          {status === "sending" ? contact.form.sending : contact.form.submit}
        </Button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" ? (
            <span className="text-accent">{contact.form.success}</span>
          ) : status === "fallback" ? (
            <span className="text-fg">
              {contact.form.fallback}{" "}
              <a
                href={mailtoHref}
                className="text-accent font-semibold underline decoration-2 underline-offset-4"
              >
                {contact.form.fallbackCta}
              </a>
            </span>
          ) : status === "error" ? (
            <span className="text-red-300 [[data-theme=light]_&]:text-red-700">
              {contact.form.error}
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-heading mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-xs text-red-300 [[data-theme=light]_&]:text-red-700"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
