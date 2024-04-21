import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './movieGallery.css';
import Carousel from '../components/carousel';

const MovieGallery = () => {
  // const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   navigate('/next-page');
  // };

  const images = [
    'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vdmllfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1580130718646-9f6942092ad3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1543914004-01dfd361dc2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1559583109-3e7968136c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1578407612742-73a9fc310859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
  ];

  const rating = [4, 5, 6, 7, 8, 9];

  const descriptions = [
    'Great movie',
    'funny movie',
    'interesting movie',
    'emotional movie',
    'lovely movie',
    'comedy movie',
  ];

  return (
    <div className="container">
      <h1 className="title">Movie Ratings</h1>
      <Carousel images={images} initialRatings={rating} description={descriptions} />
      {/* <button className="button" onClick={handleButtonClick}>Go to Next Page</button> */}
    </div>
  );
};

export default MovieGallery;