import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as ReactRouterDom from 'react-router-dom';
import ErrorPage from './ErrorPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: jest.fn(),
}));

describe('ErrorPage', () => {
  it('renders a message when no error is provided', () => {
    ReactRouterDom.useRouteError.mockReturnValue(undefined);

    const { queryByText } = render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    );

    const errorMessage = queryByText('No error information available.');
    expect(errorMessage).toBeTruthy();
  });
});
