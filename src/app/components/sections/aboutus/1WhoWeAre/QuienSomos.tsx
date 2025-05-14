import React, { FC, useEffect, useState } from 'react';
import content1 from './content-1.json';
import Subtitle from './Subtitle';
import 'flag-icons/css/flag-icons.min.css';
import gsap from 'gsap';
import { useLanguage } from '@/app/context/LanguageContext';
 
const paises = [
  "ar", "bo", "br", "cl", "co", "cr", "cu", "do", "ec", "sv", "gt", "hn",
  "mx", "ni", "pa", "py", "pe", "uy", "ve", "us"
];

const QuienSomos: FC = () => {
  const { lang } = useLanguage();  
  const content = content1[lang];

  // const [paisesVisibles, setPaisesVisibles] = useState(
  //   paises.slice(0, 10).map(pais => ({ pais, opacity: 0.5 }))
  // );

  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPaisesVisibles(prev => {
  //       const lastPais = prev[prev.length - 1].pais;
  //       const nextPais = paises[(paises.indexOf(lastPais) + 1) % paises.length];
  //       const newPaises = [...prev.slice(1), { pais: nextPais, opacity: 0.5 }];
  //       return newPaises.map((p, i) => ({ ...p, opacity: i === 0 || i === newPaises.length - 1 ? 0 : 0.5 }));
  //     });
  //   }, 1300);
  //   return () => clearInterval(interval);
  // }, []);

  const scrollToNextSection = () => {
    window.scrollBy({ top: 960, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('quien-somos-component');
      if (component) {
        const rect = component.getBoundingClientRect();
        if (rect.top + rect.height < 0 || rect.bottom - rect.height > window.innerHeight) {
          gsap.to('#floating-button', { opacity: 0, duration: 0.5 });
          setIsButtonVisible(false);
        } else {
          gsap.to('#floating-button', { opacity: 1, duration: 0.5 });
          setIsButtonVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="quien-somos-component" className='flex flex-col w-full min-h-screen md:pt-24 h-full mb-16'>
      <Subtitle lang={lang} />
      <div className='flex flex-wrap md:flex-col mx-auto text-start md:text-center text-white text-lg md:text-2xl md:px-36 py-12 md:mt-0'>
        <p className='md:py-1'>
          <span className='font-bold text-3xl text-red-500 opacity-90 
            hover:font-bold hover:opacity-90 hover:text-4xl 
            transition-all duration-700 pr-2'>
            {content.titular}
          </span>
          {content.subt1}
        </p>
        <p className='md:py-1'>
          {content.subt2} {content.subt3}
          <span className='font-bold text-3xl text-red-500 opacity-90 
            hover:font-bold hover:opacity-90 hover:text-4xl 
            transition-all duration-700 pl-2 '>
            {content.subt4}
          </span>
        </p>
      </div>

      {isButtonVisible && (
        <button
          id="floating-button"
          onClick={scrollToNextSection}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-300 hover:opacity-50"
          style={{ zIndex: 1000 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default QuienSomos;
