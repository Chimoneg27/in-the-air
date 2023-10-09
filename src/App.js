import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Weather from './components/Weather';
import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/city/:id" element={<WeatherInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
