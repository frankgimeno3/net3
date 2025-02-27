'use client';
import { useState } from "react";
import MainNav from "./components/navs/MainNav";
import FooterSection from "./components/navs/FooterSection";
import QuienSomos from "./components/sections/aboutus/1WhoWeAre/QuienSomos";
import QueHacemos from "./components/sections/aboutus/2WhatWeDo/QueHacemos";
import PlanContenidos from "./components/sections/aboutus/3ContentsPlan/PlanContenidos";
import CincoPasos from "./components/sections/aboutus/4DigitalActionKit/CincoPasos";
import Contáctanos from "./components/sections/contact/Contáctanos";

export default function Home() {
  const [section, setSection] = useState("aboutus");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

  return (
    <div className="relative flex flex-col min-h-screen justify-between text-white"
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
      <div className="flex flex-col z-10">
        <QuienSomos lang={lang} />
        <QueHacemos lang={lang} />
        <PlanContenidos lang={lang} />
        <CincoPasos lang={lang} />
        <Contáctanos lang={lang} />
      </div>
         <FooterSection lang={lang} />
     </div>
  );
}
