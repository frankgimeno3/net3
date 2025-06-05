import { useLanguage } from '@/app/context/LanguageContext';
import React, { FC } from 'react';

const Contáctanos: FC = () => {
  const { lang } = useLanguage();

  const translations = {
    ESP: {
      title: 'Contáctanos',
      name: 'Tu nombre aquí',
      company: 'Empresa',
      position: 'Cargo',
      email: 'Correo electrónico',
      message: 'Mensaje',
      submit: 'Enviar',
    },
    ENG: {
      title: 'Contact us',
      name: 'Your name here',
      company: 'Company',
      position: 'Position',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
    },
  };

  const t = translations[lang] || translations['ESP']; // fallback to Spanish

  return (
    <div
      className='flex flex-col min-h-screen bg-white text-gray-500'
      style={{
        borderTopLeftRadius: "50% 100px",
        borderTopRightRadius: "50% 100px",
      }}
    >
      <div className='w-full max-w-6xl mx-auto flex flex-col text-center my-auto'>
        <div className='flex flex-row text-7xl md:text-7xl mx-auto'>
          <p>{t.title}</p>
        </div>

        <div className="px-36 pt-12">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder={t.name}
              className="px-4 py-2 text-gray-500 bg-transparent 
                placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="text"
              name="empresa"
              placeholder={t.company}
              className="px-4 py-2 text-gray-500 bg-transparent 
                placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="text"
              name="cargo"
              placeholder={t.position}
              className="px-4 py-2 text-gray-500 bg-transparent 
                placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              name="email"
              placeholder={t.email}
              className="px-4 py-2 text-gray-500 bg-transparent 
                placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <textarea
              name="message"
              placeholder={t.message}
              rows={4}
              className="px-4 py-2 text-gray-500 bg-transparent 
                placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="mt-6 text-md text-white px-8 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contáctanos;
