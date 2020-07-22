import React from 'react';

const Movie = ({ name, price, id }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>🔑: {id}</p>
    </>
  );
};

export default Movie;
