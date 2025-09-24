import React, { FC, useEffect, useState } from 'react'; 

interface FunnelSubtitleProps {
  lang: string;
}

const FUNNEL_NEWSLETTER_ESP = [
  "Crea un funnel que vende con tu newsletter", 
  "Convierte suscriptores en clientes fieles", 
  "Emails estratégicos para cada etapa del embudo", 
  "Automatiza tu proceso de ventas con newsletters", 
  "Nutre leads con contenido de valor", 
  "De la bandeja de entrada a la compra", 
  "Newsletter: tu mejor canal de conversión"
];

const FUNNEL_NEWSLETTER_ENG = [
  "Build a sales funnel powered by your newsletter", 
  "Turn subscribers into loyal customers", 
  "Strategic emails for every funnel stage", 
  "Automate your sales process with newsletters", 
  "Nurture leads with valuable content", 
  "From inbox to purchase", 
  "Newsletter: your best conversion channel"
];


const FunnelSubtitle: FC<FunnelSubtitleProps> = ({ lang }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    const wordsToDisplay = lang === "ESP" ? [...FUNNEL_NEWSLETTER_ESP] : [...FUNNEL_NEWSLETTER_ENG];
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % wordsToDisplay.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [lang]);

  useEffect(() => {
    let currentText = "";
    const wordsToDisplay = lang === "ESP" ? [...FUNNEL_NEWSLETTER_ESP] : [...FUNNEL_NEWSLETTER_ENG];
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

export default FunnelSubtitle;
