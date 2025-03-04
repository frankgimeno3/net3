import React, { FC } from 'react';
import footerContent from '../content/FooterContent.json';

interface FooterSectionProps {
  lang: 'ESP' | 'ENG';
}

type SectionKey = 'pages' | 'services' | 'links';

const FooterSection: FC<FooterSectionProps> = ({ lang }) => {
  const content = footerContent[lang] || footerContent["ENG"];

  return (
    <div className="flex flex-col sm:flex-row w-full text-white p-7 items-center justify-center py-12 bg-gray-950 bg-opacity-90">
      <div className="flex flex-col text-center sm:text-left">
        <p className="text-4xl">net3<span className="text-yellow-400">.es</span></p>
        <p>{content.copyright}</p>
        <p>info@net3.com</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm mt-12 sm:mt-6 sm:mt-0 text-center sm:text-left">
        {(Object.keys(content.sections) as SectionKey[]).map((section) => (
          <div key={section} className="flex flex-col w-full sm:w-56">
            <p className="font-bold text-yellow-400">{content.sections[section]}</p>
            <div className="flex flex-col py-2">
              {content[section as SectionKey].map((item: string, index: number) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
