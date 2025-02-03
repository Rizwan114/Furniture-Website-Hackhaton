
import React from 'react';
import Image from 'next/image';

function HeroSec() {
  return (
    <div className='w-full h-auto mt-10 bg-[#2A254B] flex flex-col md:flex-row items-center p-6 md:p-12'>
      
      <div className='max-w-lg text-center md:text-left'>
        <h1 className='text-white text-3xl md:text-4xl font-semibold leading-snug'>
          The furniture brand for the future, with timeless designs
        </h1>
        
        <div className='mt-6'>
          <button className='bg-white text-[#2A254B] px-6 py-3 font-medium text-lg rounded-md hover:bg-opacity-90 transition'>
            View Collection
          </button>
        </div>
        
        <p className='text-white mt-8 text-lg leading-relaxed'>
          A new era in eco-friendly furniture with Avelon, the French luxury retail brand
          with tasteful colors, elegant typography, and modern web technologies.
        </p>
      </div>
      
      <div className='mt-10 md:mt-0 md:ml-16'>
        <Image src='/Chair.svg' alt='Chair' width={520} height={584} className='w-full max-w-sm md:max-w-none' />
      </div>
      
    </div>
  );
}

export default HeroSec;