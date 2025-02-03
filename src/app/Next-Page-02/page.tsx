
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import HeroSec2 from "../Hero-Sec-02/page";
import Footer1 from "../Footer-1/page";
import HeroSec4 from "../components/Hero-Sec-04/page";

function SecPage() {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#2A254B] text-white text-center py-2 flex justify-center items-center gap-2">
        <TbTruckDelivery className="text-lg" />
        <p className="text-sm">Free delivery on all orders over £50 with code easter checkout</p>
        <MdClose className="ml-auto mr-4 cursor-pointer text-white text-lg" />
      </div>


      {/* Hero Section */}
      <section className="flex flex-wrap justify-center items-center gap-8 px-6 py-12 md:px-16">
        <Image src="/Next-Third-Image.svg" alt="Chair" width={400} height={400} className="w-full md:w-1/2" />
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl font-semibold text-[#2A254B]">The Dandy Chair</h1>
          <p className="text-2xl font-bold text-[#12131A] mt-2">£250</p>
          <p className="text-gray-600 mt-4">A timeless design, with premium materials...</p>
          <button className="mt-6 px-6 py-2 bg-[#2A254B] text-white rounded-lg">Add to Cart</button>
        </div>
      </section>

      <HeroSec2 />
      <Footer1 />
      <HeroSec4 />
    </div>
  );
}

export default SecPage;