import React from 'react'

const SearchPage = () => {
  return (  
    <div className='w-full p-3 h-dvh bg-dark'>
      <div className='mt-18 md:mt-25 w-full p-3 '>
        <form 
           action=""
           autoFocus
           className=''>
          <input 
           type="search"
           className='w- bg-amber-100 p-3' 
           placeholder='Search Movies'/>
        </form>
      </div>

      <div
        className='flex flex-1 mt-10 w-full h-full'>
        <p className='text-xl font-bold text-white'>SEARCH RESULTS FOR '' {}</p>
      </div>
    </div>
  )
}


export default SearchPage;