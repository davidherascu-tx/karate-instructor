"use client";

import { useState } from "react";
import Image from "next/image";
// Import der Lightbox-Bibliothek und deren Styles
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Hilfs-Interface für die Typisierung
interface GallerySection {
  title: string;
  images: string[]; // Array von Bild-Pfaden
}

export default function LiteraturClientGallery({ sections }: { sections: GallerySection[] }) {
  // Wir speichern nicht mehr den Pfad, sondern den INDEX des Bildes
  const [index, setIndex] = useState(-1);

  // WICHTIG: Wir erstellen eine flache Liste ALLER Bilder über alle Sektionen hinweg.
  // Nur so funktioniert das Durchblättern (Links/Rechts) über Kategorie-Grenzen hinweg.
  const allImagesForLightbox = sections.flatMap(section => 
    section.images.map(src => ({ src }))
  );

  return (
    <div className="space-y-24">
      {sections.map((section, sIndex) => (
        section.images.length > 0 && (
          <section key={sIndex} className="border-t border-zinc-100 pt-16">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-zinc-900 mb-12 tracking-tight">
              {section.title}
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
              {section.images.map((img: string, iIndex: number) => {
                
                // Berechnet den GLOBALEN Index dieses Bildes in der Gesamtliste
                const globalIndex = sections
                  .slice(0, sIndex) // Alle vorherigen Sektionen
                  .reduce((sum, s) => sum + s.images.length, 0) + iIndex; // Summe der Bilder + aktueller Index

                return (
                  <div 
                    key={iIndex}
                    className="relative aspect-[3/4] bg-zinc-50 rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-zinc-100"
                    onClick={() => setIndex(globalIndex)} // Öffnet die Lightbox am korrekten globalen Index
                  >
                    <Image 
                      src={img} 
                      alt={`Cover ${section.title}`} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 15vw"
                    />
                    {/* Hover Overlay Effekt */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )
      ))}

      {/* DIE NEUE PROFESSIONELLE LIGHTBOX */}
      <Lightbox
        index={index} // Aktuelles Bild
        open={index >= 0} // Offen, wenn Index gültig
        close={() => setIndex(-1)} // Schließen setzt Index zurück
        slides={allImagesForLightbox} // Die flache Liste ALLER Bilder
        // Konfiguration für besseren Look
        styles={{ 
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
          slide: { padding: "20px" }
        }}
        // Animationen
        animation={{ fade: 400, swipe: 300 }}
        // Controller-Einstellungen (z.B. Schließen bei Klick auf Hintergrund)
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}