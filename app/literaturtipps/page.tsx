import { Montserrat } from "next/font/google";
import { getImagesFromFolder } from "@/lib/getImages";
import LiteraturClientGallery from "@/components/LiteraturClientGallery";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Literaturtipps | Siegfried Gelz",
  description: "Empfehlungen für Bücher und Medien über Karate-Do und Samurai-Philosophie.",
};

export default function LiteraturtippsPage() {
  const sections = [
    { title: "KARATE LITERATUR", images: getImagesFromFolder("karate-buecher") },
    { title: "KARATE und MARTIAL ARTS – „DVD’s“", images: getImagesFromFolder("karate-dvds") },
    { title: "SAMURAI – „DVD’s“ und „BÜCHER“", images: getImagesFromFolder("samurai") },
    { title: "SPEZIELLE EMPFEHLUNGEN", images: getImagesFromFolder("empfehlungen") },
    { title: "SPEZIALEINHEITEN „DVD’s“ und „BÜCHER“", images: getImagesFromFolder("spezialeinheiten") },
    { title: "DIVERSE „DVD’s“", images: getImagesFromFolder("diverse") },
  ];

  return (
<div className={`w-full bg-white min-h-screen pt-28 md:pt-[200px] pb-32 ${montserrat.className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
{/* Intro Bereich */}
        <div className="max-w-4xl mb-10 md:mb-16 text-left">
          <p className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            // Empfehlungen
          </p>
          <h1 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.95] mb-8">
            Literaturtipps
          </h1>
          <div className="w-20 h-[2px] bg-red-600 mb-8"></div>
          <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
            Eine persönliche Auswahl an wegweisenden Büchern und Medien über Karate-Do, Samurai-Philosophie und Martial Arts.
          </p>
        </div>

        {/* Galerie mit Pfeil-Navigation */}
        <LiteraturClientGallery sections={sections} />
      </div>
    </div>
  );
}