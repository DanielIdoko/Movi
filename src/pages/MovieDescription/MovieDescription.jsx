import React from 'react'
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner';
import useFetchMovies from '../../store/useFetchMovies';
import { API_URL2 } from '../../utils/api';
import MovieDetail from '../../components/MovieDetail';
import SimilarMovies from './SimilarMovies/SimilarMovies';


const MovieDescription = () => {

  const { fetchMovies, movies, isLoading, error: errorMessage } = useFetchMovies();

  // Get the state/data from the params function 
  const { movie_id } = useParams();
  const location = useLocation();

  // Get the movie data from our state or find from our API's Response data the movie id that matches thatt of our movie_id
  const movie = location.state?.movie || movies.find(movie => movie.id === movie_id);

  if (!movie) {
    return <p className='text-small text-gray-200 p-2 text-center'>Movie not found</p>
  }

  const options = {
    method: 'GET',
    url: API_URL2,
    headers: {
      'x-rapidapi-key': "e6536b1868msh2bd1fd467cdaa8cp1c8e0djsn2b984e3000ef",
      'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
  }

  // useEffect(() => {
  //   fetchMovies(options)
  // }, [])

  return (
    <div className='w-full h-full md:mt-20 p-3 md:p-10'>
      {
        isLoading ? (<Spinner />) : errorMessage ? (<p className='text-red-600 text-small md:text-medium'>{errorMessage}</p>) : (
          <MovieDetail movie={movie} key={movie.id} />
        )
      }

      {/* Similar movies section */}
      <section>
        <SimilarMovies movie={movie} />
      </section>
    </div>
  )
}

export default MovieDescription
