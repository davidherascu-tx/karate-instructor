import Image from "next/image";

export const metadata = {
  title: "Portrait | Siegfried Gelz",
  description: "Werdegang, Erfolge und Qualifikationen von Siegfried Gelz, 6. Dan Shotokan Karate-Do.",
};

export default function PortraitPage() {
  return (
    // Responsive Abstände oben hinzugefügt (pt-28 für Mobile)
    <div className="w-full bg-white min-h-screen flex flex-col pt-28 md:pt-[200px] pb-32">
      
      <section className="w-full bg-white">
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
          <div className="w-full flex justify-center lg:hidden mb-4 mt-8">
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
            <div className="mb-16 md:mb-20 text-left">
              <h3 className="text-red-700 font-bold tracking-[0.4em] uppercase text-xs mb-4">
                // Portrait
              </h3>
              <h1 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.95] mb-6">
                Siegfried Gelz
              </h1>
              <p className="text-xl md:text-2xl text-zinc-700 font-bold tracking-widest uppercase">
                6. Dan Shotokan Karate-Do
              </p>
            </div>

            {/* --- BLOCK 1: HINTERGRUND --- */}
            <div className="mb-20">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-zinc-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-[3px] bg-red-700"></span> Hintergrund
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-100 p-6 rounded-2xl border border-zinc-200 hover:border-red-600 transition-colors">
                  <div className="text-red-700 text-xs font-bold uppercase tracking-widest mb-2">Ausbildung</div>
                  <div className="text-zinc-900 font-bold">Diplom-Kriminalist <span className="text-zinc-700 font-medium block text-sm mt-1">(Humboldt-Universität Berlin 1984-1988)</span></div>
                </div>
                <div className="bg-zinc-100 p-6 rounded-2xl border border-zinc-200 hover:border-red-600 transition-colors">
                  <div className="text-red-700 text-xs font-bold uppercase tracking-widest mb-2">Berufung</div>
                  <div className="text-zinc-900 font-bold">Ehem. Offizier der Anti-Terror-Einheit <span className="text-zinc-700 font-medium block text-sm mt-1">(DDR/Berlin)</span></div>
                </div>
                <div className="bg-zinc-100 p-6 rounded-2xl border border-zinc-200 hover:border-red-600 transition-colors">
                  <div className="text-red-700 text-xs font-bold uppercase tracking-widest mb-2">Karate</div>
                  <div className="text-zinc-900 font-bold">Karate-Trainer & Sportkoordinator</div>
                </div>
                <div className="bg-zinc-100 p-6 rounded-2xl border border-zinc-200 hover:border-red-600 transition-colors">
                  <div className="text-red-700 text-xs font-bold uppercase tracking-widest mb-2">Organisation</div>
                  <div className="text-zinc-900 font-bold">Leiter der Ordnungsgruppe IDEM Judo/U20 <span className="text-zinc-700 font-medium block text-sm mt-1">(20 - 30 Gastnationen)</span></div>
                </div>
              </div>
            </div>

            {/* --- BLOCK 2: WERDEGANG --- */}
            <div className="mb-20">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-zinc-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-[3px] bg-red-700"></span> Werdegang
              </h2>
              
              <div className="border-l-[3px] border-zinc-300 ml-3 space-y-10 py-2">
                {[
                  { year: "1981", text: "Start des Karate-Trainings in Schwerin" },
                  { year: "1984 – 1988", text: "Mitglied im Karate-Dojo der Humboldt-Universität" },
                  { year: "1988 – 1992", text: "Mitglied im Karate-Dojo der SV Berlin Chemie" },
                  { year: "1993 – 2000", text: "Trainer im Budokai Berlin e.V. / SHOTOKAN RYU Berlin e.V." },
                  { year: "Seit 2000", text: "Trainer im SC Berlin e.V. (seit 01.05.2000)" },
                ].map((item, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute w-4 h-4 bg-white border-[3px] border-red-700 rounded-full -left-[10px] top-1"></div>
                    <div className="text-sm font-bold text-red-700 tracking-widest mb-1.5">{item.year}</div>
                    <div className="text-lg font-bold text-zinc-900">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- BLOCK 3: DAN-PRÜFUNGEN --- */}
            <div className="mb-20">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-zinc-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-[3px] bg-red-700"></span> Dan - Prüfungen
              </h2>
              
              <div className="border-l-[3px] border-zinc-300 ml-3 space-y-10 py-2">
                {[
                  { date: "06.05.1993", dan: "1. Dan JKA", examiners: "Sensei ENOEDA / OSAKA / TABATA / OHTA" },
                  { date: "04.05.1995", dan: "2. Dan JKA", examiners: "Sensei ENOEDA / OHTA" },
                  { date: "07.05.1998", dan: "3. Dan JKA", examiners: "Sensei ENOEDA / OSAKA / OHTA" },
                  { date: "28.09.2002", dan: "4. Dan AJKA", examiners: "Sensei SAFAR" },
                  { date: "19.08.2006", dan: "5. Dan AJKA", examiners: "Sensei SAFAR / YABE / OTIS" },
                  { date: "13.05.2023", dan: "6. Dan DKV/WKF", examiners: "Sensei KOKUBUN" },
                ].map((exam, i) => (
                  <div key={i} className="relative pl-8 group">
                    <div className="absolute w-4 h-4 bg-red-700 rounded-full -left-[10px] top-1.5 group-hover:shadow-[0_0_12px_rgba(185,28,28,0.8)] transition-shadow duration-300"></div>
                    <div className="text-sm font-bold text-zinc-600 tracking-widest mb-1">{exam.date}</div>
                    <div className="text-xl md:text-2xl font-black text-zinc-900 mb-1">{exam.dan}</div>
                    <div className="text-base text-zinc-700 font-bold">bei {exam.examiners}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- BLOCK 4: QUALIFIKATIONEN --- */}
            <div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-zinc-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-[3px] bg-red-700"></span> Qualifikation
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
                  <div key={i} className="flex items-start bg-zinc-100 p-5 border-l-[4px] border-red-700 shadow-sm rounded-r-xl">
                    <span className="text-zinc-900 font-bold leading-relaxed">{qual}</span>
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