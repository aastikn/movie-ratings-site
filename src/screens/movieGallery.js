import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from '../components/carousel';

const MovieGallery = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/next-page');
//   };
const images = [
    'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vdmllfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1580130718646-9f6942092ad3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1543914004-01dfd361dc2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1559583109-3e7968136c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1578407612742-73a9fc310859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
  ];
  const rating = [
    4,5,6,7,8,9
  ];
  const descriptions = [
    'Great movie',
    'funny movie',
    'interesting movie',
    'emotional movie',
    'lovely movie',
    'comedy movie'
  ];

  return (
    <Container>
      <Title>Movie Ratings</Title>
      <Carousel images={images} initialRatings={rating} description={descriptions}/>
      {/* <Button onClick={handleButtonClick}>Go to Next Page</Button> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  top:0;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
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

export default MovieGallery;