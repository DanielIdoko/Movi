import React from 'react'

export default function MovieCard() {
  return (
    <div 
     className='w-35 md:w-48 h-54 bg-blue-950 relative p-3 rounded-2xl cursor-pointer hover:shadow-sm shadow-blue-300'>
      {/* <img src="" alt="movie card image" /> */}
      <h2 className='text-white font-bold text-md absolute top-25'>Movie Title</h2>
      <p
        className='pt-1 absolute top-31'>Description..</p>

      <span className='text-sm pt-2 pb-2 text-white absolute top-37 font-bold '>
        7.0⭐
      </span>

      <div className='absolute bottom-3 flex w-full pt-1'>
        <p className='text-gray-400'>Mr D</p>
        <span className='text-gray-400 pl-10  '>2024 </span>
      </div>


    </div>
  )
}
