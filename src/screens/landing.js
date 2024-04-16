import React from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const LandingPage = () => {
//   const history = useHistory();

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
    <Container>
      <Title>Welcome to My App</Title>
      <Buttons>
        <Button onClick={handleProfileClick}>User Profile</Button>
        <Button onClick={handleRatingClick}>Create Rating</Button>
        <Button onClick={handleReviewsClick}>View Reviews</Button>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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

export default LandingPage;