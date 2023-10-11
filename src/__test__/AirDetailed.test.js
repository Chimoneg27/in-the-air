import React from 'react';
import { render } from '@testing-library/react';
import AirDetailed from '../components/AirDetailed';

test('renders AirDetailed component', () => {
  const dataname = 'SO';
  const data = '2';
  render(<AirDetailed dataname={dataname} data={data} />);
  expect(AirDetailed).toMatchSnapshot();
});
