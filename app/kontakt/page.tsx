import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Kontakt | Siegfried Gelz",
  description: "Nehmen Sie Kontakt mit Siegfried Gelz auf für Karate-Training, Coaching oder Anfragen.",
};

export default function KontaktPage() {
  return (
    <div className={`w-full bg-white min-h-screen pt-28 md:pt-[200px] pb-32 ${montserrat.className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Intro Bereich - Kontraststark */}
        <div className="max-w-3xl mb-10 md:mb-16 text-left">
          <p className="text-red-700 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            // Verbindung
          </p>
          <h1 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.95] mb-8">
            Kontakt & <br className="hidden md:block" />Anfragen
          </h1>
          <div className="w-20 h-[3px] bg-red-700 mb-8"></div>
          
          <p className="text-lg md:text-xl text-zinc-700 font-medium leading-relaxed max-w-2xl">
            Haben Sie Fragen zum Training oder Interesse an einer Zusammenarbeit? 
            Nutzen Sie das Formular für eine direkte Anfrage.
          </p>
        </div>

        {/* Kontrastreiches Formular */}
        <div className="max-w-4xl border-t-[3px] border-zinc-200 pt-12 md:pt-16">
          <form className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-800 ml-1">
                  Vollständiger Name
                </label>
                <input 
                  type="text" 
                  placeholder="Ihr Name"
                  className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-xl px-6 py-4 outline-none focus:border-red-700 focus:bg-white transition-colors text-zinc-900 font-bold placeholder:text-zinc-500"
                />
              </div>

              {/* E-Mail */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-800 ml-1">
                  E-Mail (für Rückantwort)
                </label>
                <input 
                  type="email" 
                  placeholder="mail@beispiel.de"
                  className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-xl px-6 py-4 outline-none focus:border-red-700 focus:bg-white transition-colors text-zinc-900 font-bold placeholder:text-zinc-500"
                />
              </div>
            </div>

            {/* Betreff */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-800 ml-1">
                Betreff
              </label>
              <select className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-xl px-6 py-4 outline-none focus:border-red-700 focus:bg-white transition-colors text-zinc-900 font-bold appearance-none cursor-pointer">
                <option>Allgemeine Anfrage</option>
                <option>Karate Training / Dojo</option>
                <option>Lehrgänge & Vorführungen</option>
                <option>Presse & Medien</option>
              </select>
            </div>

            {/* Nachricht */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-800 ml-1">
                Ihre Nachricht
              </label>
              <textarea 
                rows={6}
                placeholder="Wie kann ich Ihnen helfen?"
                className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-xl px-6 py-4 outline-none focus:border-red-700 focus:bg-white transition-colors text-zinc-900 font-bold placeholder:text-zinc-500 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full md:w-auto bg-zinc-900 text-white font-black px-12 py-5 uppercase tracking-[0.2em] text-sm hover:bg-red-700 transition-all duration-300 rounded-xl shadow-md hover:shadow-xl"
              >
                Nachricht senden
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}