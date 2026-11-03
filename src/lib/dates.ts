const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** "2024-07" -> "Jul 2024" */
export function formatMonth(iso: string): string {
  const [year, month] = iso.split("-");
  const idx = Number(month) - 1;
  return `${MONTHS[idx] ?? ""} ${year}`.trim();
}

/** "2024-07", null -> "Jul 2024 – Present" */
export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}

/**
 * Inclusive month count between two ISO months, e.g. "1 yr 6 mos".
 * Deliberately avoids `new Date()` so pages stay fully prerenderable; callers skip open-ended roles.
 */
export function formatDuration(start: string, end: string): string {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end.split("-").map(Number);
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest > 0) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

/** ISO date for <time dateTime> from an ISO month. */
export function toDateTime(iso: string | null): string | undefined {
  return iso ? `${iso}-01` : undefined;
}
