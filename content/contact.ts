export const contact = {
  eyebrow: "Contact",
  heading: "Let's talk about what you need built",
  intro:
    "Hiring for a product engineering role, or need a SaaS product or internal tool built? Send a short note about the problem and I'll reply with next steps.",
  availabilityLabel: "Availability",
  linkedinLabel: "Message me on LinkedIn",
  emailLabel: "Email me directly",
  whatsappLabel: "WhatsApp",
  directHeading: "Direct contact",
  emailFieldLabel: "Email",
  phoneFieldLabel: "Phone / WhatsApp",
  form: {
    heading: "Send a message",
    fields: {
      name: { label: "Your name", placeholder: "Jane Doe" },
      email: { label: "Email", placeholder: "jane@company.com" },
      company: { label: "Company (optional)", placeholder: "Company or project" },
      message: {
        label: "What are you building?",
        placeholder: "A few sentences about the product, the timeline, and how I can help.",
      },
    },
    submit: "Send message",
    sending: "Sending…",
    success: "Thanks. Your message is in; I'll get back to you soon.",
    error: "Something went wrong sending your message. Please try again or use LinkedIn.",
    fallback: "The form can't send right now, but your message is ready to go.",
    fallbackCta: "Open it in your email app",
    validation: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email.",
      emailInvalid: "Please enter a valid email address.",
      messageRequired: "Please tell me a little about what you need.",
      messageShort: "A few more words would help (at least 20 characters).",
    },
  },
} as const;
