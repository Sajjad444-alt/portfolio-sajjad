import { NextResponse } from "next/server";
import { Resend } from "resend";
import { personalInfo } from "@/lib/data";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  // Honeypot field — bots will fill this in, humans won't
  website?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const { name, email, message, website } = body;

  // Honeypot — silently succeed for bots
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "name, email and message are required" },
      { status: 400 }
    );
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 }
    );
  }

  if (message.length > 5000 || name.length > 200 || email.length > 200) {
    return NextResponse.json(
      { ok: false, error: "Field too long" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY is not set. Configure it in .env.local."
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email service not configured. Please email " +
          personalInfo.email +
          " directly."
      },
      { status: 503 }
    );
  }

  const fromAddress =
    process.env.CONTACT_FROM_ADDRESS ?? "Portfolio <onboarding@resend.dev>";

  try {
    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: personalInfo.email,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      html: `
        <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0a0d18;color:#e6edf7;padding:32px;border-radius:16px;">
          <h2 style="margin:0 0 16px;font-size:20px;background:linear-gradient(90deg,#22d3ee,#3b82f6);-webkit-background-clip:text;background-clip:text;color:transparent;">New portfolio inquiry</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#8b95a8;width:120px;">From</td><td style="padding:8px 0;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#8b95a8;">Email</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#22d3ee;text-decoration:none;">${safeEmail}</a></td></tr>
          </table>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:20px 0;"/>
          <div style="font-size:14px;line-height:1.7;color:#e6edf7;">${safeMessage}</div>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:20px 0;"/>
          <div style="font-size:12px;color:#8b95a8;">Sent via sajjadiqbal.com contact form.</div>
        </div>
      `,
      text: `New portfolio inquiry\n\nFrom: ${name}\nEmail: ${email}\n\n${message}`
    });

    if (error) {
      console.error("[contact] resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Email delivery failed. Please email me directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] unexpected:", e);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
