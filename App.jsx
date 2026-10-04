import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<MovieInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
