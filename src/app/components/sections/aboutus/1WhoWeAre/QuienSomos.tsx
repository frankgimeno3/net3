import React, { FC } from 'react';
import content1 from './content-1.json';
import 'flag-icons/css/flag-icons.min.css';
import { useLanguage } from '@/app/context/LanguageContext';
import { useRouter } from 'next/navigation';

const QuienSomos: FC = () => {
  const { lang } = useLanguage();  
  const content = content1[lang];
  const router = useRouter();

  const handleRedirection = (redirection: string, newSection: string) => {
    router.push(redirection);
  };

  return (
    <div id="quien-somos-component" className='flex flex-col w-full min-h-screen h-full'>
      <div className="relative z-10 p-8 mx-auto flex flex-col justify-center flex-grow max-w-5xl">
        <h1 className="text-6xl font-bold">
          {content.titular}
        </h1>
        <h2 className="text-2xl my-8">
          {content.subtitulo}
        </h2>
        <p className='font-bold pb-2'>{content.labelText}</p>
        <div className='flex flex-row w-full'>
          <input
            placeholder={content.placeholderText}
            className='rounded bg-white bg-opacity-10 border border-gray-100 px-4 w-96 mr-4'
          />
          <button
            className="p-3 px-5 bg-gray-200 rounded hover:bg-white hover:text-black transition-colors w-max text-gray-700"
            style={{ width: "220px" }}
            onClick={() => handleRedirection('/en/contact', 'contact')}
          >
            {content.buttonContent}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuienSomos;
