
import React from 'react';

function HeroSec() {
  return (
    <div className='bg-gray-200 py-10 px-4 flex justify-center'>
      <div className='bg-white max-w-4xl w-full p-8 rounded-lg shadow-lg text-center'>
        <h1 className='text-3xl md:text-4xl font-semibold text-gray-900'>
          Join the club and get the benefits
        </h1>
        <p className='text-gray-700 text-base md:text-lg mt-4'>
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>
        
        <div className='mt-6 flex flex-col md:flex-row items-center justify-center gap-4'>
          <input 
            type='email' 
            placeholder='your@email.com' 
            className='w-full md:w-80 px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700'
          />
          <button className='w-full md:w-auto bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition'>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;

