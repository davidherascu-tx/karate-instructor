import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Videos & Videothek | Siegfried Gelz",
  description: "Eine Sammlung von Karate-Vorführungen, Wettkämpfen und Lehrgängen mit Siegfried Gelz.",
};

const videos = [
  {
    title: "AJKA Euro-Cup Berlin 2008",
    description: "Team Kata Herren (sen.) - Philip Grahl, Jens Voigt, Siegfried Gelz (1.48 min)",
    youtubeId: "K_yvClDCc3U" 
  },
  {
    title: "2. Ambrosius-Cup Berlin 2007",
    description: "Demo 1 (3:18 min)",
    youtubeId: "8i6mBH7f-QE" 
  },
  {
    title: "2. Ambrosius-Cup Berlin 2007",
    description: "Demo 2 (3.25 min)",
    youtubeId: "DI8i_f2gp3c" // Korrigierte ID!
  },
  {
    title: "JKA Special Summer Course 1994 (Teil 1)",
    description: "Freundschaftskampf Deutschland – England – Schottland",
    youtubeId: "0oKB6kgeUkE" 
  },
  {
    title: "JKA Special Summer Course 1994 (Teil 2)",
    description: "Freundschaftskampf Deutschland – England – Schottland",
    youtubeId: "JJ9Ok_KTOVU" 
  },
  {
    title: "Berliner Meisterschaft 2019",
    description: "AKL ü 45",
    youtubeId: "3VaQff7kbts" 
  },
  {
    title: "Berlin Open International 02/2020",
    description: "Mein Meister Schüler Hung Nguyen Duc",
    youtubeId: "HU29QRj-kbc" 
  },
  {
    title: "Fight Corona! Keep on Training!",
    description: "Berlin 01/2021 - Never give up! Gambatte!!!",
    youtubeId: "AVbgBUSM8A0" 
  }
];

export default function VideosPage() {
  return (
    <div className={`w-full bg-white min-h-screen pt-28 md:pt-[200px] pb-32 ${montserrat.className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
{/* Intro Bereich */}
        <div className="max-w-3xl mb-10 md:mb-16 text-left">
          {/* mb-4: Gleicher Abstand zur Hauptüberschrift wie auf den anderen Seiten */}
          <p className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            // Videothek
          </p>
          {/* leading-[0.95]: Genug Platz für das "Ü" */}
          <h1 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.95] mb-8">
            Wettkämpfe & <br className="hidden md:block" />Vorführungen
          </h1>
          <div className="w-20 h-[2px] bg-red-600 mb-8"></div>
          <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
            Historische Aufnahmen, Lehrgänge und inspirierende Momente aus über 35 Jahren Karate-Do.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-16 border-t border-zinc-100 pt-16">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col group">
              {/* Iframe Container mit 16:9 Aspect Ratio (Responsive) */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100 mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500 border border-zinc-100">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  // youtube-nocookie.com für Datenschutz!
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Text unter dem Video */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-zinc-500 font-light leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}