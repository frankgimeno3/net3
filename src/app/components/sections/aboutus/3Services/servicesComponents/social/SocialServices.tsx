'use client';
import React, { FC, useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { social } from './socialContents.json';
import { useRouter } from 'next/navigation';
import ActionButton from '@/app/components/sections/ActionButton';

interface SocialServicesProps {}

const SocialServices: FC<SocialServicesProps> = () => {
  const { lang } = useLanguage();
  const content = lang === 'ESP' ? social.ESP : social.ENG;
  const router = useRouter();

  const [selectedQuestion, setSelectedQuestion] = useState<string>('none');
  const handleSelectedQuestion = (id: string) => {
    setSelectedQuestion(prev => (prev === id ? 'none' : id));
  };

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

  const handleContactRedirection = () => {
    router.push('/contact');
  };

  return (
    <div className="flex flex-col max-w-5xl py-12">
      <h2 className="text-left text-3xl md:text-6xl font-bold mb-12">{content.title}</h2>

      <div className="flex flex-col gap-5 mb-5">
         <div className="flex flex-row w-full justify-between items-start">
          <div className="flex flex-col">
            <div className="flex flex-col max-w-lg mr-12 gap-3 pt-3">
              <p className="text-lg leading-relaxed">{content.description.first}</p>
              <ActionButton
                label={lang === 'ENG' ? 'Want to know more?' : '¿Quieres saber más?'}
                onClick={handleContactRedirection}
                align="left"
              />
            </div>
          </div>
          <div className="w-80 h-80 bg-white bg-opacity-10 rounded-xl hidden md:block" />
        </div>

         <div className="flex flex-row w-full justify-between items-start">
          <div className="flex flex-col">
            <div className="flex flex-col max-w-lg mr-12 gap-3 pt-3">
              <p className="text-lg leading-relaxed ">{content.description.second}</p>
              <ActionButton
                label={lang === 'ENG' ? 'Want to know more?' : '¿Quieres saber más?'}
                onClick={handleContactRedirection}
                align="left"
              />
            </div>
          </div>
          <div className="w-80 h-80 bg-white bg-opacity-10 rounded-xl hidden md:block" />
        </div>

         <div className="flex flex-row w-full justify-between items-start">
          <div className="flex flex-col">
            <div className="flex flex-col max-w-lg mr-12 gap-3 pt-3">
              <p className="text-lg leading-relaxed">{content.description.third}</p>
              <ActionButton
                label={lang === 'ENG' ? 'Want to know more?' : '¿Quieres saber más?'}
                onClick={handleContactRedirection}
                align="left"
              />
            </div>
          </div>
          <div className="w-80 h-80 bg-white bg-opacity-10 rounded-xl hidden md:block" />
        </div>
      </div>

       <div className="flex flex-col mt-3">
        {faqItems.map(({ id, title, answer }) => (
          <div
            key={id}
            className="flex flex-row rounded-r mb-2 rounded-xl"
            onClick={() => handleSelectedQuestion(id)}
          >
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between items-center bg-indigo-500 w-full pr-8 cursor-pointer">
                <p className="p-5 text-lg font-medium pl-8">{title}</p>
                <div className="ml-2">
                  {selectedQuestion === id ? (
                    <svg className="w-4 h-4 inline" viewBox="0 0 24 24" fill="none">
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
                <div className="flex py-3 bg-gray-100 text-gray-500 rounded-b-xl mb-3">
                  <p className="text-left px-8 pb-3 py-2">{answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialServices;
