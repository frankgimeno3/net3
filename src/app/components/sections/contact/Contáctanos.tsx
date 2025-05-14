import { useLanguage } from '@/app/context/LanguageContext';
import React, { FC } from 'react';

 
const Contáctanos: FC = () => {
  const { lang } = useLanguage();  

   return (
    <div className=' '>
      <div className='flex flex-col w-full text-center' style={{ height: '500px' }}>
        {lang == "ESP" && (
          <div className='flex flex-row mt-24 text-6xl text-white mx-auto'>
            <p className='hover:text-yellow-300'>C</p>
            <p className='hover:text-yellow-300'>o</p>
            <p className='hover:text-yellow-300'>n</p>
            <p className='hover:text-yellow-300'>t</p>
            <p className='hover:text-yellow-300'>á</p>
            <p className='hover:text-yellow-300'>c</p>
            <p className='hover:text-yellow-300'>t</p>
            <p className='hover:text-yellow-300'>a</p>
            <p className='hover:text-yellow-300'>n</p>
            <p className='hover:text-yellow-300'>o</p>
            <p className='hover:text-yellow-300'>s</p>
          </div>
        )}

        {lang == "ENG" && (
          <div className='flex flex-row mt-24 text-6xl text-white mx-auto'>
            <p className='hover:text-yellow-300'>C</p>
            <p className='hover:text-yellow-300'>o</p>
            <p className='hover:text-yellow-300'>n</p>
            <p className='hover:text-yellow-300'>t</p>
            <p className='hover:text-yellow-300'>a</p>
            <p className='hover:text-yellow-300'>c</p>
            <p className='hover:text-yellow-300'>t</p>
            <p className='hover:text-yellow-300 pl-8'>u</p>
            <p className='hover:text-yellow-300'>s</p>
          </div>
        )}

        <div className='flex flex-col mx-auto text-2xl mt-16 '>
        <p className='text-center md:text-left font-bold mx-auto'>info@net<span className='text-red-500'>3</span>.com</p>
        <p className='text-center md:text-left font-bold mx-auto'>+34 - 93 412 07 64</p>
        </div>

         {/* <div className=" px-36">
          <form className="flex flex-col space-y-4">
          <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="px-4 py-2 text-gray-100 bg-transparent border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              className="px-4 py-2 text-gray-100 bg-transparent border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="text"
              name="cargo"
              placeholder="Cargo"
              className="px-4 py-2 text-gray-100 bg-transparent border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="px-4 py-2 text-gray-100 bg-transparent border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              rows={4}
              className="px-4 py-2 text-gray-100 bg-transparent border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="bg-white bg-opacity-10 text-white py-2 px-6 rounded shadow-md border border-gray-100 hover:bg-opacity-20 transition duration-300 ease-in-out"
            >
              Enviar
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contáctanos;
