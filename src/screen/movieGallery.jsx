import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '../components/carousel';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  top: 0;
  background-color: #242424;
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-top: 5rem;
  margin-bottom: 2rem;
  color: #ebb666;

`;

const StyledButton = styled.button`
padding: 0.5rem 1rem;
margin-top:5rem;
margin-bottom:2rem;
font-size: 1rem;
background-color: #ebb666;
color: #1f1b12;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
    background-color: #1f1b12;
    color: #ebb666;
    border: none;

  }
`;
const Sizer = styled.div`
height:fit-content;
`
const MovieGallery = () => {
  const [movieRatings, setMovieRatings] = useState([]);

  useEffect(() => {
    fetchMovieRatings();
  }, []);

  const fetchMovieRatings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/ratings', { timeout: 10000 }); // 10 seconds timeout
      setMovieRatings((prevState) => [...prevState, ...response.data]);
      console.log("fetch succesful", movieRatings);
    } catch (error) {
      console.log("error fetching request",error);
    }
  };

  return (
    <Container>
      <Title>Movie Ratings</Title>
      <Sizer>
      <Carousel
        movieNames={movieRatings.map((rating) => rating.movieName)}
        images={movieRatings.map((rating) => rating.imageUrl)}
        initialRatings={movieRatings.map((rating) => rating.rating)}
        description={movieRatings.map((rating) => rating.review)}
      /></Sizer>                            
      <StyledButton onClick={fetchMovieRatings}>Refresh Ratings</StyledButton>
    </Container>
  );
};

export default MovieGallery;
