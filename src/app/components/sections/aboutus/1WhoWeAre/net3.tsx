import React, { FC } from 'react';
import Image from 'next/image';
const Net3: FC = ({ }) => {
  return (
    <>
    {/* <div className='flex flex-row pt-36 text-center text-7xl md:text-9xl font-bold mx-auto items-end font-montserrat relative'> 
      <p className=''>net</p>
      <p className='text-xl pb-3 px-1 pl-5'>three</p>  
      <p className='text-yellow-300'>.es</p>
      <p className='text-9xl absolute top-24 left-1/2 transform -translate-x-1/2 text-white ml-3 mt-6'>3</p>
    </div> */}
            <div
              className="flex flex-row px-5 mx-auto mt-36 text-xl md:text-4xl  cursor-pointer items-end"
              style={{ transitionDuration: '3000ms' }}
            >
             <Image src={'/net3Complete.svg'}  alt={'net3'} height={500} width={500}/> 
              <p className="text-white text-7xl">.es</p>
            </div>
    </>

  );
};

export default Net3;
