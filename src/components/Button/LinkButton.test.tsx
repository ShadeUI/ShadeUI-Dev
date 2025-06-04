// LinkButton.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LinkButton, LinkButtonProps } from './LinkButton';
import '@testing-library/jest-dom';

const setup = (props?: Partial<LinkButtonProps>) => {
  const utils = render(<LinkButton label="Click Me" {...props} />);
  const button = screen.getByRole('button');
  return { ...utils, button };
};

describe('LinkButton', () => {
  it('renders with default props', () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it('applies the correct color classes', () => {
    const { button } = setup({ color: 'danger' });
    expect(button.className).toMatch(/red-600|red-400/); // checks for any applied red color classes
  });

  it('applies the correct size classes', () => {
    const { button } = setup({ size: 'lg' });
    expect(button.className).toMatch(/h-11/); // checks if the large height class is applied
  });

  it('renders left icon when provided and showLeftIcon is true', () => {
    setup({ leftIcon: <span data-testid="left-icon">L</span>, showLeftIcon: true });
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('does not render left icon when showLeftIcon is false', () => {
    setup({ leftIcon: <span data-testid="left-icon">L</span>, showLeftIcon: false });
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
  });

  it('renders right icon when provided and showRightIcon is true', () => {
    setup({ rightIcon: <span data-testid="right-icon">R</span>, showRightIcon: true });
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('does not render right icon when showRightIcon is false', () => {
    setup({ rightIcon: <span data-testid="right-icon">R</span>, showRightIcon: false });
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('shows spinner when isLoading is true', () => {
    setup({ isLoading: true });
    expect(screen.getByRole('status')).toBeInTheDocument(); // Spinner should have role="status"
  });

  it('displays loadingText when isLoading is true', () => {
    setup({ isLoading: true, loadingText: 'Loading...' });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('disables the button when disabled prop is true', () => {
    const { button } = setup({ disabled: true });
    expect(button).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { button } = setup({ onClick });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
