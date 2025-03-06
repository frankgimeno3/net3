import React, { FC } from 'react';
import CardsContent from './CardsContent';

interface QueHacemosProps {
  lang: "ESP" | "ENG";
}

const QueHacemos: FC<QueHacemosProps> = ({ lang }) => {


  return (
    <div className='flex flex-col min-h-screen bg-gray-800 opacity-90 rounded-sm text-center text-white justify-center text-xl py-12'>
      <div>
        <p className="text-4xl sm:text-8xl glitch">¿Qué hacemos?</p>
      </div>
      <div className='flex flex-row justify-center w-full '>
      <CardsContent lang={lang}/>
      </div>
    </div>
  );
};

export default QueHacemos;
