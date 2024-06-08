import React from "react";

function Card({ color, heading, subheading }: any) {
  return (
    <div className={`p-5 ${color ? "bg-[#FF5555]" : "bg-[#ffffff]"} md:w-[95%] w-full flex flex-col  rounded-md gap-4 md:mx-0`}>
      <h2 className={`text-${color ? "white" : "black"} font-semibold text-xl md:text-2xl font-clash`}>{heading}</h2>
      <p className={`text-${color ? "white" : "gray-700"} font-clash`}>{subheading}</p>
    </div>
  );
}

export default Card;
