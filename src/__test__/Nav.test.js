import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Nav from '../components/Nav';

const testNav = (component) => render(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Nav', () => {
  it('should render a header with a navigation bar and a banner', () => {
    testNav(<Nav />);
    expect(Nav).toMatchSnapshot();
  });
});
