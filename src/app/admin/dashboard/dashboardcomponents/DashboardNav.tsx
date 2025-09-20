import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface DashboardNavProps {
  
}

const DashboardNav: FC<DashboardNavProps> = ({ }) => {
    const router = useRouter()
  return (
    <nav className='flex flex-row p-5 bg-blue-950 text-white items-center'>
        <p className='text-lg '
        onClick={()=>{router.push("/admin/dashboard")}}>Admin dashboard</p>
        <button className='cursor-pointer p-3 rounded-lg shadow-xl bg-white hover:bg-gray-100 text-gray-500 text-sm'>

        </button>
        </nav>
  );
};

export default DashboardNav;