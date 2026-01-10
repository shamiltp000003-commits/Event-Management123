import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="h-16 w-16 border-4 border-gray-300 border-t-cyan-700 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader