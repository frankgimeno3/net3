import { useLanguage } from '@/app/context/LanguageContext';
import React, { FC } from 'react';


const Contáctanos: FC = () => {
  const { lang } = useLanguage();

  return (
    <div className='flex flex-col min-h-screen  bg-white text-gray-500  '> 
    <div className='w-full max-w-6xl mx-auto flex flex-col text-center my-auto  ' >
      {lang == "ESP" && (
        <div className='flex flex-row text-3xl md:text-6xl  mx-auto'>
          <p>Contáctanos</p>
        </div>
      )}

      {lang == "ENG" && (
        <div className='flex flex-row text-6xl   mx-auto'>
          <p>Contact us</p>

        </div>
      )}

      <div className=" px-36 pt-12">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre aquí"
            className="px-4 py-2 text-gray-500 bg-transparent 
            placeholder-gray-400  border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            className="px-4 py-2 text-gray-500 bg-transparent 
            placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="text"
            name="cargo"
            placeholder="Cargo"
            className="px-4 py-2 text-gray-500 bg-transparent 
            placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="px-4 py-2 text-gray-500 bg-transparent 
            placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            rows={4}
            className="px-4 py-2 text-gray-500 bg-transparent 
            placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <button
            type="submit"
                className="mt-6   text-md text-white px-8 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contáctanos;
