'use client';

import React, { FC } from 'react';
import footerContent from '../content/FooterContent.json';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

type SectionKey = 'services' | 'links';

interface FooterSectionProps {
  id?: string;
}

const FooterSection: FC<FooterSectionProps> = ({ id }) => {
  const { lang } = useLanguage();
  const content = footerContent[lang] || footerContent["ENG"];
  const router = useRouter();
  const pathname = usePathname();

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
  };

  return (
    <footer
      id={id}
      className="flex flex-col md:flex-row justify-between p-5 bg-black text-white px-4 sm:px-24 py-12 z-50 w-full relative items-center"
      style={{ backgroundColor: "rgb(28, 28, 28)" }}
    >
      {/* Logo, contacto y copyrights */}
      <div className="flex flex-col text-center sm:text-left sm:px-12 mt-12 gap-4 md:gap-0">
        <div
          className="flex flex-row text-xl md:text-4xl cursor-pointer"
          onClick={() => handleRedirection('/')}
          style={{ transitionDuration: '3000ms' }}
        >
          <div className="hidden sm:block pb-5">
            <Image src="/net3logoesBlanco.png" alt="net3" height={180} width={180} />
          </div>
          <div className="block sm:hidden pb-5">
            <Image src="/net3Complete.svg" alt="net3" height={180} width={180} />
          </div>
        </div>

        <p className="text-center md:text-left font-bold text-lg">
          info@net<span className="text-red-500">3</span>.es
        </p>
        <p className="text-center md:text-left font-bold text-sm">+34 - 93 412 07 64</p>
        <Image
          src="/grupoPropor3blanco.png"
          alt="grupoPropor3"
          height={152}
          width={152}
          className="py-2 pt-6"
        />
        <div className="pt-1">
          <p className="text-center md:text-left text-xs">{content.copyright1}</p>
          <p className="text-center md:text-left text-xs">{content.copyright2}</p>
        </div>
      </div>

      {/* Secciones: Servicios y Links */}
      <div className="flex flex-col sm:flex-row text-sm mt-12 sm:mt-6 text-center sm:text-left md:pr-36 ">
        {(Object.keys(content.sections) as SectionKey[]).map((section) => (
          <div key={section} className="flex flex-col w-full sm:px-12 py-6">
            <p className="font-bold text-white text-lg">{content.sections[section]}</p>
            <div className="flex flex-col md:py-3">
              {content[section].map((item: string, index: number) => {
                const redirection = content.redirections?.[section]?.[index];
                const isActive = redirection === pathname; // detecta si estamos en esa página
                return (
                  <p
                    key={index}
                    className={`cursor-pointer py-1 ${isActive ? 'text-white font-bold' : 'text-gray-500 hover:text-white'}`}
                    onClick={() => redirection && handleRedirection(redirection)}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default FooterSection;
