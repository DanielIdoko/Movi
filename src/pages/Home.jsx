import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import MovieCard from '../components/MovieCard'

export default function Home() {
  return (
    <div
     className='w-full h-dvh bg-gradient-to-b from-blue-950 to-blue-800 text-white'>
      <Navbar />

      <section 
        className='w-full h-full md:p-10 p-1 bg-transparent relative top-26'>
          <h1 className='text-xl p-3 text-white font-bold'>Popular Movies</h1>
          <div
           className='w-full p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 overflow-hidden md:gap-5 lg:gap-17 gap-6'>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
      </section>
    </div>
  )
}
