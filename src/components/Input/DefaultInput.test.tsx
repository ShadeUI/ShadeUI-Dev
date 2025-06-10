// DefaultInput.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DefaultInput } from './DefaultInput';

describe('DefaultInput', () => {
  it('renders with a header label', () => {
    render(<DefaultInput showHeaderLabel headerLabel="Username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('renders leading icon if provided', () => {
    render(
      <DefaultInput
        showLeadingIcon
        leadingIcon={<span data-testid="icon">👤</span>}
      />
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders hint label if provided', () => {
    render(
      <DefaultInput showHint hintLabel="Must be at least 6 characters" />
    );
    expect(screen.getByText('Must be at least 6 characters')).toBeInTheDocument();
  });

  it('applies red ring when required and left empty', () => {
    render(<DefaultInput required placeholder="Required input" />);
    const input = screen.getByPlaceholderText('Required input');

    // Blur to trigger validation
    fireEvent.blur(input);

    // Check for styles in the input wrapper's parent node
    const container = input.closest('div');
    expect(container?.className).toMatch(/ring-\[var\(--shadeui-color-red-50\)\]/);
  });

  it('does not apply red ring when input has value', () => {
    render(<DefaultInput required placeholder="Required input" />);
    const input = screen.getByPlaceholderText('Required input');

    fireEvent.change(input, { target: { value: 'Some input' } });
    fireEvent.blur(input);

    const container = input.closest('div');
    expect(container?.className).not.toMatch(/ring-\[var\(--shadeui-color-red-50\)\]/);
  });
});
