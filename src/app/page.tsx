'use client';
import { useState, useEffect } from "react";
import MainNav from "./components/Nav/page";
import HomeContent from "./components/content/HomeContent.json";

export default function Home() {
  const [section, setSection] = useState("quienessomos");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
  const [content, setContent] = useState(HomeContent.ESP);

  useEffect(() => {
    setContent(HomeContent[lang as keyof typeof HomeContent]);
  }, [lang]);

  return (
     <div>
      <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
      {content.sections.map(({ label, value }) => (
        <p key={value}>{label}</p>
      ))}
      <footer>
        <p>{content.footer}</p>
      </footer>
    </div>
  );
}
