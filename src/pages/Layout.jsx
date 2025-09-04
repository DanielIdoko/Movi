import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import BottomNavigation from '../components/Navigation/BottomNavigation'


const Layout = () => {
  return (
    <div className='w-full h-full overflow-hidden flex flex-col'>
        <Navbar />
        <Outlet />
        <BottomNavigation />
    </div>
  )
}

export default Layout