import React, { FC, useEffect, useState } from 'react';

interface ContentsSubtitleProps {
  lang: string;
}

const CONTENT_AGENCY_ESP = [
  "Crea una comunidad auténtica",
  "Publica sin parar, todo el año",
  "Lleva el control de tu voz digital",
  "Notas de prensa fáciles, impacto real",
  "Contenidos de calidad que conectan",
  "Haz crecer el tráfico orgánico",
  "Impulsa tu marca con email marketing"
];

const CONTENT_AGENCY_ENG = [
  "Build an authentic community",
  "Keep posting all year long",
  "Take control of your brand voice",
  "Press releases made easy, with real impact",
  "Quality content that connects",
  "Boost your organic traffic",
  "Strengthen your brand with email marketing"
];

const ContentsSubtitle: FC<ContentsSubtitleProps> = ({ lang }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    const wordsToDisplay = lang === "ESP" ? [...CONTENT_AGENCY_ESP] : [...CONTENT_AGENCY_ENG];
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % wordsToDisplay.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [lang]);

  useEffect(() => {
    let currentText = "";
    const wordsToDisplay = lang === "ESP" ? [...CONTENT_AGENCY_ESP] : [...CONTENT_AGENCY_ENG];
    const word = wordsToDisplay[wordIndex];
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < word.length) {
        currentText += word[i];
        setDisplayText(currentText);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
    return () => clearInterval(typingEffect);
  }, [wordIndex, lang]);

  return (
    <div className=' w-full  sm:mb-6'>
      <div className="flex flex-col text-center text-white  hidden md:flex md:h-48  sm:px-1 sm:w-auto">
        <p className="text-5xl sm:text-5xl glitch   my-auto " data-text={displayText}>
          {displayText}
        </p>
      </div>
      <div className="flex flex-col text-center text-white flex md:hidden py-8 pt-8  wax-w-64 sm:w-auto h-36">
        <p className="my-auto text-5xl max-w-64 glitch " data-text={displayText}>
          {displayText}
        </p>
      </div>
    </div>

  );
};

export default ContentsSubtitle;
