import React, { useState } from 'react';
import styled from 'styled-components';

const Carousel = ({ images, initialRatings, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numImages = 4; // Number of images to display at a time

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, images.length - numImages) : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - numImages ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <ImageContainer>
        {images.slice(currentIndex, currentIndex + numImages).map((imageUrl, index) => (
          <ImageWithRating key={index}>
            <Image src={imageUrl} alt={`Carousel Image ${currentIndex + index}`} />
            <RatingLabel>Rating: {initialRatings[currentIndex + index]}<br/>
            Description: {description[currentIndex+index]}
            </RatingLabel>
          </ImageWithRating>
        ))}
      </ImageContainer>
      <Controls>
        <Button onClick={handlePrevClick}>Prev</Button>
        <Button onClick={handleNextClick}>Next</Button>
      </Controls>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1200px; // Increase the max-width to accommodate 4 images
  height: 450px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Display 4 images in a row
  grid-gap: 1rem;
`;

const ImageWithRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const RatingLabel = styled.span`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const Controls = styled.div`
  margin-top: 1rem;
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

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default Carousel;