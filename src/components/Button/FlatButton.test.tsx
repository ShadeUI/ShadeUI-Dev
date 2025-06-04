import { render, screen, fireEvent } from '@testing-library/react';
import { FlatButton } from './FlatButton';

describe('FlatButton component', () => {
  it('renders label correctly', () => {
    render(<FlatButton label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders left and right icons when provided', () => {
    render(
      <FlatButton
        label="Icon button"
        leftIcon={<span data-testid="left-icon">L</span>}
        rightIcon={<span data-testid="right-icon">R</span>}
      />
    );
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('does not render icons if showLeftIcon or showRightIcon are false', () => {
    const { rerender } = render(
      <FlatButton
        label="Test"
        leftIcon={<span data-testid="left-icon">L</span>}
        rightIcon={<span data-testid="right-icon">R</span>}
        showLeftIcon={false}
        showRightIcon={false}
      />
    );
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();

    rerender(
      <FlatButton
        label="Test"
        leftIcon={<span data-testid="left-icon">L</span>}
        rightIcon={<span data-testid="right-icon">R</span>}
        showLeftIcon={true}
        showRightIcon={false}
      />
    );
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('renders loading spinner and loadingText when isLoading is true', () => {
    render(<FlatButton isLoading loadingText="Loading..." />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('disables button when disabled prop or isLoading is true', () => {
    const { rerender } = render(<FlatButton disabled label="Disabled" />);
    expect(screen.getByRole('button')).toBeDisabled();

    rerender(<FlatButton isLoading label="Loading" />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('handles click events when not disabled', () => {
    const onClick = jest.fn();
    render(<FlatButton label="Click" onClick={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('does not handle click events when disabled', () => {
    const onClick = jest.fn();
    render(<FlatButton label="Click" onClick={onClick} disabled />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders only icon when iconOnly is true', () => {
    render(
      <FlatButton
        iconOnly
        leftIcon={<span data-testid="icon-only">I</span>}
        label="Should not show"
      />
    );
    expect(screen.getByTestId('icon-only')).toBeInTheDocument();
    expect(screen.queryByText('Should not show')).not.toBeInTheDocument();
  });
});
