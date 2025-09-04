import React from 'react'
import useFetchMovies from '../../store/useFetchMovies';
import { useEffect } from 'react';
import Spinner from '../Spinner';

const SimilarMovies = ({ movie }) => {
    // State for recommended movies, empty array by default
    const [similarMovies, setSimilarMovies] = useState([])

    // Filter options
    const filterMovieOptions = {
        method: 'GET',
        url: API_URL,
        params: {
            type: 'movie',
            genre: movie.genres.forEach(genre => genre),
            rows: '100',
            sortOrder: 'ASC',
            sortField: 'id'
        },
        headers: {
            'x-rapidapi-key': "e6536b1868msh2bd1fd467cdaa8cp1c8e0djsn2b984e3000ef",
            'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
    }
    const { filterMovies, filteredMovies, isLoading, error: errorMessage } = useFetchMovies();

    // Call our filterMovies function to get movies data that is sorted by the genre we i got from movie.genres from the movieDescription page.
    useEffect(() => {
        // filterMovies(filterMovieOptions)
        setSimilarMovies(filteredMovies)
    }, [])


    return (
        <ul>
            {isLoading ? (<Spinner />) : errorMessage ? (<p>{errorMessage}</p>) : similarMovies.length > 0 ? (
                similarMovies.map(movie => (
                    <li></li>
                ))
            ) : <p className='text-gray-500 text-small'>No Similar movies found</p>}
        </ul>
    )
}

export default SimilarMovies
