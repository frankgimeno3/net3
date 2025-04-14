'use client';

import React, { FC, useState } from 'react';
import NavContent from '../content/NavContent.json';
import 'flag-icons/css/flag-icons.min.css';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';   
import Image from 'next/image';

interface MainNavProps {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

const MainNav: FC<MainNavProps> = ({ section, setSection }) => {
  const router = useRouter();
  const { lang, changeLanguage } = useLanguage();  // Obtener lang del contexto
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRedirection = (redirection: string) => {
    setSection(redirection);
    router.push(redirection);
    setMenuOpen(false);
  };

  return (
    <nav className="flex flex-row w-full text-white px-5 py-6 sm:py-1 justify-between items-center bg-gray-950 bg-opacity-80">
      <div
        className="flex flex-row px-5 text-xl md:text-4xl  cursor-pointer"
        onClick={() => handleRedirection('/')}
        style={{ transitionDuration: '3000ms' }}
      >
       <Image src={'/net3Complete.svg'}  alt={'net3'} height={100} width={100}/> 
        <p className="text-white">.es</p>
      </div>

      <button
        className="block sm:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={30} />
      </button>

      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col sm:flex sm:flex-row sm:static absolute top-7 left-0 w-full sm:w-auto bg-gray-950 sm:bg-transparent text-md max-w-full`}
      >
        <div
          className={`pt-6 pb-5 px-3 text-center cursor-pointer ${section === 'services' ? 'text-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/services')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>{NavContent.services[lang]}</p>
        </div>

        <div
          className={`pt-6 pb-5 px-3 text-center cursor-pointer ${section === 'contact' ? 'text-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/contact')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>{lang === 'ENG' ? 'Contact us' : 'Contáctanos'}</p>
        </div>
        <div
          className="cursor-pointer py-5 px-3 rounded-full hover:bg-white hover:bg-opacity-20"
          onClick={() => setShowLangMenu(!showLangMenu)}
        >
          <span className={`fi ${lang === 'ESP' ? 'fi-es' : 'fi-gb'} rounded-full`} style={{ fontSize: '24px' }} />
        </div>
        {showLangMenu && (
          <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg flex flex-col max-w-full overflow-x-hidden">
            <div
              className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => {
                changeLanguage('ESP');
                setShowLangMenu(false);
              }}
            >
              <span className="fi fi-es rounded-full" style={{ fontSize: '24px' }} />
            </div>
            <div
              className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => {
                changeLanguage('ENG');
                setShowLangMenu(false);
              }}
            >
              <span className="fi fi-gb rounded-full" style={{ fontSize: '24px' }} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
