'use client';
import React, { FC } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { newsletter } from './newsletterContents.json';
import { useRouter } from 'next/navigation';
import ActionButton from '@/app/components/sections/ActionButton';

interface NewsletterServiceProps {}

const NewsletterService: FC<NewsletterServiceProps> = () => {
  const { lang } = useLanguage();
  const content = newsletter[lang];
  const router = useRouter();

  const handleContactRedirection = () => {
    router.push('/contact');
  };

  return (
    <div className="flex flex-col max-w-5xl mx-auto py-36 px-6">
      <h2 className="text-left text-6xl font-bold mb-12">{content.title}</h2>

      <p className="text-lg leading-relaxed mb-6">
        {content.paragraph_1.key_1}
        <span className="font-bold text-indigo-600"> {content.paragraph_1.key_span_1} </span>
        {content.paragraph_1.key_2}
      </p>

      <p className="text-lg leading-relaxed mb-12">
        <span className="font-bold text-indigo-600"> {content.paragraph_2.key_span_1} </span>
        {content.paragraph_2.key_1}
      </p>

      {content.faq.map(({ id, title, answer }) => (
        <div
          key={id}
          className="my-14 flex flex-row w-full justify-between items-start"
        >
          <div className="flex flex-col">
            <h3 className="text-left text-4xl font-bold mb-8 max-w-lg">
              {title}
            </h3>
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

export default NewsletterService;
