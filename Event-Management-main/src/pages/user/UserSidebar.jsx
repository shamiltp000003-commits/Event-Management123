import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { HiQuestionMarkCircle } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const UserSidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 text-gray-600'>
        <NavLink end={true} to='/user-dashboard' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <RxDashboard />
            <p className='hidden md:inline-block'>My Bookings</p>
        </NavLink>

        <NavLink to='/user-dashboard/faq' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
           <HiQuestionMarkCircle />
            <p className='hidden md:inline-block'>FAQ</p>
        </NavLink>
    </div>
  )
}

export default UserSidebar