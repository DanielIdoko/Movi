import React from 'react'
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner';
import useFetchMovies from '../../store/useFetchMovies';
import { API_URL2 } from '../../utils/api';
import MovieDetail from '../../components/MovieDetail';
import { lazy } from 'react';
import { Suspense } from 'react';


const SimilarMovies = lazy(() => import('../../components/SimilarMovies/SimilarMovies'));

const MovieDescription = () => {

  const { fetchMovies, movies, isLoading, error: errorMessage } = useFetchMovies();

  // Get the state/data from the params function 
  const { movie_id } = useParams();
  const location = useLocation();

  // Get the movie data from our state or find from our API's Response data the movie id that matches thatt of our movie_id
  const movie = location.state?.movie || movies.find(movie => movie.id === movie_id);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: API_URL2,
      headers: {
        'x-rapidapi-key': "e6536b1868msh2bd1fd467cdaa8cp1c8e0djsn2b984e3000ef",
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      }
    }

    fetchMovies(options)
  }, [location])

  return (
    <div className='w-full h-full md:mt-20 p-3 md:p-10'>
      {
        isLoading ? (<Spinner />) : errorMessage ? (<p className='text-red-600 text-small md:text-medium'>{errorMessage}</p>) : (
          <MovieDetail movie={movie} key={Math.random()} />
        )
      }

      {/* Similar movies section */}
      <>
        {/* Recommended movies section */}
        <h3 className='p-3 text-white md:text-medium mt-3'>Similar Movies</h3>
        <Suspense fallback={<Spinner />}>
          <SimilarMovies movie={movie} />
        </Suspense>
      </>
    </div>
  )
}

export default MovieDescription
