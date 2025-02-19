import React, { FC } from 'react';
import footerContent from '../content/FooterContent.json'

interface FooterSectionProps {
  lang: 'ESP' | 'ENG';
}

type SectionKey = 'pages' | 'services' | 'links'; // Definimos los valores posibles de `section`

const FooterSection: FC<FooterSectionProps> = ({ lang }) => {
  const content = footerContent[lang] || footerContent["ENG"];

  return (
    <div className="flex flex-row w-full justify-center py-5">
      <div className="flex flex-col">
        <p>Logo</p> 
        <p>{content.copyright}</p>
        <p>info@proporcion3.com</p> 
      </div>
      <div className="flex flex-row px-12 text-sm">
        {(Object.keys(content.sections) as SectionKey[]).map((section) => (
          <div key={section} className="flex flex-col px-12" style={{ maxWidth: '900px' }}>
            <p className="font-bold text-teal-400">{content.sections[section]}</p>
            <div className="flex flex-col py-2">
              {content[section as SectionKey].map((item: string, index: number) => (
                <p key={index} className="hover:font-bold">{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;