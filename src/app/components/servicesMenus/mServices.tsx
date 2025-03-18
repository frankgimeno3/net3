// MServices.tsx
'use client';

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

  const services = [
    {
      name: lang === 'ESP' ? 'Consultoría de contenido' : 'Content consultancy',
      icon: <FileText size={24} />,
      route: '/services/consultancy'
    },
    {
      name: lang === 'ESP' ? 'Notas de prensa' : 'Press Releases',
      icon: <Newspaper size={24} />,
      route: '/services/pr'
    },
    {
      name: 'Newsletter',
      icon: <Mail size={24} />,
      route: '/services/newsletter'
    },
    {
      name: lang === 'ESP' ? 'Contenido para redes' : 'Social Media Content',
      icon: <Share2 size={24} />,
      route: '/services/social'
    },
    {
      name: 'SEM',
      icon: <TrendingUp size={24} />,
      route: '/services/sem'
    },
    {
      name: lang === 'ESP' ? 'Otros servicios' : 'Other services',
      icon: <MoreHorizontal size={24} />,
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
              ? 'text-yellow-400 text-center'
              : 'text-white hover:text-yellow-300 text-center'
          }`}
        >
          {service.icon}
          {service.name}
        </div>
      ))}
    </div>
  );
};

export default MServices;
