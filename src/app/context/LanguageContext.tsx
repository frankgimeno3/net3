"use client"


import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type LanguageContextType = {
  lang: "ESP" | "ENG";
  changeLanguage: (newLang: "ESP" | "ENG") => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

useEffect(() => {
    const storedLang = localStorage.getItem('lang') as "ESP" | "ENG";
    if (storedLang) {
      setLang(storedLang);
    }
  }, []); 
  
const changeLanguage = (newLang: "ESP" | "ENG") => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);  
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};
