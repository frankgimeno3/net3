'use client';
import { useState } from "react";
 
 import FooterSection from "../components/navs/FooterSection";
import Contáctanos from "../components/sections/contact/Contáctanos";
import MainNav from "../components/navs/MainNav";
import IntroContentGuide from "../components/sections/contentGuide/IntroContentGuide";

export default function Guide() {
  const [section, setSection] = useState("contentGuide");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

  return (
    <div className="relative flex flex-col min-h-screen justify-between text-white bg-slate-900">
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50">
        <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
      </div>
      <IntroContentGuide/>
      <div className="flex flex-col mt-20 pt-16">
        <Contáctanos lang={lang} />
      </div>
        <FooterSection lang={lang} />
    </div>
  );
}
