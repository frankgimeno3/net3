"use client"


import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

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
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

  useEffect(() => {
    // Solo se ejecuta en el cliente
    const storedLang = localStorage.getItem('lang') as "ESP" | "ENG";
    if (storedLang) {
      setLang(storedLang);
    }
  }, []); // El efecto solo se ejecuta una vez, cuando el componente se monta

  // Cambiar el idioma y guardarlo en localStorage
  const changeLanguage = (newLang: "ESP" | "ENG") => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);  // Guardamos el idioma en localStorage
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
