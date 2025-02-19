'use client';
import { useState } from "react";
import MainNav from "./components/navs/MainNav";
import FooterSection from "./components/sections/FooterSection";
import QuienSomos from "./components/sections/1/QuienSomos";
import QueHacemos from "./components/sections/2/QueHacemos";
import PlanContenidos from "./components/sections/3/PlanContenidos";
import CincoPasos from "./components/sections/4/CincoPasos";
import Contáctanos from "./components/sections/5/Contáctanos";

export default function Home() {
  const [section, setSection] = useState("quienessomos");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

  return (
    <div className="flex flex-col min-h-screen justify-between text-white bg-gradient-to-b from-black to-slate-900 animate-gradient">
      <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />

      <div className="flex flex-col">
        <QuienSomos lang={lang} />
        <QueHacemos lang={lang} />
        <PlanContenidos lang={lang} />
        <CincoPasos lang={lang} />
        <Contáctanos lang={lang} />
      </div>
      
      <footer className="p-5 w-full bg-white bg-opacity-5">
        <FooterSection lang={lang} />
      </footer>
    </div>
  );
}
