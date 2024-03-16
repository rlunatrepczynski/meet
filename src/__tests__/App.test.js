// src/__tests__/App.test.js

import { render } from '@testing-library/react';
import App from '../App';

test('renders list of events', () => {
  const AppDOM = render(<App />).container.firstChild;
  expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
});

test('renderCitySearch', () => {
  const AppDOM = render().container.firstChild;
  expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
});
