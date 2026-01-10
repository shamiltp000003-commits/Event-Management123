import React from 'react'
import { GoShieldCheck } from 'react-icons/go'
import { IoPeopleOutline } from 'react-icons/io5'
import { LuUserCog } from 'react-icons/lu'
import { MdHistory } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
// import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 text-gray-600'>
        <NavLink end={true} to='/admin' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <RxDashboard />
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink  to='/admin/add-provider' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <IoPeopleOutline />
            <p className='hidden md:inline-block'>View Providers</p>
        </NavLink>

        <NavLink  to='/admin/manage-user' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
           <LuUserCog />
            <p className='hidden md:inline-block'>Manage user</p>
        </NavLink>

        <NavLink  to='/admin/settlement-history' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <MdHistory />
            <p className='hidden md:inline-block'>Settlement History</p>
        </NavLink>

        <NavLink  to='/admin/security' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <GoShieldCheck />
            <p className='hidden md:inline-block'>Scecurity</p>
        </NavLink>
    </div>
  )
}

export default Sidebar