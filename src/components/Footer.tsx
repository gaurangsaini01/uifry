import React from "react";

function Footer() {
  return (
    <footer className="md:max-w-[80%] max-w-[100vw] mx-auto md:mt-36 mt-8 flex md:justify-between md:flex-row flex-col flex-wrap md:gap-0 gap-8 pl-8 md:pl-0">
      <div className="flex flex-col items-start gap-2 md:gap-6">
        <div className="flex gap-1 hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out">
          <img src="/logo.png" alt="" />
          <h1 className="font-bold text-4xl relative font-clash">
            uifry<sup className="text-[6px] absolute top-3 font-clash">TM</sup>
          </h1>
        </div>
        <div className="flex gap-3">
          <img src="/mail.svg" alt="" />
          <p>Help@Frybix.Com</p>
        </div>
        <div className="flex gap-3">
          <img src="/phone.svg" alt="" />
          <p>+91 9947188345</p>
        </div>
      </div>
      <div className=" gap-2 md:gap-6 flex flex-col items-start">
        <h2 className="text-4xl font-medium font-clash ">Links</h2>
        <p className="font-clash font-normal">Home</p>
        <p className="font-clash font-normal">About Us</p>
        <p className="font-clash font-normal">Bookings</p>
        <p className="font-clash font-normal">Blog</p>
      </div>
      <div className=" gap-2 md:gap-6 flex flex-col items-start">
        <h2 className="text-4xl font-medium font-clash ">Legal</h2>
        <p className="font-clash font-normal">Terms Of Use</p>
        <p className="font-clash font-normal">Privacy Policy</p>
        <p className="font-clash font-normal">Cookie Policy</p>
      </div>
      <div className=" gap-2 md:gap-6 flex flex-col items-start">
        <h2 className="text-4xl font-medium font-clash ">Product</h2>
        <p className="font-clash font-normal">Take Tour</p>
        <p className="font-clash font-normal">Live Chat</p>
        <p className="font-clash font-normal">Reviews</p>
      </div>
      <div className=" gap-2 md:gap-6 flex flex-col items-start">
        <h2 className="text-4xl font-medium font-clash ">News Letter</h2>
        <p className="font-clash font-normal">Stay Up To Date</p>
        <div className="flex">
          <input type="text" placeholder="Your email" className="outline-none border-none placeholder-gray-400 placeholder-italic"/>
          <button className="px-10 py-2 rounded-sm bg-black text-white transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-500 font-clash">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
