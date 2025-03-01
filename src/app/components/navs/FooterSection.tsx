import React, { FC } from 'react';
import footerContent from '../content/FooterContent.json'

interface FooterSectionProps {
  lang: 'ESP' | 'ENG';
}

type SectionKey = 'pages' | 'services' | 'links'; // Definimos los valores posibles de `section`

const FooterSection: FC<FooterSectionProps> = ({ lang }) => {
  const content = footerContent[lang] || footerContent["ENG"];

  return (
    <div className='flex flex-row w-full text-white p-7 items-center justify-center py-12 w-full items-center bg-gray-950 bg-opacity-90'>

      <div className="flex flex-col">
        <p className=' text-4xl'>net3<span className='text-teal-400'>.es</span></p>
        <p>{content.copyright}</p>
        <p>info@net3.com</p>
      </div>
      <div className="flex flex-row px-12 text-sm">
        {(Object.keys(content.sections) as SectionKey[]).map((section) => (
          <div key={section} className="flex flex-col px-12" style={{ width: '230px' }}>
            <p className="font-bold text-teal-400">{content.sections[section]}</p>
            <div className="flex flex-col py-2">
              {content[section as SectionKey].map((item: string, index: number) => (
                <p key={index}  >{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;