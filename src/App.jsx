import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/reel.svg'
import './App.css'
import LandingPage from './screen/landing'
import MovieGallery from './screen/movieGallery'
import MovieRatingsPage from './screen/ratingSubmission'
import { Route, Routes, useLocation } from 'react-router-dom'
import SearchPage from './screen/search'
import AboutPage from './screen/about'

function App() {
  const location = useLocation();
  return (<>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ratings" element={<MovieRatingsPage />} />
      <Route path="/gallery" element={<MovieGallery />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    </>
  )
}

export default App
