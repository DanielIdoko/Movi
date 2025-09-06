import React from 'react'
import { Link } from 'react-router-dom'

const MovieResult = ({ result }) => {
  return (
    <li
      className='w-44 md:w-48 h-60 bg-dark relative p-1 rounded-2xl cursor-pointer overflow-hidden'>
      <Link
        to={`/movie/${result.id}`}
        state={{ result }}>
        <div className="w-full h-auto overflow-hidden rounded-xl">
          <img
            src={decodeURIComponent(result.primaryImage).length > 10 ? result.primaryImage : PosterImage} alt={result.originalTitle}
            className='w-full h-40
          40 object-cover'
          />
        </div>
        {/* <ul
        className='absolute w-auto h-auto top-2 right-2 rounded-xl p-1 pl-2 pr-2 text-x-small flex items-center gap-2'
        style={{
          backgroundColor: result.genres.includes("Action") ? "#ff4328" : result.genres.includes("Animation") ? "#eee701" : result.genres.includes("Comedy") ? "#d6aa0b" : "purple"
        }}>
        {
          result.genres.slice(0, 5).map(genre => (
            <span key={Math.random()}>{genre + ","}</span>
          ))
        }
      </ul> */}
        <p className='text-small text-gray-200 pt-2'>{result.originalTitle}</p>
        <span className='text-sm pt-2 pb-1 text-gray-600 font-bold '>
          {result.averageRating}⭐
        </span>
      </Link>
    </li>
  )
}

export default MovieResult