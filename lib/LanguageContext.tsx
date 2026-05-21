"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ta";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("vijaybalaji_lang") as Language;
    if (saved === "en" || saved === "ta") {
      setLangState(saved);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "ta" : "en";
    setLangState(next);
    localStorage.setItem("vijaybalaji_lang", next);
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("vijaybalaji_lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
