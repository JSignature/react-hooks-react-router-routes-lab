import React from 'react'
import { directors } from '../data'

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div>
          <h1 key={director.index}>Name:{director.name}</h1>
          <ul>
            Movies:{' '}
            {director.movies.map(movie => (
              <li key={movie.index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Directors
