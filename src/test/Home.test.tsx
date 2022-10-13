import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Home from '../pages/index';

it('Should render title text', () => {
  render(<Home />);
  expect(screen.getByText('Next.js!')).toBeInTheDocument();
});