import React from 'react'

function Feature({imgPath,heading,content}:any) {
  return (
    <div className='flex flex-col gap-5 '>
        <div className='flex gap-2'>
            <img src={imgPath} alt="" />
            <h1 className='font-clash font-semibold md:text-[18px] text-base'>{heading}</h1>
        </div>
        <div className='font-clash text-gray-500 md:text-[18px] text-sm'>{content}</div>
    </div>
  )
}

export default Feature