"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom"; // NEU: Das Zoom-Plugin importieren
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

interface Photo {
  src: string;
  description: string;
}

interface Subcategory {
  title: string;
  photos: Photo[];
}

interface MainCategory {
  mainCategory: string;
  subcategories: Subcategory[];
}

export default function PhotoClientGallery({ data }: { data: MainCategory[] }) {
  const [activeMainIndex, setActiveMainIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const activeMainCategory = data[activeMainIndex];
  const activeSubcategory = activeMainCategory.subcategories[activeSubIndex];

  const lightboxSlides = activeSubcategory.photos.map((photo) => ({
    src: photo.src,
    description: photo.description,
  }));

  return (
    <div className="mt-12">
      
      {/* 1. Hauptkategorien */}
      <div className="flex flex-wrap gap-4 mb-8 border-b-[3px] border-zinc-200 pb-6">
        {data.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveMainIndex(idx);
              setActiveSubIndex(0); 
            }}
            className={`px-6 py-3 font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 ${
              activeMainIndex === idx
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
            }`}
          >
            {cat.mainCategory}
          </button>
        ))}
      </div>

      {/* 2. Unterkategorien */}
      {activeMainCategory.subcategories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-12">
          {activeMainCategory.subcategories.map((sub, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSubIndex(idx)}
              className={`px-5 py-2.5 font-bold uppercase tracking-wider text-[10px] md:text-xs rounded-full transition-all duration-300 border-2 ${
                activeSubIndex === idx
                  ? "border-red-700 bg-red-50 text-red-800"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
              }`}
            >
              {sub.title}
            </button>
          ))}
        </div>
      )}

      {/* 3. Bilder-Grid */}
      {activeSubcategory.photos.length === 0 ? (
        <div className="py-20 text-center bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-2xl">
          <p className="text-zinc-600 font-black uppercase tracking-widest">In dieser Kategorie sind noch keine Fotos hochgeladen.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {activeSubcategory.photos.map((photo, idx) => (
            <div 
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-square w-full bg-zinc-100 overflow-hidden border-2 border-zinc-200 rounded-xl group-hover:border-red-700 transition-all duration-300 mb-4 shadow-sm">
                <Image 
                  src={photo.src} 
                  alt={photo.description}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/30 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              <p className="text-sm font-bold text-zinc-800 group-hover:text-red-700 transition-colors leading-snug">
                {photo.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 4. Lightbox */}
      <Lightbox
        // NEU: Zoom-Plugin zum Array hinzugefügt
        plugins={[Captions, Zoom]} 
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
        controller={{ closeOnBackdropClick: true }}
        // Optional: Hier kannst du den Zoom noch anpassen, die Standardwerte sind aber für Mobile schon super (Doppeltippen & Zwei-Finger-Zoom)
        zoom={{
          maxZoomPixelRatio: 3, // Erlaubt 3-fache Vergrößerung
        }}
        styles={{ 
          container: { backgroundColor: "rgba(9, 9, 11, 0.98)" },
          captionsDescription: { 
            fontSize: "1.1rem", 
            fontWeight: "bold", 
            color: "#ffffff", 
            textAlign: "center",
            paddingBottom: "20px" 
          }
        }}
        captions={{ showToggle: false }}
      />
    </div>
  );
}