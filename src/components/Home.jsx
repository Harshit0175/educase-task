import React from 'react'
import { Link } from 'react-router-dom'



const home = () => {
  return (
    <div className=' min-h-screen w-screen bg-gray-300 flex items-center justify-center'>
      <div className='bg-white w-full max-w-md h-full md:h-[700px] rounded-xl p-6 flex flex-col justify-between'>
         {/* Top content */}
      <div className='flex flex-col  mt-105'>
        <h5 className='text-2xl font-bold mb-2 '>Welcome to PopX</h5>
        <p className='text-center max-w-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate!</p>
      </div>
      <div className='flex flex-col gap-3 items-center '>
        <Link to="/sign-up"><button className='bg-[#5f21ef] hover:bg-[#4e1bc1] text-white py-2 px-2  font-semibold w-100 h-10 rounded cursor-pointer'>Created Account</button></Link>
        <Link to="/login"><button className='bg-[#d1a5f3] hover:bg-[#c66aed] text-black font-semibold py-2 px-2 w-100 h-10 rounded cursor-pointer'>Already Registered? Login</button></Link>
      </div>

      </div>
    </div>
  )
}

export default home
