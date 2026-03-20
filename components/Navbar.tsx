"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Die Links führen nun zu den neuen Unterseiten
const navItems = [
  { name: "Portrait", href: "/portrait" },
  { name: "Erfolge", href: "/erfolge" },
  { name: "Dienstleistungen", href: "/dienstleistungen" },
  { name: "Partner", href: "/partner" },
  { name: "DOJO/Training", href: "/dojo" },
  { name: "Fotos", href: "/#fotos" },
  { name: "Videos", href: "/#videos" },
  { name: "Literaturtipps", href: "/literaturtipps" },
  { name: "Kontakt", href: "/#kontakt" }
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Verstecke die Navbar beim Runterscrollen
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between md:justify-center items-center py-4">
          <Link href="/" className="text-lg md:text-xl font-bold tracking-widest uppercase flex items-center text-white no-underline">
            Siegfried Gelz <span className="text-red-600 font-light mx-3 hidden md:inline">|</span> <span className="hidden md:inline text-zinc-400">Karate Instructor</span>
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
      <div className="bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center py-3 border-b border-zinc-100">
            <div className="flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[10px] lg:text-xs font-bold tracking-[0.2em] text-zinc-500 hover:text-red-600 transition-colors uppercase whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <div className="py-3 mb-2 border-b border-zinc-100 text-center">
              <span className="text-xs tracking-[0.2em] text-red-600 font-bold uppercase">Karate Instructor</span>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-sm font-bold tracking-widest text-zinc-600 hover:text-red-600 hover:bg-zinc-50 uppercase text-center"
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