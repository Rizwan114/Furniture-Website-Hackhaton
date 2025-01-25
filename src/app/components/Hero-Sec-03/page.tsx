import React from 'react';
import Image from 'next/image';

function HeroSec() {
  return (
    <div className='w-[1440px] h-[744px] bg-white'>

      <h1 className='w-[330px] h-[45px] mt-[64px] ml-[30px] font-normal size-[32px] leading-[44.8px] text-[#2A254B] text-3xl'>Our popular products</h1>

        <div className='flex gap-12'>

              {/* picture 01 */}
          <div className='w-[630px] h-[462px] mt-[134px] ml-[30] gap-[24px]'>
            <Image src={"/Sofa.svg"} alt='Sofa' width={630} height={375}></Image>
            <div className='w-209px] h-[63px] gap-[8px]'>
              <h6 className='w-[209px] h-[28px] font-normal size-[20px] leading-[28px] mt-3 text-[#2A254B]'>The Poplar suede sofa</h6>
              <p className='w-[46px] h-[27px] font-normal size-[18px] leading-[27px] mt-1 text-[#2A254B]'>£980</p>
            </div>
          </div>

                        {/* picture 02 */}
          <div className='w-[305px] h-[462px] mt-[134px] gap-[24px]'>
            <Image src={"/Chair2.svg"} alt='Chair' width={305} height={375}></Image>
            <div className='w-209px] h-[63px] gap-[8px]'>
              <h6 className='w-[154px] h-[28px] font-normal size-[20px] leading-[28px] mt-3 text-[#2A254B]'>The Dandy chair</h6>
              <p className='w-[44px] h-[27px] font-normal size-[18px] leading-[27px] mt-1 text-[#2A254B]'>£250</p>
            </div>
          </div>


                        {/* picture 03 */}
           <div className='w-[305px] h-[462px] mt-[134px] gap-[24px]'>
            <Image src={"/Small-Chair.svg"} alt='Small-Chair' width={305} height={375}></Image>
            <div className='w-209px] h-[63px] gap-[8px]'>
              <h6 className='w-[154px] h-[28px] font-normal size-[20px] leading-[28px] mt-3 text-[#2A254B]'>The Dandy chair</h6>
              <p className='w-[44px] h-[27px] font-normal size-[18px] leading-[27px] mt-1 text-[#2A254B]'>£250</p>
            </div>
          </div>

        </div>


        <div className='w-[170px] h-[56px] bg-[#e4e4e4] mt-[60px] ml-[635px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px]'>
        <button className='w-[106px] h-[24px] font-normal size-[16px] leading-[24px] text-[#2A254B]'>View collection</button>
    </div>


    </div>
  )
}

export default HeroSec
