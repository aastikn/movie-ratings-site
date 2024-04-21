import React, { useState } from 'react';
import './carousel.css';

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
    <div className="container">
      <div className="image-container">
        {images.slice(currentIndex, currentIndex + numImages).map((imageUrl, index) => (
          <div key={index} className="image-with-rating">
            <img
              src={imageUrl}
              alt={`Carousel Image ${currentIndex + index}`}
              className="image"
            />
            <span className="rating-label">
              Rating: {initialRatings[currentIndex + index]}
              <br />
              Description: {description[currentIndex + index]}
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