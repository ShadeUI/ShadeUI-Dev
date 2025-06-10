import { render, screen, fireEvent } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea component', () => {
  test('renders with label and hint', () => {
    render(
      <TextArea
        headerLabel="Description"
        showHeaderLabel
        showHint
        hintLabel="Max 200 characters"
      />
    );

    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Max 200 characters')).toBeInTheDocument();
  });

  test('shows character count', () => {
    render(<TextArea characterLimit={100} />);
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'hello' } });
    expect(screen.getByText('5/100')).toBeInTheDocument();
  });

  test('applies red border when near character limit', () => {
    render(<TextArea characterLimit={10} warningThreshold={0.8} />);
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: '123456789' } }); // 9/10

    expect(textarea.className).toMatch(/red-200|red-50/);
  });

  test('resizes automatically with input', () => {
    render(<TextArea />);
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

    fireEvent.change(textarea, {
      target: { value: 'First line\nSecond line\nThird line' },
    });

    // Height should increase
    expect(textarea.style.height).not.toBe('');
  });
});
