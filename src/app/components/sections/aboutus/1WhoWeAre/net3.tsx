import React, { FC } from 'react';
import Image from 'next/image';
const Net3: FC = ({ }) => {
  return (
    <>
   
            <div
              className="flex flex-row  mx-auto text-xl md:text-4xl  cursor-pointer items-end hidden md:block"
              style={{ transitionDuration: '3000ms' }}
            >
             <Image src={'/net3Complete.svg'}  alt={'net3'} height={350} width={350}/> 
             </div>
             <div
              className="flex flex-row  mx-auto mt-12 md:mt-36 text-xl md:text-4xl  cursor-pointer items-end block md:hidden"
              style={{ transitionDuration: '3000ms' }}
            >
             <Image src={'/net3Complete.svg'}  alt={'net3'} height={280} width={280}/> 
             </div>
    </>

  );
};

export default Net3;
