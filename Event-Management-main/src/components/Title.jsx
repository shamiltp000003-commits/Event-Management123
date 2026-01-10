import React from 'react'

const Title = ({title, subTitle, align, font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center mb-10 mt-10 ${align === "left" && "md:items-start md:text-left"}`}>
        <h1 className={`text-4xl md:text-[34px] font-semibold text-gray-700 ${font || "font-playfair"} `}>{title}</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title