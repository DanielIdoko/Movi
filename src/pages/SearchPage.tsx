import React from 'react'
import Navbar from '../components/Navbar/Navbar';

const SearchPage = () => {
  return (  
    <div className='w-full p-3 h-dvh bg-gradient-to-b from-blue-950 to-blue-800'>
      <Navbar />
      <div className='mt-18 md:mt-25'>
        <form 
           action=""
           autoFocus
           className=''>
          <input 
           type="search"
           className='w-full bg-amber-100 p-3' 
           placeholder='Search Movies'/>
        </form>
      </div>

      <div
        className='flex flex-1 mt-20 w-full h-full'>
        <p className='text-sm font-bold text-white'>SEARCH RESULTS FOR '' {}</p>
      </div>
    </div>
  )
}


export default SearchPage;