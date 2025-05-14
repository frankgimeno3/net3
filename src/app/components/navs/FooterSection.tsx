"use client";
import React, { FC } from 'react';
import footerContent from '../content/FooterContent.json';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

 

type SectionKey = 'services' | 'links';

const FooterSection: FC = () => {
  const { lang } = useLanguage();  

  const content = footerContent[lang] || footerContent["ENG"];
  const router = useRouter();

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
  };

  return (
    <div className="flex flex-col md:flex-row w-full text-white p-7 items-center justify-center sm:justify-between sm:px-24 py-12 "       style={{ backgroundColor: "rgb(28, 28, 28)" }}>
 
      <div className="flex flex-col text-center sm:text-left mx-12">
        <div
          className="flex flex-row text-xl md:text-4xl  cursor-pointer"
          onClick={() => handleRedirection('/')}
          style={{ transitionDuration: '3000ms' }}
        >
          {/* Solo visible en pantallas mayores a sm */}
          <div className="hidden sm:block pb-5">
            <Image src="/net3logoesBlanco.png" alt="net3" height={180} width={180} />
          </div>

          {/* Solo visible en pantallas menores a sm */}
          <div className="block sm:hidden pb-5">
            <Image src="/net3Complete.svg" alt="net3" height={180} width={180} />
          </div>

        </div>


        <p className='text-center md:text-left font-bold text-lg'>info@net<span className='text-red-500'>3</span>.es</p>
        <p className='text-center md:text-left font-bold text-sm'>+34 - 93 412 07 64</p>
        <Image src="/grupoPropor3blanco.png" alt="net3" height={152} width={152} className='py-2 pt-6' />
        <div className='pt-1'>
          <p className='text-center md:text-left text-xs'>{content.copyright1}</p>
          <p className='text-center md:text-left text-xs'>{content.copyright2}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row text-sm mt-12 sm:mt-6 sm:mt-0 text-center sm:text-left">
        {(Object.keys(content.sections) as SectionKey[]).map((section) => (
          <div key={section} className="flex flex-col w-full  sm:px-12 ">
            <p className="font-bold text-white text-lg">{content.sections[section]}</p>
            <div className="flex flex-col py-3">
              {content[section as SectionKey].map((item: string, index: number) => (
                <p
                  key={index}
                  className='cursor-pointer hover:text-white text-gray-500 py-1'
                  onClick={() => {
                    const redirection = content.redirections?.[section]?.[index];
                    if (redirection) {
                      handleRedirection(redirection);
                    }
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FooterSection;
