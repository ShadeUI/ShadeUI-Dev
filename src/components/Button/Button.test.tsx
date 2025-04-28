import '@testing-library/jest-dom';

// Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with the correct label', () => {
    render(<Button label="Click me" />);
    
    // Check that the button text appears
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies additional Tailwind classes', () => {
    render(<Button label="Styled Button" className="bg-blue-500" />);
    
    const buttonElement = screen.getByText('Styled Button');
    expect(buttonElement).toHaveClass('bg-blue-500');
  });
});