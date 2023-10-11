import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Weather from '../components/Weather';

const weatherRender = (component) => render(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Weather component', () => {
  it('render the Weather component', () => {
    weatherRender(<Weather />);
    expect(Weather).toMatchSnapshot();
  });
});
