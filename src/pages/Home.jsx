import React, { lazy, Suspense, useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Footer from '../components/Footer'
import useFetchMovies from '../store/useFetchMovies';
import { API_URL, API_URL2 } from '../utils/api'
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SearchInput from '../components/SearchInput';
import Main from '../store/main';
import { Link } from 'react-router-dom';


const MovieCard = lazy(() => import("../components/MovieCard"));
const categories = ['Action', 'Drama', 'Comedy', 'Animation']

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Action')
  const { fetchMovies, filterMovies, filteredMovies, movies, isLoading, error: errorMessage } = useFetchMovies();

  // FetchMoviesData function is independent on itself/no dependencies
  useEffect(() => {
    fetchMovies();
  }, [])

  // Call filterMovies(depends on a selected category) and fetchMovies(Runs on every load of the app) function
  useEffect(() => {
    filterMovies(selectedCategory);
  }, [selectedCategory])


  // Search bar state import
  const { searchBarVisible } = Main();

  return (
    <div
      className='w-full h-full bg-dark text-white'>
      <a href="" className='md:hidden hidden p-4.5 text-xl  text-white'>Movi</a>
      {/* This code below will show the search bar for the mobile view only if out searchBarvisible state is true */}
      {searchBarVisible && <div className='w-full h-fit fixed top-0 left-0 md:hidden p-2 flex items-center justify-center z-20'>
        <SearchInput /></div>}

      {/* Hero section Starts */}
      <section className="hero-section">
        {errorMessage ? (<p className='text-center text-md text-base-color'>An Error occured, please try again</p>)
          : isLoading ? (<Spinner />) :
            (<Swiper
              modules={[Navigation, A11y]}
              slidesPerView={1}
              navigation
            >
              {movies.slice(0, 10).map(movie => (
                <SwiperSlide key={movie.id}>
                  <Link
                    to={`/movie/${movie.id}`}
                    className='w-full h-full'
                  >
                    <div>
                      <img src={movie.primaryImage} alt={movie.originalTitle + "Image"} className='h-96' />
                    </div>
                    <div>

                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>)
        }
      </section>
      {/* Hero section Ends */}
      {/* Popular movies section */}
      <section
        className='w-full h-auto p-3 bg-transparent md:mt-26 md:p-8'>
        <h2 className='sub-heading'>Most Popular Movies For You</h2>
        <div className='w-full h-full flex-items-center justify-start p-3 md:p-6'>
          <Suspense fallback={<Spinner />}>
            {errorMessage ? (<p className='text-center text-md text-base-color'>An Error occured, please try again</p>)
              : isLoading ? (<Spinner />) :
                (
                  <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={15}
                    slidesPerView={2}
                    navigation
                    breakpoints={{
                      768: {
                        slidesPerView: 3
                      },
                      1024: {
                        slidesPerView: 5
                      }
                    }}
                  >
                    {movies.slice(0, 20).map((movie) => (
                      <>
                        <SwiperSlide key={Math.random()}>
                          <MovieCard movieData={movie} loading={"lazy"} movieState={movie} />
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                )}
          </Suspense>
        </div>
      </section >
      {/* Popular movies ection ends here */}
      {/* Categories section */}
      < section className="movies-categories" >
        <h2 className='sub-heading'>Filter by Category</h2>
        <nav className='w-full h-auto flex items-center justify-start gap-1 md:gap-6 md:pl-3'>
          {
            categories.map(category => (
              <button
                className='category-button'
                key={crypto.randomUUID()}
                onClick={() => setSelectedCategory(category)}
                style={{
                  backgroundColor: category == selectedCategory ? "rgba(255,255,255,.08)" : ''
                }}>{category}</button>
            ))
          }
        </nav>
        {errorMessage ? (<p className='text-center text-md text-white'>An Error occured, please try again</p>)
          : isLoading ? (<Spinner />) :
            (
              <div className="w-full h-auto mt-6 grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-6 items-center justify-items-center">
                {filteredMovies.slice(0, 20).map((movie) => (
                  <Suspense fallback={<Spinner />} key={Math.random()}>
                    <MovieCard movieData={movie} movieState={movie} />
                  </Suspense>
                ))}
              </div>
            )
        }
      </section >

      {/* Footer section */}
      < Footer />
    </div >
  )
}
