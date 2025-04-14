"use client";
import React, { FC } from 'react';
import footerContent from '../content/FooterContent.json';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface FooterSectionProps {
  lang: 'ESP' | 'ENG';
}

type SectionKey = 'services' | 'links';

const FooterSection: FC<FooterSectionProps> = ({ lang }) => {
  const content = footerContent[lang] || footerContent["ENG"];
  const router = useRouter();

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
  };

  return (
    <div className="flex flex-col md:flex-row w-full text-white p-7 items-center justify-center sm:justify-between sm:px-24 py-12 bg-gray-950 bg-opacity-90">
      <div className="flex flex-col text-center sm:text-left mx-12">
        <div
          className="flex flex-row text-xl md:text-4xl  cursor-pointer"
          onClick={() => handleRedirection('/')}
          style={{ transitionDuration: '3000ms' }}
        >
          <Image src={'/net3Complete.svg'} alt={'net3'} height={100} width={100} />
          <p className="text-white">.es</p>
        </div>
        <div className='py-4'>
          <p className='text-center md:text-left text-xs'>{content.copyright1}</p>
          <p className='text-center md:text-left text-xs'>{content.copyright2}</p>
        </div>
        <p className='text-center md:text-left font-bold text-sm'>info@net3.com</p>
        <p className='text-center md:text-left font-bold text-sm'>+34 934120764</p>
      </div>
      <div className="flex flex-col sm:flex-row text-sm mt-12 sm:mt-6 sm:mt-0 text-center sm:text-left">
        {(Object.keys(content.sections) as SectionKey[]).map((section) => (
          <div key={section} className="flex flex-col w-full  sm:px-12 ">
            <p className="font-bold text-yellow-400">{content.sections[section]}</p>
            <div className="flex flex-col py-3">
              {content[section as SectionKey].map((item: string, index: number) => (
                <p
                  key={index}
                  className='cursor-pointer hover:text-yellow-300 py-1'
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
