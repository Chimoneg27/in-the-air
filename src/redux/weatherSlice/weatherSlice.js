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

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCity.fulfilled]: (state, action) => {
      state.cityData = [...state.cityData, { ...action.payload, id: uuidv4() }];
      state.isDataFetched = true;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      const index = state.cityData.findIndex((city) => city.id === action.payload.id);
      state.cityData[index].weather = action.payload;
    },
  },
});
