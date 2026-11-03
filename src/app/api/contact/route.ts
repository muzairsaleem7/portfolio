import { NextResponse } from "next/server";

type Payload = { name?: unknown; email?: unknown; company?: unknown; message?: unknown };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const company = str(body.company, 160);
  const message = str(body.message, 5000);

  if (!name || !email || !EMAIL_RE.test(email) || message.length < 20) {
    return NextResponse.json({ ok: false, error: "Validation failed" }, { status: 422 });
  }

  // ------------------------------------------------------------------
  // TODO(email provider): plug in delivery here.
  // Example with Resend:
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Portfolio <noreply@yourdomain>",
  //     to: process.env.CONTACT_TO_EMAIL!,
  //     replyTo: email,
  //     subject: `Portfolio inquiry from ${name}`,
  //     text: `${name} <${email}>${company ? ` (${company})` : ""}\n\n${message}`,
  //   });
  // Until then, the submission is logged on the server and treated as sent.
  // ------------------------------------------------------------------
  console.log("[contact] new message", { name, email, company, messageLength: message.length });

  return NextResponse.json({ ok: true });
}
