import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.replaceState({}, '', '/');
});

test('landing page shows the site identity and actual navigation destinations', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'GARRETT AUDET' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/');
  expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '/experience');
  expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/experience#contact');
  expect(screen.getByRole('link', { name: 'Writing' })).toHaveAttribute('href', 'https://garrett-audet.medium.com/');
});

test('experience navigation renders the real experience and contact sections', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Experience' }));
  expect(window.location.pathname).toBe('/experience');
  expect(screen.getByRole('heading', { name: /01\. Experience/ })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /02\. Contact/ })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'GARRETT AUDET' })).not.toBeInTheDocument();
});

test('a direct contact URL renders the experience route and scrolls to contact', () => {
  const previousScrollIntoView = Element.prototype.scrollIntoView;
  const scrollIntoView = jest.fn();
  Element.prototype.scrollIntoView = scrollIntoView;
  window.history.replaceState({}, '', '/experience#contact');
  try {
    render(<App />);
    expect(screen.getByRole('heading', { name: /02\. Contact/ })).toBeInTheDocument();
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  } finally {
    if (previousScrollIntoView) {
      Element.prototype.scrollIntoView = previousScrollIntoView;
    } else {
      delete Element.prototype.scrollIntoView;
    }
  }
});
