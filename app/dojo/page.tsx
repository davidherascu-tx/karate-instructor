import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "DOJO & Training | Siegfried Gelz",
  description: "Trainingszeiten und Standorte für Karate in Berlin: Ostkreuz, Sportforum und Moissistraße.",
};

export default function DojoPage() {
  return (
    <div className={`w-full bg-white min-h-screen pt-[200px] pb-32 ${montserrat.className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <p className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            // Trainingsplan
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.85] mb-6">
            Dojo & <br />Training
          </h1>
          <div className="w-20 h-[2px] bg-red-600 mb-6"></div>
          <p className="text-lg text-zinc-400 font-light tracking-wide">
            Regelmäßiges Training an verschiedenen Standorten in Berlin für alle Altersgruppen und Leistungsstufen.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* STANDORT 1: OSTKREUZ */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-zinc-100 pt-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-4">OSZ Bürowirtschaft</h2>
              <p className="text-zinc-500 font-light leading-relaxed">
                Marktstr. 2-3, Berlin<br />
                (am S-Bahnhof Ostkreuz)
              </p>
              <div className="mt-6 inline-block px-4 py-1 rounded-full bg-zinc-100 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                Turnhalle
              </div>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {['Montags', 'Mittwochs'].map((tag) => (
                <div key={tag} className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                  <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-6">{tag}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-zinc-200 pb-2">
                      <span className="font-bold text-zinc-900">17.00 – 18.30 Uhr</span>
                      <span className="text-zinc-500 italic">Kinder / Jugendliche</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-zinc-900">19.00 – 20.30 Uhr</span>
                      <span className="text-zinc-500 italic">Erwachsene</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* STANDORT 2: SPORTFORUM */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-zinc-100 pt-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-4">Olympiastützpunkt</h2>
              <p className="text-zinc-500 font-light leading-relaxed">
                Sportforum Hohenschönhausen<br />
                Weißenseer Weg 51-55, 13053 Berlin
              </p>
              <div className="mt-6 inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest">
                Judo Dojo
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-8 rounded-3xl text-white">
                <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-6">Freitags</h3>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <span className="text-3xl font-black italic">19.00 – 20.30 Uhr</span>
                  <div className="text-right">
                    <p className="text-zinc-300 font-bold uppercase text-sm tracking-widest">Erwachsene / Fortgeschrittene</p>
                    <p className="text-red-500 text-xs font-light">Wettkampftraining</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STANDORT 3: MOISSISTRASSE */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-zinc-100 pt-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-4">Moissistraße</h2>
              <p className="text-zinc-500 font-light leading-relaxed">
                Untere Halle, Moissistraße<br />
                12489 Berlin
              </p>
              <div className="mt-6 inline-block px-4 py-1 rounded-full bg-zinc-100 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                Turnhalle
              </div>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {['Dienstags', 'Donnerstags'].map((tag) => (
                <div key={tag} className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                  <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-6">{tag}</h3>
                  <div className="space-y-4">
                    {[
                      { t: "16.30 – 17.30", g: "Kinder / Anfänger" },
                      { t: "17.30 – 19.00", g: "Fortgeschrittene" },
                      { t: "19.30 – 21.00", g: "Erwachsene" }
                    ].map((row, i) => (
                      <div key={i} className={`flex justify-between ${i < 2 ? 'border-b border-zinc-200 pb-2' : ''}`}>
                        <span className="font-bold text-zinc-900">{row.t} Uhr</span>
                        <span className="text-zinc-500 italic text-sm">{row.g}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* STANDORT 4: SPEZIAL-KLASSEN */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t-4 border-red-600 pt-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-4">Spezial-Klassen</h2>
              <p className="text-zinc-500 font-light leading-relaxed">
                Dojo „Herberge“<br />
                Fritz-Lesch-Straße 24, 13053 Berlin
              </p>
              <div className="mt-6 inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest">
                Dojo
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-4">
              {[
                { day: "Montags", time: "10.00 – 11.30", target: "Senioren (ab 65 Jahren)" },
                { day: "Mittwochs", time: "11.00 – 12.30", target: "Training mit/für Trainingskollegen, Schichtarbeiter & Studenten" },
                { day: "Freitags", time: "10.00 – 11.30", target: "Training mit/für Trainingskollegen, Schichtarbeiter & Studenten" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <span className="text-red-600 font-bold uppercase text-xs tracking-[0.2em] w-24 flex-shrink-0">{item.day}</span>
                  <span className="text-lg font-black text-zinc-900 whitespace-nowrap min-w-[160px]">{item.time} Uhr</span>
                  <span className="text-zinc-500 font-light text-sm md:text-base">{item.target}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}