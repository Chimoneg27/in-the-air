import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
