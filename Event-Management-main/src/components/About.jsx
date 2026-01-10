import React from 'react'
import Aboutimg from "../assets/abutimg1.jpg"

const About = () => {
  return (
    <div className='max-w-7xl flex flex-col w-full mx-auto'>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-blue-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-md' src={Aboutimg} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Voluptatum, ut deserunt quam sint et impedit
              asperiores possimus est, neque praesentium magnam 
              non tenetur at perspiciatis voluptates porro natus
               fugit animi?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Voluptatum, ut deserunt quam sint et impedit
              asperiores possimus est, neque praesentium magnam 
              non tenetur at perspiciatis voluptates porro natus
               fugit animi?</p>
          <b>Our Vision</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Voluptatum, ut deserunt quam sint et impedit
              non tenetur at perspiciatis voluptates porro natus</p>
        </div>
      </div>
      <div className='text-xl my-4 text-gray-500'>
        <p>WHY <span className='text-blue-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20 gap-2'>
        <div className='border border-gray-300 shadow-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-cyan-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded'>
            <b>Efficiency:</b>
            <p>Voluptatum, ut deserunt quam sint et impedit non tenetur at perspiciatis </p>
        </div>

            <div className='border border-gray-300 shadow-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-cyan-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded'>
                <b>Convenience:</b>
                <p>Voluptatum, ut deserunt quam sint et impedit non tenetur at perspiciatis </p>
            </div>

        <div className='border border-gray-300 shadow-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-cyan-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded'>
            <b>Personalization:</b>
            <p>TVoluptatum, ut deserunt quam sint et impedit non tenetur at perspiciatis </p>
        </div>

      </div>
    </div>
    
  )
}

export default About