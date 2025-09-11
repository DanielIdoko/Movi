import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useParams } from 'react-router-dom';
import useFetchMovies from '../store/useFetchMovies';
import SearchInput from '../components/SearchInput';
import MovieResult from '../components/MovieResult';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';

const SearchPage = () => {
  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const { movies, isLoading } = useFetchMovies();

  // Fuse Js search options
  const searchOptions = {
    includeScore: true,
    keys: ['originalTitle', "genres", "description", "averageRating"],
  };

  useEffect(() => {
    // The search logic should run whenever the `term` or `movies` change.
    if (movies.length > 0 && term) {
      const fuse = new Fuse(movies, searchOptions);
      const results = fuse.search(term);

      setSearchResults(results);
    } else {
      // Clear results if the search term is empty or no movies are loaded
      setSearchResults([]);
    }
  }, [term]);

  return (
    <div className='w-full p-3 h-dvh overflow-auto bg-dark'>
      <SearchInput />
      <div className='mt-20 w-full h-full'>
        <p className='text-xl font-bold text-gray-800 p-3 md:pl-6'>
          SEARCH RESULTS FOR '{term}'
        </p>
        {isLoading ? (
          <Spinner />
        ) : (
          <ul className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-2 pl-3 md:pl-6'>
            {searchResults.length > 0 ? (
              searchResults.map(result => (
                <MovieResult key={Math.random()} result={result.item} state={result}/>
              ))
            ) : (
              <p className='text-white p-3 text-small'>No results found.</p>
            )}
          </ul>
        )}
      </div>
      {/* Footer here */}
      <Footer />
    </div>
  );
};

export default SearchPage;