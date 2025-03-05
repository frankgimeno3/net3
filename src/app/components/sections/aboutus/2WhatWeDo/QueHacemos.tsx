import React, { FC } from 'react';
import content2 from './content-2.json';

interface QueHacemosProps {
  lang: "ESP" | "ENG";
}

const QueHacemos: FC<QueHacemosProps> = ({ lang }) => {
  const content = content2[lang];

  return (
    <div className='flex flex-col min-h-screen bg-gray-900 rounded-sm text-center text-white justify-center text-xl py-12'>
      <div>
        <p className="text-4xl sm:text-9xl glitch pt-24 pb">¿Qué hacemos?</p>
      </div>
      <div className='flex flex-col justify-center px-64 mx-auto'>

        <div className='flex flex-row items-center py-12 '>
          <div className='flex w-1/3 text-center'>
            <p className='text-3xl font-bold text-yellow-300 text-center'>{content.Planes.titular}</p>
          </div>
          <div className='flex w-2/3 flex-col px-12'>
            {content.Planes && Object.entries(content.Planes).map(([key, value], index) => (
              key !== 'titular' && (
                <div key={index} className='flex flex-row bg-gray-100 shadow-xl text-left text-gray-700 rounded-3xl my-3 h-24 px-6 py-6'>
                  <div className='bg-black w-12 h-12 rounded-xl mr-5 pt-2'></div>
                  <p>{value}</p>
                </div>
              )
            ))}
          </div>
        </div>

        <div className='flex flex-row items-center py-12'>
          <div className='flex w-1/3 text-center'>
            <p className='text-3xl font-bold text-yellow-300 text-center'>{content.Contenidos.titular}</p>
          </div>
          <div className='flex w-2/3 flex-col px-12'>
            {content.Contenidos && Object.entries(content.Contenidos).map(([key, value], index) => (
              key !== 'titular' && (
                <div key={index} className='flex flex-row bg-gray-100 shadow-xl text-left text-gray-700 rounded-3xl my-3 h-24 px-6 py-6'>
                  <div className='bg-black w-12 h-12 rounded-xl mr-5 pt-2'></div>
                  <p>{value}</p>
                </div>
              )
            ))}
          </div>
        </div>

        <div className='flex flex-row items-center py-12'>
          <div className='flex w-1/3 text-center'>
            <p className='text-3xl font-bold text-yellow-300 text-center'>{content.Promocion.titular}</p>
          </div>
          <div className='flex w-2/3 flex-col px-12'>
            {content.Promocion && Object.entries(content.Promocion).map(([key, value], index) => (
              key !== 'titular' && (
                <div key={index} className='flex flex-row bg-gray-100 shadow-xl text-left text-gray-700 rounded-3xl my-3 h-24 px-6 py-6'>
                  <div className='bg-black w-12 h-12 rounded-xl mr-5 pt-2'></div>
                  <p>{value}</p>
                </div>
              )
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default QueHacemos;
