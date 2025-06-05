'use client';
import React, { FC } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { pr } from './prContents.json';
import { useRouter } from 'next/navigation';
import ActionButton from '@/app/components/sections/ActionButton';

interface PrServicesProps {}

const PrServices: FC<PrServicesProps> = () => {
  const { lang } = useLanguage();
  const content = pr[lang];
  const router = useRouter();

  const handleContactRedirection = () => {
    router.push('/contact');
  };

    const faqs = [
    {
      id: 'nota',
      title: content.faqs.nota.question,
      answer: content.faqs.nota.answer,
    },
    {
      id: 'cantidad',
      title: content.faqs.cantidad.question,
      answer: content.faqs.cantidad.answer,
    },
    {
      id: 'kit',
      title: content.faqs.kit.question,
      answer: content.faqs.kit.answer,
    },
  ];

  return (
    <div className="flex flex-col max-w-5xl mx-auto py-36 px-6">
      <h2 className="text-left text-6xl font-bold mb-12">{content.title}</h2>

      <p className="text-lg leading-relaxed mb-6">{content.intro}</p>
      <p className="text-lg leading-relaxed mb-6">{content.data_collection}</p>
      <p className="text-lg leading-relaxed mb-12">{content.content_kit}</p>

 
      {faqs.map(({ id, title, answer }) => (
        <div
          key={id}
          className="my-14 flex flex-row w-full justify-between items-start"
        >
          <div className="flex flex-col">
            <h3 className="text-left text-4xl font-bold mb-8 max-w-lg">{title}</h3>
            <div className="flex flex-col max-w-xl mr-12 gap-3">
              <p className="text-lg leading-relaxed">{answer}</p>
              <ActionButton
                label={lang === 'ENG' ? 'Want to know more?' : '¿Quieres saber más?'}
                onClick={handleContactRedirection}
                align="left"
              />
            </div>
          </div>
          <div className="w-96 h-96 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-xl shrink-0" />
        </div>
      ))}
    </div>
  );
};

export default PrServices;
