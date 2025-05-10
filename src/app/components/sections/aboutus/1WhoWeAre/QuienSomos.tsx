import React, { FC, useEffect, useState } from 'react';
import content1 from './content-1.json';
import Subtitle from './Subtitle';
import 'flag-icons/css/flag-icons.min.css';
// import Net3 from './net3';
import gsap from 'gsap'; // Importa GSAP

interface QuienSomosProps {
  lang: "ESP" | "ENG";
}

const paises = [
  "ar", "bo", "br", "cl", "co", "cr", "cu", "do", "ec", "sv", "gt", "hn",
  "mx", "ni", "pa", "py", "pe", "uy", "ve", "us"
];

const QuienSomos: FC<QuienSomosProps> = ({ lang }) => {
  const content = content1[lang];

  const [paisesVisibles, setPaisesVisibles] = useState(
    paises.slice(0, 10).map(pais => ({ pais, opacity: 1 }))
  );

  const [isButtonVisible, setIsButtonVisible] = useState(true); // Estado para controlar la visibilidad del botón

  useEffect(() => {
    const interval = setInterval(() => {
      setPaisesVisibles(prev => {
        const lastPais = prev[prev.length - 1].pais;
        const nextPais = paises[(paises.indexOf(lastPais) + 1) % paises.length];
        const newPaises = [...prev.slice(1), { pais: nextPais, opacity: 1 }];
        return newPaises.map((p, i) => ({ ...p, opacity: i === 0 || i === newPaises.length - 1 ? 0 : 1 }));
      });
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({ top: 960, behavior: 'smooth' }); // Scroll de 2000px
  };

  // Detecta la visibilidad del componente
  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('quien-somos-component'); // Añade un ID al componente
      if (component) {
        const rect = component.getBoundingClientRect();
        if (rect.top + rect.height < 0 || rect.bottom - rect.height > window.innerHeight) {
          // Si el componente ya no es visible
          gsap.to('#floating-button', { opacity: 0, duration: 0.5 }); // Desaparece el botón con GSAP
          setIsButtonVisible(false);
        } else {
          // Si el componente es visible
          gsap.to('#floating-button', { opacity: 1, duration: 0.5 }); // Aparece el botón con GSAP
          setIsButtonVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="quien-somos-component" className='flex flex-col w-full min-h-screen md:pt-24 h-full mb-16'>
      {/* <Net3 /> */}

      <Subtitle lang={lang} />
      <div className='flex flex-wrap md:flex-col mx-auto text-start md:text-center text-white text-lg md:text-2xl md:px-36 py-12 mt-5 md:mt-0'>
        <p className=' md:py-2'> <span className='font-bold text-yellow-300'>{content.titular}</span> {content.subt1}</p>
        <p className=' md:py-2 '>
          {content.subt2} {content.subt3} <span className='font-bold text-yellow-300'>{content.subt4}</span>
        </p>
      </div>

      <div className='w-full hidden md:flex justify-center items-center py-6 pl-24 overflow-hidden'>
        <div className='flex transition-all duration-1000 ease-in-out'>
          {paisesVisibles.map(({ pais, opacity }) => (
            <span
              key={pais}
              className={`fi fi-${pais} text-7xl rounded-sm mx-2 shadow shadow-gray-800 shadow-6xl`}
              style={{ opacity, transition: 'opacity 1s ease-in-out' }}
            />
          ))}
        </div>
      </div>

      {/* Floating Button */}
      {isButtonVisible && (
        <button
          id="floating-button"
          onClick={scrollToNextSection}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:opacity-50"
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
