import React, { FC } from 'react';
// import Spiral3D from '../../Spiral3D';
import texts from './texts.json';
import Image from 'next/image';

interface FasesDelFunnelProps {
  lang: 'ESP' | 'ENG';
}

const FasesDelFunnel: FC<FasesDelFunnelProps> = ({ lang }) => {
  const t = texts[lang].fasesDelFunnel;

  return (
    <div className="flex flex-col pb-12">

      <p
        className="italic text-lg  mx-auto mt-12 "
        dangerouslySetInnerHTML={{ __html: t.intro }}
      />
 
      <div className="flex flex-row sm:w-1/2 text-center mx-auto  my-12 md:my-24">
          <Image
            src="/FUNNEL.png"
            alt="calendar plan"
            width={400}
            height={400}
            className="      "
          />
        </div>
      <p
        className=" pb-12 text-xl pt-12 xl:pt-0"
        dangerouslySetInnerHTML={{ __html: t.descripcionFases }}
      />

      <div className="flex flex-col md:flex-row gap-5">
        {Object.entries(t.fases).map(([key, fase]: any) => (
          <div
            key={key}
            className="flex flex-col bg-red-700 text-gray-200 p-8 rounded-xl shadow gap-3 sm:w-1/3"
          >
            <p className="text-2xl text-white mb-5">{fase.titulo}</p>
            <p className="text-sm md:text-lg" dangerouslySetInnerHTML={{ __html: fase.descripcion }} />
          </div>
        ))}
      </div>

      <div
        className="flex flex-row pb-24 items-center text-xs md:text-lg mt-12"
        dangerouslySetInnerHTML={{ __html: `<p>${t.conclusion}</p>` }}
      />
    </div>
  );
};

export default FasesDelFunnel;
