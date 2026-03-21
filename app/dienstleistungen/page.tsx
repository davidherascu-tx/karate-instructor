export const metadata = {
  title: "Dienstleistungen | Siegfried Gelz",
  description: "Professionelles Karate-Training, Coaching und Spezialkurse von Siegfried Gelz.",
};

const services = [
  {
    title: "SHOTOKAN KARATE-Training",
    description: "Individuelle Trainingskonzepte für Vereine, Verbände, Schüler sowie Kinder- und Jugendclubs. Exklusives Personal Coaching für höchste Ansprüche.",
    tags: ["Vereine", "Verbände", "Personal Coaching"]
  },
  {
    title: "Projekttage & Kurse",
    description: "Gezielte Projekttage und Projektwochen sowie Schnupperkurse zu den Schwerpunkten KARATE-DO und moderne Selbstverteidigung (SV).",
    tags: ["Schulen", "Unternehmen", "Einsteiger"]
  },
  {
    title: "Trainingslager & Camps",
    description: "Intensive Wochen- und Wochenendkurse im In- und Ausland. Bevorzugte Termine während der Sommer- und Winterferien auf individuelle Anfrage.",
    tags: ["Inland", "Ausland", "Intensiv"]
  },
  {
    title: "Nahkampf & SV-Spezial",
    description: "Spezialisierte Nahkampf- und Selbstverteidigungskurse für Berufsgruppen wie Flugbegleiter, Personenschützer, Pflegepersonal und Behörden.",
    tags: ["Berufsgruppen", "Behörden", "Einsatzkräfte"]
  },
  {
    title: "Eventorganisation",
    description: "Organisation hochkarätiger Events mit Experten aus den Bereichen Survival, Klettern, Abseilen, Tauchen und Fallschirmspringen.",
    tags: ["Outdoor", "Survival", "Special Events"]
  },
  {
    title: "Budo-Show-Team",
    description: "Spektakuläre Vorführungen der Kampfkunst für exklusive Anlässe wie Firmenfeiern, Hochzeiten und besondere gesellschaftliche Events.",
    tags: ["Show", "Events", "Tradition"]
  }
];

export default function DienstleistungenPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-28 md:pt-[200px] pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Intro Bereich - Kontraststark & Mobil optimiert */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="text-red-700 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            // Dienstleistungen & Angebot
          </p>
          <h1 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.95] mb-6">
            Expertise in <br className="hidden md:block" />Kampfkunst
          </h1>
          <div className="w-20 h-[3px] bg-red-700 mb-6"></div>
          <p className="text-lg md:text-xl text-zinc-700 font-medium leading-relaxed max-w-2xl">
            Professionelle Vermittlung von Werten, Technik und Sicherheit. Maßgeschneiderte Konzepte für höchste Ansprüche.
          </p>
        </div>

        {/* Dienstleistungen Liste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 border-t border-zinc-200 pt-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              
              {/* Nummerierung und animierte Linie */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-red-700 font-black text-xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-[2px] flex-1 bg-zinc-200 group-hover:bg-red-700 transition-all duration-500"></div>
              </div>
              
              {/* Titel */}
              <h2 className="text-2xl md:text-3xl font-black text-zinc-900 uppercase tracking-tight mb-4 group-hover:text-red-700 transition-colors">
                {service.title}
              </h2>
              
              {/* Beschreibungstext - deutlich besser lesbar */}
              <p className="text-zinc-700 font-medium leading-relaxed mb-6 text-base">
                {service.description}
              </p>

              {/* Tags / Badges - Kontrast erhöht */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 bg-zinc-100 text-zinc-700 border border-zinc-200 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block - Direkter Link zur Kontakt-Seite */}
        <div className="mt-32 p-12 bg-zinc-950 rounded-[2rem] text-center flex flex-col items-center shadow-xl">
          <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
            Bereit für das nächste Level?
          </h3>
          <a 
            href="/kontakt" 
            className="bg-red-700 text-white font-bold px-12 py-5 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-zinc-900 transition-all duration-300 rounded-full"
          >
            Jetzt anfragen
          </a>
        </div>

      </div>
    </div>
  );
}