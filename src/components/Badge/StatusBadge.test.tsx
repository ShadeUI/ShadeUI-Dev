// StatusBadge.test.tsx
import { render, screen } from '@testing-library/react';
import StatusBadge from './StatusBadge';
import { CheckIcon, XIcon } from 'lucide-react';
import '@testing-library/jest-dom';

describe('StatusBadge', () => {
  it('renders with label', () => {
    render(<StatusBadge label="Active" />);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders left icon when showLeftIcon is true', () => {
    render(<StatusBadge label="Success" leftIcon={<CheckIcon data-testid="left-icon" />} />);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('does not render left icon when showLeftIcon is false', () => {
    render(<StatusBadge label="Hidden" leftIcon={<CheckIcon data-testid="left-icon" />} showLeftIcon={false} />);
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
  });

  it('renders right icon only if label exists and showRightIcon is true', () => {
    render(<StatusBadge label="Approved" rightIcon={<XIcon data-testid="right-icon" />} />);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('does not render right icon if label is missing', () => {
    render(<StatusBadge rightIcon={<XIcon data-testid="right-icon" />} />);
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('displays loading spinner and loadingText when isLoading is true', () => {
    render(<StatusBadge isLoading loadingText="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveAttribute('aria-busy', 'true');
  });

  it('applies custom className', () => {
    render(<StatusBadge label="Custom" className="custom-class" />);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });
});
