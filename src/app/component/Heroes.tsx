import Image from "next/image";
import React from "react";
import HeroPic from "../../../Images/governor pic.png";

function Heroes() {
  return (
    <section className="md:flex items-center bg-cover opacity-105 overflow-hidden ">
      <div className="md:text-left text-center md:space-y-5 space-y-3 md:w-[50%] md:m-20 m-8">
        <h1 className="text-[#044E83] font-bold md:text-5xl text-3xl">
          Governor Sindh
        </h1>
        <h1 className="text-[#044E83] md:text-5xl text-2xl">
          Kamran Khan Tessori
        </h1>
        <h1 className="text-[#3599be] font-bold md:text-5xl text-2xl">
          Certified Cloud Applied Generative AI Engineer (GenEng)
        </h1>
        <h3 className="text-[#044E83] font-bold text-2xl">
          Earn up to $5,000 / month
        </h3>
        <h3 className="text-[#044E83] font-bold text-2xl">
          Now admissions are open in Hyderabad
        </h3>
        <div className="md:flex md:space-x-10">
          <button className="bg-[#044E83] text-white rounded-md md:w-[20%] w-full outline-none font-bold py-2 ">
            APPLY NOW
          </button>
          <div>
            <h1 className="text-[#044E83] font-bold text-xl">562,143</h1>
            <h3 className="text-[#044E83]">Accepted Applications</h3>
          </div>
        </div>
      </div>
      <div className="md:w-[50%]">
        <Image src={HeroPic} alt="HeroPic" className="w-full h-[800px]" />
      </div>
      
    </section>
  );
}

export default Heroes;