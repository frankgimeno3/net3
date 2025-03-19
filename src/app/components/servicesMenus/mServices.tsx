import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import {
  FileText,
  Newspaper,
  Mail,
  Share2,
  TrendingUp,
  MoreHorizontal
} from 'lucide-react';

interface MServicesProps {
  selectedService: string;
  lang: string;
}

const MServices: FC<MServicesProps> = ({ selectedService, lang }) => {
  const router = useRouter();

  const iconSize = 20;  
  const iconSizeSmUp = 24; 

  const services = [
    {
      name: lang === 'ESP' ? 'Consultoría de contenido' : 'Content consultancy',
      icon: (isSm: boolean) => <FileText size={isSm ? iconSizeSmUp : iconSize} />,
      route: '/services/consultancy'
    },
    {
      name: lang === 'ESP' ? 'Notas de prensa' : 'Press Releases',
      icon: (isSm: boolean) => <Newspaper size={isSm ? iconSizeSmUp : iconSize} />,
      route: '/services/pr'
    },
    {
      name: 'Newsletter',
      icon: (isSm: boolean) => <Mail size={isSm ? iconSizeSmUp : iconSize} />,
      route: '/services/newsletter'
    },
    {
      name: lang === 'ESP' ? 'Contenido para redes' : 'Social Media Content',
      icon: (isSm: boolean) => <Share2 size={isSm ? iconSizeSmUp : iconSize} />,
      route: '/services/social'
    },
    {
      name: 'SEM',
      icon: (isSm: boolean) => <TrendingUp size={isSm ? iconSizeSmUp : iconSize} />,
      route: '/services/sem'
    },
    {
      name: lang === 'ESP' ? 'Otros servicios' : 'Other services',
      icon: (isSm: boolean) => <MoreHorizontal size={isSm ? iconSizeSmUp : iconSize} />,
      route: '/services/other'
    }
  ];

  const handleRedirection = (route: string) => {
    router.push(route);
  };

  return (
    <div className="w-full bg-gray-800 bg-opacity-60 text-white z-50 flex justify-around py-2 shadow-md">
      {services.map((service, index) => (
        <div
          key={index}
          onClick={() => handleRedirection(service.route)}
          className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-md ${
            selectedService === service.name
              ? 'text-yellow-400'
              : 'text-white hover:text-yellow-300'
          }`}
        >
          <div className="sm:block hidden">
            {service.icon(true)}
          </div>
          <div className="block sm:hidden">
            {service.icon(false)}
          </div>

          <span className="hidden sm:block text-center text-sm mt-1">
            {service.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MServices;
