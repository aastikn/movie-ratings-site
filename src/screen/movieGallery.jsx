import React, { useEffect, useState } from 'react';
import './movieGallery.css';
import axios from 'axios';
import Carousel from '../components/carousel';

const MovieGallery = () => {
  const [movieRatings, setMovieRatings] = useState([]);

  useEffect(() => {
    fetchMovieRatings();
  }, []);

  const fetchMovieRatings = async () => {
    
      axios.get('http://localhost:3000/api/ratings', { timeout: 10000 }) // 10 seconds timeout
  .then(response => {
    setMovieRatings((prevState) => [...prevState, ...response.data]);
    console.log("fetch succesful", movieRatings);
  })
  .catch(error => {
    console.log("error fetching request",error);
  });
      
    
  };

  return (
    <div className="container">
      <h1 className="title">Movie Ratings</h1>
      <Carousel
        movieNames={movieRatings.map((rating) => rating.movieName)}
        images={movieRatings.map((rating) => rating.imageUrl)}
        initialRatings={movieRatings.map((rating) => rating.rating)}
        description={movieRatings.map((rating) => rating.review)}
      />
    </div>
  );
};

export default MovieGallery;