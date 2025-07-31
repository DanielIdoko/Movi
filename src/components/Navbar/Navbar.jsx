import React, { useRef, useState } from 'react'
import { BiHome, BiSearch, BiSolidArchive } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';





// The navigation's data 
const navs = [
  {
    id: 0,
    title: 'Home',
    path: '/',
    icon: <BiHome />
  },
  {
    id: 0,
    title: 'Search',
    path: '/search/',
    icon: <BiSearch />
  },
  {
    id: 0,
    title: 'Saved',
    path: '/savedpage',
    icon: <BiSolidArchive />
  }
]



function Navbar() {

  // Create a state for thr active navigation state, default is "Home"
  const [activeNav, setActiveNav] = useState('Home');


  return (
    <header
      className='md:w-[98%] lg:w-[99%] xl:w-[50%] w-[100%] p-0 xl:p-1 h-16 md:h-20 bg-gray-900 fixed left-0 md:left-2 xl:left-[25%] bottom-0 md:top-5 flex md:rounded-4xl items-center justify-center rounded-0 z-10 overflow-auto'>
      <a href="" className='hidden md:flex p-4.5 text-xl font-bold text-white'>Movi</a>

      <nav
       className='w-fit rounded-4xl bg-transparent p-3 md:p-3 xl:p-3.5 flex flex-1 justify-around'>
        {
          navs.map((navLink) => (
            <NavLink 
                key={Math.random()}
                to={navLink.path}
                onClick={() => setActiveNav(navLink.title)}
                className='nav-link'
                style={{
                  color: navLink.title == activeNav ? '#0a13c0' : '',
                  fontWeight: navLink.title === activeNav ? 'bold': 500
                }}
                >
                  <span className='text-xl md:text-md md:hidden block'>
                    {navLink.icon}
                  </span>
                  <span className='hidden md:block'>
                    {navLink.title}
                  </span>
                </NavLink>
          ))
        }
      </nav>
    </header>
  )
}

export default Navbar