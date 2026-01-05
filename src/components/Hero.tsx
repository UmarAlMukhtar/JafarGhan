"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useApp } from "@/context/AppContext";
import { translations } from "@/data/translations";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { lang } = useApp();
  const t = translations;

  useGSAP(() => {
    // Timeline for coordinated entry
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
    .from(".hero-desc", {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6")
    .from(".hero-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    }, "-=0.4")
    .from(".hero-img-wrapper", {
      x: 100,
      opacity: 0,
      duration: 1.2,
    }, "-=1");

    // Floating animation for the image
    gsap.to(".hero-img", {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
  }, { scope: container });

  return (
    <section 
      ref={container} 
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-background"
    >
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-primary/5 dark:bg-accent/5 skew-x-12 transform origin-top-right transition-colors" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="z-10 text-center md:text-left">
          <h1 className="hero-title text-4xl lg:text-6xl font-bold text-primary dark:text-white leading-tight mb-6">
            {t["hero-title"][lang]}
          </h1>
          
          <p className="hero-desc text-lg lg:text-xl text-foreground/80 mb-10 max-w-xl mx-auto md:mx-0">
            {t["hero-description"][lang]}
          </p>
          
          <div className="hero-btn">
            <a 
              href="#contact" 
              className="inline-block bg-primary dark:bg-accent text-white dark:text-black px-10 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-primary/20 dark:hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300"
            >
              {t["hero-cta"][lang]}
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hero-img-wrapper relative flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-neutral-800 transition-colors">
            <img 
              src="/images/lawyer.jpg" 
              alt="Advocate Jafar Ghan" 
              className="hero-img w-full h-full object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          
          {/* Experience Badge Card */}
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-xl hidden lg:block border border-gray-100 dark:border-neutral-700">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-accent">20+</span>
              <div className="text-sm font-semibold leading-tight">
                YEARS OF <br /> EXPERIENCE
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}