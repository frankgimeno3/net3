import React, { FC, useEffect, useState } from 'react';
import content1 from './content-1.json';
import Subtitle from './Subtitle';
import 'flag-icons/css/flag-icons.min.css';
import Net3 from './net3';

interface QuienSomosProps {
  lang: "ESP" | "ENG";
}

// Cambiamos el tipo de paisesVisibles para que contenga objetos con las propiedades pais y opacity
interface PaisConOpacidad {
  pais: string;
  opacity: number;
}

const QuienSomos: FC<QuienSomosProps> = ({ lang }) => {
  const content = content1[lang];

  const paises = [
    "ar", "bo", "br", "cl", "co", "cr", "cu", "do", "ec", "sv", "gt", "hn", 
    "mx", "ni", "pa", "py", "pe", "pr", "uy", "ve", "us"
  ];

  const [paisesVisibles, setPaisesVisibles] = useState<PaisConOpacidad[]>(paises.slice(0, 10).map(pais => ({ pais, opacity: 1 })));
  const [animating, setAnimating] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setAnimating(true);

         setPaisesVisibles((prevPaises) => {
          return prevPaises.map((paisObj, index) => {
            if (index === 0) {
              return { ...paisObj, opacity: 0 };  
            }
            return paisObj;  
          });
        });

         setTimeout(() => {
          setPaisesVisibles((prevPaises) => {
            const newPaises = [
              ...prevPaises.slice(1),
              { pais: paises[(paises.indexOf(prevPaises[prevPaises.length - 1].pais) + 1) % paises.length], opacity: 1 }
            ];
            return newPaises.map((paisObj, index) => ({ ...paisObj, opacity: index === 0 || index === 9 ? 0 : 1 }));
          });
          setAnimating(false);
        }, 1000);  
      }
    }, 1300);  

    return () => clearInterval(interval);
  }, [animating]);


  return (
    <div className='flex flex-col w-full h-screen'>
      <Net3/>
      <Subtitle lang={lang} />
      <div className='flex flex-col text-center text-white justify-center text-2xl bg-opacity-80 px-24 py-12'>
        <p className='py-2'>
          {content.somosuna} <span className='font-bold text-yellow-300 '>{content.titular}</span> {content.subt1}
        </p>
        <p className='py-2'>
          {content.subt2} {content.subt3} <span className='font-bold text-yellow-300 '>{content.subt4}</span>
        </p>
      </div>

      <div className='bg-black bg-opacity-30 w-full flex justify-center items-center py-4 py-12'>
        <div className='relative flex justify-center items-center'>
          <div className='flex transition-all duration-1000 ease-in-out opacity-70 '>
            {paisesVisibles.map((paisObj, index) => (
              <span
                key={paisObj.pais}  
                className={`fi fi-${paisObj.pais} text-6xl mx-2 rounded-full`}
                style={{
                  opacity: paisObj.opacity,  
                  transition: 'opacity 1s ease-in-out',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienSomos;
