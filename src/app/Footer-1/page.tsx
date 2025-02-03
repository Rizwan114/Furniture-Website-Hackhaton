
import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiPurchaseTag } from "react-icons/bi";
import { LuSprout } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='bg-white py-16 px-6 text-center'>
      <h2 className='text-2xl font-semibold text-[#2A254B] mb-10'>
        What makes our brand different
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
        {/* Feature 1 */}
        <div className='flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md'>
          <TbTruckDelivery className='text-4xl text-[#2A254B] mb-4' />
          <h6 className='text-lg font-semibold text-[#2A254B]'>Next day as standard</h6>
          <p className='text-sm text-[#2A254B] mt-2'>Order before 3pm and get your order the next day as standard.</p>
        </div>
        
        {/* Feature 2 */}
        <div className='flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md'>
          <IoIosCheckmarkCircleOutline className='text-4xl text-[#2A254B] mb-4' />
          <h6 className='text-lg font-semibold text-[#2A254B]'>Made by true artisans</h6>
          <p className='text-sm text-[#2A254B] mt-2'>Handmade crafted goods made with real passion and craftsmanship.</p>
        </div>
        
        {/* Feature 3 */}
        <div className='flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md'>
          <BiPurchaseTag className='text-4xl text-[#2A254B] mb-4' />
          <h6 className='text-lg font-semibold text-[#2A254B]'>Unbeatable prices</h6>
          <p className='text-sm text-[#2A254B] mt-2'>For our materials and quality, you won’t find better prices anywhere.</p>
        </div>
        
        {/* Feature 4 */}
        <div className='flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md'>
          <LuSprout className='text-4xl text-[#2A254B] mb-4' />
          <h6 className='text-lg font-semibold text-[#2A254B]'>Recycled packaging</h6>
          <p className='text-sm text-[#2A254B] mt-2'>We use 100% recycled packaging to ensure our footprint is manageable.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
