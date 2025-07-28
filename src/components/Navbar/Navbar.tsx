import React, { useRef, useState } from 'react'


type navData = {
  id: number,
  title: string
}



// The navigation's data 
const navs: any = [
  {
    id: 0,
    title: 'Home'
  },
  {
    id: 0,
    title: 'Search'
  },
  {
    id: 0,
    title: 'Saved'
  }
]



function Navbar() {

  // Create a stste for thr active state
  const [activeNav, setActiveNav] = useState('Home');


  return (
    <header
      className='md:w-[98%] lg:w-[99%] xl:w-[50%] w-[100%] p-0 xl:p-1 h-16 md:h-20 bg-blue-900   fixed left-0 md:left-2 xl:left-[25%] top-0 md:top-5 flex border-2 border-blue-800 md:rounded-4xl rounded-0 z-10 overflow-auto w-[]'>
      <a href="" className='p-4.5 text-xl font-bold'>MovieApp</a>

      <nav
       className='w-fit rounded-4xl bg-transparent p-3 md:p-3 xl:p-3.5 flex flex-1 justify-around'>
        {
          navs.map((navLink: navData) => (
            <button 
                key={Math.random()} 
                onClick={() => setActiveNav(navLink.title)}
                className='nav-link'
                style={{
                  backgroundColor: navLink.title == activeNav ? '#0a13c0' : ''
                }}
                >{navLink.title}</button>
          ))
        }
      </nav>
    </header>
  )
}

export default Navbar