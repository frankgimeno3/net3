import React, { FC } from 'react';
 // import { useRouter } from 'next/navigation';
//  import ContentCard from './ContentCard';
import texts from './texts.json';
import FasesDelFunnel from './FasesDelFunnel';
import ImportanciaNewsletter from './ImportanciaNewsletter';

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
      <p className="text-lg text-center pt-5 text-gray-400 italic ">{t.subtitle1}</p>
      <FasesDelFunnel/>
      <ImportanciaNewsletter/>
    </div>
  );
};

export default NuestroSistema;