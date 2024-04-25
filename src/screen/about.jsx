import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
color: #ebb666;

  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
color: #ebb666;

  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const TeamMemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMemberCard = styled.div`
background-color: #322e2c;
color: #ebb666;
border: none;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
  }
`;

const TeamMemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  font-size: 1.1rem;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Description>
        Welcome to our movie ratings site! We aim to facilitate you to share your opinions about movies and find those about you wish to watch!!!
        Here you can find what the various pages on our site are about:
        </Description>
      <TeamMemberContainer>
        <TeamMemberCard>
          <TeamMemberName> Find Movie</TeamMemberName>
          <TeamMemberRole>You will be taken to a page whene you can enter the name or genre of a movie you wish to find and it will be displayed to you.</TeamMemberRole>
        </TeamMemberCard>
        <TeamMemberCard>
          <TeamMemberName>Create Rating</TeamMemberName>
          <TeamMemberRole>Can't find the movie you were lokoking for? Wathc it an upload it here so others don't face the same issue!!</TeamMemberRole>
        </TeamMemberCard>
        <TeamMemberCard>
          <TeamMemberName>View Reviews</TeamMemberName>
          <TeamMemberRole>Looking for nothing in Particular? We got you You can just browse all the movies we have here.</TeamMemberRole>
        </TeamMemberCard>
        <TeamMemberCard>
          <TeamMemberName>About</TeamMemberName>
          <TeamMemberRole>Well, that is the page you are on which explains all the brief features of the site.</TeamMemberRole>
        </TeamMemberCard>
        
      </TeamMemberContainer>
    </AboutContainer>
  );
};

export default AboutPage;
