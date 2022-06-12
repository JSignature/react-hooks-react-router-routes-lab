import React from 'react'
import { movies } from '../data'

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>

      {movies.map(movie => (
        <div>
          <h1>Name: {movie.title}</h1>
          <p>Time: {movie.time}</p>
          <ul>
            Genres:
            {movie.genres.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Movies
