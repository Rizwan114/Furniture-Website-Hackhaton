import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from 'next/link';



function Header() {
  return (
    <div className='w-[1440px] h-[132px] bg-[#FFFFFF]'>


       
        <div className=' items-center w-[16px] h-[16px] mt-[16px] ml-[28] text-black hover:cursor-pointer'>
        <CiSearch />
       <div className='flex'> 
        <div>
        <MdOutlineShoppingCart  className='w-[16px] h-[16px] mt-[26px] ml-[1280px] bg-[FFFFFF] '  />
        </div>
        <div  className='w-[16px] h-[16px] mt-[26px] ml-[20px] bg-[FFFFFF] '>
        <FaRegCircleUser/>
        </div>
        </div>
        </div>

        <div className='w-[65px] h-[30px] mt-[20px] ml-[600px] font-normal size-[24px] leading-[29.52px] text-[#22202E]'>
            <h2>Avion</h2>
        </div>


        <div className='w-[900px] h-[22px] mt-[40px] ml-[300px] gap-[44px] flex items-center hover: cursor-pointer'>
            {/* <Link href={""} className='w-[80px] bg-orange h-[25px] font-normal size-[16px] leading-[21.6px]  text-[#726E8D]'></Link> */}

        <Link href="/" target='_blank' className='w-[80px] bg-orange h-[25px] font-normal size-[16px] leading-[21.6px]  text-[#726E8D]'>Plant pots</Link>
        <Link href="Hero-Sec-02" target='_blank' className='w-[66px]  h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]'>Ceramics</Link>
        <Link href={"Next-Page-02"} className='w-[44px] h-[22]px] font-normal size-[16px] leading-[21.6px]  text-[#726E8D]'>Tables</Link>
        <Link href={""} className='w-[45px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]'>Chairs</Link>
        <Link href={""} className='w-[64px] h-[22]px] font-normal size-[16px] leading-[21.6px]  text-[#726E8D]'>Crockery</Link>
        <Link href={"Next-Page-01"} className='w-[71px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]'>Tableware</Link>
        <Link href={""} className='w-[51px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]'>Cutlery</Link>
        <Link href={"fetch"} className='w-[80px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]'>Order Now</Link>
        </div> 
       

      
    </div>
  )
}

export default Header
