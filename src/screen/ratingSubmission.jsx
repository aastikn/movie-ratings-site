import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width : 100vw;
  height:100vh;
  background-color: #1f1b12;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #ebb666;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;

`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
    color: #ebb666;

`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 0.5px solid #ebb666;

`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 0.5px solid #ebb666;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #ebb666;
  color: #1f1b12;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Component
const MovieRatingsPage = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ movieName: '', imageUrl: '', rating: 0, review: '' });

  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/ratings', JSON.stringify(newMovie), {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Movie added successfully:', response.data);
      window.alert("Movie added");
      setMovies([...movies, response.data]);
      setNewMovie({ movieName: '', imageUrl: '', rating: 0, review: '' });
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
        </InputGroup>
        <InputGroup>
          <Label>Image URL:</Label>
          <Input type="text" name="imageUrl" value={newMovie.imageUrl} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>Rating (out of 10):</Label>
          <Input type="number" name="rating" value={newMovie.rating} onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label>Review:</Label>
          <TextArea name="review" value={newMovie.review} onChange={handleInputChange} />
        </InputGroup>
        <Button type="button" onClick={handleAddMovie}>Add Movie</Button>
      </Form>
    </Container>
  );
};

export default MovieRatingsPage;
