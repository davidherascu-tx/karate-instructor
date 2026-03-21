import { Montserrat } from "next/font/google";
import { photoData } from "@/lib/photoData";
import PhotoClientGallery from "@/components/PhotoClientGallery";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Fotos & Galerien | Siegfried Gelz",
  description: "Eindrücke aus Japan, Lehrgängen und Wettkämpfen von Siegfried Gelz.",
};

export default function FotosPage() {
  return (
    <div className={`w-full bg-white min-h-screen pt-28 md:pt-[200px] pb-32 ${montserrat.className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Intro Bereich - Kontraststark */}
        <div className="max-w-3xl mb-10 md:mb-12 text-left">
          <p className="text-red-700 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            // Impressionen
          </p>
          <h1 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.95] mb-8">
            Foto <br className="hidden md:block" />Galerien
          </h1>
          <div className="w-20 h-[3px] bg-red-700 mb-8"></div>
          <p className="text-lg md:text-xl text-zinc-700 font-medium leading-relaxed max-w-2xl">
            Bilder aus über 35 Jahren Karate-Do. Begleiten Sie mich auf Reisen nach Japan, zu Lehrgängen und Wettkämpfen.
          </p>
        </div>

        {/* Client Komponente für die interaktiven Tabs und Lightbox */}
        <PhotoClientGallery data={photoData} />

      </div>
    </div>
  );
}