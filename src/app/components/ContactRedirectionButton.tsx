'use client';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ContactRedirectionButtonProps {
  lang: string;
}

const ContactRedirectionButton: FC<ContactRedirectionButtonProps> = ({ lang }) => {
  const router = useRouter();

  const handleContactRedirection = () => {
    router.push('/contact');
  };

  return (
    <button
      onClick={handleContactRedirection}
      className="items-center group rounded-full shadow-xl text-white bg-white bg-opacity-20  hover:py-3 hover:bg-opacity-30 text-md px-4 flex items-center py-2"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 fill-white   transition-all duration-700 ease-in-out"
        viewBox="0 0 24 24"
      >
        <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l7.445 4.963a1 1 0 001.11 0L20 8.489V18H4z" />
      </svg>

      <span
        className="max-w-0   overflow-hidden opacity-0 group-hover:max-w-xs group-hover:ml-1 group-hover:opacity-100 transition-all duration-700 ease-in-out"
      >
        {lang === 'ESP' && 'Contáctanos'}
        {lang === 'ENG' && 'Contact us'}
      </span>
    </button>
  );
};

export default ContactRedirectionButton;
