import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Montserrat global laden
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Siegfried Gelz | Karate Instructor 6. Dan",
  description: "Premium Karate Training, Erfolge und Dienstleistungen von Siegfried Gelz, 6. Dan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      {/* montserrat.className wendet die Schrift auf den gesamten Body an */}
      <body
        className={`${montserrat.className} min-h-screen flex flex-col bg-white text-zinc-900 antialiased`}
      >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}