import { Montserrat } from "next/font/google";
import ContactForm from "@/components/ContactForm";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Kontakt | Siegfried Gelz",
  description: "Nehmen Sie Kontakt mit Siegfried Gelz auf für Karate-Training, Coaching oder Anfragen.",
};

export default function KontaktPage() {
  return (
    <div className={`w-full bg-white min-h-screen pt-28 md:pt-[200px] pb-32 ${montserrat.className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Intro Bereich */}
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

        {/* Hier binden wir die neue Client-Komponente ein */}
        <div className="max-w-4xl border-t-[3px] border-zinc-200 pt-12 md:pt-16">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}