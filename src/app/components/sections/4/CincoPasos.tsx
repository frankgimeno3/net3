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
        {/* Títulos principales */}
        <p className='font-bold py-1 text-yellow-300 text-right pr-24 text-3xl'>
          {content[0].label}
        </p>
        <p className='font-bold text-yellow-300 text-right pr-24 text-4xl'>
          {content[1].label}
        </p>

         <div className='flex flex-col w-full pt-5 text-2xl'>
          {content.slice(2).map((item, index) => (
            <div key={index} className='flex flex-row text-xl w-full items-top pt-2 justify-end pr-20'>
              <p className='font-bold pr-2'>{item.label}</p>
              <p style={{ width: '500px' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex-1 flex-col my-auto w-1/2'>
        <p className='pl-24 text-8xl text-white'>Nuestros</p>
        <p className='pl-24 text-8xl text-white font-bold'>Cinco pasos</p>
      </div>
    </div>
  );
};

export default CincoPasos;
