import React from 'react'
import { Link } from 'react-router-dom'
import { PosterImage } from '../assets'

export default function MovieCard({ movieData, movieState }) {
  // const { originalTitle, primaryImage, description, productionCompany,  genres, averageRating, releaseDate} = movieData
  return (
    <Link
      to={`/movie/${movieData.id}`}
      className='movie-card'
      state={{ movieState }}>
      <div className="w-full h-auto overflow-hidden rounded-xl">
        <img
          src={decodeURIComponent(movieData.primaryImage).length > 10 ? movieData.primaryImage : PosterImage} alt={movieData.originalTitle}
          className='w-full h-40
          40 object-cover'
        />
      </div>

      <p className='text-small text-gray-200 pt-2'>{movieData.originalTitle}</p>
      <span className='text-sm pt-2 pb-1 text-gray-600 font-bold '>
        {movieData.averageRating}⭐
      </span>
    </Link>
  )
}
