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
    <div className="w-full bg-white min-h-screen pt-[200px] pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Intro Bereich gestrafft */}
        <div className="max-w-3xl mb-16">
          <p className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            // Dienstleistungen & Angebot
          </p>
          <h1 className="text-5xl md:text-8xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.85] mb-6">
            Expertise in <br />Kampfkunst
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
            Professionelle Vermittlung von Werten, Technik und Sicherheit. Maßgeschneiderte Konzepte für höchste Ansprüche.
          </p>
        </div>

        {/* Dienstleistungen Liste kompakter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 border-t border-zinc-100 pt-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-red-600 font-bold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-[1px] flex-1 bg-zinc-100 group-hover:bg-red-600 transition-all duration-500"></div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors">
                {service.title}
              </h2>
              
              <p className="text-zinc-500 font-light leading-relaxed mb-6 text-base">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 bg-zinc-50 text-zinc-400 border border-zinc-100 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-32 p-12 bg-zinc-950 rounded-[2rem] text-center flex flex-col items-center">
          <h3 className="text-white text-3xl font-bold uppercase tracking-tight mb-6">
            Bereit für das nächste Level?
          </h3>
          <a 
            href="/#kontakt" 
            className="bg-red-600 text-white font-bold px-12 py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 rounded-full"
          >
            Jetzt anfragen
          </a>
        </div>

      </div>
    </div>
  );
}