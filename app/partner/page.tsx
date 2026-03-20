import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Partner & Auftraggeber | Siegfried Gelz",
  description: "Zusammenarbeit mit nationalen Verbänden, Vereinen und Sicherheitsgesellschaften.",
};

const partners = [
  { name: "Deutscher Karate Verband e.V.", url: "https://www.karate.de" },
  { name: "Bundesstilrichtung JKD SHOTO-Ha im DKV", url: "http://www.jkd-shotoha.de" },
  { name: "SC Berlin e.V.", url: "https://www.scb-karate.de" },
  { name: "SG Treptow 93 e.V. / Abt. Karate", url: null },
  { name: "Bushido Lubwart Bad Liebenwerda e.V.", url: "http://www.lubwart.de" },
  { name: "SHOTOKAN RYU DEUTSCHLAND e.V.", url: "http://www.shotokanryu.de" },
  { name: "Fitness-Center Wartenberger Club", url: null },
  { name: "Fallschirmjäger Traditions Verband-Ost e.V.", url: "http://www.fjtvo.de" },
  { name: "Judo-Verband Berlin e.V.", url: "https://www.judo-verband-berlin.de" },
  { name: "SHOTOKAN KYOKAI Berlin e.V.", url: "http://www.shotokan-berlin.de" },
  { name: "ISG - International tätige Sicherheitsgesellschaft mbH", url: "https://www.security-isg.com" },
  { name: "USV Jena e.V.", url: "https://www.usvjena.de" },
  { name: "Karateschule Ganschow", url: "http://www.karateschule-ganschow.de" },
  { name: "Karate-Schule OTOMO Zittau e.V.", url: "http://www.otomo-zittau.de" },
  { name: "Japan Antikshop", url: "http://www.enishi-japanese-antique.com.de" },
];

export default function PartnerPage() {
  return (
    <div className={`w-full bg-white min-h-screen pt-[200px] pb-32 ${montserrat.className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Intro Bereich */}
        <div className="max-w-3xl mb-16">
          <p className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            // Netzwerk
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.85] mb-6">
            Partner & <br />Auftraggeber
          </h1>
          <div className="w-20 h-[2px] bg-red-600 mb-6"></div>
          <p className="text-lg text-zinc-400 font-light tracking-wide">
            Vertrauensvolle Zusammenarbeit mit Vereinen, Verbänden und Institutionen aus Sport und Sicherheit.
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-zinc-100 pt-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group p-8 bg-zinc-50 border border-zinc-100 rounded-2xl hover:bg-white hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-1 bg-zinc-200 group-hover:bg-red-600 transition-colors mb-6"></div>
                <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight leading-snug mb-4">
                  {partner.name}
                </h3>
              </div>

              {partner.url ? (
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest hover:text-zinc-900 transition-colors"
                >
                  Website besuchen
                  {/* External Link Icon */}
                  <svg 
                    className="w-3 h-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em]">
                  Regionaler Partner
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}