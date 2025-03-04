import React, { FC, useEffect, useState } from 'react'; 

interface SubtitleProps {
  lang:string;
}

const WORDS_ESP = [
    "Crea una comunidad de seguidores", "Genera posts todo el año", "Toma el control de tus redes sociales", "Más notas de prensa, menos esfuerzo", "Genera contenidos de calidad", "Incrementa el tráfico de tu web", "Haz campañas de email marketing"
  ];
  const WORDS_ENG = [
    "Create a community of followers", "Generate posts all year", "Take control of your social media", "More press releases, less effort", "Generate quality content", "Increase your website traffic", "Run email marketing campaigns"
  ];
const Subtitle: FC<SubtitleProps> = ({lang}) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState<string>("");
  
    useEffect(() => {
      const wordsToDisplay = lang === "ESP" ? [...WORDS_ESP] : [...WORDS_ENG];
      const interval = setInterval(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % wordsToDisplay.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [lang]);
  
    useEffect(() => {
      let currentText = "";
      const wordsToDisplay = lang === "ESP" ? [...WORDS_ESP] : [...WORDS_ENG];
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
    <div className=' text-center text-white py-12'>
    <p className='text-5xl relative glitch' data-text={displayText}>{displayText}</p>
  </div>);
};

export default Subtitle;