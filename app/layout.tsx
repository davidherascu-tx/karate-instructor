import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://siegfriedgelz.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Siegfried Gelz | Karate Instructor 6. Dan",
    template: "%s | Siegfried Gelz",
  },
  description: "Premium Karate Training, Erfolge und Dienstleistungen von Siegfried Gelz, 6. Dan Shotokan Karate-Do in Berlin.",
  keywords: ["Karate", "Shotokan", "Karate Berlin", "Karate Instructor", "6. Dan", "Siegfried Gelz", "JKA", "Kampfkunst", "Selbstverteidigung"],
  authors: [{ name: "Siegfried Gelz" }],
  creator: "Siegfried Gelz",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Siegfried Gelz – Karate Instructor 6. Dan",
    title: "Siegfried Gelz | Karate Instructor 6. Dan",
    description: "Premium Karate Training, Erfolge und Dienstleistungen von Siegfried Gelz, 6. Dan Shotokan Karate-Do in Berlin.",
    images: [
      {
        url: "/siegfried_gelz.png",
        width: 600,
        height: 860,
        alt: "Siegfried Gelz, Karate Instructor 6. Dan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siegfried Gelz | Karate Instructor 6. Dan",
    description: "Premium Karate Training, Erfolge und Dienstleistungen von Siegfried Gelz, 6. Dan Shotokan Karate-Do in Berlin.",
    images: ["/siegfried_gelz.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Siegfried Gelz",
      jobTitle: "Karate Instructor 6. Dan",
      description: "Karate-Trainer und Sportkoordinator mit 6. Dan Shotokan Karate-Do in Berlin. Ehem. Offizier der Anti-Terror-Einheit, Diplom-Kriminalist.",
      url: siteUrl,
      image: `${siteUrl}/siegfried_gelz.png`,
      knowsAbout: ["Shotokan Karate", "Kampfkunst", "Selbstverteidigung", "JKA Karate"],
    },
    {
      "@type": "SportsActivityLocation",
      "@id": `${siteUrl}/#dojo-ostkreuz`,
      name: "Karate Dojo – OSZ Bürowirtschaft",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Marktstr. 2-3",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "17:00", closes: "20:30" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "17:00", closes: "20:30" },
      ],
    },
    {
      "@type": "SportsActivityLocation",
      "@id": `${siteUrl}/#dojo-moissistrasse`,
      name: "Karate Dojo – Moissistraße",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Moissistraße",
        addressLocality: "Berlin",
        postalCode: "12489",
        addressCountry: "DE",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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