import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };
  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: Math.floor(Math.random() * 9999999) }
    ]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={updateName}
        placeholder='Add movie name'
      />
      <input
        type='text'
        name='price'
        value={price}
        onChange={updatePrice}
        placeholder='Add movie price'
      />
      <button type='submit'>Add movie</button>
    </form>
  );
};

export default AddMovie;
