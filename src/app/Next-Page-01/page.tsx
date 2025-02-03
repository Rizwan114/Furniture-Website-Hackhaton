
import React from 'react';
import Footer from '../Footer-1/page';
import Image from 'next/image';
import { CiCircleCheck } from "react-icons/ci";

export default function NextPage() {
  return (
    <div className="bg-gray-100">
     

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-6">
        <div className="bg-white p-6 md:w-2/3 lg:w-1/2 text-center md:text-left shadow-md">
          <h1 className="text-2xl md:text-4xl font-semibold text-black">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Shop the new Spring 2022 collection today
          </p>
          <button className="mt-6 bg-gray-300 px-6 py-3 text-black rounded-md hover:bg-gray-400">
            View Collection
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white py-16 px-6">
        <div className="bg-indigo-900 text-white p-8 md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">It started with a small idea</h2>
          <p className="mt-4">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="mt-6 bg-indigo-700 px-6 py-3 rounded-md hover:bg-indigo-800">
            View Collection
          </button>
        </div>
        <Image src="/Yellow-Sofa.svg" alt="Sofa" width={630} height={478} className="md:w-1/2" />
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-900 text-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Join the club and get the benefits</h2>
        <p className="mt-4 max-w-md mx-auto">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <CiCircleCheck className="text-white" />
            <span>Exclusive offers</span>
          </div>
          <div className="flex items-center gap-2">
            <CiCircleCheck className="text-white" />
            <span>Free events</span>
          </div>
          <div className="flex items-center gap-2">
            <CiCircleCheck className="text-white" />
            <span>Large discounts</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="px-4 py-3 w-full md:w-auto border border-black text-black"
          />
          <button className="bg-indigo-700 px-6 py-3 rounded-md hover:bg-indigo-800">
            Sign Up
          </button>
        </div>
      </div>

      
      <Footer />
    </div>
  );
}

