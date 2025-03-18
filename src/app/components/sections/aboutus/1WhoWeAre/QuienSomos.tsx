import React, { FC, useEffect, useState } from 'react';
import content1 from './content-1.json';
import Subtitle from './Subtitle';
import 'flag-icons/css/flag-icons.min.css';
import Net3 from './net3';

interface QuienSomosProps {
  lang: "ESP" | "ENG";
}

const paises = [
  "ar", "bo", "br", "cl", "co", "cr", "cu", "do", "ec", "sv", "gt", "hn",
  "mx", "ni", "pa", "py", "pe", "uy", "ve", "us"
];

const QuienSomos: FC<QuienSomosProps> = ({ lang }) => {
  const content = content1[lang];

  // Estado para la versión de escritorio
  const [paisesVisibles, setPaisesVisibles] = useState(
    paises.slice(0, 10).map(pais => ({ pais, opacity: 1 }))
  );

  // Estado para la versión móvil
  const [paisesVisiblesResponsive, setPaisesVisiblesResponsive] = useState(
    paises.slice(0, 4).map(pais => ({ pais, opacity: 1 }))
  );

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

  useEffect(() => {
    const intervalResponsive = setInterval(() => {
      setPaisesVisiblesResponsive(prev => {
        const lastPais = prev[prev.length - 1].pais;
        const nextPais = paises[(paises.indexOf(lastPais) + 1) % paises.length];
        const newPaises = [...prev.slice(1), { pais: nextPais, opacity: 1 }];
        return newPaises.map((p, i) => ({ ...p, opacity: i === 0 || i === newPaises.length - 1 ? 0 : 1 }));
      });
    }, 1300);

    return () => clearInterval(intervalResponsive);
  }, []);

  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Net3 />
      <Subtitle lang={lang} />
      <div className='flex flex-col text-center text-white justify-center text-2xl px-12 py-12'>
        <p className='py-1 md:py-2'> <span className='font-bold text-yellow-300'>{content.titular}</span> {content.subt1}
        </p>
        <p className='py-1 md:py-2'>
          {content.subt2} {content.subt3} <span className='font-bold text-yellow-300'>{content.subt4}</span>
        </p>
      </div>

      <div className='bg-gray-700 bg-opacity-50  w-full hidden md:flex justify-center items-center py-6 pl-24 overflow-hidden'>
        <div className=' flex transition-all duration-1000 ease-in-out '>
          {paisesVisibles.map(({ pais, opacity }) => (
            <span
              key={pais}
              className={`fi fi-${pais} text-7xl rounded-sm mx-2 border shadow shadow-gray-500 shadow-6xl`}
              style={{ opacity, transition: 'opacity 1s ease-in-out' }}
            />
          ))}
        </div>
      </div>

      {/* <div className='bg-black bg-opacity-50  w-full flex md:hidden justify-center items-center py-6 pl-16 '>
        <div className=' flex transition-all duration-1000 ease-in-out  mx-auto '>
          {paisesVisiblesResponsive.map(({ pais, opacity }) => (
            <span
              key={pais}
              className={`fi fi-${pais} text-7xl rounded-sm mx-1 border shadow shadow-gray-500 shadow-6xl`}
              style={{ opacity, transition: 'opacity 1s ease-in-out' }}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default QuienSomos;
