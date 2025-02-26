import React, { FC } from 'react';
import content1 from './content-1.json'

 

interface QuienSomosProps {
  lang: "ESP" | "ENG";  
}

const QuienSomos: FC<QuienSomosProps> = ({ lang }) => {
  const content = content1[lang];

  return (
    <div className='flex flex-row w-full' style={{ height: '500px' }}>
      <div className='flex-1 my-auto w-1/2 text-center text-white'>
        <p className='text-8xl '>¿Quiénes</p>
        <p className='pl-16 text-8xl '><span className='pl-4 font-bold'>somos</span>?</p>
      </div>
      <div className='flex flex-1 flex-col bg-teal-600 rounded-sm text-center text-white justify-center w-1/2 text-4xl'>
           <p   className='py-2 text-left pl-36 font-bold text-yellow-300'>
              {content.titular}
          </p>
          <p   className='py-2 text-left pl-36'>
              {content.subt1}
          </p>
          <p   className='py-2 text-left pl-36'>
              {content.subt2}
          </p>
          <p   className='py-2 text-left pl-36'>
              {content.subt3}
          </p>
          <p   className='py-2 text-left pl-36'>
              {content.subt4}
          </p>
       </div>
    </div>
  );
};

export default QuienSomos;
