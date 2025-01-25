import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='w-[1440px] h-[761px] bg-white'>

        <h1 className='w-[217px] h-[39px] mt-[80px] ml-[30px] font-normal size-[32px] leading-[39.36px] text-[#2A254B] text-3xl'>New ceramics</h1>
        


    <div className='flex'>
                                    {/* pictue 01 */}
        <div className='w-[305px] h-[462px] mt-[52px] ml-[30px] gap-[24px] '>
            <Image src={"/Chair2.svg"} alt='Chair' width={305} height={375}></Image>
            <div className='w-[154px] h-[63px] gap-[8px] mt-4'>
                <h6 className='w-[154px] h-[28px] font-normalsize-[20px] leading-[28px] text-[#2A254B]'>The Dandy chair</h6>
                <p className='w-[44px] h-[27px] font-normalsize-[18px] leading-[27px] text-[#2A254B]'>£250</p>
            </div>
        </div>

                                                {/* picture 02 */}
        <div className='w-[305px] h-[462px] mt-[52px] ml-[20px] gap-[24px] '>
            <Image src={"/old.svg"} alt='Chair' width={305} height={375}></Image>
            <div className='w-[154px] h-[63px] gap-[8px] mt-4'>
                <h6 className='w-[145px] h-[28px] font-normalsize-[20px] leading-[28px] text-[#2A254B]'> Rustic Vase Set</h6>
                <p className='w-[38px] h-[27px] font-normalsize-[18px] leading-[27px] text-[#2A254B]'>£155</p>
            </div>
        </div>

                                                  {/* picture 03 */}
        <div className='w-[305px] h-[462px] mt-[52px] ml-[20px] gap-[24px] '>
            <Image src={"/glass.svg"} alt='Chair' width={305} height={375}></Image>
            <div className='w-[154px] h-[63px] gap-[8px] mt-4'>
                <h6 className='w-[134px] h-[28px] font-normalsize-[20px] leading-[28px] text-[#2A254B]'>The Silky Vase</h6>
                <p className='w-[38px] h-[27px] font-normalsize-[18px] leading-[27px] text-[#2A254B]'>£125</p>
            </div>
        </div>

                                                   {/* picture 04 */}
        <div className='w-[305px] h-[462px] mt-[52px] ml-[20px] gap-[24px] '>
            <Image src={"/light.svg"} alt='Chair' width={305} height={375}></Image>
            <div className='w-[154px] h-[63px] gap-[8px] mt-4'>
                <h6 className='w-[145px] h-[28px] font-normalsize-[20px] leading-[28px] text-[#2A254B]'>The Lucy Lamp</h6>
                <p className='w-[43px] h-[27px] font-normalsize-[18px] leading-[27px] text-[#2A254B]'>£399</p>
            </div>
        </div>



    </div>

    <div className='w-[170px] h-[56px] bg-[#e4e4e4] mt-[60px] ml-[635px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px]'>
        <button className='w-[106px] h-[24px] font-normal size-[16px] leading-[24px] text-[#2A254B]'>View collection</button>
    </div>





    </div>
  )
}
