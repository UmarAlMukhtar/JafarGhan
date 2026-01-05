"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Theme } from "@/types";

interface AppContextType {
  lang: Language;
  theme: Theme;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedLang = localStorage.getItem("language") as Language;
    if (savedTheme) setTheme(savedTheme);
    if (savedLang) setLang(savedLang);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const root = window.document.documentElement;
    theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
    root.setAttribute("lang", lang);
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", lang);
  }, [theme, lang, isMounted]);

  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));
  const toggleLang = () => setLang((p) => (p === "en" ? "ml" : "en"));

  return (
    <AppContext.Provider value={{ lang, theme, toggleTheme, toggleLang }}>
      {/* This ensures children only render once the context is stable */}
      {isMounted ? children : <div className="opacity-0">{children}</div>}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};