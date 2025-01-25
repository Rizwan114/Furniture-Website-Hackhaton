import React from 'react'

function HeroSec() {
  return (
    <div className='w-[1440px] h-[481px] mt-6 bg-[#e4e4e4] p-1'>
        <div className='w-[1273px] h-[364px] mt-[52px] p-5 ml-[93px]  bg-[#FFFFFF]'>


            <div className='w-[571px] h-[114px] mt-[68px]  ml-[351px] gap-[16px]'>
                    <h1 className='w-[571px] h-[50px] font-normal size-[36px] leading-[50.4px] text-center text-[#2A254B] text-4xl'>Join the club and get the benefits</h1>
                    <p className='w-[470px] h-[48px] font-normal size-[16px] leading-[24px] text-center text-[#2A254B] ml-11 mt-3'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
            </div>

            <div className='w-[472px] h-[56px] mt-6 ml-[400px] flex '>
                <div className='w-[354px] h-[56px] text-black border border-black '>
                <input type="text" placeholder='your@email.com' className='w-[320px] h-[30px] text-center mt-[17px] ml-[32px] opacity-[20%]  font-normal size-[16px] leading-[21.6px]' />
                </div>
                <div className='w-[118px] h-[56px] pt-[16px] pr-[32px] pb-[16px] pl-[16px] bg-[#2A254B]'>
                    <p className='w-[55px] h-[24px] font-normal size-[16px] leading-[24px] text-white'>Sign up </p>
                </div>  
            </div>


        </div>
      
    </div>
  )
}

export default HeroSec
