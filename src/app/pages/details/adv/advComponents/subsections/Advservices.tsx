import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import ContentCard from '../ContentCard';
import texts from './texts.json';

type ServiceKey =
  | 'SEM'
  | 'RRSS'
  | 'Video'
  | 'Elaboracion'
  | 'UTM'
  | 'PubliMedios';

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

const servicesData: { key: ServiceKey; iconName: string }[] = [
  { key: 'SEM', iconName: 'Money' },
  { key: 'RRSS', iconName: 'RRSS' },
  { key: 'Video', iconName: 'Video' },
  { key: 'Elaboracion', iconName: 'PR' },
  { key: 'UTM', iconName: 'UTM' },
  { key: 'PubliMedios', iconName: 'Magazine' },

];

interface AdvServicesProps {
  lang: 'ENG' | 'ESP';
}

const AdvServices: FC<AdvServicesProps> = ({ lang }) => {
  const router = useRouter();
  const t: TextsLang = texts[lang];

  return (
    <div>
      <h2 className="text-5xl font-bold text-center">{t.title}</h2>
      <p className="text-center pt-5 text-gray-400 italic">{t.subtitle1}</p>
      <p className="text-center my-12 rounded shadow font-bold bg-red-500/90 w-96 p-5 mx-auto">{t.subtitle2}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-12 justify-items-center">
        {servicesData.map((service) => (
          <ContentCard
            key={service.key}
            title={t.services[service.key].title}
            description={t.services[service.key].description}
            iconName={service.iconName}
          />
        ))}
      </div>

      <div className="flex flex-col bg-white/10 p-12 rounded-xl mx-auto mt-8">
        <p className="py-2 text-gray-200 text-2xl text-center">{t.contactPrompt}</p>
        <button
          className="bg-red-600/70 hover:bg-red-600 text-white w-56 mx-auto font-bold px-4 py-2 rounded-xl"
          onClick={() => router.push('/contact')}
        >
          {t.contactButton}
        </button>
      </div>
    </div>
  );
};

export default AdvServices;
