import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

function MovieCard({poster_path}) {
  return (
    <div className='w-48 pr-4 mb-5'>
      <img src={IMG_CDN_URL + poster_path} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
