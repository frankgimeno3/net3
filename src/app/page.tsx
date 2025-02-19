'use client';
import { useState, useEffect } from "react";
import NavContent from "./components/content/NavContent.json";
import MainNav from "./components/navs/MainNav";
import FooterSection from "./components/sections/FooterSection";

export default function Home() {
  const [section, setSection] = useState("quienessomos");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
  const [content, setContent] = useState(NavContent.ESP);

  useEffect(() => {
    setContent(NavContent[lang as keyof typeof NavContent]);
  }, [lang]);

  return (
    <div className="flex flex-col min-h-screen justify-between text-white">
      <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />

      <div className="p-5">
      {content.sections.map(({ label, value }) => (
        <p key={value}>{label}</p>
      ))}
      </div>
      <footer className="p-5 w-full bg-white bg-opacity-5">
        <FooterSection/>
      </footer>
    </div>
  );
}
