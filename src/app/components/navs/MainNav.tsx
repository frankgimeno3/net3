'use client';

import React, { FC } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useUI } from '@/app/context/UIContext';
 
const MainNav: FC = () => {
  const router = useRouter();
  const { isMenuOpen, setIsMenuOpen } = useUI();

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="flex flex-row w-full text-white p-12 sm:py-4 justify-between items-center"
      style={{ backgroundColor: 'rgb(28, 28, 28)' }}
    >
      <div
        className="flex flex-row text-xl md:text-4xl cursor-pointer"
        onClick={() => handleRedirection('/')}
        style={{ transitionDuration: '3000ms' }}
      >
        <div className="hidden sm:block">
          <Image src="/net3Complete.svg" alt="net3" height={150} width={150} />
        </div>

        <div className="block sm:hidden">
          <Image src="/net3Complete.svg" alt="net3" height={120} width={120} />
        </div>
      </div>

      <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default MainNav;
