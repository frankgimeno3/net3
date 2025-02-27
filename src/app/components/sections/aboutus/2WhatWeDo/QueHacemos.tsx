import React, { FC } from 'react';
import content2 from './content-2.json'

 

interface QueHacemosProps {
  lang: "ESP" | "ENG";
}

const QueHacemos: FC<QueHacemosProps> = ({ lang }) => {
  const content = content2[lang];

  return (
    <div className='flex flex-row w-full h-screen p-24'    >
      <div className='flex flex-1 flex-col bg-teal-600 rounded-sm text-center text-white justify-center w-1/2 text-4xl bg-opacity-80'>
      {content.map((item, index) => (
          <p key={index} className={`text-right pr-24 ${index === 0 ? 'font-bold text-4xl text-yellow-300 pb-5' : ''}`}>
            {item.label && <span className='font-bold'>{item.label}</span>} {item.value}
          </p>
        ))}
      </div>
      <div className='flex-1 my-auto w-1/2'>
        <p className='pl-24 text-8xl text-white'>¿Qué </p>
        <p className='pl-36 text-8xl text-white'><span className='pl-4 font-bold'>hacemos</span>?</p>
      </div>
    </div>
  );
};

export default QueHacemos;
