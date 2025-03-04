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
  "mx", "ni", "pa", "py", "pe", "pr", "uy", "ve", "us"
];

const QuienSomos: FC<QuienSomosProps> = ({ lang }) => {
  const content = content1[lang];
  const [paisesVisibles, setPaisesVisibles] = useState(paises.slice(0, 10).map(pais => ({ pais, opacity: 1 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setPaisesVisibles(prev => {
        const newPaises = [
          ...prev.slice(1),
          { pais: paises[(paises.indexOf(prev[prev.length - 1].pais) + 1) % paises.length], opacity: 1 }
        ];
        return newPaises.map((p, i) => ({ ...p, opacity: i === 0 || i === 9 ? 0 : 1 }));
      });
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col w-full h-screen'>
      <Net3 />
      <Subtitle lang={lang} />
      <div className='flex flex-col text-center text-white justify-center text-2xl bg-opacity-80 px-24 py-12'>
        <p className='py-2'>
          {content.somosuna} <span className='font-bold text-yellow-300'>{content.titular}</span> {content.subt1}
        </p>
        <p className='py-2'>
          {content.subt2} {content.subt3} <span className='font-bold text-yellow-300'>{content.subt4}</span>
        </p>
      </div>
      <div className='bg-black bg-opacity-30 w-full flex justify-center items-center py-12'>
        <div className='relative flex transition-all duration-1000 ease-in-out opacity-70 ml-24'>
          {paisesVisibles.map(({ pais, opacity }) => (
            <span
              key={pais}
              className={`fi fi-${pais} text-6xl mx-2 rounded-full`}
              style={{ opacity, transition: 'opacity 1s ease-in-out' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuienSomos;
