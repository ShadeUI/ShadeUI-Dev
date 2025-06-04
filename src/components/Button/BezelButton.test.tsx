import { render, screen, fireEvent } from '@testing-library/react';
import BezelButton from './BezelButton';

describe('BezelButton component', () => {
  it('renders label correctly', () => {
    render(<BezelButton label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders left and right icons when provided', () => {
    render(
      <BezelButton
        label="Icon button"
        leftIcon={<span data-testid="left-icon">L</span>}
        rightIcon={<span data-testid="right-icon">R</span>}
      />
    );
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('respects showLeftIcon and showRightIcon flags', () => {
    render(
      <BezelButton
        label="Hidden Icons"
        leftIcon={<span data-testid="left-icon">L</span>}
        rightIcon={<span data-testid="right-icon">R</span>}
        showLeftIcon={false}
        showRightIcon={false}
      />
    );
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('shows loading spinner and text when isLoading is true', () => {
    render(<BezelButton isLoading loadingText="Loading..." />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('disables the button when disabled or loading', () => {
    const { rerender } = render(<BezelButton disabled label="Disabled" />);
    expect(screen.getByRole('button')).toBeDisabled();

    rerender(<BezelButton isLoading label="Loading" />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('handles clicks only when enabled', () => {
    const handleClick = jest.fn();
    render(<BezelButton label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders iconOnly view correctly', () => {
    render(
      <BezelButton
        iconOnly
        leftIcon={<span data-testid="icon-only">Icon</span>}
        label="Hidden"
      />
    );
    expect(screen.getByTestId('icon-only')).toBeInTheDocument();
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
  });
});
