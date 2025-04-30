import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('renders the label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies the correct color class', () => {
    render(<Button label="red" color="red" />);
    const button = screen.getByText('red');
    expect(button).toHaveClass('bg-red-600');
  });

  it('applies the correct size class', () => {
    render(<Button label="Large" size="large" />);
    const button = screen.getByText('Large');
    expect(button).toHaveClass('text-lg');
  });

  it('disables the button when state is disabled', () => {
    render(<Button label="Disabled" state="disabled" />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
