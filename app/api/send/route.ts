import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Wir holen uns jetzt auch das "honeypot" Feld aus der Anfrage
    const { name, email, subject, message, honeypot } = await request.json();

    // SPAM-SCHUTZ: Wenn das unsichtbare Feld ausgefüllt ist, ist es ein Bot!
    // Wir tun so, als wäre alles okay (Status 200), senden aber keine E-Mail.
    if (honeypot) {
      console.log("Spam Bot blockiert!");
      return NextResponse.json({ success: true, message: "Bot blocked" });
    }

    const data = await resend.emails.send({
      from: 'Kontaktformular <onboarding@resend.dev>', 
      to: ['andrea.gelz@arcor.de'], 
      subject: `Neue Website-Anfrage: ${subject}`,
      html: `
        <h2>Neue Kontaktanfrage von ${name}</h2>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <br />
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}