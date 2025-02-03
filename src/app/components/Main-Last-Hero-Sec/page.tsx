
import React from 'react';
import Image from 'next/image';

function MainLastHeroSec() {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Text Content */}
        <div className="max-w-lg space-y-6 text-center lg:text-left">
          <h4 className="text-2xl md:text-3xl font-semibold text-[#2A254B]">
            From a studio in London to a global brand with over 400 outlets
          </h4>
          <p className="text-[#505977] text-base md:text-lg leading-relaxed">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /><br />
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <div className="mt-6">
            <button className="bg-gray-300 text-[#2A254B] py-3 px-6 rounded-lg font-medium hover:bg-gray-400 transition">
              Get in touch
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-auto">
          <Image src="/Sec-Last-Sec-Image.svg" alt="Chair" width={720} height={603} className="w-full max-w-[720px] rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default MainLastHeroSec;
