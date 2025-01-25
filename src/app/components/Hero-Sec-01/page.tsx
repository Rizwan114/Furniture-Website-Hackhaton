import React from 'react';
import Image from 'next/image';

function HeroSec() {
  return (
    <div className='w-[1280px] h-[584px] mt-[60px] ml-[20px] bg-[#2A254B] flex '>

        <div className='w-[513px] h-[300px] mt-[60px] ml-[60px] gap-[41px] '>
            <h1 className='w-[513px] h-[190px] font-normal size-[32px] leading-[44.8px] text-[white] text-3xl p-12'>The furniture brand for the future, with timeless designs</h1>
                <div className='w-[170px] h-[56px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] ml-12 mt-12 bg-[#F9F9F926]'>
                    <button className='w-[106px] h-[24px] font-normal size-[16px] leading-[24px] text-[#FFFFFF] '>View collection</button>
                </div>
       

        

       <p className='w-[550px] h-[81px] mt-[150px] ml-[60px] font-normal size-[18px] leading-[27px] text-white'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
          with nice fonts, tasteful colors and a beautiful way to display things digitally 
          using modern web technologies.
        </p>
        </div> 
         
        <Image src={"/Chair.svg"} alt='Chair' width={520} height={584} className='ml-56'></Image>
       
      
    </div>
  )
}

export default HeroSec
