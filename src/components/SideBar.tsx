import React from "react";

function SideBar({ isOpen }: any) {
  return (
    <div className={`w-[100vw] h-[100vh] flex flex-col bg-white`}>
      <ul className="w-full text-center text-3xl flex flex-col gap-10">
        <li className="font-semibold text-3xl hover:cursor-pointer transition-all duration-200 ease-in-out hover:scale-75 hover:text-[#ff5555]  font-clash">
          Home
        </li>
        <li className="font-semibold text-3xl hover:cursor-pointer transition-all duration-200 ease-in-out hover:scale-75 hover:text-[#ff5555] font-clash">
          About Us
        </li>
        <li className="font-semibold text-3xl hover:cursor-pointer transition-all duration-200 ease-in-out hover:scale-75 hover:text-[#ff5555] font-clash">
          Pricing
        </li>
        <li className="font-semibold text-3xl hover:cursor-pointer transition-all duration-200 ease-in-out hover:scale-75 hover:text-[#ff5555]  font-clash">
          Features
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
