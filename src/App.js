import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProfilePage from './ProfilePage';
import MovieRatingsPage from './screens/ratingSubmission';
import MovieGallery from './screens/movieGallery';
import LandingPage from './screens/landing';

const App = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={LandingPage} />
    //     {/* <Route path="/profile" component={ProfilePage} /> */}
    //     <Route path="/ratings/create" component={MovieRatingsPage} />
    //     <Route path="/reviews" component={MovieGallery} />
    //   </Switch>
    // </Router>
    <LandingPage />
  );
};

export default App;