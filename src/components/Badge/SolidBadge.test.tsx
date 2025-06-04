// SolidBadge.test.tsx
import { render, screen } from '@testing-library/react';
import { SolidBadge } from './SolidBadge';
import '@testing-library/jest-dom';

describe('SolidBadge', () => {
  it('renders with default props', () => {
    render(<SolidBadge label="Default Badge" />);
    expect(screen.getByText('Default Badge')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<SolidBadge label="Large Badge" size="lg" />);
    const badge = screen.getByText('Large Badge');
    expect(badge).toHaveClass('text-base');
  });

  it('shows loading spinner when isLoading is true', () => {
    render(<SolidBadge isLoading label="Loading..." />);
    expect(screen.getByRole('status')).toBeInTheDocument(); // Spinner should have role="status"
  });

  it('renders loading text if provided', () => {
    render(<SolidBadge isLoading loadingText="Please wait..." />);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('renders left and right icons if provided and toggles are true', () => {
    const LeftIcon = () => <svg data-testid="left-icon" />;
    const RightIcon = () => <svg data-testid="right-icon" />;
    render(
      <SolidBadge
        label="With Icons"
        leftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />
    );

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('hides icons if showLeftIcon and showRightIcon are false', () => {
    const LeftIcon = () => <svg data-testid="left-icon" />;
    const RightIcon = () => <svg data-testid="right-icon" />;
    render(
      <SolidBadge
        label="No Icons"
        leftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
        showLeftIcon={false}
        showRightIcon={false}
      />
    );

    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<SolidBadge label="Disabled" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('passes additional props to the button element', () => {
    render(<SolidBadge label="With ID" id="badge-test-id" />);
    expect(screen.getByRole('button')).toHaveAttribute('id', 'badge-test-id');
  });
});
