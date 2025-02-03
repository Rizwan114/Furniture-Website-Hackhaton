
import React from 'react';

export default function MainFooter() {
  return (
    <div className='bg-[#2A254B] text-white py-10 px-6 md:px-12 lg:px-24'>
      <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
        {/* Menu */}
        <div>
          <h4 className='font-semibold text-lg mb-4'>Menu</h4>
          <ul className='space-y-2'>
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className='font-semibold text-lg mb-4'>Categories</h4>
          <ul className='space-y-2'>
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h4 className='font-semibold text-lg mb-4'>Our company</h4>
          <ul className='space-y-2'>
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        {/* Mailing List */}
        <div>
          <h4 className='font-semibold text-lg mb-4'>Join our mailing list</h4>
          <div className='flex items-center bg-gray-600 rounded-lg overflow-hidden'>
            <input
              type='email'
              placeholder='your@email.com'
              className='bg-transparent px-4 py-3 w-full outline-none text-white placeholder-gray-300'
            />
            <button className='bg-white text-[#2A254B] px-6 py-3 font-semibold'>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
