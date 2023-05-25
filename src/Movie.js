import React from 'react'
import './App.css'


function Movie({films}) {
  return(
    <div className='cards'>
        <div className='movieCard'>
            <div className='year'>
                <p>{films.Year}</p>
            </div>

            <div className='poster'>
                <img 
                src={films.Poster !== 'N/A' ? films.Poster :"https://via.placeholder.com/400"} 
                alt={films.Title} 
                // https://via.placeholder.com/400 
                />
            </div>

            <div className='details'>
                <span>
                    {films.Type}
                </span>
                <h3>
                    {films.Title}
                </h3>
            </div>
                    
        </div>

    </div>
  )
}

export default Movie