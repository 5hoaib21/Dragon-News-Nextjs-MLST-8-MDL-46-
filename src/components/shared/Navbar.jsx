import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '../../assets/user.png';
import NavLink from '../shared/NavLink';

const Navbar = () => {
  return (
    <div className=' container mx-auto flex justify-between mt-5'>
    <div></div>
    <ul className='flex justify-between items-center gap-5 text-gray-700'>
      <li><NavLink href={'/'}>Home</NavLink></li>
      <li><NavLink href={'/about-us'}>About</NavLink></li>
      <li><NavLink href={'/career'}>Career</NavLink></li>
    </ul>

    <div className='flex items-center gap-5'>
      <Image src={userAvatar} width={60} height={60} alt='User Avatar' />
      <button className='btn btn-primary'><Link href={'/login'}>Log in</Link></button>
    </div>
    </div>
  );
};

export default Navbar;