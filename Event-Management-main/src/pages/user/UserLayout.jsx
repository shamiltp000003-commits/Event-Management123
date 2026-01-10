 
 import React from "react";
 import { Outlet, useNavigate } from "react-router-dom";
 import { IoIosArrowBack } from "react-icons/io";
import UserSidebar from "./UserSidebar";
 
 const UserLayout = () => {
   const navigate = useNavigate();
 
   const logout = () => {
     navigate("/");
   };
   return (
     <>
       <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
         <button
           onClick={() => window.history.back()}
           className="text-sm px-4 py-2 bg-gray-600 border rounded-full hover:bg-gray-700 flex items-center gap-2 text-gray-100"
         >
           {" "}
           <IoIosArrowBack />
           Back
         </button>
         <button
           onClick={logout}
           className="text-sm px-8 py-2 bg-cyan-700 text-white rounded-full cursor-pointer"
         >
           Logout
         </button>
       </div>
       <div className="flex h-[calc(100vh-70px)]">
         <UserSidebar/>
         <Outlet />
       </div>
     </>
   );
 };
 
 export default UserLayout;
 