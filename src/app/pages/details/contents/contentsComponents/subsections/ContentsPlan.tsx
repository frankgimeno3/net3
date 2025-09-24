import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import Image from "next/image";
import texts from './texts.json';

interface ContentsPlanProps {
    lang: 'ENG' | 'ESP';
}

const ContentsPlan: FC<ContentsPlanProps> = ({ lang }) => {
  const router = useRouter();
  const t = texts[lang];

  return (
    <div className="flex flex-col py-24 px-96">
      <h2 className="font-semibold mb-24 text-left text-2xl md:text-3xl">
        {t.mainTitle} <span className='text-red-500 font-bold'>{t.mainTitleHighlight}</span>
      </h2>

      <div className="flex flex-col md:flex-row items-start text-lg">
        <div className="flex-1 space-y-4 text-gray-100 text-left leading-relaxed pr-12 pt-2">
          <p>{t.paragraph1}</p>
          <p>
            {t.paragraph2Start} <span className="font-bold text-red-500">{t.paragraph2Highlight}</span>, {t.paragraph2End}
          </p>
        </div>
        <div className="flex-1 max-w-md">
          <Image
            src="/contentImages/1CalendarComuPlans.jpg"
            alt="calendar plan"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center pt-12 text-lg">
        <div className="flex-1 max-w-md">
          <Image
            src="/contentImages/8social.png"
            alt="social media plan"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex-1 space-y-4 text-gray-100 text-left leading-relaxed pl-12">
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
