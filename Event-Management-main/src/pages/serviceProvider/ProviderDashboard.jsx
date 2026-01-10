 

 import React, { useEffect, useState } from 'react'
import { providerDashboard_data } from '../../constants/data'
 
 const ProviderDashboard = () => {
 
   const [dashboardData, setDashboardData] = useState({
     BookingsRecieved: 0,
     PaymentHistory: 0,
     FeedbackReceived: 0
   })
 
   const fetchDashboard = async () => {
     setDashboardData(providerDashboard_data)
   }
 
   useEffect(() => {
     fetchDashboard()
   }, [])
 
   return (
     <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
 
       <div className='flex flex-wrap gap-4'>
         
         {/*  Bookings Recieved */}
         <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
           <div>
             <p className='text-xl font-semibold text-gray-600'>{dashboardData.BookingsRecieved}</p>
             <p className='text-gray-400 font-light'>Bookings Recieved</p>
           </div>
         </div>
 
         {/* Payment History */}
         <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
           <div>
             <p className='text-xl font-semibold text-gray-600'>{dashboardData.PaymentHistory}</p>
             <p className='text-gray-400 font-light'>Payment History</p>
           </div>
         </div>
 
       
         {/* Feedback Received */}
         <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
           <div>
             <p className='text-xl font-semibold text-gray-600'>{dashboardData.FeedbackReceived}</p>
             <p className='text-gray-400 font-light'>Feedback Received</p>
           </div>
         </div>
 
       </div>
 
       {/* ------- Latest Blogs Table ------- */}
       <div>
         <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
           <p>Latest Bookings</p>
         </div>
 
         <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg bg-white'>
           <table className='w-full text-sm text-gray-500'>
             <thead className='text-xs text-gray-600 text-left uppercase'>
               <tr>
                 <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                 <th scope='col' className='px-2 py-4'>Bookings</th>
                 <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                 <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                 <th scope='col' className='px-2 py-4'>Actions</th>
               </tr>
             </thead>
             <tbody>
               {/* Dynamic blog table goes here */}
             </tbody>
           </table>
         </div>
       </div>
 
     </div>
   )
 }
 
 export default ProviderDashboard
 