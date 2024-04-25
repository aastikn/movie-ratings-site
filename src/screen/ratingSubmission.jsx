import React, { useState } from 'react';
import './ratingSubmission.css';
import axios from 'axios';

const MovieRatingsPage = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    movieName: '',
    imageUrl: '',
    rating: 0,
    review: '',
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
  //     review: '',
  //   });

  // };

  const handleAddMovie = async () => {
    try {
      // const response = await axios.post('http://localhost:3000/api/ratings'. newMovie);
      const response = await axios.post('http://localhost:3000/api/ratings', JSON.stringify(newMovie), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
      console.log('Movie added successfully:', response.data);
      window.alert("Movie added");
      setMovies([...movies, response.data]);
      setNewMovie({
        movieName: '',
        imageUrl: '',
        rating: 0,
        review: '',
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
            name="movieName"
            value={newMovie.movieName}
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
          <label className="label">review:</label>
          <textarea
            name="review"
            value={newMovie.review}
            onChange={handleInputChange}
            className="textarea"
          ></textarea>
        </div>
        <button onClick={handleAddMovie} className="button">
          Add Movie
        </button>
      </div>
      {/* <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie">
            <img src={movie.imageUrl} alt={movie.movieName} className="movie-image" />
            <div className="movie-info">
              <h3 className="movie-name">{movie.movieName}</h3>
              <p className="movie-rating">Rating: {movie.rating}/10</p>
              {movie.review && <p className="movie-review">{movie.review}</p>}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MovieRatingsPage;