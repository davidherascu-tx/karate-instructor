import Image from "next/image";

export const metadata = {
  title: "Portrait | Siegfried Gelz",
  description: "Werdegang, Erfolge und Qualifikationen von Siegfried Gelz, 6. Dan Shotokan Karate-Do.",
};

export default function PortraitPage() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col pt-[110px]">
      
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* =========================================
              LINKE SPALTE: Sticky Action Foto 
          ========================================= */}
          <div className="flex-1 lg:w-5/12 xl:w-1/2 relative hidden lg:block">
            <div className="sticky top-[150px] w-full flex justify-center">
              <Image
                src="/siggi_soshin_dachi.png"
                alt="Siegfried Gelz Action Pose"
                width={600}
                height={800}
                className="w-full max-w-[450px] h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Mobile Bild-Version */}
          <div className="w-full flex justify-center lg:hidden mb-4">
            <Image
              src="/siggi_soshin_dachi.png"
              alt="Siegfried Gelz Action Pose"
              width={400}
              height={500}
              className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* =========================================
              RECHTE SPALTE: Der Lebenslauf 
          ========================================= */}
          <div className="flex-1 lg:w-7/12 xl:w-1/2 pt-4">
            
            {/* --- HEADER --- */}
            <div className="mb-16 text-center lg:text-left">
              <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">// Portrait</h3>
              <h1 className="text-5xl md:text-6xl font-black text-zinc-900 uppercase tracking-tighter mb-4">
                Siegfried Gelz
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 font-medium tracking-widest uppercase">
                6. Dan Shotokan Karate-Do
              </p>
            </div>

            {/* --- BLOCK 1: HINTERGRUND (Moderne Cards) --- */}
            <div className="mb-20">
              <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-red-600"></span> Hintergrund
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:border-red-200 transition-colors">
                  <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">Ausbildung</div>
                  <div className="text-zinc-900 font-medium">Diplom-Kriminalist <span className="text-zinc-500 font-light block text-sm mt-1">(Humboldt-Universität Berlin 1984-1988)</span></div>
                </div>
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:border-red-200 transition-colors">
                  <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">Berufung</div>
                  <div className="text-zinc-900 font-medium">Ehem. Offizier der Anti-Terror-Einheit <span className="text-zinc-500 font-light block text-sm mt-1">(DDR/Berlin)</span></div>
                </div>
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:border-red-200 transition-colors">
                  <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">Karate</div>
                  <div className="text-zinc-900 font-medium">Karate-Trainer & Sportkoordinator</div>
                </div>
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:border-red-200 transition-colors">
                  <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">Organisation</div>
                  <div className="text-zinc-900 font-medium">Leiter der Ordnungsgruppe IDEM Judo/U20 <span className="text-zinc-500 font-light block text-sm mt-1">(20 - 30 Gastnationen)</span></div>
                </div>
              </div>
            </div>

            {/* --- BLOCK 2: WERDEGANG (Als elegante Timeline) --- */}
            <div className="mb-20">
              <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-red-600"></span> Werdegang
              </h2>
              
              <div className="border-l-2 border-zinc-100 ml-3 space-y-10 py-2">
                {[
                  { year: "1981", text: "Start des Karate-Trainings in Schwerin" },
                  { year: "1984 – 1988", text: "Mitglied im Karate-Dojo der Humboldt-Universität" },
                  { year: "1988 – 1992", text: "Mitglied im Karate-Dojo der SV Berlin Chemie" },
                  { year: "1993 – 2000", text: "Trainer im Budokai Berlin e.V. / SHOTOKAN RYU Berlin e.V." },
                  { year: "Seit 2000", text: "Trainer im SC Berlin e.V. (seit 01.05.2000)" },
                ].map((item, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute w-3.5 h-3.5 bg-white border-2 border-red-600 rounded-full -left-[8.5px] top-1"></div>
                    <div className="text-sm font-bold text-red-600 tracking-widest mb-1.5">{item.year}</div>
                    <div className="text-lg font-medium text-zinc-800">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- BLOCK 3: DAN-PRÜFUNGEN (Die bewährte Timeline) --- */}
            <div className="mb-20">
              <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-red-600"></span> Dan - Prüfungen
              </h2>
              
              <div className="border-l-2 border-zinc-100 ml-3 space-y-10 py-2">
                {[
                  { date: "06.05.1993", dan: "1. Dan JKA", examiners: "Sensei ENOEDA / OSAKA / TABATA / OHTA" },
                  { date: "04.05.1995", dan: "2. Dan JKA", examiners: "Sensei ENOEDA / OHTA" },
                  { date: "07.05.1998", dan: "3. Dan JKA", examiners: "Sensei ENOEDA / OSAKA / OHTA" },
                  { date: "28.09.2002", dan: "4. Dan AJKA", examiners: "Sensei SAFAR" },
                  { date: "19.08.2006", dan: "5. Dan AJKA", examiners: "Sensei SAFAR / YABE / OTIS" },
                  { date: "13.05.2023", dan: "6. Dan DKV/WKF", examiners: "Sensei KOKUBUN" },
                ].map((exam, i) => (
                  <div key={i} className="relative pl-8 group">
                    <div className="absolute w-3.5 h-3.5 bg-red-600 rounded-full -left-[8.5px] top-1.5 group-hover:shadow-[0_0_12px_rgba(220,38,38,0.6)] transition-shadow duration-300"></div>
                    <div className="text-sm font-bold text-zinc-400 tracking-widest mb-1">{exam.date}</div>
                    <div className="text-xl md:text-2xl font-bold text-zinc-900 mb-1">{exam.dan}</div>
                    <div className="text-base text-zinc-500 font-medium">bei {exam.examiners}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- BLOCK 4: QUALIFIKATIONEN --- */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-red-600"></span> Qualifikation
              </h2>
              
              <div className="space-y-4">
                {[
                  "Inhaber der Trainer-B-Lizenz im Deutschen Karate Verband e.V. (DKV)",
                  "Inhaber der Instructor- und Prüfer-A-Lizenz in der American JKA Karate Association-International",
                  "Inhaber der Prüfer-A-Lizenz in der Stilrichtung Japan Karate Dento SHOTO-Ha (JKD) im Deutscher Karate Verband e.V. (DKV)",
                  "Teilnehmer in der ersten deutschen AJKA-Instructor-Class unter der Anleitung von L.B. Safar / 8. Dan",
                  "Thema der Abschlussarbeit: Grundlagen der Psychologie für Karateka",
                  "Kampfrichter in der AJKA-International und im Shotokan Ryu Deutschland e.V. (SRD)",
                  "Kampfrichter in der Stilrichtung Japan Karate Dento SHOTO-Ha (JKD) im Deutscher Karate Verband e.V. (DKV)"
                ].map((qual, i) => (
                  <div key={i} className="flex items-start bg-white p-5 border-l-4 border-red-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] rounded-r-xl">
                    <span className="text-zinc-800 font-medium leading-relaxed">{qual}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}