/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const key = '58004b28c7eaf305323db1ef5f38c044';
const fetchCity = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`);
  return response.data;
};

const fetchWeather = async (lat, lon) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`);
  return response.data;
};

const initialState = {
  cityList: [
    'London',
    'Harare',
    'Pretoria',
    'Johannesburg',
    'Chicago',
    'Durban',
    'Osaka',
    'Tokyo',
    'New York',
    'Los Angeles',
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
  extraReducers: (builder) => {
    builder.addCase(citiesWeather.fulfilled, (state, action) => {
      state.cityData = action.payload;
      state.isDataFetched = true;
    });
  },
});

export { citiesWeather };
export default weatherSlice.reducer;
