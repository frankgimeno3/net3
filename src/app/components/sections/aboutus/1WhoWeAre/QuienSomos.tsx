// QuienSomos.tsx
import React, { FC } from 'react';
import content1 from './content-1.json';
import Subtitle from './Subtitle';
import Slider from './Slider';  // Importamos el nuevo componente Slider
import 'flag-icons/css/flag-icons.min.css';

interface QuienSomosProps {
  lang: "ESP" | "ENG";
}

const QuienSomos: FC<QuienSomosProps> = ({ lang }) => {
  const content = content1[lang];

  const paises = [
    "ar", "bo", "br", "cl", "co", "cr", "cu", "do", "ec", "sv", "gt", "hn", 
    "mx", "ni", "pa", "py", "pe", "pr", "uy", "ve", "us"
  ];

  return (
    <div className='flex flex-col w-full h-screen'>
      <Subtitle lang={lang} />
      <div className='flex flex-col text-center text-white justify-center text-2xl px-24 py-12'>
        <p className='py-2'>
          {content.somosuna} <span className='font-bold text-yellow-300 '>{content.titular}</span> {content.subt1}
        </p>
        <p className='py-2'>
          {content.subt2} {content.subt3} <span className='font-bold text-yellow-300 '>{content.subt4}</span>
        </p>
      </div>

      <Slider paises={paises} />
    </div>
  );
};

export default QuienSomos;
