import React, { useState } from 'react';
import './carousel.css';

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
    <div className="container">
      <div className="image-container">
        {(Array.isArray(images) ? images : [])
          .slice(currentIndex, currentIndex + numImages)
          .map((imageUrl, index) => (
            <div key={index} className="image-with-rating">
              <img
                src={imageUrl}
                className="image"
              />
              <span className="rating-label">
                Name: {Array.isArray(movieNames) ? movieNames[currentIndex + index] : ''}
                <br />
                Rating: {Array.isArray(initialRatings) ? initialRatings[currentIndex + index] : ''}
                <br />
                Description: {Array.isArray(description) ? description[currentIndex + index] : ''}
              </span>
            </div>
          ))}
      </div>
      <div className="controls">
        <button onClick={handlePrevClick} className="button">
          Prev
        </button>
        <button onClick={handleNextClick} className="button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;