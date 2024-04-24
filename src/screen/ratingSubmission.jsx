import React, { useState } from 'react';
import './ratingSubmission.css';
import axios from 'axios';

const MovieRatingsPage = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    name: '',
    imageUrl: '',
    rating: 0,
    description: '',
  });

  const handleInputChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  // const handleAddMovie = () => {
  //   setMovies([...movies, newMovie]);
  //   setNewMovie({
  //     name: '',
  //     imageUrl: '',
  //     rating: 0,
  //     description: '',
  //   });

  // };

  const handleAddMovie = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/ratings'. newMovie);
      console.log('Movie added successfully:', response.data);
      setMovies([...movies, response.data]);
      setNewMovie({
        name: '',
        imageUrl: '',
        rating: 0,
        description: '',
      });
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Movie Ratings</h1>
      <div className="form">
        <div className="input-group">
          <label className="label">Movie Name:</label>
          <input
            type="text"
            name="name"
            value={newMovie.name}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={newMovie.imageUrl}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Rating (out of 10):</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            value={newMovie.rating}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Description:</label>
          <textarea
            name="description"
            value={newMovie.description}
            onChange={handleInputChange}
            className="textarea"
          ></textarea>
        </div>
        <button onClick={handleAddMovie} className="button">
          Add Movie
        </button>
      </div>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie">
            <img src={movie.imageUrl} alt={movie.name} className="movie-image" />
            <div className="movie-info">
              <h3 className="movie-name">{movie.name}</h3>
              <p className="movie-rating">Rating: {movie.rating}/10</p>
              {movie.description && <p className="movie-description">{movie.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRatingsPage;