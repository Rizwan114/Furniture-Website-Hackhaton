
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from 'next/link';

function Header() {
  return (
    <div className='w-full h-[132px] bg-white shadow-md flex flex-col items-center p-4 md:flex-row md:justify-between md:px-10'>
      
      {/* Logo */}
      <div className='text-2xl font-bold text-[#22202E]'>Avion</div>
      
      {/* Navigation Links */}
      <nav className='mt-4 md:mt-0 flex flex-wrap justify-center gap-6 text-gray-600'>
        <Link href='/' className='hover:text-black transition'>Plant pots</Link>
        <Link href="Hero-Sec-02" className='hover:text-black transition'>Ceramics</Link>
        <Link href='/components/Hero-Sec-03' className='hover:text-black transition'>Tables</Link>
        <Link href="Next-Page-02" className='hover:text-black transition'>Chairs</Link>
        <Link href="Next-Page-01" className='hover:text-black transition'>Crockery</Link>
        <Link href="/components/Hero-Sec-01" className='hover:text-black transition'>Tableware</Link>
        <Link href='/components/Hero-Sec-01' className='hover:text-black transition'>Cutlery</Link>
        <Link href='fetch' className='hover:text-black transition'>Order Now</Link>
        <Link href='cart' className='hover:text-black transition'>Check Your Order</Link>
      </nav>

      {/* Icons */}
      <div className='mt-4 md:mt-0 flex items-center gap-6 text-gray-700'>
        <CiSearch className='text-2xl cursor-pointer hover:text-black' />
        <MdOutlineShoppingCart className='text-2xl cursor-pointer hover:text-black' />
        <FaRegCircleUser className='text-2xl cursor-pointer hover:text-black' />
      </div>
    </div>
  );
}

export default Header;
