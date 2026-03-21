"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: "Portrait", href: "/portrait" },
  { name: "Erfolge", href: "/erfolge" },
  { name: "Dienstleistungen", href: "/dienstleistungen" },
  { name: "Partner", href: "/partner" },
  { name: "DOJO/Training", href: "/dojo" },
  { name: "Fotos", href: "/fotos" },
  { name: "Videos", href: "/videos" },
  { name: "Literaturtipps", href: "/literaturtipps" },
  { name: "Kontakt", href: "/kontakt" }
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80 && !isMobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* 1. Zeile: Name mit dunklem Premium-Hintergrund */}
      <div className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between md:justify-center items-center py-3 md:py-4">
          
          <Link href="/" className="flex flex-col md:flex-row md:items-center text-white no-underline">
            <span className="text-lg md:text-xl font-bold tracking-widest uppercase leading-none">
              Siegfried Gelz
            </span>
            {/* Trennstrich in kräftigerem Rot */}
            <span className="hidden md:inline text-red-700 font-bold mx-3">|</span>
            {/* "Karate Instructor" heller gemacht (zinc-300 statt zinc-400), damit es auf Schwarz besser lesbar ist */}
            <span className="text-[9px] md:text-xl text-zinc-300 tracking-[0.3em] md:tracking-widest uppercase mt-1 md:mt-0 font-bold leading-none">
              Karate Instructor
            </span>
          </Link>
          
          {/* Hamburger Icon für Smartphone */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 2. Zeile: Navigation mit weißem Hintergrund */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Menu - Extremer Kontrast (zinc-800 und font-black) */}
          <div className="hidden md:flex justify-center py-3">
            <div className="flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[10px] lg:text-xs font-black tracking-[0.2em] text-zinc-800 hover:text-red-700 transition-colors uppercase whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Ebenfalls starker Kontrast */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-300 shadow-2xl absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-1 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-sm font-black tracking-widest text-zinc-900 hover:text-red-700 hover:bg-zinc-100 uppercase text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}