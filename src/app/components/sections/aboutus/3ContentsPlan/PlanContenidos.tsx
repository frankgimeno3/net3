import React, { FC } from 'react';
import content3 from './content-3.json'

interface SectionContent {
  ESP: { label: string; value: string }[];
  ENG: { label: string; value: string }[];
}

interface PlanContenidosProps {
  lang: "ESP" | "ENG";
}

const PlanContenidos: FC<PlanContenidosProps> = ({ lang }) => {
  const content = (content3 as SectionContent)[lang];

  return (
    <div className='flex flex-row w-full justify-between' style={{ height: '500px' }}>
      <div className='flex-1 my-auto w-1/2 text-white'>
        <p className='pl-24 text-8xl'>Plan de</p>
        <p className='pl-24 text-8xl'><span className='font-bold'>contenidos</span></p>
      </div>
      <div className='flex flex-1 flex-col bg-teal-600 rounded-sm text-center justify-center w-1/2 text-2xl text-white'>
        {content.map((item, index) => (
          <p key={index} className={`text-left pl-24 ${index === 0 ? 'font-bold py-5 text-4xl' : ''}`}>
            {index === 0 ? (
              <>
                {item.label} <span className='text-yellow-300'>{item.value}</span>
              </>
            ) : (
              <>
                {item.label && <span className='text-yellow-300 font-bold'>{item.label}</span>} {item.value}
              </>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PlanContenidos;
