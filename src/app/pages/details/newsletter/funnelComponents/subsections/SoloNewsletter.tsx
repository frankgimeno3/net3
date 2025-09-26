import React, { FC } from 'react';
import Image from 'next/image';
import texts from './texts.json';

interface SoloNewsletterProps {
  lang: 'ESP' | 'ENG';
}

const SoloNewsletter: FC<SoloNewsletterProps> = ({ lang }) => {
  const t = texts[lang].soloNewsletter;

  return (
    <div className="flex flex-col md:py-56 py-24 px-12 md:px-96">
      <h1 className="font-semibold mb-12 text-left">
        {t.mainTitle} <span className="text-red-500 font-bold">{t.mainTitleHighlight}</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center text-lg px-5 md:px-0">
        <div className="flex-1 space-y-4 text-gray-100 text-left leading-relaxed md:pr-12 pt-2">
          <p>{t.paragraph1}</p>
          <p>
            {t.paragraph2Start} <span className="font-bold text-red-500">{t.paragraph2Highlight}</span>, {t.paragraph2End}
          </p>
        </div>

        <div className="flex-1 max-w-md pt-12 md:pt-0">
          <Image
            src="/contentImages/7press.png"
            alt="calendar plan"
            width={400}
            height={400}
            className="rounded-xl object-cover shadow-sm shadow-white/20 opacity-90 border border-gray-100/10"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center pt-12 text-lg">
        <div className="flex-1 max-w-md pt-12 md:pt-0">
          <Image
            src="/contentImages/VidrioperfilNews.png"
            alt="social media plan"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex-1 space-y-4 text-gray-100 text-left leading-relaxed md:pl-12 p-5 md:p-0 ">
          <p>{t.paragraph3}</p>
          <p>
            <span className="text-red-500 font-bold">{t.paragraph4Highlight}</span> {t.paragraph4End}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoloNewsletter;
