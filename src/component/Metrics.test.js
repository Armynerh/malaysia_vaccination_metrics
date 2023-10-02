import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Metrics from './Metrics';

test('Metrics component snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Metrics />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
