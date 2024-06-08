import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { FaArrowLeftLong } from "react-icons/fa6";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Bank Manager",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Receptionist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Businessman",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Banker",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "CA",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

function Testimonials({isSmall}:any) {
  return (
    <section className="max-w-[100vw] md:max-w-[80%] flex flex-col items-center mx-auto mt-10">
      <div className="fle flex-col items-center w-[90%] xl:w-[35%] mx-auto ">
        <h3 className="text-gray-700 text-center font-semibold font-clash">TESTIMONIALS</h3>
        <h1 className="md:text-5xl text-3xl font-bold text-center font-clash">
          What Our Users Say About Us?
        </h1>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center">
        <div className="relative">
          <img
            src="/testimonials.svg"
            width={600}
            className="relative z-50 hover:animate-spin-slow transition-all duration-300 ease-in-out hover:cursor-pointer"
            alt=""
          />
          <img
            src="/testimonialbg.svg"
            className="absolute top-20 z-10"
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-8 items-center">
            <h2 className="md:w-[70%] w-[90%] font-semibold md:text-2xl text-xl font-clash">
              The Best Financial Accounting App Ever!
            </h2>
            <p className="text-gray-500 md:w-[70%] w-[90%] font-clash">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <div className="w-[70%] flex flex-row items-center justify-left mb-10 ">
              <AnimatedTooltip items={people} />{!isSmall && <div className="ml-16 font-medium font-clash"><FaArrowLeftLong/>Hover Here </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
