"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Allgemeine Anfrage",
    message: "",
    honeypot: "", // NEU: Unser verstecktes Feld für Bots
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Wir lesen die Antwort vom Server aus, egal ob erfolgreich oder Fehler
      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "Allgemeine Anfrage", message: "", honeypot: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        // HIER IST DIE ÄNDERUNG: Wir geben den echten Fehler in der Konsole und als Alert aus!
        console.error("Resend API Fehler:", result);
        alert(`Fehler vom Server: ${result.error?.message || "Bitte schau in die Browser-Konsole (F12)"}`);
      }
    } catch (error) {
      console.error("Netzwerk/Fetch Fehler:", error);
      alert("Ein schwerer Fehler ist aufgetreten. Server nicht erreichbar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      
      {/* Erfolgs-Popup */}
      {isSuccess && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl">
          <div className="bg-zinc-950 text-white p-10 rounded-3xl shadow-2xl text-center max-w-sm mx-auto border-2 border-red-700 animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Gesendet!</h3>
            <p className="text-zinc-400 font-medium mb-8">Vielen Dank für Ihre Nachricht. Ich werde mich umgehend bei Ihnen melden.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-white transition-colors"
            >
              Schließen
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className={`space-y-8 transition-opacity duration-500 ${isSuccess ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
        
        {/* SPAM-HONEYPOT: Absolut unsichtbar für echte Nutzer */}
        <input 
          type="text" 
          name="honeypot" 
          value={formData.honeypot} 
          onChange={handleChange} 
          className="hidden" 
          tabIndex={-1} 
          autoComplete="off" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-zinc-800 ml-1">Vollständiger Name</label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ihr Name"
              className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-xl px-6 py-4 outline-none focus:border-red-700 focus:bg-white transition-colors text-zinc-900 font-bold placeholder:text-zinc-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-zinc-800 ml-1">E-Mail (für Rückantwort)</label>
            <input 
              required
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="mail@beispiel.de"
              className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-xl px-6 py-4 outline-none focus:border-red-700 focus:bg-white transition-colors text-zinc-900 font-bold placeholder:text-zinc-500"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-zinc-800 ml-1">Betreff</label>
          <select 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-xl px-6 py-4 outline-none focus:border-red-700 focus:bg-white transition-colors text-zinc-900 font-bold appearance-none cursor-pointer"
          >
            <option>Allgemeine Anfrage</option>
            <option>Karate Training / Dojo</option>
            <option>Lehrgänge & Vorführungen</option>
            <option>Presse & Medien</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-zinc-800 ml-1">Ihre Nachricht</label>
          <textarea 
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Wie kann ich Ihnen helfen?"
            className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-xl px-6 py-4 outline-none focus:border-red-700 focus:bg-white transition-colors text-zinc-900 font-bold placeholder:text-zinc-500 resize-none"
          ></textarea>
        </div>

        <div className="pt-4">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-zinc-900 text-white font-black px-12 py-5 uppercase tracking-[0.2em] text-sm hover:bg-red-700 transition-all duration-300 rounded-xl shadow-md hover:shadow-xl disabled:bg-zinc-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </button>
        </div>
      </form>
    </div>
  );
}