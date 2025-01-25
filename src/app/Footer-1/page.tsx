import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiPurchaseTag } from "react-icons/bi";
import { LuSprout } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='w-[1440px] h-[355px] bg-white '>

        <h2 className='w-[366px] h-[34px] mt-[60px] ml-[529px] font-normal size-[24px] leading-[33.6px] text-[#2A254B]'>What makes our brand different</h2>


    <div className='flex '>
                {/* 1 */}
        <div className='w-[270px] h-[160px] mt-[145px] ml-[90px] gap-[16] bg-gray-100'>
            <div className='w--[24px] h-[24px]'>
            <TbTruckDelivery />
            </div>
            <div className='w-[270px] h-[84px] gap-[8px]'>
            <h6 className='w-[199px] h-[28px] font-normal size-[20px] leading-[28px] text-[#2A254B]'>Next day as standard</h6>
                <p className='w-[270px] h-[48px] font-normal size-[16px] leading-[24px] mt-3  text-[#2A254B]'>Order before 3pm and get your order
                the next day as standard</p>
            </div>
         </div>

            {/* 2 */}
            <div className='w-[266px] h-[160px] mt-[145px] ml-[40px] gap-[16px] bg-gray-100'>
            <div className='w-[24px] h-[24px]'>
            <IoIosCheckmarkCircleOutline />
            </div>
            <div className='w-[266px] h-[84px] gap-[8px]'>
            <h6 className='w-[205px] h-[28px] font-normal size-[20px] leading-[28px] text-[#2A254B]'>Made by true artisans</h6>
                <p className='w-[266px] h-[48px] font-normal size-[16px] leading-[24px] mt-3  text-[#2A254B]'>Handmade crafted goods made with
                real passion and craftmanship</p>
            </div>
           </div>


             {/* 3 */}
             <div className='w-[235px] h-[160px] mt-[145px] ml-[40px] gap-[16px] bg-gray-100'>
            <div className='w-[24px] h-[24px]'>
            <BiPurchaseTag />
            </div>
            <div className='w-[235px] h-[84px] gap-[8px]'>
                <h6 className='w-[196px] h-[28px] font-normal size-[20px] leading-[28px] text-[#2A254B]'>Unbeatable prices</h6>
                <p className='w-[235px] h-[48px] font-normal size-[16px] leading-[24px]  text-[#2A254B] mt-3'>For our materials and quality you won’t find better prices anywhere</p>
            </div>
           </div>


             {/* 4 */}
             <div className='w-[266px] h-[160px] mt-[145px] ml-[40px] gap-[16px] bg-gray-100'>
            <div className='w-[24px] h-[24px]'>
            <LuSprout />
            </div>
            <div className='w-[266px] h-[84px] gap-[8px]'>
            <h6 className='w-[196px] h-[28px] font-normal size-[20px] leading-[28px] text-[#2A254B]'>Recycled packaging</h6>
                <p className='w-[265px] h-[48px] font-normal size-[16px] leading-[24px] mt-3  text-[#2A254B]'>We use 100% recycled packaging to ensure our footprint is manageable</p>
            </div>
           </div>
        
      

    </div>
 </div>
  )
}

export default Footer
