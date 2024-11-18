"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../Images/logo.png";

function NavBar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const toggleMenu = ()=>{
    setIsHamburger(!isHamburger)
  }
  return (
    <>
      <header className="bg-[#044E83] flex justify-between items-center p-5">
        <div className="font-bold text-blue-100 md:flex hidden md:text-2xl text-xl md:px-16">
          Tuition Free Education Program on Latest Technologies
        </div>
        <div className="font-bold text-blue-100 md:hidden flex px-16">
          Tuition Free Program
        </div>
        <nav
          className={`text-white text-xl md:space-x-4  ${
            isHamburger
              ? "absolute flex flex-col h-screen right-0 top-0 p-20 space-y-8 bg-[#044E83]"
              : "md:flex hidden"
          }`}
        >
          <Link href={"/#"}>Home</Link>
          <Link href={"/apply"}>Apply</Link>
          <Link href={"/jobs"}>Jobs</Link>
          <Link href={"/result"}>Result</Link>
        </nav>
        <label className="md:hidden">
          <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
            <input className="hidden peer" type="checkbox" onClick={toggleMenu}/>
            <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
            <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
            <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
          </div>
        </label>
      </header>
      <Image src={logo} alt="logo" className="w-20 absolute top-5 z-20" />
    </>
  );
}

export default NavBar;