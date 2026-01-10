
import React from 'react'
import { CgAddR } from 'react-icons/cg'
import { RxDashboard } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const UserSidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 text-gray-600'>
        <NavLink end={true} to='/user' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <RxDashboard />
            <p className='hidden md:inline-block'>Services</p>
        </NavLink>

        <NavLink  to='/user/userbookings' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
           <CgAddR />
            <p className='hidden md:inline-block'>My Bookings</p> 
        </NavLink>
    </div>
  )
}

export default UserSidebar