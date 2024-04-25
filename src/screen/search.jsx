import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import Carousel from '../components/carousel';
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const SearchResult = styled.div`
  margin-top: 1rem;
`;

const SearchPage = ({ movieList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
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


//   const handleSearch = () => {
//     // const foundMovies = movieRatings.filter(movie => movie.description.includes(searchTerm));
//     // setSearchResult(foundMovies);
//     movieRatings.map((rating)=>{
//         if(rating.review.toLowerCase().includes(searchTerm.toLowerCase())){
//             setSearchResult((prevState)=>[...prevState, ...rating]);
//         }
//     });
//     console.log(searchResult);
//   };
const handleSearch = () => {
    const foundMovies = movieRatings.filter(rating =>
      (rating.review.toLowerCase().includes(searchTerm.toLowerCase())
      |rating.movieName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSearchResult(foundMovies);
  };
  

  return (
    <SearchContainer>
      <SearchInput 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search description..."
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult.length !== 0 && (
        <Carousel
          movieNames={searchResult.map((movie) => movie.title)}
          images={searchResult.map((movie) => movie.imageUrl)}
          initialRatings={searchResult.map((movie) => movie.rating)}
          description={searchResult.map((movie) => movie.description)}
        />
      )}
    </SearchContainer>
  );
}
  

export default SearchPage;