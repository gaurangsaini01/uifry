import React from 'react'

function SideBar() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col bg-white'>
        <ul className='w-full text-center text-3xl flex flex-col gap-10'>
        <li className="font-semibold text-3xl hover:cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:text-[#ff5555] hover:font-semibold">
              Home
            </li>
            <li className="font-semibold text-3xl hover:cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:text-[#ff5555] hover:font-semibold">
              About Us
            </li>
            <li className="font-semibold text-3xl hover:cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:text-[#ff5555] hover:font-semibold">
              Pricing
            </li>
            <li className="font-semibold text-3xl hover:cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:text-[#ff5555] hover:font-semibold">
              Features
            </li>
        </ul>
    </div>
  )
}

export default SideBar