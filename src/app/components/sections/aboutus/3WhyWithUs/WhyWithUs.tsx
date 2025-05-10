import React, { FC, useState, useEffect } from 'react';
import content3 from './content-3.json';
import Svgs from './svgs/Svgs';

interface WhyWithUsProps {
  lang: 'ESP' | 'ENG';
}

const WhyWithUs: FC<WhyWithUsProps> = ({ lang }) => {
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
    <section className=" bg-gray-900 text-white">
      <div className="">
        {/* Sticky content */}
        <div className="flex flex-col sticky top-0 h-screen flex items-center justify-center px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl pt-24 md:text-6xl font-bold">
              ¿{content.titular}
            </h2>
          </div>
          <div className="bg-gray-800 px-10 py-5 rounded-xl shadow-xl max-w-4xl w-full">
            <div className="flex flex-col">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ease-in-out ${index === selectedReason
                    ? 'bg-white text-gray-700 opacity-100'
                    : 'opacity-50 text-gray-400'
                  } p-4 rounded-md`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 hidden md:block">
                      <Svgs index={index} selectedReason={selectedReason} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{card.titlevalue}</h3>
                      <p className="text-lg">{card.subtitlecontent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWithUs;
