import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// Sample icons
const LeftIcon = () => <span data-testid="left-icon">L</span>;
const RightIcon = () => <span data-testid="right-icon">R</span>;
const IconOnly = () => <span data-testid="icon-only">I</span>;

describe('Button component', () => {
  it('renders with default props', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders with label only', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders with label and both icons', () => {
    render(<Button label="Icon Test" leftIcon={<LeftIcon />} rightIcon={<RightIcon />} />);
    expect(screen.getByText('Icon Test')).toBeInTheDocument();
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('renders with label and left icon only', () => {
    render(<Button label="Left Icon" leftIcon={<LeftIcon />} />);
    expect(screen.getByText('Left Icon')).toBeInTheDocument();
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).toBeNull();
  });

  it('renders with label and right icon only', () => {
    render(<Button label="Right Icon" rightIcon={<RightIcon />} />);
    expect(screen.getByText('Right Icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('left-icon')).toBeNull();
  });

  it('renders as icon-only button', () => {
    render(<Button variant="icon" leftIcon={<span data-testid="icon-only" aria-hidden="true">I</span>} />);
    expect(screen.getByTestId('icon-only')).toBeInTheDocument();
    
    // Instead of checking for "any text", check that the label prop wasn't rendered
    const labelSpan = screen.queryByText((content, element) => {
      return element?.tagName === 'SPAN' && element.textContent !== 'I';
    });
  
    expect(labelSpan).toBeNull(); // no label besides the icon
  });
  

  it('renders in disabled state', () => {
    render(<Button label="Disabled" state="disabled" />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('fires onClick when enabled', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled', () => {
    const handleClickDisabled = jest.fn();
    render(<Button label="No Click" state="disabled" onClick={handleClickDisabled} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClickDisabled).not.toHaveBeenCalled();
  });
});
