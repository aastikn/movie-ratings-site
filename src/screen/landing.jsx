import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/topbar';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://images.unsplash.com/photo-1518331539918-7a2dbf839306?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
  overflow-y: auto;
`;

const NavBar = styled.div`
  top: 0;
  position: absolute;
  background-color: #ebb666;
  width: 100vw;
`;

const LandingPage = () => {
  return (
    <>
      <Container>
        <NavBar>
          <TopBar />
        </NavBar>
      </Container>
    </>
  );
};

export default LandingPage;