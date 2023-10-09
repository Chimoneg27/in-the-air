import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { citiesWeather } from '../redux/weatherSlice/weatherSlice';
import Nav from './Nav';
import Capitals from './Capitals';
import arrow from '../assets/arrow-right.svg';
import '../Style/Capitals.css';

const Weather = () => {
  const capitalData = useSelector((state) => state.weather.cityData);
  const isDataFetched = useSelector((state) => state.weather.isDataFetched);
  const dispatch = useDispatch();

  const [filteredCities, setFilteredCities] = useState([]);
  const handleFilterChange = (filterText) => {
    const filtered = capitalData.filter(
      (city) => city.city.toLowerCase().includes(filterText.toLowerCase()),
    );
    setFilteredCities(filtered);
  };

  useEffect(() => {
    if (isDataFetched === false) {
      dispatch(citiesWeather());
    }
  }, [dispatch, isDataFetched]);

  useEffect(() => {
    setFilteredCities(capitalData);
  }, [capitalData]);

  return (
    <div id="main-wrapper">
      <Nav handleFilterChange={handleFilterChange} />
      <div className="cities">
        {filteredCities.map((city) => (
          <Link className="flex" to={`city/${city.id}`} key={city.id}>
            <div className="image">
              <img className="arrow" src={arrow} alt="right-arrow" />
            </div>
            <Capitals
              city={city.city}
              aqi={city.data.main.aqi}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Weather;
