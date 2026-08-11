import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Website von Siegfried Gelz gemäß DSGVO.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-28 md:pt-[200px] pb-32">
      <div className="max-w-[860px] mx-auto px-6 lg:px-12">

        <div className="mb-16">
          <p className="text-red-700 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            {'// Rechtliches'}
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.95] mb-6">
            Datenschutz&shy;erklärung
          </h1>
          <div className="w-20 h-[3px] bg-red-700 mb-6"></div>
          <p className="text-sm text-zinc-600 font-medium">
            Gültig ab: August 2026 · Verantwortlich: Siegfried Gelz
          </p>
        </div>

        <div className="space-y-12 text-zinc-800">

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              1. Verantwortlicher
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Siegfried Gelz<br />
              Falkenberger Chaussee 140<br />
              13057 Berlin<br />
              E-Mail: <a href="mailto:andrea.gelz@arcor.de" className="hover:text-red-700 transition-colors">andrea.gelz@arcor.de</a><br />
              Mobilfunk: <a href="tel:+491633733200" className="hover:text-red-700 transition-colors">+49 163 3733200</a>
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Diese Website wird als private, nicht-kommerzielle Präsentation betrieben.
              Personenbezogene Daten werden nur im technisch notwendigen Umfang erhoben.
              Eine Weitergabe an Dritte erfolgt nicht, sofern dies nicht zur Erfüllung des Zwecks
              (z. B. E-Mail-Versand über einen Dienstleister) erforderlich ist oder eine gesetzliche
              Verpflichtung besteht.
            </p>
            <p className="text-base font-medium leading-relaxed mt-4">
              Rechtsgrundlagen der Verarbeitung sind Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),
              Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen) sowie
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              3. Server-Logfiles
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Der Hosting-Anbieter dieser Website erhebt und speichert automatisch Informationen in
              sogenannten Server-Logfiles, die Ihr Browser übermittelt. Dies sind:
            </p>
            <ul className="list-none mt-4 space-y-1 text-base font-medium">
              {["Browsertyp und -version", "Verwendetes Betriebssystem", "Referrer-URL", "IP-Adresse (anonymisiert)", "Datum und Uhrzeit des Zugriffs"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base font-medium leading-relaxed mt-4">
              Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen
              Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einem sicheren Betrieb der Website).
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              4. Kontaktformular
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Bei Nutzung des Kontaktformulars werden folgende Daten erhoben: Name, E-Mail-Adresse,
              Betreff und Nachrichteninhalt. Diese Daten werden ausschließlich zur Bearbeitung Ihrer
              Anfrage verwendet und anschließend gelöscht.
            </p>
            <p className="text-base font-medium leading-relaxed mt-4">
              Der E-Mail-Versand erfolgt über den Dienst <strong>Resend</strong>
              (Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA).
              Resend ist nach den Standardvertragsklauseln (SCC) der EU-Kommission zertifiziert.
              Die übermittelten Formulardaten (Name, E-Mail, Betreff, Nachricht) werden nur zum
              Zweck der Zustellung verarbeitet und nicht dauerhaft gespeichert.
            </p>
            <p className="text-base font-medium leading-relaxed mt-4">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Kontaktaufnahme).
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              5. YouTube (Videos-Seite)
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Auf der Videos-Seite sind Clips von YouTube eingebettet. Es wird der datenschutzfreundliche
              Modus von YouTube (<strong>youtube-nocookie.com</strong>) verwendet. Dabei werden keine
              Cookies von YouTube gesetzt, solange Sie das Video nicht abspielen.
            </p>
            <p className="text-base font-medium leading-relaxed mt-4">
              Sobald Sie ein Video abspielen, stellt Ihr Browser eine Verbindung zu den Servern von
              Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) her. Google kann
              dabei Ihre IP-Adresse und weitere Daten verarbeiten. Informationen zum Datenschutz bei
              YouTube finden Sie unter{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700 transition-colors underline underline-offset-2"
              >
                policies.google.com/privacy
              </a>.
            </p>
            <p className="text-base font-medium leading-relaxed mt-4">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Darstellung
              von Videoinhalten).
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              6. Schriftarten (Google Fonts)
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Diese Website verwendet die Schriftart <em>Montserrat</em>. Die Schriftart wird lokal
              auf dem Webserver gehostet und beim Seitenaufruf direkt von dort geladen. Es findet
              keine Verbindung zu Servern von Google statt. Es werden keine personenbezogenen Daten
              an Google übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              7. Cookies
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Diese Website setzt keine eigenen Cookies. Beim Abspielen von YouTube-Videos können
              Drittanbieter-Cookies gesetzt werden (siehe Abschnitt 5).
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              8. Ihre Rechte als betroffene Person
            </h2>
            <p className="text-base font-medium leading-relaxed mb-4">
              Sie haben gegenüber dem Verantwortlichen folgende Rechte hinsichtlich Ihrer
              personenbezogenen Daten:
            </p>
            <ul className="list-none space-y-2 text-base font-medium">
              {[
                "Recht auf Auskunft (Art. 15 DSGVO)",
                "Recht auf Berichtigung (Art. 16 DSGVO)",
                "Recht auf Löschung (Art. 17 DSGVO)",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                "Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)",
              ].map((right) => (
                <li key={right} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                  {right}
                </li>
              ))}
            </ul>
            <p className="text-base font-medium leading-relaxed mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an{" "}
              <a href="mailto:andrea.gelz@arcor.de" className="hover:text-red-700 transition-colors">
                andrea.gelz@arcor.de
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              9. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              Ihrer personenbezogenen Daten zu beschweren. Die zuständige Behörde für Berlin ist:
            </p>
            <p className="text-base font-medium leading-relaxed mt-4">
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Friedrichstr. 219, 10969 Berlin<br />
              Telefon: +49 30 13889-0<br />
              E-Mail:{" "}
              <a
                href="mailto:mailbox@datenschutz-berlin.de"
                className="hover:text-red-700 transition-colors"
              >
                mailbox@datenschutz-berlin.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              10. Aktualität und Änderungen
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand August 2026.
              Durch die Weiterentwicklung der Website oder aufgrund geänderter gesetzlicher bzw.
              behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
