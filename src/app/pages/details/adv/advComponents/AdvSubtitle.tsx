import React, { FC, useEffect, useState } from 'react'; 

interface AdvSubtitleProps {
  lang: string;
}

const AD_AGENCY_ESP = [
  "Convierte seguidores en clientes", 
  "Campañas activas los 365 días", 
  "Domina la atención en redes sociales", 
  "Más prensa, más visibilidad", 
  "Creatividad que impulsa ventas", 
  "Atrae tráfico que convierte", 
  "Campañas de email que venden"
];

const AD_AGENCY_ENG = [
  "Turn followers into customers", 
  "Run campaigns 365 days a year", 
  "Dominate attention on social media", 
  "More press, more visibility", 
  "Creativity that drives sales", 
  "Attract traffic that converts", 
  "Email campaigns that sell"
];


const AdvSubtitle: FC<AdvSubtitleProps> = ({ lang }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    const wordsToDisplay = lang === "ESP" ? [...AD_AGENCY_ESP] : [...AD_AGENCY_ENG];
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % wordsToDisplay.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [lang]);

  useEffect(() => {
    let currentText = "";
    const wordsToDisplay = lang === "ESP" ? [...AD_AGENCY_ESP] : [...AD_AGENCY_ENG];
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

export default AdvSubtitle;
