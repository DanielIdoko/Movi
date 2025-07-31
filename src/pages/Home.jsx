import React, { lazy, Suspense, useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from '../components/MovieCard'
import Spinner from '../components/Spinner'
import MovieCardHook from '../hooks/MovieCardHook'

const categories = ['Action', 'Drama', 'Comedy', 'Tv Shows', 'Animation']

export default function Home() {
  const [movies, setMovies] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Animation')
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrormessage] = useState('')



const BASE_URL = 'https://imdb236.p.rapidapi.com/api/imdb/search'

const fetchData = async () => {
 const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    type: 'movie',
    genre: selectedCategory ? selectedCategory : "Animation",
    rows: '100',
    sortOrder: 'ASC',
    sortField: 'id'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
  }
}
    try {
        setErrormessage('')
        setIsLoading(false)
        const response = await axios.request(options);
        setMovies(response.data.results)

        if(!response.data){
          throw new Error("An error occured, please try again")
        }
    } catch (error) {
        setErrormessage(error)
        setIsLoading(false)
    } finally{
      setIsLoading(false)
      setErrormessage('')
    }
  }

  // code for bringing in the MovieCardHook for use
  const [ containerRef, isVisible ] = MovieCardHook({})

  useEffect(() =>{
    fetchData() 
  }, [])

  const LazyCard = lazy(import('../components/MovieCard'))

  return (
    <div
     className='w-full h-full bg-dark text-white'>
      <a href="" className='md:hidden hidden p-4.5 text-xl font-bold text-white'>Movi</a>
      <header className="w-full bg-dark md:bg-transparent p-2 h-20 fixed top-0 md:top-26 z-100">
        <a href="" className='flex md:hidden p-4.5 text-xl font-bold text-white'>Movi</a>
        <div className="w-full md:w-4xl m-auto h-auto bg-dark rounded-0 md:rounded-4xl p-2 flex items-center overflow-auto z-0">
        <nav className='w-auto h-auto flex items-center justify-center-safe gap-1 md:gap-20'>
          {
            categories.map(category => (
              <button 
              className='list-none category-button'
              key={crypto.randomUUID()}
              onClick={() => {
                setSelectedCategory(category)
                fetchData()
              }}
              style={{
                backgroundColor: category == selectedCategory ? "#696868b9" : ''
              }}>{category}</button>
            ))
          }
        </nav>
      </div>
      </header>
      <section 
        className='w-full h-full md:p-10 p-1 bg-transparent relative top-25 md:top-26'>
          <h1 className='text-xl p-3 mt-10 md:mt-16 text-white font-bold'>Popular Movies</h1>
          <div
           className='w-full p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden md:gap-5 lg:gap-17 gap-4'>
              <Suspense fallback={<Spinner />}>
                {errorMessage ? (<p className='text-center text-md text-white'>An Error occured, please try again</p>) 
                : isLoading ? (<Spinner />) :
                (
                  movies.map(movie => (
                    <MovieCard ref={containerRef} key={Math.random()} movieData={movie}/>
                  ))
                )
                }      
              </Suspense>
          </div>
      </section>
    </div>
  )
}
