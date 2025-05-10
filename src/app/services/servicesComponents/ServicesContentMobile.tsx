import React, { FC } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { useRouter } from 'next/navigation';

interface ServicesContentMobileProps {

}

const ServicesContentMobile: FC<ServicesContentMobileProps> = ({ }) => {
  const { lang } = useLanguage();
  const router = useRouter()

  const handleRedirection  =(param:string)=>{
    router.push(param)
  }

  return (
    <div className=''>
      {lang === 'ESP' && <p className="text-4xl mb-5">Nuestros servicios</p>}
      {lang === 'ENG' && <p className="text-4xl mb-5">Our Services</p>}

      <button className='bg-transparent px-3 w-full cursor-pointer py-1 text-white border border-white rounded shadow my-2 '
      onClick={()=>{handleRedirection('/services/consultancy')}}>
        <p>Consultoría Estratégica</p>
      </button>
      <button className='bg-transparent px-3 w-full cursor-pointer py-1 text-white border border-white rounded shadow my-2 '
      onClick={()=>{handleRedirection('/services/newsletter')}}>
        <p>Newsletter layout, content, sending and analysis</p>
      </button>
      <button className='bg-transparent px-3 w-full cursor-pointer py-1 text-white border border-white rounded shadow my-2 '
      onClick={()=>{handleRedirection('/services/pr')}}>
        <p>Copywriting, article publishing in specialised media</p>
      </button>
      <button className='bg-transparent px-3 w-full cursor-pointer py-1 text-white border border-white rounded shadow my-2 '
      onClick={()=>{handleRedirection('/services/sem')}}>
        <p>SEM analytics, design, publication and analusis</p>
      </button>
      <button className='bg-transparent px-3 w-full cursor-pointer py-1 text-white border border-white rounded shadow my-2 '
      onClick={()=>{handleRedirection('/services/other')}}>
        <p>Other services</p>
      </button>
      

    </div>
  );
};

export default ServicesContentMobile;