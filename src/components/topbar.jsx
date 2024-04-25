import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

// Styled Components
const TopBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  top: 0;
  background-color: #ebb666; /* Semi-transparent background */
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #322e2c;
  color: #ebb666;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 1rem;

  &:hover {
    background-color: #ebb666;
    color: #1c1910;
    border: 1px solid #1e1b12;

  }
`;

// Component
const TopBar = () => {
  const handleProfileClick = () => {
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
      <Button onClick={handleProfileClick}>
        User Profile
      </Button>
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
    </TopBarContainer>
  );
};

export default TopBar;
