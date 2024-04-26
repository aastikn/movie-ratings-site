import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components (unchanged)

const MovieRatingsPage = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ movieName: '', imageUrl: '', rating: 0, review: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    if (!newMovie.movieName.trim()) {
      errors.movieName = 'Movie name is required';
    }

    if (!newMovie.imageUrl.trim()) {
      errors.imageUrl = 'Image URL is required';
    }

    if (newMovie.rating < 0 || newMovie.rating > 10) {
      errors.rating = 'Rating must be between 0 and 10';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleAddMovie = async () => {
    try {
      if (validateForm()) {
        const response = await axios.post('http://localhost:3000/api/ratings', JSON.stringify(newMovie), {
          headers: { 'Content-Type': 'application/json' }
        });
        console.log('Movie added successfully:', response.data);
        window.alert('Movie added');
        setMovies([...movies, response.data]);
        setNewMovie({ movieName: '', imageUrl: '', rating: 0, review: '' });
        setErrors({});
      }
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <Container name="ratingsContainer">
      <Title>Movie Ratings</Title>
      <Form>
        <InputGroup>
          <Label>Movie Name:</Label>
          <Input type="text" name="movieName" value={newMovie.movieName} onChange={handleInputChange} />
          {errors.movieName && <ErrorMessage>{errors.movieName}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Image URL:</Label>
          <Input type="text" name="imageUrl" value={newMovie.imageUrl} onChange={handleInputChange} />
          {errors.imageUrl && <ErrorMessage>{errors.imageUrl}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Rating (out of 10):</Label>
          <Input type="number" name="rating" value={newMovie.rating} onChange={handleInputChange} />
          {errors.rating && <ErrorMessage>{errors.rating}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Review:</Label>
          <TextArea name="review" value={newMovie.review} onChange={handleInputChange} />
        </InputGroup>
        <Button type="button" onClick={handleAddMovie}>
          Add Movie
        </Button>
      </Form>
    </Container>
  );
};

export default MovieRatingsPage;
