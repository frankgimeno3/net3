import React, { FC } from 'react';
import Spiral3D from '../../Spiral3D';
import texts from './texts.json';

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
<div className="flex flex-row w-1/2 text-center mx-auto">
        <Spiral3D />
      </div>

      <p
        className=" pb-12 text-xl"
        dangerouslySetInnerHTML={{ __html: t.descripcionFases }}
      />

      <div className="flex flex-row gap-5">
        {Object.entries(t.fases).map(([key, fase]: any) => (
          <div
            key={key}
            className="flex flex-col bg-red-700 text-gray-200 p-8 rounded-xl shadow gap-3 w-1/3"
          >
            <p className="text-2xl text-white mb-5">{fase.titulo}</p>
            <p dangerouslySetInnerHTML={{ __html: fase.descripcion }} />
          </div>
        ))}
      </div>

      <div
        className="flex flex-row pb-24 items-center text-lg mt-12"
        dangerouslySetInnerHTML={{ __html: `<p>${t.conclusion}</p>` }}
      />
    </div>
  );
};

export default FasesDelFunnel;
