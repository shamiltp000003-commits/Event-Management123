import React from 'react'
import { BiImages } from 'react-icons/bi'
import { BsCardChecklist } from 'react-icons/bs'
import { CgAddR } from 'react-icons/cg'
import { LuMessageSquareText } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
// import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 text-gray-600'>
        <NavLink end={true} to='/provider' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <RxDashboard />
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink  to='/provider/add-service' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
           <CgAddR />
            <p className='hidden md:inline-block'>Add Service</p> 
        </NavLink>

        <NavLink  to='/provider/booking-details' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <BsCardChecklist />
            <p className='hidden md:inline-block'>Booking Details</p>
        </NavLink>

        <NavLink  to='/provider/review' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <LuMessageSquareText />
            <p className='hidden md:inline-block'>Review</p>
        </NavLink>

        <NavLink  to='/provider/my-services' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
           <BiImages />
            <p className='hidden md:inline-block'>My Services</p>
        </NavLink>
    </div>
  )
}

export default Sidebar