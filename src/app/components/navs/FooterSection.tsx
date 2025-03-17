"use client"
import React, { FC } from 'react';
import footerContent from '../content/FooterContent.json';
import { useRouter } from 'next/navigation';

interface FooterSectionProps {
  lang: 'ESP' | 'ENG';
}

type SectionKey = 'services' | 'links';

interface FooterContent {
  copyright1: string;
  copyright2: string;
  sections: {
    services: string;
    links: string;
  };
  services: string[];
  links: string[];
  redirections?: {
    services: string[];
    links: string[];
  };
}

const FooterSection: FC<FooterSectionProps> = ({ lang }) => {
  const content = footerContent[lang] || footerContent["ENG"];
  const router = useRouter();

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
  };

  return (
    <div className="flex flex-col sm:flex-row w-full text-white p-7 items-center justify-center sm:justify-between sm:px-24 py-12 bg-gray-950 bg-opacity-90">
      <div className="flex flex-col text-center sm:text-left mx-12">
        <p className="text-4xl">net3<span className="text-yellow-400">.es</span></p>
        <p>{content.copyright1}</p>
        <p>{content.copyright2}</p>
        <p>info@net3.com</p>
      </div>
      <div className="flex flex-col sm:flex-row text-sm mt-12 sm:mt-6 sm:mt-0 text-center sm:text-left">
        {(Object.keys(content.sections) as SectionKey[]).map((section) => (
          <div key={section} className="flex flex-col w-full sm:w-56 sm:mx-12 ">
            <p className="font-bold text-yellow-400">{content.sections[section]}</p>
            <div className="flex flex-col py-3">
              {content[section as SectionKey].map((item: string, index: number) => (
                <p 
                  key={index} 
                  className='cursor-pointer hover:text-yellow-300' 
                  onClick={() => {
                     const redirection = content.redirections?.[section]?.[index];
                    if (redirection) {
                      handleRedirection(redirection);
                    }
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
