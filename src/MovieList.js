import React, { useState, useContext } from 'react';
import Movie from './Movie.jsx';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      {movies.map(movie => (
        <Movie
          name={movie.name}
          key={movie.id}
          price={movie.price}
          id={movie.id}
        />
      ))}
    </>
  );
};

export default MovieList;
