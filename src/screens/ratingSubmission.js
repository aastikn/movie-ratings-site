import React, { useState } from 'react';
import styled from 'styled-components';

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

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({
      name: '',
      imageUrl: '',
      rating: 0,
      description: '',
    });
  };

  return (
    <Container>
      <Title>Movie Ratings</Title>
      <Form>
        <InputGroup>
          <Label>Movie Name:</Label>
          <Input
            type="text"
            name="name"
            value={newMovie.name}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Image URL:</Label>
          <Input
            type="text"
            name="imageUrl"
            value={newMovie.imageUrl}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Rating (out of 10):</Label>
          <Input
            type="number"
            name="rating"
            min="0"
            max="10"
            value={newMovie.rating}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Description:</Label>
          <TextArea
            name="description"
            value={newMovie.description}
            onChange={handleInputChange}
          ></TextArea>
        </InputGroup>
        <Button onClick={handleAddMovie}>Add Movie</Button>
      </Form>
      <MovieList>
        {movies.map((movie, index) => (
          <Movie key={index}>
            <MovieImage src={movie.imageUrl} alt={movie.name} />
            <MovieInfo>
              <MovieName>{movie.name}</MovieName>
              <MovieRating>Rating: {movie.rating}/10</MovieRating>
              {movie.description && <MovieDescription>{movie.description}</MovieDescription>}
            </MovieInfo>
          </Movie>
        ))}
      </MovieList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const Form = styled.div`
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
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const Movie = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  padding: 1rem;
`;

const MovieName = styled.h3`
  margin-bottom: 0.5rem;
`;

const MovieRating = styled.p`
  margin-bottom: 0.5rem;
`;

const MovieDescription = styled.p`
  margin-bottom: 0;
`;

export default MovieRatingsPage;