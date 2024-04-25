import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100%;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 450px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;


const StyledImageWithRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ebb666;
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;

  ${(props) =>
    props.isClicked &&
    css`
      transform: scale(1.2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    `}

  &:hover {
    background-color: #ebb666;
    transform: scale(1.2);
  }
`;



const StyledImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const StyledRatingLabel = styled.span`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  overflow-wrap: normal;
  &:hover {
    color: #1c1910

  }

`;

const StyledButton = styled.button`
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

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Carousel = ({ images, initialRatings, description, movieNames }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numImages = 4; // Number of images to display at a time

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, Array.isArray(images) ? images.length - numImages : 0) : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === (Array.isArray(images) ? images.length - numImages : 0) ? 0 : prevIndex + 1
    );
  };

  return (
    <StyledCarouselContainer>
      <StyledImageContainer>
        {(Array.isArray(images) ? images : [])
          .slice(currentIndex, currentIndex + numImages)
          .map((imageUrl, index) => (
            <StyledImageWithRating key={index}>
              <StyledImage src={imageUrl} />
              <StyledRatingLabel>
                Name: {Array.isArray(movieNames) ? movieNames[currentIndex + index] : ''}
                <br />
                Rating: {Array.isArray(initialRatings) ? initialRatings[currentIndex + index] : ''}
                <br />
                Description: {Array.isArray(description) ? description[currentIndex + index] : ''}
              </StyledRatingLabel>
            </StyledImageWithRating>
          ))}
      </StyledImageContainer>
      <div className="controls">
        <StyledButton onClick={handlePrevClick}>Prev</StyledButton>
        <StyledButton onClick={handleNextClick}>Next</StyledButton>
      </div>
    </StyledCarouselContainer>
  );
};

export default Carousel;
