import { NextResponse } from "next/server";
import { siteConfig } from "~/site.config";

type Payload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/**
 * Contact form delivery.
 *
 * Sends through Resend's REST API when RESEND_API_KEY is set (no SDK needed).
 *   RESEND_API_KEY      required to send
 *   CONTACT_TO_EMAIL    inbox that receives messages; defaults to siteConfig.contact.email
 *   CONTACT_FROM_EMAIL  verified sender; defaults to Resend's test sender, which only
 *                       delivers to the email address that owns the Resend account
 *
 * Without a key the route answers 503 with `fallback: "mailto"`, and the form offers to open
 * the visitor's email app with the message filled in. It never reports a message as sent
 * when nothing was delivered.
 */
export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "website" field. Accept silently, send nothing.
  if (str(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const company = str(body.company, 160);
  const message = str(body.message, 5000);

  if (!name || !email || !EMAIL_RE.test(email) || message.length < 20) {
    return NextResponse.json({ ok: false, error: "Validation failed" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured", fallback: "mailto" },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  const subject = `Portfolio inquiry from ${name}${company ? ` (${company})` : ""}`;
  const text = `${name} <${email}>${company ? `\nCompany: ${company}` : ""}\n\n${message}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, text }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[contact] Resend rejected the message", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "Delivery failed", fallback: "mailto" },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] Resend request failed", err);
    return NextResponse.json(
      { ok: false, error: "Delivery failed", fallback: "mailto" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
