// lib/photoData.ts

export const photoData = [
  {
    mainCategory: "Karate",
    subcategories: [
      {
        title: "Karate",
        photos: [
          // Hier fügst du für jedes Bild eine Zeile mit src und description ein:
          { src: "/fotos/karate/karate/11_2019_scb_jukuren.jpg", description: "11/2019 SCB Jukuren gratulieren" },
          { src: "/fotos/karate/karate/bild2.jpg", description: "Kata Unsu Vorführung in Berlin." },
          { src: "/fotos/karate/karate/bild3.jpg", description: "Korrektur der Haltung bei den Meisterschaften." },
        ]
      },
      {
        title: "SCB-Pfingst-LG mit Seto-Sensei",
        photos: [
          { src: "/fotos/karate/pfingsten/seto1.jpg", description: "Seto-Sensei erklärt die Feinheiten der Kata." },
          { src: "/fotos/karate/pfingsten/seto2.jpg", description: "Gruppenfoto nach dem anstrengenden Lehrgang." },
        ]
      },
      {
        title: "Otake Sensei in Schwerin - 2012",
        photos: [] // Hier später deine Bilder einfügen
      },
      { title: "Budapest 2010", photos: [] },
      { title: "USA Reise 2010", photos: [] },
      { title: "AJKA-EuroCup 2008", photos: [] },
      { title: "WUKO-EM / Belgien", photos: [] }
    ]
  },
  {
    mainCategory: "Japan",
    subcategories: [
      { 
        title: "Japan 2006", 
        photos: [
          { src: "/fotos/japan/2006/tokyo.jpg", description: "Ankunft in Tokyo am Abend." },
        ] 
      },
      { title: "Japan 04/2009", photos: [] },
      { title: "Japan 04/2015", photos: [] }
    ]
  },
  {
    mainCategory: "Weitere Bilder",
    subcategories: [
      { title: "Weitere Fotos", photos: [] }
    ]
  }
];