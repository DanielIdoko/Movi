import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({ movieData, state }) {
  // const { originalTitle, primaryImage, description, productionCompany,  genres, averageRating, releaseDate} = movieData
  return (
    <Link
      to={`/movie/${movieData.id}`}
      className='w-44 md:w-48 h-60 bg-dark relative p-1 rounded-2xl cursor-pointer overflow-hidden'
      state={{ state }}>
      <div className="w-full h-auto overflow-hidden rounded-xl">
        <img
          src={decodeURIComponent(movieData.primaryImage).length > 10 ? movieData.primaryImage : "../assets/PosterImage.png"} alt={movieData.originalTitle}
          className='w-full h-40
          40 object-cover'
        />
      </div>
      {/* <ul
        className='absolute w-auto h-auto top-2 right-2 rounded-xl p-1 pl-2 pr-2 text-x-small flex items-center gap-2'
        style={{
          backgroundColor: movieData.genres.includes("Action") ? "#ff4328" : movieData.genres.includes("Animation") ? "#eee701" : movieData.genres.includes("Comedy") ? "#d6aa0b" : "purple"
        }}>
        {
          movieData.genres.slice(0, 5).map(genre => (
            <span key={Math.random()}>{genre + ","}</span>
          ))
        }
      </ul> */}
      <p className='text-small text-gray-200 pt-2'>{movieData.originalTitle}</p>
      <span className='text-sm pt-2 pb-1 text-gray-600 font-bold '>
        {movieData.averageRating}⭐
      </span>
    </Link>
  )
}
