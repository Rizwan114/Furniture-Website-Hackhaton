import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";
import HeroSec2 from "../Hero-Sec-02/page";
import Footer1 from "../Footer-1/page";
import HeroSec4 from "../components/Hero-Sec-04/page";

function SecPage() {
  return (
    <div className="w-[1440px] h-[41px] bg-[#2A254B] ">
      <div className="w-[500px] h-[18px] mt-[11px] ml-[516px] gap-[8px] p-3  flex">
        <TbTruckDelivery className=" w-[16px] h-[16px] text-white" />
        <p className="w-[460px]  h-19px] font-normal size-[14px] leading-[18.9px] text-white">
          Free delivery on all orders over £50 with code easter checkout
        </p>
      </div>
      <MdClose className="w-[24px] h-[24px] mt-[8px] ml-[1400px] text-black" />

      {/* next Header */}

      <div className="w-[1440px] h-[80px] flex items-center">
        <h1 className="w-[65px] h-[30px] mt-[25px] ml-[150px] font-normal size-[24px] leading-[29.52px] text-[#22202E] text-3xl">
          Avion
        </h1>

        <nav className="w-[675px] h-[22px] mt-[29] ml-[297px] gap-[44px] flex">
          <Link
            href=""
            className="w-[80px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]"
          >
            Plant pots
          </Link>
          <Link
            href=""
            className="w-[66px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]"
          >
            Ceramics
          </Link>
          <Link
            href=""
            className="w-[44px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]"
          >
            Tables
          </Link>
          <Link
            href=""
            className="w-[64px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]"
          >
            Crockery
          </Link>
          <Link
            href=""
            className="w-[71px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]"
          >
            Tableware
          </Link>
          <Link
            href=""
            className="w-[51px] h-[22px] font-normal size-[16px] leading-[21.6px] text-[#726E8D]"
          >
            Cutlery
          </Link>
        </nav>

        <div className="w-[80px] h-[16px] mt-[30px] gap-[16px] flex ml-[250px]">
          <IoIosSearch className="w-[16px] h-[16px]" />
          <MdOutlineShoppingCart className="w-[16px] h-[16px]" />
          <FaRegUserCircle className="w-[16px] h-[16px]" />
        </div>
      </div>

      {/* Next Hero */}

      <div className="flex gap-20">
        <Image
          src={"/Next-Third-Image.svg"}
          alt="Chair"
          width={721}
          height={759}
        ></Image>

        <div className="w-[602px] h-[856px] mt-[51px] ml-[783]">
          <div className="w-[281p] h-[89px] mt-[40px] ml-[40px] gap-[13px] pt-20">
            <h1 className="w-[281px] h-[44px] font-normal size-[36px] leading-[44.28px] text-3xl text-[#2A254B] ">
              The Dandy Chair
            </h1>
            <p className="w-[59px] h-[32px] font-normal size-[24px] leading-[32.4px] text-[#12131A] mt-3">
              £250
            </p>
          </div>

          <div className="w-[602px] h-[251px] mt-[143px] p-[40px] gap-[16px] ">
            <div className="w-[522px] h-[188px] gap-[16px]">
              <h6 className="w-[88px] h-[20px] font-normal size-[16px] leading-[19.16px] text-[#2A254B]">
                Description
              </h6>
              <p className="w-[498px] h-[66px] font-normal size-[15px] leading-[21.6px] text-[#505977] mt-3">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>
              <p className="w-[498px] h-[66px] font-normal size-[16px] leading-[21.6px] text-[#505977] mt-3">
                Premium material <br />
                Handmade upholstery <br />
                Quality timeless classic <br />
              </p>
            </div>
          </div>

          <div className="w-[602px] h-[134px]">
            <div className="w-[241px] h-[99px] mt-[20px] ml-[40px] gap-[28px]">
              <h6 className="w-[89px] h-[20px]  font-normal size-[16px] leading-[19.16px] text-[#2A254B]">
                Dimensions
              </h6>
              <div className="w-[241px] h-[22px] gap-[57px] mt-2 flex">
                <p className="w-[43px] h-[17px] font-normal size-[14px] leading-[17.22px] text-[#2A254B]">
                  Height
                </p>
                <p className="w-[40px] h-[17px] font-normal size-[14px] leading-[17.22px] text-[#2A254B]">
                  Width
                </p>
                <p className="w-[41px] h-[17px] font-normal size-[14px] leading-[17.22px] text-[#2A254B]">
                  Depth
                </p>
              </div>

              <div className="w-[241px] h-[22px] gap-[57px] mt-2 flex">
                <p className="w-[44px] h-[17px] font-normal size-[14px] leading-[17.22px] text-[#2A254B]">
                  110cm
                </p>
                <p className="w-[39px] h-[17px] font-normal size-[14px] leading-[17.22px] text-[#2A254B]">
                  75cm
                </p>
                <p className="w-[43px] h-[17px] font-normal size-[14px] leading-[17.22px] text-[#2A254B]">
                  50cm
                </p>
              </div>
            </div>
          </div>

          {/* add Cart */}
          <div className="w-[602px] h-[115px]">
            <div className="w-[209px] h-[46px] mt-[27px] ml-[40px] ga-[22px] flex gap-5">
              <p className="w-[65px] h-[20px] font-normal size-[16px] leading-[19.68px] mt-2 text-xl text-[#2A254B]">
                Amount:
              </p>
              <div className="w-[180px]  h-[30px] flex justify-between mt-[5px] pr-[16px] pb-[12px] pl-[16px] bg-[#F9F9F9] ">
                <p className="w-[40px] h-[122px] font-normal size-[16px] leading-[21.6px] text-[#2A254B] flex ">
                  - 1 +
                </p>

                <div className="w-[143px] h-[56px] mt-[27] ml-[250px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px] bg-[#2A254B]">
                  <button className="w-[79px] h-[24px] font-normal size-[16px] leading-[24px] text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroSec2 />
      <Footer1 />
      <HeroSec4 />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="flex bg-[#2A254B]">
        <div className="w-[152px] h-[112] mt-[119px] ml-[80] gap mr-24  px-[100px] mx-[50px]">
          <h1 className="w-[97px] h-[50] mt-[53] ml-[80x] font-normal   text-white">
            Avion
          </h1>
          <p className="w-[150px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            21 New York Street
          </p>
          <p className="w-[100px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-2">
            New York City
          </p>
          <p className="w-[200px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-2">
            United States of America
          </p>
          <p className="w-[60px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-2">
            432 34
          </p>
        </div>

        {/* 01 */}

        <div className="w-[108px] h-[175px] mt-[58px] ml-[82px] gap[12px] text-sm">
          <p className="w-[43px] h-[20px] font-normal size-[16px] leading-[19.68px] text-white mt-6">
            Menu
          </p>
          <p className="w-[90px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            New arrivals
          </p>
          <p className="w-[95px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Best sellers
          </p>
          <p className="w-[120px] h-[20px] font-normal size-[16px] leading-[19.68px] text-white mt-3">
            Recently viewed
          </p>
          <p className="w-[130px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Popular this week
          </p>
          <p className="w-[85px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            All products
          </p>
        </div>

        {/* 02 */}

        <div className="w-[108px] h-[175px] mt-[58px] ml-[82px] gap[12px] text-sm">
          <p className="w-[84px] h-[20px] font-normal size-[16px] leading-[19.68px] text-white mt-6">
            Categories
          </p>
          <p className="w-[56px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Crockery
          </p>
          <p className="w-[55px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Furniture
          </p>
          <p className="w-[67px] h-[20px] font-normal size-[16px] leading-[19.68px] text-white mt-3">
            Homeware
          </p>
          <p className="w-[80px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Plant pots
          </p>
          <p className="w-[40px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Chairs
          </p>
          <p className="w-[56px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Crockery
          </p>
        </div>

        {/* 01 */}
        <div className="w-[108px] h-[175px] mt-[58px] ml-[82px] gap[12px] text-sm">
          <p className="w-[105px] h-[20px] font-normal size-[16px] leading-[19.68px] text-white mt-6">
            Our company
          </p>
          <p className="w-[65px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            About us
          </p>
          <p className="w-[62px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Vacancies
          </p>
          <p className="w-[80px] h-[20px] font-normal size-[16px] leading-[19.68px] text-white mt-3">
            Contact us
          </p>
          <p className="w-[44px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Privacy
          </p>
          <p className="w-[110px] h-[19px] font-normal size-[14px] leading-[18.9px] text-white mt-3">
            Returns policy
          </p>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}

export default SecPage;
