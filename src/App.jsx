import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  );
}
