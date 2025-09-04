import React from 'react'
import { useState } from 'react'
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';


const MovieDetail = ({ movie }) => {
  // This state willl help us toggle for more details
  const [moreDetailsShown, setMoreDetailsShown] = useState(false)
 
  return (
    <div className='w-full h-full p-2'>
      <div className='w-full h-full block md:grid md:grid-cols-3 md:gap-10'>
        {/* Image section */}
        <div className='w-fit h-fit overflow-hidden rounded-2xl shadow-xl'>
          <img src={movie.primaryImage} alt={movie.primaryTitle + " image poster"} />
        </div>
        {/* Text section */}
        <div className='w-full h-full col-span-2 p-2'>
          <ul className='w-fit h-fit p-0 flex items-center justify-start mt-6 gap-3'>
            {movie.genres.map(genre => (
              <li key={genre + "id"} className='w-fit h-fit text-small text-white/10 rounded-full'>{genre.toUpperCase()}</li>
            ))}
          </ul>
            <span className='w-full h-fit flex items-center justify-start mt-6 gap-2'>
            <h3 className='text-x-medium md:text-large text-white flex-1'>{movie.originalTitle}</h3>
             {movie.isAdult && <p className='p-1 w-fit h-fit mt-1 rounded-sm bg-gray-800 text-x-small text-red-400'>+18</p>}
            <p className='p-1 w-fit h-fit mt-1 rounded-sm bg-gray-800 text-x-small text-gray-500'>{movie.contentRating}</p>
          </span>
          <p className='text-gray-500 text-small pt-3'>{movie.description}</p>

          <p className='text-gray-300 pt-15 text-small'>Production Companies</p>
          <Swiper
            // install Swiper modules
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              1024: {
                slidesPerView: 3
              }
            }}
          >
            <ul className='w-full h-fit flex items-center justify-safe-start gap-3 overflow-auto'>
              {movie.productionCompanies.map(company => (
                <SwiperSlide>
                  <li
                    className='text-gray-500 p-2 text-small'
                    key={Math.random()}>-{company.name}</li>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>

          {/* Numbers section */}
          <div className='w-full h-fit p-1 flex items-center justify-start gap-10 mt-6'>
            <div className='w-fit h-full flex flex-col justify-center items-center'>
              <p className='text-x-medium text-gray-300'>{movie.averageRating}</p>
              <span className='text-small text-gray-500'>Rating</span>
            </div>
            <div className='w-fit h-full flex flex-col justify-center items-center'>
              <p className='text-x-medium text-gray-300'>{movie.budget ? movie.budget.toLocaleString() : 0}</p>
              <span className='text-small text-gray-500'>Budget</span>
            </div>
            <div className='w-fit h-full flex flex-col justify-center items-center'>
              <p className='text-x-medium text-gray-300'>{movie.startYear}</p>
              <span className='text-small text-gray-500'>Year</span>
            </div>
          </div>

          <button
            onClick={() => setMoreDetailsShown(!moreDetailsShown)}
            className='text-gray-600 text-small mt-10 flex items-center justify-center gap-2 cursor-pointer hover:text-gray-500 transition duration-300 ease-in'>
            {moreDetailsShown ? "Show Less" : "Show More"}{
              moreDetailsShown ? (<FiArrowUp />) : (<FiArrowDown />)
            }
          </button>
          {
            moreDetailsShown && (
              <div className='w-full h-fit p-0 mt-2'>
                <p className='info'>RunTime: <span>{movie.runtimeMinutes} minutes</span></p>
                <p className='info'>ReleaseDate: <span>{movie.releaseDate}</span></p>
                <p className='info'>Languages: {movie.spokenLanguages.map(language => (
                  <span
                    key={Math.random()}>{language}</span>
                ))}</p>
                <p className='info'>Filming Locations: {movie.filmingLocations
                  ?.map(location => (
                    <span key={Math.random()}>{location}</span>
                  ))}</p>
                  <p className='info'>Interests: {movie.interests?.map(interest => (
                    <span key={Math.random()}>{interest}, </span>
                  ))}</p>
                  <p className='info'>Votes: <span>{movie.numVotes.toLocaleString()}</span></p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
