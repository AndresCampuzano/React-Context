import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <header>
      <h3>Andres Campuzano</h3>
      <p>List of movies: {movies.length}</p>
    </header>
  );
};

export default Nav;
