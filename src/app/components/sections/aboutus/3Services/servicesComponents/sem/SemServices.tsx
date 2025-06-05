'use client';
import React, { FC, useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { sem } from './semContents.json';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';

interface SemServicesProps {}

const SemServices: FC<SemServicesProps> = () => {
  const { lang } = useLanguage();
  const content = lang === 'ESP' ? sem.ESP : sem.ENG;

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

  return (
    <div className="flex flex-col max-w-5xl mx-auto py-36 px-6">
      <h2 className="text-left text-6xl font-bold mb-12">{content.title}</h2>
      <p className="pt-8">{content.description}</p>
      <p className="pt-8 font-bold text-yellow-200">
        {content.process}
      </p>

      <div className=" my-12  ">
           <p className="font-bold pb-2">{content.faq.howItWorks.question}</p>
          {faqs.map(({ question, answer }) => (
            <div
              key={question}
              className="bg-white bg-opacity-20 pr-5 hover:bg-opacity-30 cursor-pointer rounded-r mb-1"
              onClick={() => handleSelectedQuestion(question)}
            >
              <div className="flex justify-between items-center">
                <p className="p-5">{question}</p>
                <div className="ml-2">
                  {selectedQuestion === question ? (
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
              {selectedQuestion === question && (
                <p className="mt-2 text-sm text-left text-white px-8 pb-8">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

     
   );
};

export default SemServices;
