import React, { FC, useState, useEffect } from 'react';
import content3 from './content-3.json';
import Svgs from './svgs/Svgs';
import { useLanguage } from '@/app/context/LanguageContext';
 

const WhyWithUs: FC = () => {
    const { lang } = useLanguage();  

  const content = content3[lang];
  const cards = [
    content.card1,
    content.card2,
    content.card3,
    content.card4,
    content.card5
  ];
  const [selectedReason, setSelectedReason] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedReason(prev => (prev + 1) % cards.length);
    }, 3500); 
    return () => clearInterval(intervalId); 
  }, [cards.length]);

  return (
    <section className=" mb-12  text-white">
         <div className="flex flex-col sticky top-0 h-screen flex items-center justify-center px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:pt-24 md:text-5xl font-bold">
              ¿{content.titular}
            </h2>
          </div>
          <div className="bg-gray-800 bg-opacity-80 md:px-10 py-5 rounded-xl shadow-xl max-w-4xl md:mx-24">
            <div className="flex flex-col">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`mx-5 transition-opacity duration-500 ease-in-out ${index === selectedReason
                    ? ' md:font-base  bg-white  text-gray-700  opacity-100'
                    : 'opacity-50 text-gray-400'
                  } p-4 rounded-md`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-6 md:w-12 h-6 md:h-12">
                      <Svgs index={index} selectedReason={selectedReason} />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-2xl ">{card.titlevalue}</h3>
                      <p className="hidden md:block text-lg">{card.subtitlecontent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default WhyWithUs;
