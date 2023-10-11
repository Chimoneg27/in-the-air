import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WeatherInfo from '../components/WeatherInfo';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('WeatherInfo', () => {
  test('renders WeatherInfo component', () => {
    useSelector.mockReturnValue([]);
    render(<BrowserRouter><WeatherInfo /></BrowserRouter>);
  });
});
