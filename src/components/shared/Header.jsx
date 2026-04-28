import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { compareAsc, format } from "date-fns";
const Header = () => {
  return (
    <div className='text-center py-10 space-y-5'>
    <Image width={300} height={200} alt='logo' className='mx-auto' src={logo}/>
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMM dd, yyyy ")}</p>
    </div>
  );
};

export default Header;