'use client';
import { useState } from "react";
 
 import FooterSection from "../components/navs/FooterSection";
import Contáctanos from "../components/sections/contact/Contáctanos";
import MainNav from "../components/navs/MainNav";

export default function Guide() {
  const [section, setSection] = useState("contentGuide");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

  return (
    <div className="relative flex flex-col min-h-screen justify-between text-white bg-slate-900">
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50">
        <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
      </div>
      <p className="text-5xl font-bold">Guía de contenidos</p>
      <p>A continuación se muestran los diferentes formatos de contenido que ofrecemos</p>
      <p>Elija si quiere ver formatos según la plataforma de publicación, o según la temática del contenido a publicar</p>

      <div className="bg-teal-400 w-full flex flex-col">
      <p>Mostrar contenidos por...</p>
      <div className="flex flex-row"> 
      <button className="px-3 py-1 bg-white hover:bg-gray-100 text-gray-500 mx-3"> Por temáticas</button>
      <button className="px-3 py-1 bg-white hover:bg-gray-100 text-gray-500 mx-3"> Por Formatos</button>
      </div>
      </div>
      <div className="flex flex-col mt-20 pt-16">
        <Contáctanos lang={lang} />
      </div>
        <FooterSection lang={lang} />
    </div>
  );
}
