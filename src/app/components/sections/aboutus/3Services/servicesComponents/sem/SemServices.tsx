'use client';
import React, { FC, useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { sem } from './semContents.json';
import { useRouter } from 'next/navigation';
import ActionButton from '@/app/components/sections/ActionButton';
import Image from 'next/image';

interface SemServicesProps {}

const SemServices: FC<SemServicesProps> = () => {
  const { lang } = useLanguage();
  const content = lang === 'ESP' ? sem.ESP : sem.ENG;
  const router = useRouter();

  const [selectedQuestion, setSelectedQuestion] = useState<string>('none');
  const handleSelectedQuestion = (question: string) => {
    setSelectedQuestion(prev => (prev === question ? 'none' : question));
  };

  const faqs = [
    content.faq.howItWorks,
    content.faq.budget,
    content.faq.platforms,
    content.faq.successMetrics,
  ];

  const handleContactRedirection = () => {
    router.push('/contact');
  };

  return (
    <div className="flex flex-col max-w-5xl  py-12">
      <h2 className="text-left text-3xl md:text-6xl font-bold mb-12">{content.title}</h2>

      <div className="flex flex-row w-full justify-between items-start mb-5">
        <div className="flex flex-col">
          <div className="flex flex-col max-w-lg mr-12 gap-3 pt-3">
            <p className="text-lg leading-relaxed">{content.description}</p>
            <ActionButton
              label={lang === 'ENG' ? 'Want to know more?' : '¿Quieres saber más?'}
              onClick={handleContactRedirection}
              align="left"
            />
          </div>
        </div>
        <div className="hidden md:block relative" style={{ width: '450px', height: '450px' }}>
          <Image
            src={"/contentImages/2seosem.png"}
            layout="fill"
            objectFit="contain"
            alt={`s2`}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col mt-3">
        {faqs.map(({ question, answer }) => (
          <div
            key={question}
            className="flex flex-row rounded-r mb-2 rounded-xl"
            onClick={() => handleSelectedQuestion(question)}
          >
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between items-center bg-indigo-500 w-full pr-8 cursor-pointer">
                <p className="p-5 text-lg font-medium pl-8">{question}</p>
                <div className="ml-2">
                  {selectedQuestion === question ? (
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
              {selectedQuestion === question && (
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

export default SemServices;
