import React from 'react';
import { render } from '@testing-library/react';
import Capitals from '../components/Capitals';

describe('check status of air quality', () => {
  test('handles different air value for Harare', () => {
    const { getByText } = render(<Capitals city="Harare" aqi={2} />);

    const weatherStatus = getByText(/Quality of air/i);
    const qualityClass = weatherStatus.nextSibling;
    expect(qualityClass.className).toContain('fair');
  });

  test('handles different air value for Pretoria', () => {
    const { getByText } = render(<Capitals city="Pretoria" aqi={3} />);

    const weatherStatus = getByText(/Quality of air/i);
    const qualityClass = weatherStatus.nextSibling;
    expect(qualityClass.className).toContain('moderate');
  });
});
