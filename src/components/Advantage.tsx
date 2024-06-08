import React from 'react'

function Advantage({imgPath,heading,content}:any) {
  return (
    <div className='flex flex-col gap-5 '>
        <div className='flex gap-3 items-center'>
            <img src={imgPath} alt="" />
            <h1 className='font-bold md:text-[20px] text-base'>{heading}</h1>
        </div>
        <div className='text-gray-500 md:text-[18px] text-sm leading-6 md:leading-8'>{content}</div>
    </div>
  )
}

export default Advantage