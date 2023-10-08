/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const key = '58004b28c7eaf305323db1ef5f38c044';
const fetchCity = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
  return response.data;
};

const fetchWeather = async (lat, lon) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`);
  return response.data;
};

const initialState = {
  cityList: [
    'London',
    'Paris',
    'Berlin',
    'Madrid',
    'Rome',
    'Brussels',
    'Amsterdam',
    'Dublin',
    'Vienna',
    'Budapest',
    'Prague',
    'Warsaw',
    'Oslo',
    'Stockholm',
    'Helsinki',
    'Copenhagen',
  ],
  cityData: [],
  isDataFetched: false,
};

const citiesWeather = createAsyncThunk(
  'weather/citiesWeather',
  async (_, { getState }) => {
    const { cityList } = getState().weather;
    const dataWeatherWithCities = await Promise.all(
      cityList.map(async (city) => {
        const cityData = await fetchCity(city);
        if (cityData.length > 0) {
          const { lat, lon } = cityData[0];
          const weatherData = await fetchWeather(lat, lon);
          return {
            id: uuidv4(), city, lat, lon, data: weatherData.list[0],
          };
        }
        return {};
      }),
    );
    return dataWeatherWithCities;
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extrareducers: (builder) => {
    builder.addCase(citiesWeather.fulfilled, (state, action) => {
      state.cityData = action.payload;
      state.isDataFetched = true;
    });
  },
});

export { citiesWeather };
export default weatherSlice.reducer;
