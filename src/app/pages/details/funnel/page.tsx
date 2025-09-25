"use client"
import React, { FC } from 'react';
import Net3 from '../contents/contentsComponents/net3';
import FunnelSubtitle from './funnelComponents/FunnelSubtitle';
import { useLanguage } from '@/app/context/LanguageContext';
import SoloNewsletter from './funnelComponents/subsections/SoloNewsletter';
import NuestroSistema from './funnelComponents/subsections/NuestrSistema';

interface FunnelProps {
  
}

const Funnel: FC<FunnelProps> = ({ }) => {
      const { lang } = useLanguage();
  
  
  return (
  <>
      <div className='flex flex-col py-24  text-center px-80'>
      <Net3 />
      <h1 className='pt-14'>Genera confianza con un newsletter</h1>
      <div className='flex flex-col mx-auto '>
        <FunnelSubtitle lang={lang} />
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
           <NuestroSistema lang = {lang}/>
          </div>
        </section>
          <SoloNewsletter lang = {lang}/>
      </div>

</>    );
};

export default Funnel;