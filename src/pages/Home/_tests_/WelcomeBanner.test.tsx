import { render, screen } from '@testing-library/react';
import { WelcomeBanner } from '../components/WelcomeBanner';

describe('WelcomeBanner', () => {
  it('renders welcome message without username', () => {
    render(<WelcomeBanner />);
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
  });

  it('renders welcome message with username', () => {
    render(<WelcomeBanner userName="John" />);
    expect(screen.getByText(/Welcome, John!/i)).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<WelcomeBanner />);
    expect(screen.getByText(/Discover our amazing features/i)).toBeInTheDocument();
  });
}); 