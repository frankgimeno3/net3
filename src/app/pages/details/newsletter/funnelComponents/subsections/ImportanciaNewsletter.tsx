import React, { FC } from 'react';
import texts from './texts.json';

interface ImportanciaNewsletterProps {
  lang: 'ESP' | 'ENG';
}

const ImportanciaNewsletter: FC<ImportanciaNewsletterProps> = ({ lang }) => {
  const t = texts[lang].importanciaNewsletter;

  return (
    <div>
      <h1 className="">{t.titulo}</h1>

      <div className="flex flex-col text-sm md:text-xl text-justify gap-4 py-12">
        {t.parrafos.map((p: string, i: number) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <p
        className="font-bold bg-red-600 text-white p-4 rounded-xl shadow mx-auto my-8 text-center hidden md:block text-sm md:text-lg"
        style={{ width: '620px' }}
      >
        Acciones específicas que podrás realizar con tus suscriptores de newsletter
      </p>      
      <p
        className="font-bold bg-red-600 text-white p-4 rounded-xl shadow mx-auto my-8 text-center block md:hidden text-sm md:text-lg"
       >
        Acciones específicas que podrás realizar con tus suscriptores de newsletter
      </p>

      <div className="flex flex-col md:flex-row gap-5">
        {t.acciones.slice(0, 3).map((accion: any, i: number) => (
          <div
            key={i}
            className="flex flex-col border border-gray-100 bg-gray-100/10 md:w-1/3 rounded-xl shadow p-8 gap-4"
          >
            <p className="font-bold text-2xl">{accion.titulo}</p>
            <p>{accion.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-5">
        {t.acciones.slice(3).map((accion: any, i: number) => (
          <div
            key={i}
            className="flex flex-col border border-gray-100 bg-gray-100/10 md:w-1/3 rounded-xl shadow p-8 gap-4"
          >
            <p className="font-bold text-2xl">{accion.titulo}</p>
            <p>{accion.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportanciaNewsletter;
