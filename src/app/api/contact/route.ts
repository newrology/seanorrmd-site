// Contact form handler. Sends each message by email through Resend
// (https://resend.com). Set in Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY      API key from Resend
//   CONTACT_FROM_EMAIL  sender on a domain verified in Resend,
//                       e.g. "seanorrmd.com <contact@seanorrmd.com>"
//   CONTACT_TO_EMAIL    optional; defaults to sean@neurogenesisproject.com
// Until RESEND_API_KEY and CONTACT_FROM_EMAIL are set, the form tells the
// visitor to email directly, so no message is silently lost.

import { CONTACT_EMAIL } from "@/lib/site";
import { str, validate, type Payload } from "@/lib/contact";

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return Response.json({ error: "The form data could not be read." }, { status: 400 });
  }

  // Bots fill the hidden "website" field; answer as if it worked.
  if (str(body.website, 200)) return Response.json({ ok: true });

  const result = validate(body);
  if (!result.ok) return Response.json({ error: result.error }, { status: 422 });
  const { name, email, organization, reason, message } = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  if (!apiKey || !from) {
    return Response.json(
      { error: `The contact form is not connected yet. Please email ${CONTACT_EMAIL} directly.`, code: "not_configured" },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(organization ? [`Organization: ${organization}`] : []),
    `About: ${reason}`,
    "",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `seanorrmd.com: ${reason} from ${name}`, text }),
  }).catch(() => null);

  if (!res || !res.ok) {
    console.error("[contact] Resend error", res?.status, await res?.text().catch(() => ""));
    return Response.json(
      { error: `The message could not be sent. Please email ${CONTACT_EMAIL} directly.` },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}
