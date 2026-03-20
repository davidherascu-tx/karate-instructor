import Image from "next/image";

export const metadata = {
  title: "Erfolge | Siegfried Gelz",
  description: "Wettkampferfolge, Meisterschaften und Auszeichnungen von Siegfried Gelz, 6. Dan.",
};

const achievements = [
  { date: "1991", title: "2. Platz Kumite", details: "Gesamtwertung der Berliner Spitzenrangliste DKV" },
  { date: "11/1991", title: "1. Platz Kata & Kumite", details: "1. SHOTOKAN Cup Sachsen-Anhalts" },
  { date: "1992", title: "3. Platz Kumite", details: "Gesamtwertung der Berliner Spitzenrangliste DKV" },
  { date: "1997", title: "1. Platz Kumite & Bester Techniker", details: "1. SRD-Meisterschaft" },
  { date: "2003", title: "1. Platz Kata", details: "Deutsche Meisterschaft DTKV + TKVD (Dingolfing)" },
  { date: "2004", title: "2. Platz Kata", details: "Deutsche Meisterschaft DTKV + TKVD (Berlin)" },
  { date: "06/2004", title: "1. Platz Team-Kata", details: "Länderkampf DE-HU-USA (Zalaszentgrot)" },
  { date: "10/2004", title: "ITKF-WM Davos", details: "Teilnahme an der Weltmeisterschaft in der Schweiz" },
  { date: "09/2005", title: "2. Platz Team-Kata", details: "2. Mecklenburger SHOTOKAN-Cup Schwerin" },
  { date: "10/2005", title: "3. Platz Team-Kata", details: "13. SKDUN-WM in Halle/Saale" },
  { date: "2006", title: "2. Platz Team-Kata", details: "Mulde-Cup in Dessau" },
  { date: "03/2007", title: "1. Platz Team-Kata", details: "SRD-Meisterschaft in Torgelow" },
  { date: "05/2007", title: "1. Platz Team-Kumite", details: "Mulde-Cup in Dessau" },
  { date: "06/2007", title: "1. Platz Team-Kata", details: "Länderkampf DE-HU-USA (Ungarn)" },
  { date: "10/2007", title: "2. Platz Team-Kata", details: "7. Ostdeutsche Meisterschaft DJKB" },
  { date: "2008", title: "1. Platz Team-Kata", details: "SRD Meisterschaft & Fujinaga-Cup Berlin" },
  { date: "05/2008", title: "WUKO-EM Bronze", details: "Team-Coach bei der EM in Herstal-Liege, Belgien" },
  { date: "09/2008", title: "Team-Coach Sieg", details: "Länderkampf gegen Ungarn in Berlin" },
  { date: "11/2008", title: "AJKA-EuroCup Sieg", details: "1. Platz Team-Kata / 2. Platz Kata Ü35 (Berlin)" },
  { date: "11/2008", title: "Berliner Freiwilligen Paß", details: "Ehrenamt-Auszeichnung der Senatsverwaltung" },
  { date: "11/2009", title: "AJKA-EuroCup Ungarn", details: "2. Platz Team-Kata / 3. Platz Kata Ü35" },
  { date: "10/2011", title: "1. Platz World-Cup", details: "19. SKDUN-World-Cup in Halle/Saale (Ü40)" }
];

// Hilfsfunktion zur Umwandlung von 11/1991 in "November 1991"
function formatKarateDate(dateStr: string) {
  if (!dateStr.includes('/')) return dateStr;
  
  const [month, year] = dateStr.split('/');
  const months: { [key: string]: string } = {
    "01": "Januar", "02": "Februar", "03": "März", "04": "April",
    "05": "Mai", "06": "Juni", "07": "Juli", "08": "August",
    "09": "September", "10": "Oktober", "11": "November", "12": "Dezember"
  };
  
  return `${months[month] || month} ${year}`;
}

export default function ErfolgePage() {
  return (
    <div className="w-full bg-white min-h-screen pt-[200px] pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <p className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-4">// Erfolge</p>
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.85] mb-6">
            Wettkampf & <br />Auszeichnungen
          </h1>
          <div className="w-20 h-[2px] bg-red-600 mb-6"></div>
          <p className="text-lg text-zinc-400 font-light tracking-wide">
            Eine Chronik sportlicher Höchstleistungen und internationaler Anerkennung.
          </p>
        </div>

        {/* Erfolge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16 border-t border-zinc-100 pt-12">
          {achievements.map((item, i) => (
            <div key={i} className="flex flex-col group">
              {/* Jahr: Zurück zur massiven font-black in edlem Grau */}
              <span className="text-zinc-300 text-6xl md:text-7xl font-black tracking-tighter mb-2 group-hover:text-zinc-400 transition-colors duration-500">
                {item.date.includes('/') ? item.date.split('/')[1] : item.date}
              </span>
              
              <div className="relative pl-6 border-l border-zinc-200 group-hover:border-red-600 transition-colors duration-500">
                {/* Monat voll ausgeschrieben */}
                {item.date.includes('/') && (
                  <span className="block text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">
                    {formatKarateDate(item.date).split(' ')[0]}
                  </span>
                )}
                
                <h3 className="text-lg font-bold text-zinc-900 leading-tight mb-2 uppercase tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}