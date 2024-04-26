import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/topbar';
import bakg from '../assets/bakg.png';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bakg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative; /* Add relative positioning */
`;

const NavBar = styled.div`
  top: 0;
  position: absolute;
  width: 100vw;
`;

const Heading = styled.h1`
  color: #f4ba68;

  font-size: 3rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HeadingContainer = styled.div`
background-color: rgba(13, 13, 100, 1); /* Semi-transparent background */
border: solid 1px #000000;
`;

const LandingPage = () => {
  return (
    <>
      <Container>
        <NavBar>
          <TopBar />
        </NavBar>
        <HeadingContainer>
        <Heading>Cinephile Central</Heading>
        </HeadingContainer>
      </Container>
    </>
  );
};

export default LandingPage;
