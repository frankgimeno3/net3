"use client"
import React, { FC } from 'react';
import Subtitle from './contentsComponents/ContentsSubtitle';
import { useLanguage } from '@/app/context/LanguageContext';
import Net3 from './contentsComponents/net3';
import ContentsPlan from './contentsComponents/subsections/ContentsPlan';
import BetterContent from './contentsComponents/subsections/BetterContent';

interface ContentsProps {
}

const Contents: FC<ContentsProps> = ({ }) => {
  const { lang } = useLanguage();

  return (
    <>
      <div className='flex flex-col py-24  text-center px-12 lg:px-80'>
        <Net3 />
        {lang == "ESP" ?
          <h1 className="pt-14">Nuestros servicios de creación de contenidos</h1>
          :
          <h1 className="pt-14">Our content creation services</h1>
        }

        <div className='flex flex-col mx-auto '>
          <Subtitle lang={lang} />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 11,
        }}
      >
                <section
          className="bg-gray-100/30 text-gray-600 py-24"
          style={{
            position: "relative",
            zIndex: 10,
            borderTopLeftRadius: "50% 100px",
            borderTopRightRadius: "50% 100px",
            borderBottomLeftRadius: "50% 100px",
            borderBottomRightRadius: "50% 100px",
          }}
        >
          <div className="flex flex-col md:max-w-5xl py-8 md:py-12 px-6 mx-6 md:mx-auto text-white">
            <BetterContent lang={lang} />
          </div>
        </section>
        <ContentsPlan lang={lang} />
      </div>

    </>

  );
};

export default Contents;
