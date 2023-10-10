import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Weather from './components/Weather';
import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="/city/:id" element={<WeatherInfo />} />
    </Routes>
  );
}

export default App;
