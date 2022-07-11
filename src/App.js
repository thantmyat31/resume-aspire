import React from 'react';
import LandingPage from './components/pages/LandingPage/LandingPage';
import ReviewPage from './components/pages/ReviewPage/ReviewPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<ReviewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
