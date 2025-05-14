'use client';
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext'; // Asegúrate de que esta ruta es correcta
import { useUI } from '@/app/context/UIContext'; // Usamos el contexto para manejar isMenuOpen y section
import NavContent from '../content/NavContent.json';

const BigMenu: FC = () => {
  const { lang, changeLanguage } = useLanguage();
  const { setIsMenuOpen, section, setSection } = useUI(); // ✅ Añadimos `section` aquí
  const [showLangMenu, setShowLangMenu] = useState(false);
  const router = useRouter();

  const handleRedirection = (redirection: string, newSection:string) => {
    router.push(redirection);
    setIsMenuOpen(false);
    setSection(newSection)
  };

  return (
    <div className="fixed top-16 mt-3 left-0 w-full h-full text-white z-50 flex">
      {/* Primer div con flex 3/4 */}
      <div
        className="flex flex-col flex-[3] w-full items-center justify-center border-r border-gray-500"
        style={{ backgroundColor: 'rgba(23, 23, 23, 0.99)' }}
      >
        <h1 className="text-4xl font-bold">HOME</h1>
        <h1 className="text-lg">Quién somos y qué hacemos</h1>
      </div>

      {/* Segundo div con flex 1/4 */}
      <div className="flex-[1] w-full flex flex-col items-center justify-center space-y-6 bg-zinc-900">
        <p className="font-bold text-4xl">MENÚ</p>

        <div
          className={`hover:bg-zinc-500 hover:bg-opacity-10 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'home' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/', 'home')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>Home</p>
        </div>

        <div
          className={`hover:bg-zinc-500 hover:bg-opacity-70 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'services' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/services', 'services')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>{NavContent.services[lang]}</p>
        </div>

        <div
          className={`hover:bg-zinc-500 hover:bg-opacity-70 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'contact' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/contact', 'services')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>{lang === 'ENG' ? 'Contact us' : 'Contáctanos'}</p>
        </div>

        <div
          className="cursor-pointer py-5 px-3 rounded-full hover:bg-white hover:bg-opacity-20"
          onClick={() => setShowLangMenu(!showLangMenu)}
        >
          <span
            className={`fi ${lang === 'ESP' ? 'fi-es' : 'fi-gb'} rounded-full`}
            style={{ fontSize: '24px' }}
          />
        </div>

        {/* Menú de selección de idioma */}
        {showLangMenu && (
          <div className="absolute bottom-36 right-36 mr-4 pb-6 bg-gray-800 rounded-lg shadow-lg flex flex-col max-w-full overflow-x-hidden">
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
    </div>
  );
};

export default BigMenu;
