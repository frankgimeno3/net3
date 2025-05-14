import React, { FC, useRef } from 'react';
import CardsContent from './CardsContent';
import { useLanguage } from '@/app/context/LanguageContext';

 
const QueHacemos: FC = () => {
  const queHacemosRef = useRef<HTMLDivElement>(null);
   const { lang } = useLanguage();  
 
  return (
    <div 
      ref={queHacemosRef}
      className="flex flex-col bg-white min-h-screen bg-opacity-90 mb-96 md:pb-0" 
    >
      <div className='flex flex-row justify-center w-full mb-64 md:mb-0'>
        <CardsContent lang={lang} />
      </div>
    </div>
  );
};

export default QueHacemos;
