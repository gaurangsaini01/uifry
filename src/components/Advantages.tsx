"use client";
import React from "react";
import data from "@/data.json";
import Advantage from "./Advantage";

function Advantages({isSmall}:any) {
  // console.log(data)
  return (
    <section className="flex flex-col ">
      <div className="max-w-[100vw] md:max-w-[80%] flex  flex-col md:flex-row mx-auto px-5 md:px-0 ">
        <div className="md:w-[50%] w-full relative md:pt-10 flex flex-col justify-center">
          <div>
            <h2 className="text-[#FF5555] md:text-[18px] text-[14px] mb-2 text-center md:text-left font-semibold tracking-wider">
              ADVANTAGES
            </h2>
            <h1 className="md:text-5xl text-3xl font-bold text-center md:text-left">
              Why Choose Uifry ?
            </h1>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <Advantage
              imgPath={"/bell.svg"}
              heading={"Clever Notifications"}
              content={
                "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
              }
            />
          </div>
        </div>
        <div className="md:w-[50%] w-full relative z-50 mt-8 md:mt-0">
          <img src="/star 1.png" className="absolute right-[-170px]" alt="" />
          <img src="/middleiphone.svg" className="relative z-50" alt="" />
          <img
            src="/bg.png"
            className={`absolute md:top-40 top-20 left-[-50px] z-10`}
            alt=""
          />
        </div>
      </div>
      <div className="max-w-[100vw] md:max-w-[80%] flex gap-6 flex-col-reverse md:flex-row mx-auto px-5 md:px-0 ">
        <div className="md:w-[50%] w-full relative z-40 mt-8 md:mt-0">
          {!isSmall && <img src="/star3.png" className="absolute right-0" alt="" />}
          <img src="/features.svg" className="relative z-50" alt="" />
          <img
            src="/bg.png"
            className={`absolute md:top-40 top-20 left-[-50px] z-10`}
            alt=""
          />
        <img src="/visa.svg" className="md:w-56 w-32 absolute border-2 top-[28%] right-[27%] z-50" alt="" />
        </div>
        <div className="md:w-[50%] w-full relative flex flex-col justify-center">
          <div className="flex flex-col">
            <Advantage
              imgPath={"/mg.svg"}
              heading={"Fully Customizable"}
              content={
                "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
              }
            />
          </div>
          <img src="star 1.png" className="absolute bottom-20 right-10" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Advantages;
