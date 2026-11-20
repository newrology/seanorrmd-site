// Shared by the contact form (client) and /api/contact (server).

export const REASONS = [
  "Media or podcast",
  "Speaking engagement",
  "Partnership or investment",
  "Physician collaboration",
  "Something else",
] as const;

export type Payload = Partial<Record<"name" | "email" | "organization" | "reason" | "message" | "website", unknown>>;

export const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export function validate(
  p: Payload,
): { ok: true; data: Record<"name" | "email" | "organization" | "reason" | "message", string> } | { ok: false; error: string } {
  const name = str(p.name, 120);
  const email = str(p.email, 200);
  const organization = str(p.organization, 160);
  const reason = str(p.reason, 60);
  const message = str(p.message, 5000);
  if (!name) return { ok: false, error: "Please enter your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (!(REASONS as readonly string[]).includes(reason)) return { ok: false, error: "Please choose what your message is about." };
  if (message.length < 10) return { ok: false, error: "Please write a little more in your message." };
  return { ok: true, data: { name, email, organization, reason, message } };
}
