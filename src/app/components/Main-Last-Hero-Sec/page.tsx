import React from 'react';
import Image from 'next/image';

function MainLastHeroSec() {
  return (
    <div className='w-[1440px] h-[603px] bg-white'>


                <div className='flex'>
        <div className='w-[536px] h-[225px] mt-[72px] ml-[84px] gap-[25px] pt-20 '>
            <h4 className='w-[514px] h-[68px]  font-normal size-[24px] leading-[33.6px] text-2xl text-[#2A254B] '>From a studio in London to a global brand with
            over 400 outlets</h4>
            <p className='w-[536px] h-[132px] mt-10 font-normal size-[16px] leading-[21.6px] text-[#505977]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
        {/* </div> */}
      
        <div className='w-[150px] h-[56px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px] bg-[#d4d0d0] mt-32 mr-96'>
            <button className='w-[90px] h-[24px] font-normal size-[16px] leading-[24px] text-[#2A254B]'>Get in touch</button>
        </div>

        </div>

        <Image src={"/Sec-Last-Sec-Image.svg"} alt='Chair' width={720} height={603}></Image>
            </div>

           
    </div>
  )
}

export default MainLastHeroSec
