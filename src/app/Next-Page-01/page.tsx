import React from 'react';
import Header from '../components/Header-1/page';
import Footer from '../Footer-1/page';
import Hero2 from '../Hero-Sec-02/page';
import Image from 'next/image';
import { CiCircleCheck } from "react-icons/ci";
import MainFooter from '../components/Main-Footer/page';





export default function NextPage() {
  return (
    <div >
      <Header/>   

      <div id='background'>
          <div className='pt-3 mt-6'>
      <div className='w-[630px] h-[444px] mt-[130px] pt-9 ml-[730px] bg-[#FFFFFF]'>
          <div className='w-[513px] h-[137px] mt-[48px] ml-[56px] gap-[20px]'>
              <h1 className='w-[550px] h-[90px] font-normal size-[32px] leading-[44.8px]  text-black text-4xl'>Luxury homeware for people who love timeless design quality</h1>
              <p className='w-[343px]  h-[27px] font-normal size-[18px] leading-[27px]  text-[#5B5676] text-lg mt-6'>Shop the new Spring 2022 collection today</p>
          </div>

          <div className='w-[170px] h-[56px]  mr-56 bg-[#e4e4e4] mt-[130px] ml-[56px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px]'>
            <button className='w-[106px] h-[24px] font-normal size-[16px] leading-[24px] text-[#2A254B]'>View collection</button>
          </div>
      </div>
          </div>
        </div> 


        <Footer/>
        <Hero2/>


        <div className='w-[1440px] h-[598px] pt-[60px] pr-[80px] pb-[60px] pl-[80px] gap-[16px] bg-[#FFFFFF] flex'>

          <div className='w-[634px] h-[478px] bg-[#2A254B] '>
            <div className='w-[495px] h-[99px] mt-[64px] ml-[64px] gap-[12px] pt-16'>
              <h1 className='w-[383px] h-[39px] font-normal size-[32px] leading-[39.36px] text-white text-3xl'>It started with a small idea</h1>
                <p className='w-[410px] h-[48px] font-normal size-[18px] leading-[24.3px] mt-7 text-white'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                <div className='w-[170px] h-[56px] bg-[#F9F9F926] mt-[140px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px]'>
                    <button className='w-[106px] h-[24px] font-normal size-[16px] leading-[24px] text-white'>View collection</button>
                </div>
            </div>
          </div>
            <Image src={"/Yellow-Sofa.svg"} alt='Sofa' width={630} height={478}></Image>
        </div>


        <div id='NextBack'>
          <div className='w-[494px] h-[165px] mt-[97px] ml-[473px] gap-[30px]-500'>
            <h1 className='w-[494px] h-95px] font-normal size-[32px] leading-[44.8px] text-center text-white text-3xl'>Join the club and get the benefits</h1>
            <p className='w-[410px] h-[54px] font-normal size-[18px] ml-12 leading-[27px] text-center mt-4 text-white'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
         
                 {/* 01 */}
          <div className='w-[442px] h-[24px] gap-[36px] flex hover:cursor-pointer'>
            <div className='w-[140px] h-[24px] gap-[8px] mt-5 flex justify-center items-center'>
            <CiCircleCheck className='w-[16px] h-[16px] text-white' />
            <p className='w-[115px] h-[24px] font-normal size-[16px] leading-[24px] text-center text-white'>Exclusive offers</p>
          </div>
          



                      {/* 02 */}
         <div className='w-[442px] h-[24px] gap-[36px] hover:cursor-pointer'>
            <div className='w-[140px] h-[24px] gap-[8px] mt-5 flex justify-center items-center'>
            <CiCircleCheck className='w-[16px] h-[16px] text-white' />
            <p className='w-[90px] h-[24px] font-normal size-[16px] leading-[24px] text-center text-white'>Free events</p>
          </div>
          </div>


            
                      {/* 03 */}
         <div className='w-[442px] h-[24px] gap-[36px] hover:cursor-pointer'>
            <div className='w-[140px] h-[24px] gap-[8px] mt-5 flex justify-center items-center'>
            <CiCircleCheck className='w-[16px] h-[16px] text-white' />
            <p className='w-[130px] h-[24px] font-normal size-[16px] leading-[24px] text-center text-white'>Large discounts</p>
          </div>
          </div>

          </div>
          </div>


          <div className='w-[472px] h-[56px] mt-6 ml-[500px] flex '>
                <div className='w-[354px] h-[56px] bg-slate-200 text-black border border-black '>
                <input type="text" placeholder='your@email.com' className='w-[320px] h-[30px] text-white text-left mt-[17px] ml-[32px] opacity-[20%]  font-normal size-[16px] leading-[21.6px]' />
                </div>
                <div className='w-[118px] h-[56px] pt-[16px] pr-[32px] pb-[16px] pl-[16px] bg-[#2A254B] hover:cursor-pointer'>
                    <p className='w-[55px] h-[24px] font-normal size-[16px] leading-[24px] text-white'>Sign up </p>
                </div>  
            </div>

        </div>

        <MainFooter/>


    </div>
  )
}
