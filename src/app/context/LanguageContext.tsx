"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definir los tipos
type LanguageContextType = {
  lang: "ESP" | "ENG";
  changeLanguage: (newLang: "ESP" | "ENG") => void;
};

// Crear el contexto con valores iniciales
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Proveedor del contexto
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Obtener el idioma guardado en localStorage, si existe
  const storedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : 'ESP';
  const [lang, setLang] = useState<"ESP" | "ENG">(storedLang as "ESP" | "ENG" || "ESP");

  // Cambiar el idioma y guardarlo en localStorage
  const changeLanguage = (newLang: "ESP" | "ENG") => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang);  // Guardamos el idioma en localStorage
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};
