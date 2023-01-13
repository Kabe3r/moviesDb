import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const Movies = () => {
  const {movies, isLoading} = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>
  }
  
  return (

    <section className="movies">
    {movies.map(movie => {
      const {Title, Poster, imdbID, Year} = movie;
    return (
      <Link to={`movies/${imdbID}`} key={imdbID} className="movie">
        <article>
          <img src={Poster} alt="" />
          <div className="movie-info">
            <h4 className="title">{Title}</h4>
            <p>{Year}</p>
          </div>
        </article>
      </Link>
    )
    })}
    </section>
  )
  
}

export default Movies
