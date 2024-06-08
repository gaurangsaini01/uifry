"use client"
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

function Hero({isSmall}:any) {
  return (
    <div className="sm:max-w-[80%] space-x-10 max-w-[100vw] mx-auto  flex flex-col md:flex-row sm:w-screen sm:mt-10 relative z-50 ">
      <img
        src="/star3.png"
        width={40}
        className="absolute left-[-100px] top-[-50px]"
        alt=""
      />
      <div className="md:max-w-[50%] w-full relative flex flex-col gap-6">
        <img
          src="/bg.png" width={isSmall?200:300}
          className="absolute  right-[150px] top-[-5rem] z-10"
          alt=""
        />
        <h1 className=" xl:text-6xl md:text-4xl text-3xl font-bold z-20">
          Make The Best Financial Decisions
        </h1>
        <p className="text-gray-500 z-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua parca beta
          lilo saa.
        </p>
        <div className="flex md:gap-16 gap-10">
          <button className="md:px-10 sm:py-2 px-6 py-2 rounded-sm bg-black text-white font- transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-500 ">
            Get Started -&gt;
          </button>
          <div className="flex items-center justify-center gap-4 hover:cursor-pointer">
            <FaRegCirclePlay size={25} /> <p className="hover:cursor-pointer">Watch Video</p>
          </div>
        </div>
        {!isSmall && <div>
          <img src="/wrapper.jpg" alt="" />
        </div>}
      </div>
      <div className="mt-10 md:mt-0">
        <img src="/iphone.png" className=" w-[670px] " alt="" />
      </div>
    </div>
  );
}

export default Hero;
