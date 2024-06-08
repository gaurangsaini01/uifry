"use client"
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import data from "@/data.json"

function Hero({isSmall}:any) {
  return (
    <div className="md:max-w-[80%] px-5 md:px-0 md:space-x-10 max-w-[100vw] mx-auto  flex flex-col md:flex-row sm:w-screen sm:mt-10 relative z-50 ">
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
          {data.hero.heading}
        </h1>
        <p className="text-gray-500 z-20">
          {data.hero.subheading}
        </p>
        <div className="flex md:gap-16 gap-6">
          <button className="xl:px-10 sm:py-2 px-6 py-2 rounded-sm bg-black text-white text-[12px] xl:text-sm transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-500 ">
            Get Started -&gt;
          </button>
          <div className="flex items-center justify-center gap-4 hover:cursor-pointer">
            <FaRegCirclePlay size={25} /> <p className="hover:cursor-pointer ">Watch Video</p>
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
