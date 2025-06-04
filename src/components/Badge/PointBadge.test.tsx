// __tests__/Badge.test.tsx

import { render, screen } from '@testing-library/react';
import PointBadge from './PointBadge';
import '@testing-library/jest-dom';
import { CheckIcon } from 'lucide-react';

describe('PointBadge', () => {
  it('renders label correctly', () => {
    render(<PointBadge label="In Progress" />);
    expect(screen.getByText('In Progress')).toBeInTheDocument();
  });

  it('always renders the point', () => {
    render(<PointBadge label="Running" />);
    const badge = screen.getByText('Running').parentElement;
    const dot = badge?.querySelector('span'); // first child span is the point
    expect(dot).toBeInTheDocument();
  });

  it('renders right icon when showRightIcon is true', () => {
    render(<PointBadge label="Done" rightIcon={<CheckIcon data-testid="right-icon" />} />);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('does not render right icon when showRightIcon is false', () => {
    render(
      <PointBadge
        label="Done"
        rightIcon={<CheckIcon data-testid="right-icon" />}
        showRightIcon={false}
      />
    );
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('shows spinner and loading text when isLoading is true', () => {
    render(<PointBadge isLoading loadingText="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByRole('status', { hidden: true })).toHaveAttribute('aria-busy', 'true');
  });

  it('applies custom className', () => {
    render(<PointBadge label="Styled" className="custom-class" />);
    const badge = screen.getByText('Styled').parentElement;
    expect(badge).toHaveClass('custom-class');
  });

  it('applies disabled styles when disabled is true', () => {
    render(<PointBadge label="Disabled" disabled />);
    const badge = screen.getByText('Disabled').parentElement;
    expect(badge).toHaveAttribute('aria-busy', 'false');
    expect(badge?.className).toMatch(/gray-100|gray-400/);
  });

  it('applies disabled styles when isLoading is true', () => {
    render(<PointBadge label="Loading" isLoading />);
    const badge = screen.getByText('Loading').parentElement;
    expect(badge).toHaveAttribute('aria-busy', 'true');
    expect(badge?.className).toMatch(/gray-100|gray-400/);
  });
});
