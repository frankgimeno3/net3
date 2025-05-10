import React, { FC, useRef } from 'react';
import CardsContent from './CardsContent';

interface QueHacemosProps {
  lang: "ESP" | "ENG";
}

const QueHacemos: FC<QueHacemosProps> = ({ lang }) => {

  const queHacemosRef = useRef<HTMLDivElement>(null);
 

  return (
    <div 
      ref={queHacemosRef}
      className="flex flex-col bg-white min-h-screen" // Eliminado opacity y transition
    >
      <div className='flex flex-row justify-center w-full'>
        <CardsContent lang={lang} />
      </div>
    </div>
  );
};

export default QueHacemos;
