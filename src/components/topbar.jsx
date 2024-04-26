import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

// Styled Components
const TopBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  top: 0;
  background-color: rgba(253, 255, 193, 0); /* Semi-transparent background */
`;

const Button = styled.button`                                                     
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #eeca9f;
    color: #212121;
  font-weight: 600; /* Increased font weight */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 1rem;

  &:hover {
    background-color: #212121;
    color: #eeca9f;

    border: 1px solid #1e1b12;

  }
`;
// Component
const TopBar = () => {
  const handleFindClick = () => {
    // history.push('/profile');
  };

  const handleRatingClick = () => {
    // history.push('/ratings/create');
  };

  const handleReviewsClick = () => {
    // history.push('/reviews');
  };

  return (
    <TopBarContainer>
      <Link to="/search">
      <Button onClick={handleFindClick}>
       Find Movie
      </Button>
      </Link>
      <Link to="/ratings">
        <Button onClick={handleRatingClick}>
          Create Rating
        </Button>
      </Link>
      <Link to="/gallery">
        <Button onClick={handleReviewsClick}>
          View Reviews
        </Button>
      </Link>
      <Link to="/about">
        <Button onClick={handleReviewsClick}>
          About
        </Button>
      </Link>
    </TopBarContainer>
  );
};

export default TopBar;
