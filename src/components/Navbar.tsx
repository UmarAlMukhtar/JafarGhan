"use client";
import { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, theme, toggleTheme, toggleLang } = useApp();
  const t = translations;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["home", "about", "practice", "achievements", "contact", "blog"];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 dark:bg-black/90 py-2 shadow-md backdrop-blur-md" : "bg-transparent py-5"
    }`}>
      <div className="container flex justify-between items-center">
        <div className="logo">
          <h1 className="text-xl font-bold text-primary dark:text-accent">Adv. Jafar Ghan</h1>
          <p className="text-xs text-secondary italic">Advocate & Legal Consultant</p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link}`} className="font-semibold hover:text-accent transition-colors">
                  {t[`nav-${link}` as keyof typeof t][lang]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l pl-6 border-gray-300 dark:border-gray-700">
            <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-bold border px-2 py-1 rounded border-primary">
              {lang.toUpperCase()} <i className="fas fa-globe text-xs"></i>
            </button>
            <button onClick={toggleTheme} className="text-lg">
              <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-900 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top">
           {navLinks.map((link) => (
              <a key={link} href={`#${link}`} onClick={() => setIsOpen(false)} className="text-lg font-medium">
                {t[`nav-${link}` as keyof typeof t][lang]}
              </a>
            ))}
            <div className="flex justify-between items-center pt-4 border-t">
              <button onClick={toggleLang} className="font-bold border px-4 py-2 rounded border-primary">Language: {lang.toUpperCase()}</button>
              <button onClick={toggleTheme} className="text-2xl p-2"><i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i></button>
            </div>
        </div>
      )}
    </header>
  );
}