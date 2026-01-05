"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useApp } from "@/context/AppContext";
import { translations } from "@/data/translations";

interface GalleryImage {
  url: string;
  caption: { en: string; ml: string };
}

const sessionImages: GalleryImage[] = [
  { url: "/images/session (1).jpeg", caption: { en: "Legal Awareness Seminar", ml: "നിയമ സെമിനാർ" } },
  { url: "/images/session (3).jpeg", caption: { en: "Legal Awareness Seminar", ml: "നിയമ സെമിനാർ" } },
  { url: "/images/session (4).jpeg", caption: { en: "Public Awareness Talk", ml: "ബോധവൽക്കരണ ക്ലാസ്" } },
    { url: "/images/session (5).jpeg", caption: { en: "Client Consultation", ml: "ക്ലയന്റ് കൺസൾട്ടേഷൻ" } },
    { url: "/images/session (6).jpeg", caption: { en: "Workshop on Legal Rights", ml: "നിയമാവകാശങ്ങൾക്കുള്ള വർക്ക്‌ഷോപ്പ്" } },
    { url: "/images/session (7).jpeg", caption: { en: "Panel Discussion", ml: "പാനൽ ചർച്ച" } },
    { url: "/images/session (8).jpeg", caption: { en: "Legal Documentation", ml: "നിയമ രേഖകൾ" } },
    { url: "/images/session (9).jpeg", caption: { en: "Courtroom Proceedings", ml: "കോടതി നടപടികൾ" } },
    { url: "/images/session (10).jpeg", caption: { en: "Client Meeting", ml: "ക്ലയന്റ് മീറ്റിംഗ്" } },
];

const bioImages: GalleryImage[] = [
  { url: "/images/bio (1).jpeg", caption: { en: "Enrollment Day 2004", ml: "എൻറോൾമെന്റ് ദിനം 2004" } },
  { url: "/images/bio (2).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
  { url: "/images/bio (3).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (4).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
  { url: "/images/bio (5).jpeg", caption: { en: "Enrollment Day 2004", ml: "എൻറോൾമെന്റ് ദിനം 2004" } },
  { url: "/images/bio (6).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
  { url: "/images/bio (7).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (8).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
  { url: "/images/bio (9).jpeg", caption: { en: "Enrollment Day 2004", ml: "എൻറോൾമെന്റ് ദിനം 2004" } },
  { url: "/images/bio (10).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
  { url: "/images/bio (11).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (12).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
  { url: "/images/bio (13).jpeg", caption: { en: "Enrollment Day 2004", ml: "എൻറോൾമെന്റ് ദിനം 2004" } },
  { url: "/images/bio (14).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
  { url: "/images/bio (15).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (16).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
    { url: "/images/bio (17).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
    { url: "/images/bio (18).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (19).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
    { url: "/images/bio (20).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
    { url: "/images/bio (21).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (22).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
    { url: "/images/bio (23).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
    { url: "/images/bio (24).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (25).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
    { url: "/images/bio (26).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
    { url: "/images/bio (27).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (28).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
    { url: "/images/bio (29).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
    { url: "/images/bio (30).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (31).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
    { url: "/images/bio (32).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
    { url: "/images/bio (33).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },
    { url: "/images/bio (34).jpeg", caption: { en: "With Mentors", ml: "ഗുരുക്കളോടൊപ്പം" } },
    { url: "/images/bio (35).jpeg", caption: { en: "Award Ceremony", ml: "അവാർഡ് ദാന ചടങ്ങ്" } },
    { url: "/images/bio (36).jpeg", caption: { en: "Government Law College Days", ml: "ലോ കോളേജ് ദിനങ്ങൾ" } },


];

export default function Gallery() {
  const { lang } = useApp();
  const t = translations;
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const modalRef = useRef(null);

  const openLightbox = (url: string) => {
    setSelectedImg(url);
    gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.3 });
  };

  const closeLightbox = () => {
    gsap.to(modalRef.current, { opacity: 0, scale: 0.9, duration: 0.2, onComplete: () => setSelectedImg(null) });
  };

  return (
    <section className="py-24 bg-white dark:bg-neutral-900 transition-colors">
      <div className="container mx-auto px-4 space-y-20">
        
        {/* Type 1: Sessions Gallery */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-primary dark:text-accent border-l-4 border-accent pl-4">
            {t["sessions-title"][lang]}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessionImages.map((img, i) => (
              <GalleryCard key={i} img={img} lang={lang} onClick={() => openLightbox(img.url)} />
            ))}
          </div>
        </div>

        {/* Type 2: Bio Gallery */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-primary dark:text-accent border-l-4 border-accent pl-4">
            {t["bio-gallery-title"][lang]}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bioImages.map((img, i) => (
              <div 
                key={i} 
                onClick={() => openLightbox(img.url)}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              >
                <img src={img.url} alt="Bio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <i className="fas fa-search-plus text-white text-2xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div 
            ref={modalRef}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button className="absolute top-10 right-10 text-white text-4xl">&times;</button>
            <img src={selectedImg} className="max-w-full max-h-[80vh] rounded-lg shadow-2xl" />
          </div>
        )}

      </div>
    </section>
  );
}

function GalleryCard({ img, lang, onClick }: { img: GalleryImage, lang: 'en'|'ml', onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-800 cursor-pointer shadow-lg"
    >
      <div className="aspect-[10/16] overflow-hidden">
        <img src={img.url} alt="Session" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
         <span className="text-white text-xs uppercase tracking-widest font-bold">View Full Image</span>
      </div>
    </div>
  );
}