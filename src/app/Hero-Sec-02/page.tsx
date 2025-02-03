
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='bg-white px-6 py-12 md:py-16 lg:py-20'>
      <h1 className='text-3xl font-normal text-[#2A254B] text-center md:text-left md:ml-6 lg:ml-12'>New Ceramics</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 place-items-center'>
        {/* Picture 01 */}
        <div className='text-center'>
          <Image src={'/Chair2.svg'} alt='Chair' width={305} height={375} className='rounded-lg'/>
          <div className='mt-4'>
            <h6 className='text-lg font-medium text-[#2A254B]'>The Dandy Chair</h6>
            <p className='text-[#2A254B] text-md'>£250</p>
          </div>
        </div>

        {/* Picture 02 */}
        <div className='text-center'>
          <Image src={'/old.svg'} alt='Rustic Vase' width={305} height={375} className='rounded-lg'/>
          <div className='mt-4'>
            <h6 className='text-lg font-medium text-[#2A254B]'>Rustic Vase Set</h6>
            <p className='text-[#2A254B] text-md'>£155</p>
          </div>
        </div>

        {/* Picture 03 */}
        <div className='text-center'>
          <Image src={'/glass.svg'} alt='Silky Vase' width={305} height={375} className='rounded-lg'/>
          <div className='mt-4'>
            <h6 className='text-lg font-medium text-[#2A254B]'>The Silky Vase</h6>
            <p className='text-[#2A254B] text-md'>£125</p>
          </div>
        </div>

        {/* Picture 04 */}
        <div className='text-center'>
          <Image src={'/light.svg'} alt='Lucy Lamp' width={305} height={375} className='rounded-lg'/>
          <div className='mt-4'>
            <h6 className='text-lg font-medium text-[#2A254B]'>The Lucy Lamp</h6>
            <p className='text-[#2A254B] text-md'>£399</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-10'>
        <button className='bg-[#e4e4e4] text-[#2A254B] px-6 py-3 rounded-lg text-md font-medium hover:bg-[#d4d4d4] transition'>
          View Collection
        </button>
      </div>
    </div>
  );
}
