import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col pt-[110px]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 min-h-[calc(100vh-110px)]">
        
        {/* --- WATERMARK JKA LOGO (PARALLAX NUR IM HERO) --- */}
        {/* bg-fixed sorgt für den Parallax-Effekt, bleibt aber zwingend innerhalb dieser Sektion! */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none grayscale bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/jka_logo-min.jpg')",
            backgroundSize: "min(80vw, 800px)" // Skaliert das Logo auf allen Bildschirmen optimal
          }}
        />

{/* Text Content */}
        <div className="flex-1 w-full max-w-2xl text-center md:text-left z-10 pb-12 md:pb-0">
          <div className="w-12 h-1 bg-red-600 mb-8 mx-auto md:mx-0"></div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-zinc-900 uppercase tracking-tighter mb-4 leading-[0.9]">
            Karate <br />
            Instructor
          </h1>
          
          {/* Dunkleres Grau für den Namen */}
          <h2 className="text-xl md:text-3xl xl:text-4xl font-medium text-zinc-800 tracking-[0.2em] uppercase mb-8">
            Siegfried Gelz
          </h2>
          
          {/* Deutlich dunkleres Grau und normale Schriftstärke für besseren Kontrast */}
          <p className="text-base md:text-lg xl:text-xl text-zinc-700 leading-relaxed mb-10 max-w-lg xl:max-w-2xl mx-auto md:mx-0">
            Willkommen auf der offiziellen Website von Siegfried Gelz. Als Karate Instructor mit dem 6. Dan widme ich mein Leben der Perfektionierung und Weitergabe der traditionellen Kampfkunst. Erfahren Sie mehr über meine Philosophie, meine Erfolge und wie auch Sie den Weg des Karate beschreiten können.
          </p>
          
          <a 
            href="/kontakt" 
            className="inline-block bg-zinc-900 text-white font-bold px-10 py-5 uppercase tracking-[0.2em] text-xs xl:text-sm hover:bg-red-600 transition-colors duration-300 shadow-xl"
          >
            Training anfragen
          </a>
        </div>

        {/* Image Content - Verkleinert für gestochen scharfe Qualität */}
        <div className="flex-1 w-full flex justify-center md:justify-end items-center self-center h-full py-10 z-10">
          <Image
            src="/siegfried_gelz.png"
            alt="Siegfried Gelz, Karate Instructor"
            width={600}
            height={860}
            className="w-full h-auto max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] object-contain object-center drop-shadow-2xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
        </div>
      </section>

    </div>
  );
}