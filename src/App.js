import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import AirDetails from './components/AirDetails';
import Weather from './components/Weather';
import Capitals from './components/Capitals';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/air-details" element={<AirDetails />} />
        <Route path="/capitals" element={<Capitals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
