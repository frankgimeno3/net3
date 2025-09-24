import React, { FC } from 'react';
import Spiral3D from '../../Spiral3D';
// import { useRouter } from 'next/navigation';
//  import ContentCard from './ContentCard';
import texts from './texts.json';

interface NuestroSistemaProps {
    lang: 'ENG' | 'ESP';

}

 type ServiceKey =
  | 'audiovisual'
  | 'pressNotes'
  | 'UI'
  | 'UX'
  | 'socialContent'
  | 'banners'
  | 'mailing'
  | 'infographics'
  | 'graphicDesign';

 interface Service {
  title: string;
  description: string;
}

 interface TextsLang {
  title: string;
  subtitle1: string;
  subtitle2: string;
  services: Record<ServiceKey, Service>;
  contactPrompt: string;
  contactButton: string;
}

const NuestroSistema: FC<NuestroSistemaProps> = ({lang}) => {
    // const router = useRouter();

   const t: TextsLang = texts[lang];
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">{t.title}</h2>
      <p className="text-center pt-5 text-gray-400 italic ">{t.subtitle1}</p>
      <p className="text-center my-12 rounded shadow font-bold bg-red-500/90 w-96 p-5 mx-auto">{t.subtitle2}</p>
      <Spiral3D/>
    </div>
  );
};

export default NuestroSistema;