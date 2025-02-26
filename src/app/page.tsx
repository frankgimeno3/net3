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
    <div className="relative flex flex-col min-h-screen justify-between text-white bg-slate-900">
      <div className="fixed top-0 left-0 w-full  z-50">
        <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
      </div>
      <div className="flex flex-col mt-20 pt-16">
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
