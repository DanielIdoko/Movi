import React from 'react' 
export default function MovieCard({movieData, ref}) {
  // const { originalTitle, primaryImage, description, productionCompany,  genres, averageRating, releaseDate} = movieData
  return (
    <div 
     ref={ref}
     className='w-35 md:w-48 h-60 bg-dark relative p-1 rounded-[20px] cursor-pointer hover:shadow-sm shadow-gray-400 overflow-hidden'>
      <img src={decodeURIComponent(movieData.primaryImage).length > 10 ? movieData.primaryImage : "../assets/PosterImage.png"} alt={movieData.originalTitle} className='w-full h-40
      40 rounded-tl-2xl rounded-tr-2xl'/>
       <span 
        className='absolute w-auto h-auto top-2 right-2 rounded-xl p-1 pl-2 pr-2 text-[9px] md:text-[11px] flex justify-around gap-3'
        style={{
          backgroundColor: movieData.genres === "Action" ? "#ff4328" : movieData.genres === "Animation" ? "#c3fc00" : movieData.genres === "Comedy" ? "#ff4428" : "purple"
        }}>{movieData.genres.length > 13 ? movieData.genres.slice(0, 5) + '...' : movieData.genres}</span>
      <h2 className='text-white font-bold text-md absolute top-30'>{movieData.originalTitle.length > 10 ? movieData.originalTitle.slice(0, 20) + "..." : movieData.originalTitle}</h2>
      <p
        className='pt-1 absolute top-34 text-md text-gray-200'>{movieData.description?.length > 10 ? movieData.description.slice(0, 20) + "..." : movieData.description}</p>

      <span className='text-sm pt-2 pb-2 text-gray-600 absolute top-40 font-bold '>
        {movieData.averageRating}⭐
      </span>

      <div className='absolute bottom-3 flex w-full pt-1'>
        <p className='text-gray-500'>{movieData.productionCompany}</p>
        <span className='text-gray-500 pl-12 md:pl-25'>{movieData.releaseDate}</span>
      </div>


    </div>
  )
}
