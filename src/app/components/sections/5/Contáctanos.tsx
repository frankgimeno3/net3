import React, { FC } from 'react';

interface ContáctanosProps {
  lang: string;
}

const Contáctanos: FC<ContáctanosProps> = ({ lang }) => {
  return (
    <div className='flex flex-col w-full text-center' style={{ height: '500px' }}>
      {lang == "ESP" && <div className='flex flex-row my-auto text-9xl text-white mx-auto'>
        <p className='hover:text-teal-400'>C</p>
        <p className='hover:text-teal-400'>o</p>
        <p className='hover:text-teal-400'>n</p>
        <p className='hover:text-teal-400'>t</p>
        <p className='hover:text-teal-400'>á</p>
        <p className='hover:text-teal-400'>c</p>
        <p className='hover:text-teal-400'>t</p>
        <p className='hover:text-teal-400'>a</p>
        <p className='hover:text-teal-400'>n</p>
        <p className='hover:text-teal-400'>o</p>
        <p className='hover:text-teal-400'>s</p>
      </div>}

      {lang == "ENG" && <div className='flex flex-row my-auto text-9xl text-white mx-auto'>
        <p className='hover:text-teal-400'>C</p>
        <p className='hover:text-teal-400'>o</p>
        <p className='hover:text-teal-400'>n</p>
        <p className='hover:text-teal-400'>t</p>
        <p className='hover:text-teal-400'>a</p>
        <p className='hover:text-teal-400'>c</p>
        <p className='hover:text-teal-400'>t</p>
        <p className='hover:text-teal-400 pl-8'>u</p>
        <p className='hover:text-teal-400'>s</p>
      </div>}
    </div>
  );
};

export default Contáctanos;