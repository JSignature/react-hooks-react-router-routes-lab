import React from 'react'
import { movies } from '../data'

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>

      {movies.map(movie => (
        <div key={movie.index}>
          <h1>Name: {movie.title}</h1>
          <p>Time: {movie.time}</p>
          <ul>
            Genres:
            {movie.genres.map(item => (
              <li key={item.index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Movies
