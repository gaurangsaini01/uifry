"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

function Navbar({ isSmall, isOpen, menutoggle }: any) {
  return (
    <div className="sm:max-w-[100%] md:max-w-[80%] max-w-screen md:mx-auto flex justify-between p-10 relative">
      <div className="flex items-center md:gap-20 ">
        <div className="flex gap-1 hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out">
          <img src="/logo.png" alt="" />
          <h1 className="font-bold text-4xl relative font-clash">
            uifry<sup className="text-[6px] absolute top-3 font-clash">TM</sup>
          </h1>
        </div>
        {!isSmall && (
          <ul className="flex  gap-8 justify-center items-center">
            <li className="font-medium font-clash text-[20px] hover:cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:text-[#ff5555] hover:font-semibold">
              Home
            </li>
            <li className="font-medium font-clash text-[20px] hover:cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:text-[#ff5555] hover:font-semibold">
              About Us
            </li>
            <li className="font-medium font-clash text-[20px] hover:cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:text-[#ff5555] hover:font-semibold">
              Pricing
            </li>
            <li className="font-medium font-clash text-[20px] hover:cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:text-[#ff5555] hover:font-semibold">
              Features
            </li>
          </ul>
        )}
      </div>
      {!isSmall && (
        <div>
          <button className="px-10 py-2 rounded-sm bg-black text-white transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-500 font-clash">
            Download
          </button>
          <img
            src="/star 1.png"
            width={50}
            className="absolute right-[-70px] top-[50px]"
          />
        </div>
      )}
      {isSmall && (
        <div onClick={menutoggle}>
          {!isOpen && <RxHamburgerMenu size={40} />}
          {isOpen && <MdOutlineClose size={40} />}
        </div>
      )}
    </div>
  );
}

export default Navbar;
