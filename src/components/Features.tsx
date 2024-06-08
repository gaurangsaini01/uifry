"use client";
import React from "react";
import Feature from "./Feature";
import data from "@/data.json";

function Features() {
  // console.log(data)
  return (
    <section className="max-w-[100vw] md:max-w-[80%] flex flex-col-reverse md:flex-row mx-auto mt-14 px-5 md:px-0 ">
      <div className="md:w-[50%] w-full relative z-50 mt-8 md:mt-0">
        <img src="/star3.png" className="absolute top-20" alt="" />
        <img src="/features.svg" alt="" />
      </div>
      <img src="/bg2.svg " className="absolute z-10 left-0" alt="" />
      <div className="md:w-[50%] w-full relative md:pt-10">
        <img
          src="/bg.png"
          className="absolute right-[-250px]"
          width={300}
          alt=""
        />
        <div>
          <h2 className="text-[#FF5555] md:text-[18px] text-[14px] mb-2 text-center md:text-left font-semibold tracking-wider">
            FEATURES
          </h2>
          <h1 className="md:text-5xl text-3xl font-bold text-center md:text-left">
            Uifry Premium
          </h1>
        </div>
        <div className="flex flex-col gap-10 mt-10">
          {data.features.map((feature) => {
            return (
              <Feature
                key={feature.id}
                imgPath={feature.icon}
                heading={feature.title}
                content={feature.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
