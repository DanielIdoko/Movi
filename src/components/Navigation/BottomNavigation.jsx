import React from 'react'
import { BiHome, BiSearch, BiSolidArchive } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
import Main from '../../store/main'



// The bottom's navigation's data 
const navs = [
  {
    id: 0,
    title: 'Home',
    path: '/',
    icon: <BiHome />
  },
  {
    id: 1,
    title: 'Saved',
    path: '/savedpage',
    icon: <BiSolidArchive />
  }
]

const BottomNavigation = () => {
    const { handleToggleSearchBar, searchTerm } = Main();

    return (
        <div className='w-full h-14 p-1 fixed bottom-0 bg-gray-900 left-0 md:hidden z-60'>
            <nav
                className='w-full h-full flex items-center justify-center gap-20'>
                {
                    navs.map((navLink) => (
                        <NavLink
                            key={navLink.title + "wnnwwkcj"}
                            to={navLink.path}
                            onClick={() => setActiveNav(navLink.title)}
                            className='nav-link'
                            style={({ isActive }) => ({
                                color: isActive ? "#f9f8ff" : "#555",
                                backgroundColor: isActive ? "rgba(255,255,255,.1)" : ""
                            })}
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
                <button
                    className='nav-link'
                    onClick={() => handleToggleSearchBar()}>
                    <BiSearch className='text-xl' />
                </button>
            </nav>
        </div>
    )
}

export default BottomNavigation
