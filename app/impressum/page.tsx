import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Website von Siegfried Gelz, Karate Instructor 6. Dan, Berlin.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-28 md:pt-[200px] pb-32">
      <div className="max-w-[860px] mx-auto px-6 lg:px-12">

        <div className="mb-16">
          <p className="text-red-700 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            {'// Rechtliches'}
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.95] mb-6">
            Impressum
          </h1>
          <div className="w-20 h-[3px] bg-red-700"></div>
        </div>

        <div className="space-y-12 text-zinc-800">

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Siegfried Gelz<br />
              Falkenberger Chaussee 140<br />
              13057 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              Kontakt
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Mobilfunk: <a href="tel:+491633733200" className="hover:text-red-700 transition-colors">+49 163 3733200</a><br />
              E-Mail: <a href="mailto:andrea.gelz@arcor.de" className="hover:text-red-700 transition-colors">andrea.gelz@arcor.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              Hinweis zur privaten Nutzung
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Diese Website wird von einer Privatperson betrieben und dient ausschließlich der persönlichen Präsentation.
              Eine gewerbliche Tätigkeit im Sinne des Umsatzsteuergesetzes wird über diese Website nicht ausgeübt.
              Es besteht keine Umsatzsteuer-Identifikationsnummer.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Als Betreiber dieser Website bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG besteht jedoch keine Verpflichtung, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
              ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
              von entsprechenden Rechtsverletzungen werden diese Inhalte umgehend entfernt.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              Haftung für Links
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht.
              Deshalb kann für diese fremden Inhalte keine Gewähr übernommen werden. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
              zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
              ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden derartige Links umgehend entfernt.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-red-700 mb-4">
              Urheberrecht
            </h2>
            <p className="text-base font-medium leading-relaxed">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden derartige Inhalte umgehend entfernt.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
