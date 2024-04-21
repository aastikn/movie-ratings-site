import React from 'react';
import { Link } from "react-router-dom";

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
    <div className="top-bar">
      <button className="button" onClick={handleProfileClick}>
        User Profile
      </button>
      <Link to="/ratings">
        <button className="button" onClick={handleRatingClick}>
          Create Rating
        </button>
      </Link>
      <Link to="/gallery">
        <button className="button" onClick={handleReviewsClick}>
          View Reviews
        </button>
      </Link>
    </div>
  );
};

export default TopBar;