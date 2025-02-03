
import React from 'react';
import Image from 'next/image';

function HeroSec() {
  return (
    <div className='w-full bg-white p-6 md:p-12'>
      <h1 className='text-3xl font-semibold text-[#2A254B] text-center md:text-left mb-10'>Our popular products</h1>

      <div className='flex flex-col md:flex-row justify-center gap-12'>
        {/* Product 1 */}
        <div className='max-w-xs md:max-w-md text-center'>
          <Image src='/Sofa.svg' alt='Sofa' width={630} height={375} className='w-full rounded-lg' />
          <h6 className='text-xl font-medium text-[#2A254B] mt-3'>The Poplar suede sofa</h6>
          <p className='text-lg text-[#2A254B]'>£980</p>
        </div>

        {/* Product 2 */}
        <div className='max-w-xs text-center'>
          <Image src='/Chair2.svg' alt='Chair' width={305} height={375} className='w-full rounded-lg' />
          <h6 className='text-xl font-medium text-[#2A254B] mt-3'>The Dandy chair</h6>
          <p className='text-lg text-[#2A254B]'>£250</p>
        </div>

        {/* Product 3 */}
        <div className='max-w-xs text-center'>
          <Image src='/Small-Chair.svg' alt='Small Chair' width={305} height={375} className='w-full rounded-lg' />
          <h6 className='text-xl font-medium text-[#2A254B] mt-3'>The Dandy chair</h6>
          <p className='text-lg text-[#2A254B]'>£250</p>
        </div>
      </div>

      <div className='flex justify-center mt-12'>
        <button className='bg-gray-200 text-[#2A254B] px-6 py-3 font-medium text-lg rounded-md hover:bg-gray-300 transition'>
          View collection
        </button>
      </div>
    </div>
  );
}

export default HeroSec;