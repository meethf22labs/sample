import React from 'react'
import DashboardImage from '../assets/dashboardImage.png'

const Dashboard = () => {
  return (
    <div className=' bg-[#E5E5E569] w-[60vw] flex flex-col h-min-screen'>
        <ul className='text-2xl font-bold font-mono flex justify-around m-10'>
            <li className=' cursor-pointer'>Home</li>
            <li className=' cursor-pointer'>About us</li>
            <li className=' cursor-pointer'>Blog</li>
            <li className=' cursor-pointer'>Pricing</li>
        </ul>
        <img src={DashboardImage} alt='Dashboard'/>
    </div>
  )
}

export default Dashboard