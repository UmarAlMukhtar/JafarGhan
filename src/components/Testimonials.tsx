"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useApp } from "@/context/AppContext";
import { translations } from "@/data/translations";

const reviews = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    text: "Advocate Ghan's expertise and dedication were instrumental in winning our case. His strategic approach and attention to detail made all the difference.",
  },
  {
    name: "Priya Patel",
    role: "Client",
    text: "Thorough, professional, and compassionate. I felt supported throughout my legal proceedings and couldn't have asked for better representation.",
  },
  {
    name: "Vikram Singh",
    role: "CEO",
    text: "His knowledge of corporate law helped our startup navigate complex legal waters. Highly recommended for businesses seeking solid legal counsel.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { lang } = useApp();
  const t = translations;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: number) => {
    const nextIndex = (index + direction + reviews.length) % reviews.length;

    // GSAP Animation sequence
    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      opacity: 0,
      x: direction === 1 ? -20 : 20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setIndex(nextIndex);
      },
    });

    tl.fromTo(
      cardRef.current,
      { opacity: 0, x: direction === 1 ? 20 : -20 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
    );
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-neutral-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary dark:text-white">
          {t["testimonials-title"][lang]}
        </h2>

        <div className="max-w-3xl mx-auto relative px-4">
          {/* Quote Icon Background */}
          <div className="absolute -top-10 -left-4 text-accent/20 dark:text-accent/10 text-9xl font-serif">
            "
          </div>

          {/* Testimonial Card */}
          <div
            ref={cardRef}
            className="relative z-10 bg-white dark:bg-neutral-900 p-10 md:p-16 rounded-3xl shadow-xl dark:shadow-2xl border border-gray-100 dark:border-neutral-800"
          >
            <p className="text-xl md:text-2xl italic leading-relaxed text-foreground/90 mb-8">
              "{reviews[index].text}"
            </p>
            
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-lg font-bold text-primary dark:text-accent">
                - {reviews[index].name}
              </h4>
              <span className="text-sm text-foreground/50 uppercase tracking-widest mt-1">
                {reviews[index].role}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={() => handleSlide(-1)}
              className="w-14 h-14 rounded-full border-2 border-primary/20 dark:border-white/10 flex items-center justify-center text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-primary transition-all duration-300 group"
              aria-label="Previous Testimonial"
            >
              <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            </button>
            <button
              onClick={() => handleSlide(1)}
              className="w-14 h-14 rounded-full border-2 border-primary/20 dark:border-white/10 flex items-center justify-center text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-primary transition-all duration-300 group"
              aria-label="Next Testimonial"
            >
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}