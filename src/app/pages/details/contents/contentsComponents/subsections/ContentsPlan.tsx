import React, { FC } from 'react';
import Image from "next/image";
import texts from './texts.json';

interface ContentsPlanProps {
    lang: 'ENG' | 'ESP';
}

const ContentsPlan: FC<ContentsPlanProps> = ({ lang }) => {
   const t = texts[lang];

  return (
    <div className="flex flex-col py-56 px-96 ">
      <h1 className="font-semibold mb-12 text-left   ">
        {t.mainTitle} <span className='text-red-500 font-bold'>{t.mainTitleHighlight}</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center py-24 text-2xl">
        <div className="flex flex-col flex-1 space-y-4 text-gray-100 text-right leading-relaxed pr-12 pt-2 w-1/3 gap-12">
          <p className=''>{t.paragraph1}</p>
          <p className=''>
            {t.paragraph2Start} <span className="font-bold text-red-500">{t.paragraph2Highlight}</span>, {t.paragraph2End}
          </p>
        </div>
        <div className="flex-1 w-2/3">
          <Image
            src="/contentImages/1CalendarComuPlans.jpg"
            alt="calendar plan"
            width={900}
            height={900}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center py-24 text-2xl">
        <div className="flex-1 w-2/3">
          <Image
            src="/contentImages/8social.png"
            alt="social media plan"
              width={900}
            height={900}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 space-y-4 text-gray-100 text-left leading-relaxed pl-12 pt-2 w-1/3 gap-12">
          <p>{t.paragraph3}</p>
          <p>
            <span className='text-red-500 font-bold'>{t.paragraph4Highlight}</span> {t.paragraph4End}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentsPlan;
