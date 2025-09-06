import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import Main from '../store/main'
import { FiHeart } from 'react-icons/fi';

const MovieResult = ({ result }) => {
  const { handleSaveMovie, handleToggleModal, modalShown } = Main();

  const handleSave = useCallback(() => {
    handleSaveMovie(result);
    handleToggleModal();
  }, [modalShown])


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

        <p className='text-small text-gray-200 pt-2'>{result.originalTitle}</p>
        <button className='saved-btn' onClick={() => handleSave()}>
          <FiHeart />
        </button>

        <span className='text-sm pt-2 pb-1 text-gray-600 font-bold '>
          {result.averageRating}⭐
        </span>
      </Link>
    </li>
  )
}

export default MovieResult