'use client';
import { useState } from "react";
 
 import FooterSection from "../components/navs/FooterSection";
import Contáctanos from "../components/sections/contact/Contáctanos";
import MainNav from "../components/navs/MainNav";

export default function Contact() {
  const [section, setSection] = useState("contact");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

  return (
    <div className="relative flex flex-col min-h-screen justify-between text-white bg-slate-900 w-full">
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50">
        <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
      </div>
      <div className="flex flex-col mt-20 pt-16">
        <Contáctanos lang={lang} />
      </div>
        <FooterSection lang={lang} />
    </div>
  );
}
