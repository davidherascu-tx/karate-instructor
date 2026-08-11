import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-900 py-16 border-t border-zinc-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* 1. Spalte: Foto (Shotokan Tiger) */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/shotokan_tiger.png"
            alt="Shotokan Tiger"
            width={120}
            height={120}
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* 2. Spalte: Text */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-black uppercase tracking-widest mb-3 text-zinc-900">
            Siegfried Gelz, 6. DAN
          </h4>
          <p className="text-sm text-zinc-800 font-bold leading-relaxed">
            Trainiert seit 1981 JKA-KARATE,<br />
            davon seit 35 Jahren als Full-Time-Instructor in Berlin.
          </p>
        </div>

        {/* 3. Spalte: Rechtliches */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <Link
            href="/impressum"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-red-700 transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-red-700 transition-colors"
          >
            Datenschutz
          </Link>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-zinc-300 text-center md:text-left">
        <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 font-black">
          © {new Date().getFullYear()} Siegfried Gelz
        </p>
      </div>
    </footer>
  );
}