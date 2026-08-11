import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const ALLOWED_SUBJECTS = [
  "Allgemeine Anfrage",
  "Karate Training / Dojo",
  "Lehrgänge & Vorführungen",
  "Presse & Medien",
];

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot: Bot-Erkennung
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Bot blocked" });
    }

    // Serverseitige Validierung
    if (
      typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100 ||
      typeof email !== "string" || !isValidEmail(email) ||
      typeof message !== "string" || message.trim().length < 10 || message.trim().length > 5000 ||
      !ALLOWED_SUBJECTS.includes(subject)
    ) {
      return NextResponse.json({ success: false, error: { message: "Ungültige Eingabe." } }, { status: 400 });
    }

    const safeName    = escapeHtml(name.trim());
    const safeEmail   = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br/>");

    const data = await resend.emails.send({
      from: 'Kontaktformular <onboarding@resend.dev>',
      to: ['andrea.gelz@arcor.de'],
      subject: `Neue Website-Anfrage: ${safeSubject}`,
      html: `
        <h2>Neue Kontaktanfrage von ${safeName}</h2>
        <p><strong>E-Mail:</strong> ${safeEmail}</p>
        <p><strong>Betreff:</strong> ${safeSubject}</p>
        <br />
        <p><strong>Nachricht:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}