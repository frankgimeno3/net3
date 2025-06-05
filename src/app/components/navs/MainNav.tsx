'use client';

import React, { FC, useState } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

const MainNav: FC = () => {
  const router = useRouter(); 
  const { lang, changeLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
  };

  return (
<nav
  className="flex flex-row py-6 px-12 justify-between bg-white text-gray-800 fixed top-0 left-0 w-full z-50 shadow-md items-center"
  style={{ backgroundColor: 'rgb(28, 28, 28)' }}
>
      <div
        className="flex flex-row text-xl md:text-4xl cursor-pointer"
        onClick={() => handleRedirection('/')}
        style={{ transitionDuration: '3000ms' }}
      >
        <div className="hidden sm:block">
          <Image src="/net3Complete.svg" alt="net3" height={100} width={100} />
        </div>
        <div className="block sm:hidden">
          <Image src="/net3Complete.svg" alt="net3" height={80} width={80} />
        </div>
      </div>

      <div className="flex flex-row text-gray-200 text-md items-center relative">
        <p className="hover:text-white pr-12 cursor-pointer hidden md:flex" 
        onClick={() => handleRedirection('/services')}>
          {lang === 'ENG' ? 'Services' : 'Servicios'}
        </p>
        <p className="hover:text-white pr-12 cursor-pointer hidden md:flex"
                onClick={() => handleRedirection('/contact')}
>
          {lang === 'ENG' ? 'Contact' : 'Contacto'}
        </p>

         <div
          className="cursor-pointer py-2 px-3 rounded-full hover:opacity-90"
          onClick={() => setShowLangMenu(!showLangMenu)}
        >
          <span
            className={`fi ${lang === 'ESP' ? 'fi-es' : 'fi-gb'} rounded-full`}
            style={{ fontSize: '24px' }}
          />
        </div>

         {showLangMenu && (
          <div className="absolute top-full right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col z-[100] border border-gray-600">
            <div
              className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => {
                changeLanguage('ESP');
                setShowLangMenu(false);
              }}
            >
              <span className="fi fi-es rounded-full mr-2" style={{ fontSize: '24px' }} />
              Español
            </div>
            <div
              className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => {
                changeLanguage('ENG');
                setShowLangMenu(false);
              }}
            >
              <span className="fi fi-gb rounded-full mr-2" style={{ fontSize: '24px' }} />
              English
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
