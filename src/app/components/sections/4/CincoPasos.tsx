import React, { FC } from 'react';
import sectionContent from '../../content/Sections/Section4.json';

interface SectionContent {
  ESP: { label: string; value: string }[];
  ENG: { label: string; value: string }[];
}

interface CincoPasosProps {
  lang: "ESP" | "ENG";
}

const CincoPasos: FC<CincoPasosProps> = ({ lang }) => {
  const content = (sectionContent as SectionContent)[lang];

  return (
    <div className='flex flex-row w-full' style={{ height: '500px' }}>
      <div className='flex flex-1 flex-col bg-teal-600 rounded-sm text-white justify-center w-1/2'>
        {content.map((item, index) => (
          <p key={index} className={`text-right pr-24 ${index < 2 ? 'font-bold text-yellow-300' : 'text-3xl'}`}>
            {item.label && <span className='font-bold pr-2'>{item.label}</span>} {item.value}
          </p>
        ))}
      </div>
      <div className='flex-1 flex-col my-auto w-1/2'>
        <p className='pl-24 text-8xl text-white'>Nuestros</p>
        <span className='pl-24 text-8xl text-white font-bold'>Cinco pasos</span>
      </div>
    </div>
  );
};

export default CincoPasos;
