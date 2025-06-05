'use client';
import React, { FC, useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { social } from './socialContents.json';
 
interface SocialServicesProps {}

const SocialServices: FC<SocialServicesProps> = () => {
  const { lang } = useLanguage();
  const content = lang === 'ESP' ? social.ESP : social.ENG;

  const [selectedQuestion, setSelectedQuestion] = useState<string>('none');
  const footerRef = useRef<HTMLDivElement>(null);
  const [isNearFooter, setIsNearFooter] = useState(false);

  const handleSelectedQuestion = (id: string) => {
    setSelectedQuestion(prev => (prev === id ? 'none' : id));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsNearFooter(footerTop < windowHeight + 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqItems = [
    {
      id: 'packs',
      title: content.questions.packs.title,
      answer: content.questions.packs.answer,
    },
    {
      id: 'redes',
      title: content.questions.redes.title,
      answer: content.questions.redes.answer,
    },
    {
      id: 'interacciones',
      title: content.questions.interacciones.title,
      answer: content.questions.interacciones.answer,
    },
    {
      id: 'miniaturas',
      title: content.questions.miniaturas.title,
      answer: content.questions.miniaturas.answer,
    },
  ];

  return (
    <div className="flex flex-col max-w-5xl mx-auto py-36 px-6">
      <h2 className="text-left text-6xl font-bold mb-12">{content.title}</h2>

      <p className="pt-8 ">{content.description.first}</p>
      <p className="pt-8 ">{content.description.second}</p>
      <p className="pt-8 ">{content.description.third}</p>

         <div className="pr-5 py-5 mt-4 text-left md:mb-0">
          <p className="font-bold pb-2">{content.questions.packs.title}</p>

          {faqItems.map(({ id, title, answer }) => (
            <div
              key={id}
              className="bg-white bg-opacity-20 pr-5 hover:bg-opacity-30 cursor-pointer rounded-r mb-1"
              onClick={() => handleSelectedQuestion(id)}
            >
              <div className="flex justify-between items-center">
                <p className="p-5">{title}</p>
                <div className="ml-2">
                  {selectedQuestion === id ? (
                    <svg
                      className="w-4 h-4 inline"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline transform rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {selectedQuestion === id && (
                <p className="mt-2 text-sm text-left text-white px-8 pb-8">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
 

   );
};

export default SocialServices;
