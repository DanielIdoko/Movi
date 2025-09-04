import React, { useEffect, useState } from 'react';
import useFetchMovies from '../../store/useFetchMovies';
import Spinner from '../Spinner';
import MovieCard from '../MovieCard';
import { API_URL } from '../../utils/api';

const SimilarMovies = ({ movie }) => {
    const [similarMovies, setSimilarMovies] = useState([]);
    const { filterMovies, filteredMovies, isLoading, error: errorMessage } = useFetchMovies();

    // Handle the case where the movie prop is not provided.
    if (!movie) {
        return <p className='text-gray-500 text-small p-3'>Movie not found.</p>;
    }

    // Define the options inside a useEffect to prevent recreating the object on every render.
    useEffect(() => {
        const filterMovieOptions = {
            method: 'GET',
            url: API_URL,
            params: {
                type: 'movie',
                genre: movie.genres[0] || movie.genres[1],
                rows: '100',
                sortOrder: 'ASC',
                sortField: 'id'
            },
            headers: {
                'x-rapidapi-key': "e6536b1868msh2bd1fd467cdaa8cp1c8e0djsn2b984e3000ef",
                'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
        };
        filterMovies(filterMovieOptions);
    }, [movie]); // Re-run the fetch when the movie prop changes

    // Using a separate useEffect to handle the state update when filteredMovies changes
    useEffect(() => {
        if (filteredMovies.length > 0) {
            setSimilarMovies(filteredMovies);
        }
    }, [filteredMovies]);

    return (
        <ul className='w-full h-auto mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center p-3'>
            {isLoading ? (
                <Spinner />
            ) : errorMessage ? (
                <p className='text-red-600 text-small'>{errorMessage}</p>
            ) : similarMovies.length > 0 ? (
                similarMovies.slice(0, 5).map((similarMovie) => (
                    <MovieCard movieData={similarMovie} key={similarMovie.id} state={similarMovie} />
                ))
            ) : (
                <p className='text-gray-500 text-small'>No similar movies found.</p>
            )}
        </ul>
    );
};

export default SimilarMovies;