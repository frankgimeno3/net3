'use client';
import { useState } from "react";
import FooterSection from "../components/navs/FooterSection";
import Contáctanos from "../components/sections/contact/Contáctanos";
import MainNav from "../components/navs/MainNav";
import IntroOurMethod from "../components/sections/ourMethod/IntroOurMethod";

export default function Method() {
  const [section, setSection] = useState("ourMethod");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

  return (
    <div className="relative flex flex-col min-h-screen w-full justify-between text-white"
      style={{
        backgroundImage: 'url(/background/bgrnd.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
      <div className="fixed top-0 left-0 w-full z-50">
        <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
      </div>
      
      <div className="flex flex-col z-10 w-full p-5 mt-24">
        <IntroOurMethod lang={lang} />
        <p className="font-bold text-4xl mt-10">Imagina cómo sería trabajar con nosotros</p>
        <p className="py-5">Subtítulo con un resumen de los pasos que se siguen</p>
        
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-5">
            <p className="font-bold text-3xl">Paso número {i + 1} - Descripción del paso</p>
            <p>Análisis detallado de este paso y de los procesos involucrados.</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-20 pt-16">
        <Contáctanos lang={lang} />
      </div>
      <FooterSection lang={lang} />
    </div>
  );
}
