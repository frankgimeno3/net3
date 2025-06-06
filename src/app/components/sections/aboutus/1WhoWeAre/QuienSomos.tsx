import React, { FC } from 'react';
import content1 from './content-1.json';
import 'flag-icons/css/flag-icons.min.css';
import { useLanguage } from '@/app/context/LanguageContext';
import { useRouter } from 'next/navigation';

const QuienSomos: FC = () => {
  const { lang } = useLanguage();
  const content = content1[lang];
  const router = useRouter();

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
  };

  return (
    <div id="quien-somos-component" className="w-full pt-24 md:p-8 px-12  md:flex flex-col mx-auto min-h-screen h-full 
    justify-center md:max-w-5xl text-center md:text-left ">
      <h1 className="mt-12 text-4xl md:text-7xl font-bold">
        {content.titular}
      </h1>
      <h2 className="text-lg md:text-2xl py-8">
        {content.subtitulo}
      </h2>

      <p className='font-bold pb-2 hidden md:block'>{content.labelText}</p>
      <div className='flex flex-col md:flex-row w-full'>
        <input
          placeholder={content.placeholderText}
          className='rounded bg-white bg-opacity-10 border border-gray-100 px-4 w-56 md:w-96 md:mr-4 mx-auto md:mx-0
          min-h-12 hidden md:block'
        />
        <button
          className=" p-2 md:p-3 px-5 bg-gray-200 rounded hover:bg-white hover:text-black transition-colors w-max text-gray-700
          mt-2 md:mt-0 mx-auto md:mx-0 min-h-12 "
          style={{ width: "225px" }}
          onClick={() => handleRedirection('/contact')}
        >
          {content.buttonContent}
        </button>
      </div>
    </div>
  );
};

export default QuienSomos;
